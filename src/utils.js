import crypto from 'crypto';

export const generateSecureToken = (length = 32) => {
    return crypto.randomBytes(length).toString('hex');
}

export const generateFingerprint = (userAgent, ipAddress) => {
    const data = `${userAgent}-${ipAddress}`;
    return crypto.createHash('sha256').update(data).digest('hex');
}

export const generateOtp = (length = 6) => {
    const otp = crypto.randomInt(0, Math.pow(10, length)).toString().padStart(length, '0');
    return otp;
}