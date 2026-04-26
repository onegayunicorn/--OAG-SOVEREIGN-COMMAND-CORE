export const ChatBubble = ({ message, isUser }: { message: string, isUser: boolean }) => (
  <div className={`p-2 rounded-lg mb-2 max-w-[80%] ${isUser ? 'bg-purple-600 self-end' : 'bg-white/10 self-start'}`}>
    {message}
  </div>
);
