import React, { useState } from 'react';
import { validateUrl } from '../../utils';

interface UrlInputProps {
    onSubmit: (url: string) => void;
    disabled?: boolean;
}

const UrlInput: React.FC<UrlInputProps> = ({ onSubmit, disabled = false }) => {
    const [url, setUrl] = useState<string>('');
    const [error, setError] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        const validation = validateUrl(url);
        if (!validation.isValid) {
            setError(validation.message || '');
            return;
        }

        onSubmit(url);
    };

    return (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transition-colors duration-300">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label
                        htmlFor="url-input"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                        Website URL
                    </label>
                    <input
                        id="url-input"
                        type="text"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder="https://example.com"
                        disabled={disabled}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                    {error && (
                        <p className="mt-2 text-sm text-red-600 dark:text-red-400">{error}</p>
                    )}
                </div>
                <button
                    type="submit"
                    disabled={disabled}
                    className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 dark:outline-2 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
                >
                    Generate Summary
                </button>
            </form>
        </div>
    );
};

export default UrlInput;
