import bcrypt from "bcrypt";
import crypto from "crypto";

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
};

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
    };
  }
};

export const generateRandomPassword = (length = 12) => {
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
  const charsetLength = charset.length;

  const passwordArray = Array.from(
    crypto.randomBytes(length),
    (byte) => charset[byte % charsetLength]
  );

  return passwordArray.join("");
};

export const validatePasswordStrength = (password) => {
  const requirements = {
    minLength: 8,
    hasUppercase: /[A-Z]/.test(password),
    hasLowercase: /[a-z]/.test(password),
    hasNumber: /\d/.test(password),
    hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    isNotCommon: !['password', '123456', 'qwerty', 'admin'].includes(password.toLowerCase())
  };
  
  const score = Object.values(requirements).filter(Boolean).length;
  const isValid = password.length >= requirements.minLength && score >= 4;
  
  return {
    isValid,
    score,
    requirements,
    strength: score <= 3 ? 'weak' : score <= 4 ? 'medium' : 'strong'
  };
};