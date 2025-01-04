import { useEffect } from 'react';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';

export const App = () => {
	useEffect(() => {
		createChat({
			webhookUrl: 'https://n8n-1-9y7i.onrender.com/webhook/7df1ebe3-851e-4e76-b360-1fc5b9d56b3d/chat',
            initialMessages: [
                '明子のAIです 👋',
                '明ちゃんです. 御用は何でしょうか?'
            ],
            i18n: {
                en: {
                    title: '',
                    subtitle: "24時間365日対応いたします。",
                    footer: '',
                    getStarted: 'ニューチャット',
                    inputPlaceholder: 'こちらに入力...',
                    closeButtonTooltip: ''
                },
            },
		});
	}, []);

	return (<div></div>);
};