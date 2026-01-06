import axios from 'axios';
import type { OpenRouterApiResponse, OpenRouterMessage } from '../types';

const OPENROUTER_API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;
const OPENROUTER_API_URL = 'https://openrouter.ai/api/v1/chat/completions';
const SITE_URL = import.meta.env.VITE_SITE_URL || 'http://localhost:5173';
const SITE_NAME = import.meta.env.VITE_SITE_NAME || 'AI Website Summarizer';

export const generateSummary = async (pageContent: string): Promise<string> => {
    if (!OPENROUTER_API_KEY) {
        throw new Error('OpenRouter API key is not configured');
    }

    const messages: OpenRouterMessage[] = [
        {
            role: 'system',
            content:
                'You are a helpful assistant that creates concise, accurate summaries of web content. Focus on key points and main ideas.',
        },
        {
            role: 'user',
            content: `Please summarize the following webpage content in 3-5 clear, concise sentences. Focus on the main points and key information:\n\n${pageContent.substring(
                0,
                6000
            )}`,
        },
    ];

    try {
        const response = await axios.post<OpenRouterApiResponse>(
            OPENROUTER_API_URL,
            {
                model: 'deepseek/deepseek-r1-0528:free',
                messages: messages,
            },
            {
                headers: {
                    Authorization: `Bearer ${OPENROUTER_API_KEY}`,
                    'HTTP-Referer': SITE_URL,
                    'X-Title': SITE_NAME,
                    'Content-Type': 'application/json',
                },
            }
        );

        const summary = response.data.choices[0]?.message?.content;

        if (!summary) {
            throw new Error('No summary generated from the AI model');
        }

        return summary.trim();
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const errorMessage = error.response?.data?.error?.message || error.message;
            throw new Error(`DeepSeek API Error: ${errorMessage}`);
        }
        throw new Error('Failed to generate summary. Please try again.');
    }
};
