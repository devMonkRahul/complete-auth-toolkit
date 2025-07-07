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

export const refreshAccessToken = (refreshToken, secret, newPayload) => {
    try {
        const { success, payload, error } = verifyRefreshToken(refreshToken, secret);
        if (!success) {
            return {
                success: false,
                token: null,
                error: error,
            };
        }
    
        const newToken = generateAccessToken(newPayload, secret);
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
