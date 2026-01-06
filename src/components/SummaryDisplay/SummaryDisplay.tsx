import React from 'react';

interface SummaryDisplayProps {
    summary: string;
}

const SummaryDisplay: React.FC<SummaryDisplayProps> = ({ summary }) => {
    return (
        <div className="mt-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transition-colors duration-300">
            <div className="flex items-center mb-4">
                <svg
                    className="w-6 h-6 text-green-500 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                    />
                </svg>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Summary</h2>
            </div>
            <div className="prose dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap">
                    {summary}
                </p>
            </div>
        </div>
    );
};

export default SummaryDisplay;
