const AWS = require('aws-sdk');
const keys = require('../config/keys');
const cloudinary = require('cloudinary').v2;

// Configure Cloudinary only if keys exist
if (
  process.env.CLOUDINARY_NAME &&
  process.env.CLOUDINARY_KEY &&
  process.env.CLOUDINARY_SECRET
) {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
  });
}

exports.s3Upload = async (image) => {
  try {
    if (!image) {
      return { imageUrl: '', imageKey: '' };
    }

    let imageUrl = '';
    let imageKey = '';

    const hasAWS =
      keys.aws &&
      keys.aws.accessKeyId &&
      keys.aws.secretAccessKey &&
      keys.aws.bucketName;

    const hasCloudinary =
      process.env.CLOUDINARY_NAME &&
      process.env.CLOUDINARY_KEY &&
      process.env.CLOUDINARY_SECRET;

    // =========================
    // 1️⃣ Upload to AWS S3
    // =========================
    if (hasAWS) {
      const s3bucket = new AWS.S3({
        accessKeyId: keys.aws.accessKeyId,
        secretAccessKey: keys.aws.secretAccessKey,
        region: keys.aws.region
      });

      const params = {
        Bucket: keys.aws.bucketName,
        Key: `${Date.now()}-${image.originalname}`,
        Body: image.buffer,
        ContentType: image.mimetype
      };

      const s3Upload = await s3bucket.upload(params).promise();

      imageUrl = s3Upload.Location;
      imageKey = s3Upload.Key;

      return { imageUrl, imageKey };
    }

    // =========================
    // 2️⃣ Fallback to Cloudinary
    // =========================
    if (hasCloudinary) {
      const base64Image = `data:${image.mimetype};base64,${image.buffer.toString('base64')}`;
      const result = await cloudinary.uploader.upload(base64Image, {
        folder: 'uploads'
      });

      imageUrl = result.secure_url;
      imageKey = result.public_id;

      return { imageUrl, imageKey };
    }

    // =========================
    // 3️⃣ No storage configured
    // =========================
    console.warn('No AWS or Cloudinary keys configured');
    return { imageUrl: '', imageKey: '' };

  } catch (error) {
    console.error('Upload error:', error);
    return { imageUrl: '', imageKey: '' };
  }
};