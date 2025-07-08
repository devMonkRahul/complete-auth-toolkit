import jwt from 'jsonwebtoken';

export const generateAccessToken = (payload, secret, options = {}) => {
  const defaultOptions = {
    expiresIn: '15m', // Default expiration time
    algorithm: 'HS256', // Default algorithm
    issuer: 'complete-auth-toolkit', // Default issuer
  }

  return jwt.sign(payload, secret, { ...defaultOptions, ...options });
}

export const verifyAccessToken = (token, secret) => {
    try {
        return {
            success: true,
            payload: jwt.verify(token, secret),
            error: null,
        }
    } catch (error) {
        return {
            success: false,
            payload: null,
            error: error.message,
        }
    }
}

export const generateRefreshToken = (payload, secret, options = {}) => {
    const defaultOptions = {
        expiresIn: '7d', // Default expiration time
        algorithm: 'HS256', // Default algorithm
        issuer: 'complete-auth-toolkit', // Default issuer
    }
    
    return jwt.sign(payload, secret, { ...defaultOptions, ...options });
}

export const verifyRefreshToken = (token, secret) => {
    try {
        return {
            success: true,
            payload: jwt.verify(token, secret),
            error: null,
        }
    } catch (error) {
        return {
            success: false,
            payload: null,
            error: error.message,
        }
    }
}

export const refreshAccessToken = (refreshToken, secret, newPayload, options = {}) => {
    try {
        const { success, payload, error } = verifyRefreshToken(refreshToken, secret);
        if (!success) {
            return {
                success: false,
                token: null,
                error: error,
            };
        }

        // Remove JWT-specific properties from the payload to avoid conflicts
        const { exp, iat, iss, ...cleanPayload } = payload;

        const defaultOptions = {
            expiresIn: '15m', // Default expiration time for access tokens
            algorithm: 'HS256', // Default algorithm
            issuer: 'complete-auth-toolkit', // Default issuer
        }

        const newToken = generateAccessToken({ ...cleanPayload, ...newPayload }, secret, { ...defaultOptions, ...options });
        return {
            success: true,
            token: newToken,
            error: null,
        };
    } catch (error) {
        return {
            success: false,
            token: null,
            error: error.message,
        };
    }
}
