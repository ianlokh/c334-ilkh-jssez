import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat@1.46.5/dist/chat.bundle.es.js';

createChat({
  webhookUrl: 'https://agenticflows.tokencraze.org/webhook/94242447-0aef-46ff-9c90-7dd3e30b18bb/chat',
  mode: 'window',
  loadPreviousSession: false,
  initialMessages: [
    'Welcome. What would you like to know about the JS-SEZ?',
    'I can point you to a page in the SMF Playbook.'
  ],
  i18n: {
    en: {
      title: 'JS-SEZ advisor',
      subtitle: 'A guide to the SMF JS-SEZ Playbook',
      inputPlaceholder: 'Ask a question…'
    }
  }
});
