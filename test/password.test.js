import * as auth from '../src/index.js';

describe('Password Utility Tests', () => {
    it('should hash a password', async () => {
        const password = 'test_password';
        const result = await auth.hashPassword(password);
        expect(result.success).toBe(true);
        expect(result.hash).toBeDefined();
        expect(result.error).toBeNull();
    });

    it('should verify a hashed password', async () => {
        const password = 'test_password';
        const { hash } = await auth.hashPassword(password);
        const result = await auth.verifyPassword(password, hash);
        expect(result.success).toBe(true);
        expect(result.isValid).toBe(true);
        expect(result.error).toBeNull();
    });

    it('should fail to verify an incorrect password', async () => {
        const password = 'test_password';
        const { hash } = await auth.hashPassword(password);
        const result = await auth.verifyPassword('wrong_password', hash);
        expect(result.success).toBe(true);
        expect(result.isValid).toBe(false);
        expect(result.error).toBeNull();
    });
})