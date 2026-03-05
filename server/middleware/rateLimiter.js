const rateLimit = require('express-rate-limit');

// Generic limiter for authentication endpoints
const authLimiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minute
    max: process.env.MAX_AUTH_REQUESTS || 10, // limit each IP to 10 requests per windowMs
    message: {
        error: 'Too many requests from this IP, please try again later.'
    }
});

// Stricter limiter for sensitive endpoints (login, register)
const strictAuthLimiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 minutes
    max: process.env.MAX_AUTH_REQUESTS || 10, // limit each IP to 10 requests per windowMs
    message: {
        error: 'Too many requests from this IP, please try again later.'
    }
});

module.exports = {
    authLimiter,
    strictAuthLimiter
};
