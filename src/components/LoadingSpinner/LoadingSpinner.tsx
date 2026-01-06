import React from 'react';

const LoadingSpinner: React.FC = () => {
    return (
        <div className="mt-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border-2 border-blue-500 dark:border-blue-400">
                {/* Beautiful Dual Ring Spinner */}
                <div className="flex justify-center mb-6" role="status">
                    <div className="relative w-16 h-16">
                        <div className="absolute top-0 left-0 w-full h-full border-4 border-blue-200 rounded-full"></div>
                        <div className="absolute top-0 left-0 w-full h-full border-4 border-transparent border-t-blue-500 rounded-full animate-spin"></div>
                    </div>
                    <span className="sr-only">Loading...</span>
                </div>

                {/* Status Banner */}
                <div className="bg-linear-to-r from-blue-500 to-purple-600 text-white rounded-lg p-4 mb-6">
                    <p className="text-center font-bold text-lg animate-pulse">
                        AI Processing in Progress
                    </p>
                </div>

                {/* Skeleton Lines */}
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
                        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded flex-1 animate-pulse"></div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div
                            className="w-2 h-2 bg-blue-500 rounded-full animate-ping"
                            style={{ animationDelay: '0.2s' }}
                        ></div>
                        <div
                            className="h-3 bg-gray-200 dark:bg-gray-700 rounded flex-1 animate-pulse"
                            style={{ animationDelay: '0.2s' }}
                        ></div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div
                            className="w-2 h-2 bg-blue-500 rounded-full animate-ping"
                            style={{ animationDelay: '0.4s' }}
                        ></div>
                        <div
                            className="h-3 bg-gray-200 dark:bg-gray-700 rounded flex-1 animate-pulse"
                            style={{ animationDelay: '0.4s' }}
                        ></div>
                    </div>
                </div>

                {/* Footer */}
                <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6">
                    Please wait while DeepSeek R1 analyzes the content...
                </p>
            </div>
        </div>
    );
};

export default LoadingSpinner;
