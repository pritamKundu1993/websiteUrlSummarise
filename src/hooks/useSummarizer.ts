import { useState } from 'react';
import { fetchPageContent, generateSummary } from '../services';
import { formatError } from '../utils';

export const useSummarizer = () => {
    const [summary, setSummary] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const summarizeUrl = async (url: string) => {
        setLoading(true);
        setError('');
        setSummary('');

        try {
            const content = await fetchPageContent(url);
            const aiSummary = await generateSummary(content);
            setSummary(aiSummary);
        } catch (err) {
            setError(formatError(err));
        } finally {
            setLoading(false);
        }
    };

    const reset = () => {
        setSummary('');
        setError('');
        setLoading(false);
    };

    return { summary, loading, error, summarizeUrl, reset };
};
