import * as jwt from "./jwt.js";
import * as password from "./password.js";
import * as utils from "./utils.js";

// JWT
export const generateAccessToken = jwt.generateAccessToken;
export const verifyAccessToken = jwt.verifyAccessToken;
export const generateRefreshToken = jwt.generateRefreshToken;
export const verifyRefreshToken = jwt.verifyRefreshToken;
export const refreshAccessToken = jwt.refreshAccessToken;

// Password
export const hashPassword = password.hashPassword;
export const verifyPassword = password.verifyPassword;
export const generateRandomPassword = password.generateRandomPassword;
export const validatePasswordStrength = password.validatePasswordStrength;

// Utils
export const generateSecureToken = utils.generateSecureToken;
export const generateFingerprint = utils.generateFingerprint;
export const generateOtp = utils.generateOtp;