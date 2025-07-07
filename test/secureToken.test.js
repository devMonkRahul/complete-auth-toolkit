import * as auth from '../src/index.js';

describe('Secure Token Tests', () => {
    it('should generate a secure token', () => {
        const token = auth.generateSecureToken();
        expect(token).toBeDefined();
        expect(token.length).toBeGreaterThan(0);
    });
});
