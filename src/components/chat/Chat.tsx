import { useState } from 'react';
import { generateChatResponse } from '../../services/geminiService';
import { ChatBubble } from './ChatBubble';

export const Chat = () => {
  const [messages, setMessages] = useState<{ text: string, isUser: boolean }[]>([]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (!input) return;
    const userMsg = { text: input, isUser: true };
    setMessages(prev => [...prev, userMsg]);
    setInput('');

    const response = await generateChatResponse(input);
    setMessages(prev => [...prev, { text: response, isUser: false }]);
  };

  return (
    <div className="flex flex-col h-full bg-black/40 border border-white/10 rounded-2xl p-4">
      <div className="flex-1 overflow-y-auto mb-4">
        {messages.map((m, i) => <ChatBubble key={i} message={m.text} isUser={m.isUser} />)}
      </div>
      <div className="flex gap-2">
        <input value={input} onChange={e => setInput(e.target.value)} className="flex-1 p-2 bg-white/5 rounded" />
        <button onClick={handleSend} className="p-2 bg-purple-600 rounded">Send</button>
      </div>
    </div>
  );
};
