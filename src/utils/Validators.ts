import type { UrlValidation } from '../types';

export const validateUrl = (url: string): UrlValidation => {
    if (!url.trim()) {
        return { isValid: false, message: 'Please enter a URL' };
    }

    try {
        const urlObj = new URL(url);
        if (!['http:', 'https:'].includes(urlObj.protocol)) {
            return {
                isValid: false,
                message: 'URL must start with http:// or https://',
            };
        }
        return { isValid: true };
    } catch {
        return {
            isValid: false,
            message: 'Please enter a valid URL',
        };
    }
};
