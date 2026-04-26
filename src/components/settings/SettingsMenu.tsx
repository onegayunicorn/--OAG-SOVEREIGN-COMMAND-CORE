import { useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../../lib/firebase';
import { useAuth } from '../../context/AuthContext';
import { ThemeToggle } from './ThemeToggle';
import { Settings, LogOut, X } from 'lucide-react';

export const SettingsMenu = ({ onClose }: { onClose: () => void }) => {
  const { user } = useAuth();
  const [apiKey, setApiKey] = useState('');

  return (
    <div className="absolute top-20 right-6 w-80 bg-[#1a1c2c] border border-white/20 rounded-xl p-6 shadow-2xl z-50 text-white font-mono">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-sm font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400">COMMAND SETTINGS</h2>
        <button onClick={onClose}><X size={16}/></button>
      </div>

      <div className="space-y-6">
        <section>
          <h3 className="text-[10px] opacity-60 mb-2 uppercase">Interface Theme</h3>
          <ThemeToggle />
        </section>

        {user && (
          <section>
            <h3 className="text-[10px] opacity-60 mb-2 uppercase">User Profile</h3>
            <p className="text-xs mb-2">{user.email}</p>
            <button onClick={() => signOut(auth)} className="flex items-center gap-2 text-xs text-red-400">
              <LogOut size={16}/> Logout
            </button>
          </section>
        )}

        <section>
          <h3 className="text-[10px] opacity-60 mb-2 uppercase">API Configuration</h3>
          <input 
            type="password" 
            placeholder="Gemini API Key" 
            value={apiKey} 
            onChange={(e) => setApiKey(e.target.value)} 
            className="w-full p-2 bg-black/40 border border-white/10 rounded text-xs"
          />
        </section>
      </div>
    </div>
  );
};
