const nodemailer = require('nodemailer');
const template = require('../config/template');
const keys = require('../config/keys');

const { user, pass } = keys.googlemail; // we'll define this in keys.js

// Create Gmail transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: user,
        pass: pass
    }
});

exports.sendEmail = async (email, type, host, data) => {
    try {
        const message = prepareTemplate(type, host, data);

        const config = {
            from: `ZOSTORE! <${user}>`,
            to: email,
            subject: message.subject,
            text: message.text,
            html: message.html || undefined
        };

        return await transporter.sendMail(config);

    } catch (error) {
        console.error('Email error:', error);
        return error;
    }
};

const prepareTemplate = (type, host, data) => {
    let message;

    switch (type) {
        case 'reset':
            message = template.resetEmail(host, data);
            break;

        case 'reset-confirmation':
            message = template.confirmResetPasswordEmail();
            break;

        case 'signup':
            message = template.signupEmail(host, data);
            break;

        case 'merchant-signup':
            message = template.merchantSignup(host, data);
            break;

        case 'merchant-welcome':
            message = template.merchantWelcome(host, data);
            break;

        case 'product-activated':
            message = template.productActivatedEmail(host, data);
            break;

        case 'newsletter-subscription':
            message = template.newsletterSubscriptionEmail();
            break;

        case 'contact':
            message = template.contactEmail();
            break;

        case 'merchant-application':
            message = template.merchantApplicationEmail(host);
            break;

        case 'merchant-deactivate-account':
            message = template.merchantDeactivateAccount(host, data);
            break;

        case 'order-confirmation':
            message = template.orderConfirmationEmail(data);
            break;

        default:
            message = {};
    }

    return message;
};