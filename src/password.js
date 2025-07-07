import bcrypt from 'bcrypt';

export const hashPassword = async (password, saltRounds = 12) => {
    try {
        const salt = await bcrypt.genSalt(saltRounds);
        const hash = await bcrypt.hash(password, salt);
    
        return {
            success: true,
            hash,
            error: null,
        };
    } catch (error) {
        return {
            success: false,
            hash: null,
            error: error.message,
        };
        
    }
}

export const verifyPassword = async (password, hash) => {
    try {
        const isValid = await bcrypt.compare(password, hash);
        
        return {
            success: true,
            isValid,
            error: null,
        };
    } catch (error) {
        return {
            success: false,
            isValid: false,
            error: error.message,
        }
    }
}