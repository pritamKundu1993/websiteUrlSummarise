import axios from 'axios';

const CORS_PROXY = 'https://api.allorigins.win/get?url=';

export const fetchPageContent = async (url: string): Promise<string> => {
    try {
        const response = await axios.get(`${CORS_PROXY}${encodeURIComponent(url)}`);
        const htmlContent = response.data.contents;

        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlContent, 'text/html');

        doc.querySelectorAll('script, style, nav, header, footer, aside').forEach((el) =>
            el.remove()
        );

        const textContent = doc.body.innerText || doc.body.textContent || '';

        if (!textContent.trim()) {
            throw new Error('No content found on the page');
        }

        return textContent.trim();
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error('Failed to fetch webpage. Please check the URL and try again.');
        }
        throw error;
    }
};
