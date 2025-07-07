import * as auth from '../index.js';

describe('Authentication Toolkit Tests', () => {
    it('should generate a valid access token', () => {
        const payload = { userId: 1 };
        const secret = 'test_secret';
        const token = auth.generateAccessToken(payload, secret);
        expect(token).toBeDefined();
    });

    it('should verify a valid access token', () => {
        const payload = { userId: 1 };
        const secret = 'test_secret';
        const token = auth.generateAccessToken(payload, secret);
        const data = auth.verifyAccessToken(token, secret);
        expect(data.success).toBe(true);
        expect(data.error).toBeNull();
        expect(data.payload.userId).toEqual(payload.userId);
    });

    it('should generate a valid refresh token', () => {
        const payload = { userId: 1 };
        const secret = 'test_secret';
        const token = auth.generateRefreshToken(payload, secret);
        expect(token).toBeDefined();
    });

    it('should verify a valid refresh token', () => {
        const payload = { userId: 1 };
        const secret = 'test_secret';
        const token = auth.generateRefreshToken(payload, secret);
        const data = auth.verifyRefreshToken(token, secret);
        expect(data.success).toBe(true);
        expect(data.error).toBeNull();
        expect(data.payload.userId).toEqual(payload.userId);
    });

    it('should refresh access token using refresh token', () => {
        const payload = { userId: 1 };
        const secret = 'test_secret';
        const token = auth.generateRefreshToken(payload, secret);
        const data = auth.refreshAccessToken(token, secret, payload);
        expect(data.success).toBe(true);
        expect(data.token).toBeDefined();
        expect(data.error).toBeNull();
    });
});
