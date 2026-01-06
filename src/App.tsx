import { ThemeProvider } from './context';
import { UrlInput, SummaryDisplay, LoadingSpinner, ThemeToggle } from './components';
import { useSummarizer } from './hooks/useSummarizer';

function AppContent() {
    const { summary, loading, error, summarizeUrl } = useSummarizer();

    return (
        <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
            <div className="container mx-auto px-4 py-8 max-w-4xl">
                <ThemeToggle />

                <header className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-4">
                        AI Website Summarizer
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        Enter any public URL to get an AI-powered summary
                    </p>
                </header>

                <UrlInput onSubmit={summarizeUrl} disabled={loading} />

                {loading && <LoadingSpinner />}

                {error && (
                    <div className="mt-6 p-4 bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-700 rounded-lg">
                        <p className="text-red-700 dark:text-red-300 text-center">{error}</p>
                    </div>
                )}

                {summary && <SummaryDisplay summary={summary} />}
            </div>
        </div>
    );
}

function App() {
    return (
        <ThemeProvider>
            <AppContent />
        </ThemeProvider>
    );
}

export default App;
