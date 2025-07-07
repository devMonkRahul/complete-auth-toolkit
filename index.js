import crypto from 'crypto';
import * as jwt from "./src/jwt.js";
import * as password from "./src/password.js";

export const generateAccessToken = jwt.generateAccessToken;
export const verifyAccessToken = jwt.verifyAccessToken;
export const generateRefreshToken = jwt.generateRefreshToken;
export const verifyRefreshToken = jwt.verifyRefreshToken;
export const refreshAccessToken = jwt.refreshAccessToken;

export const hashPassword = password.hashPassword;
export const verifyPassword = password.verifyPassword;

export const generateSecureToken = () => {
    return crypto.randomBytes(32).toString('hex');
}
