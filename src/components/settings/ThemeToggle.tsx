import { useTheme } from '../../context/ThemeContext';

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex gap-2">
      <button onClick={() => setTheme('light')} className={`p-2 ${theme === 'light' ? 'bg-purple-600' : 'bg-white/10'} rounded`}>Light</button>
      <button onClick={() => setTheme('dark')} className={`p-2 ${theme === 'dark' ? 'bg-purple-600' : 'bg-white/10'} rounded`}>Dark</button>
      <button onClick={() => setTheme('high-contrast')} className={`p-2 ${theme === 'high-contrast' ? 'bg-purple-600' : 'bg-white/10'} rounded`}>High Contrast</button>
    </div>
  );
};
