export interface SummaryResponse {
    summary: string;
    error?: string;
}

export interface UrlValidation {
    isValid: boolean;
    message?: string;
}

export interface OpenRouterMessage {
    role: 'user' | 'assistant' | 'system';
    content: string;
}

export interface OpenRouterApiResponse {
    id: string;
    choices: Array<{
        message: {
            role: string;
            content: string;
        };
        finish_reason: string;
    }>;
    usage?: {
        prompt_tokens: number;
        completion_tokens: number;
        total_tokens: number;
    };
}

export interface OpenRouterErrorResponse {
    error: {
        message: string;
        code: number;
    };
}
