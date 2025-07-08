import * as utils from '../src/index.js';

describe('Secure Token Tests', () => {
    it('should generate a secure token', () => {
        const token = utils.generateSecureToken();
        expect(token).toBeDefined();
        expect(token.length).toBeGreaterThan(0);
    });

    it('should generate a fingerprint', () => {
        const userAgent = 'Mozilla/5.0';
        const ipAddress = '192.168.1.1';
        const fingerprint = utils.generateFingerprint(userAgent, ipAddress);
        expect(fingerprint).toBeDefined();
        expect(fingerprint.length).toBe(64);
    });

    it('should generate a random OTP', () => {
        const otp = utils.generateOtp();
        expect(otp).toBeDefined();
        expect(otp.length).toBe(6);
        expect(/^\d{6}$/.test(otp)).toBe(true); // Check if OTP is a 6-digit number
    });
});
