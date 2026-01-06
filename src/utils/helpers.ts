export const truncateText = (text: string, maxLength: number): string => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
};

export const formatError = (error: unknown): string => {
    if (error instanceof Error) return error.message;
    return 'An unexpected error occurred';
};
