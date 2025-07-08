# complete-auth-toolkit

A comprehensive authentication toolkit for Node.js, providing JWT handling, password hashing and validation, secure token generation, OTP, and more. Perfect for building secure authentication flows in your applications.

## Features

- **JWT**: Access/refresh token generation and verification
- **Password**: Hashing, verification, random password generation, and strength validation
- **Utils**: Secure token, fingerprint, and OTP generation

## Installation

```bash
npm install complete-auth-toolkit
```

## Usage

```js
import {
  // JWT
  generateAccessToken,
  verifyAccessToken,
  generateRefreshToken,
  verifyRefreshToken,
  refreshAccessToken,
  // Password
  hashPassword,
  verifyPassword,
  generateRandomPassword,
  validatePasswordStrength,
  // Utils
  generateSecureToken,
  generateFingerprint,
  generateOtp
} from "complete-auth-toolkit";

// Example: Generate and verify a JWT
const token = generateAccessToken({ userId: 123 }, "your-secret", { expiresIn: "1h" });
const payload = verifyAccessToken(token, "your-secret");

// Example: Hash and verify a password
const hash = await hashPassword("myPassword123");
const isValid = await verifyPassword("myPassword123", hash);

// Example: Generate a secure random password
const randomPassword = generateRandomPassword(16);

// Example: Validate password strength
const { valid, errors } = validatePasswordStrength("weakpass");

// Example: Generate a secure token
const secureToken = generateSecureToken(32);

// Example: Generate a fingerprint
const ipAddress = req.ip; // or req.headers['x-forwarded-for'] || req.connection.remoteAddress
const userAgent = req.headers['user-agent'];
const fingerprint = generateFingerprint(ipAddress, userAgent);

// Example: Generate an OTP
const otp = generateOtp(6);
```

## API Reference

### JWT

- **generateAccessToken(payload, secret, options?)**
  - Returns a signed JWT access token.
- **verifyAccessToken(token, secret)**
  - Verifies and decodes a JWT access token.
- **generateRefreshToken(payload, secret, options?)**
  - Returns a signed JWT refresh token.
- **verifyRefreshToken(token, secret)**
  - Verifies and decodes a JWT refresh token.
- **refreshAccessToken(refreshToken, secret, options?)**
  - Generates a new access token from a valid refresh token.

### Password

- **hashPassword(password)**
  - Returns a hashed password (async).
- **verifyPassword(password, hash)**
  - Verifies a password against a hash (async).
- **generateRandomPassword(length)**
  - Generates a random password of specified length.
- **validatePasswordStrength(password)**
  - Checks password strength, returns `{ valid, errors }`.

### Utils

- **generateSecureToken(length)**
  - Generates a cryptographically secure random token.
- **generateFingerprint(ipAddress, userAgent)**
  - Generates a unique fingerprint string based on IP address and user agent.
- **generateOtp(length)**
  - Generates a numeric OTP of specified length.

## Contributing

Contributions are welcome! Please open issues or pull requests for improvements or bug fixes.

## License

MIT 