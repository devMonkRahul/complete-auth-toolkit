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

    it('should generate a random password', () => {
        const password = auth.generateRandomPassword();
        expect(password).toBeDefined();
        expect(password.length).toBeGreaterThan(0);
    });

    it('should generate a random password of specified length', () => {
        const length = 16;
        const password = auth.generateRandomPassword(length);
        expect(password).toBeDefined();
        expect(password.length).toBe(length);
    });

    it('should validate password strength', () => {
        const strongPassword = 'StrongP@ssw0rd!';
        const weakPassword = 'weak';
        const strongResult = auth.validatePasswordStrength(strongPassword);
       const weakResult = auth.validatePasswordStrength(weakPassword);

       expect(strongResult.isValid).toBe(true);
       expect(strongResult.strength).toBe('strong');
       expect(weakResult.isValid).toBe(false);
       expect(weakResult.strength).toBe('weak');
    });
});