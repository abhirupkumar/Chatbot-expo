import axios from 'axios';
const BASE_URL = 'https://chatbot-serverside.vercel.app/api/';

export const getAnswer = async (question) => {
    try {
        const res = await axios.post(
            `${BASE_URL}ask-a-question`,
            { question },
        );
        return res?.data?.result;
    } catch (e) {
        console.error(e);
        return 'Something went wrong!! ☹️';
    }
};

export const getTranslatedText = async (query, language) => {
    try {
        const res = await axios.post(`${BASE_URL}translate`, { query, language });
        return res?.data?.result;
    } catch (e) {
        console.error(e);
        return 'Something went wrong!! ☹️';
    }
};