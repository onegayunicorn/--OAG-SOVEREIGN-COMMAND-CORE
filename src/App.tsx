/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useAuth } from './context/AuthContext';
import { AuthForm } from './components/auth/AuthForm';
import { Chat } from './components/chat/Chat';
import { Settings } from 'lucide-react';
import { useState } from 'react';
import { SettingsMenu } from './components/settings/SettingsMenu';

export default function App() {
  const { user, loading } = useAuth();
  const [showSettings, setShowSettings] = useState(false);
  
  if (loading) return <div>Loading...</div>;

  return (
    <div className="w-full h-screen overflow-hidden font-mono text-white p-6 relative flex flex-col gap-6" style={{ background: "radial-gradient(circle at top left, #0b0d17 0%, #1a1c2c 100%)" }}>
      {/* Background Mesh Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-600/20 blur-[120px] rounded-full"></div>

      {/* HEADER: Sovereign Command Core */}
      <header className="flex justify-between items-center bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-500 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.5)]">
            <span className="text-xl">🦄</span>
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Λ-OAG SOVEREIGN COMMAND CORE</h1>
            <p className="text-[10px] opacity-60 uppercase tracking-[0.2em]">Eternal Rainbow | Coherence Maintained</p>
          </div>
        </div>
        
        <div className="flex gap-4 items-center">
          <button onClick={() => setShowSettings(!showSettings)} className="p-2 bg-white/5 rounded-full hover:bg-white/10">
            <Settings size={20} />
          </button>
          
          <div className="text-right border-l border-white/10 pl-4">
            <p className="text-[9px] opacity-50 uppercase">Coherence</p>
            <p className="text-xl font-bold text-green-400">1.000000</p>
          </div>
        </div>
      </header>

      {showSettings && <SettingsMenu onClose={() => setShowSettings(false)} />}

      {/* MAIN CONTENT */}
      <main className="flex-1 flex gap-6 min-h-0">
        {!user ? (
          <div className="flex-1 flex items-center justify-center">
            <AuthForm />
          </div>
        ) : (
          <div className="flex-1 flex gap-6">
            <div className="flex-[2] bg-white/5 border border-white/10 rounded-2xl p-4">
                <h2 className="text-2xl font-bold">System Active</h2>
            </div>
            <div className="flex-1">
              <Chat />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
