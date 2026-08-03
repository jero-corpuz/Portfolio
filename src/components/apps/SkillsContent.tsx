'use client';

import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '@/data/osData';
import { Terminal as TerminalIcon, Cpu } from 'lucide-react';

export default function SkillsContent() {
  const [activeCatIndex, setActiveCatIndex] = useState(0);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [inputVal, setInputVal] = useState('');

  const currentCategory = SKILL_CATEGORIES[activeCatIndex];

  // Helper to generate ASCII progress bar: [████████████████████░░░░] 85%
  const renderAsciiBar = (level: number) => {
    const totalChars = 24;
    const filledChars = Math.round((level / 100) * totalChars);
    const emptyChars = totalChars - filledChars;
    return `[${'█'.repeat(filledChars)}${'░'.repeat(emptyChars)}] ${level}%`;
  };

  const asciiHeader = `
          (\`-')  _   (\`-')                            (\`-').-> 
          ( OO).-/<-.(OO )      .->            .->    ( OO)_   
   <-.--.(,------.,------,)(\`-')----.     (\`-')----. (_)--\\_)  
 (\`-'| ,| |  .---'|   /\`. '( OO).-.  '    ( OO).-.  '/    _ /  
 (OO |(_|(|  '--. |  |_.' |( _) | |  |    ( _) | |  |\\_..\`--.  
,--. |  | |  .--' |  .   .' \\|  |)|  |     \\|  |)|  |.-._)   \\ 
|  '-'  / |  \`---.|  |\\  \\   '  '- me'      '  '-'  '\\       / 
 \`-----'  \`------'\`--' '--'   \`-----'        \`-----'  \`-----'  
`;

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    const cmd = inputVal.trim().toLowerCase();
    let response = '';

    if (cmd === 'help') {
      response = 'Available commands: cat, ls, clear, whoami, stack';
    } else if (cmd === 'ls') {
      response = SKILL_CATEGORIES.map((c, i) => `[${i + 1}] ${c.title}`).join('  ');
    } else if (cmd === 'clear') {
      setCommandHistory([]);
      setInputVal('');
      return;
    } else if (cmd === 'whoami') {
      response = 'jero@jero-os (Web Developer & Architecture Lead)';
    } else if (cmd === 'stack') {
      response = 'Next.js, TypeScript, Tailwind CSS, WordPress, Shopify, PHP, REST APIs';
    } else if (cmd.startsWith('cat') || cmd === '1' || cmd === '2' || cmd === '3') {
      if (cmd.includes('1') || cmd === '1') setActiveCatIndex(0);
      else if (cmd.includes('2') || cmd === '2') setActiveCatIndex(1);
      else if (cmd.includes('3') || cmd === '3') setActiveCatIndex(2);
      response = `Loaded skill category: ${SKILL_CATEGORIES[activeCatIndex].title}`;
    } else {
      response = `bash: command not found: ${cmd}. Type 'help' for options.`;
    }

    setCommandHistory((prev) => [...prev, `$ ${inputVal}`, response]);
    setInputVal('');
  };

  return (
    <div className="w-full min-h-130 p-5 space-y-4 text-emerald-400 bg-[#06070d] font-mono text-xs select-none flex flex-col justify-between">
      <div className="space-y-4">
        {/* ASCII Art Logo Header */}
        <div className="overflow-x-auto pb-2 border-b border-white/10">
          <pre className="text-cyan-400 font-bold text-[8px] sm:text-[10px] md:text-[11px] leading-none tracking-tighter">
            {asciiHeader}
          </pre>
        </div>

        {/* Welcome Prompt */}
        <div className="space-y-1 text-white/80 border-b border-white/10 pb-3">
          <p className="text-purple-400 font-bold flex items-center gap-2">
            <TerminalIcon className="w-4 h-4 text-purple-400" />
            $ ./fetch_skills.sh --format=ascii-matrix
          </p>
          <p className="text-white/60 text-[11px]">
            Initializing Jero's technical capabilities matrix... [OK 200]
          </p>
        </div>

        {/* Category Tabs CLI Switcher */}
        <div className="flex flex-wrap gap-2 py-1">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <button
              key={cat.title}
              onClick={() => setActiveCatIndex(idx)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-2 border cursor-pointer ${
                activeCatIndex === idx
                  ? 'bg-purple-600/30 text-purple-200 border-purple-500/60 shadow-lg'
                  : 'bg-white/5 text-white/60 border-white/10 hover:bg-white/10 hover:text-white'
              }`}
            >
              <span className="text-purple-400 font-bold">cat /skills/{idx + 1}</span>
              <span className="truncate">{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Active Skill List Matrix Output */}
        <div className="space-y-4 bg-black/60 p-4 rounded-xl border border-white/10">
          <div className="flex justify-between items-center text-white/60 text-[11px] border-b border-white/10 pb-2">
            <span className="text-purple-300 font-bold flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-purple-400" />
              {currentCategory.title}
            </span>
            <span>PROFICIENCY (%)</span>
          </div>

          <div className="space-y-3.5">
            {currentCategory.skills.map((skill) => (
              <div key={skill.name} className="space-y-1">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-white font-bold flex items-center gap-2">
                    <span className="text-emerald-400 font-bold">[OK]</span>
                    {skill.name}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 text-[10px] font-bold border border-purple-500/30">
                    {skill.tag}
                  </span>
                </div>

                {/* Terminal ASCII Progress Bar */}
                <div className="flex justify-between items-center text-[11px]">
                  <span className="text-emerald-400 tracking-wider">
                    {renderAsciiBar(skill.level)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic CLI Command History Log */}
        {commandHistory.length > 0 && (
          <div className="space-y-1.5 text-[11px] pt-2 border-t border-white/10">
            {commandHistory.map((log, i) => (
              <p
                key={i}
                className={log.startsWith('$') ? 'text-purple-300 font-bold' : 'text-emerald-400'}
              >
                {log}
              </p>
            ))}
          </div>
        )}
      </div>

      {/* Interactive Shell Prompt Input */}
      <form onSubmit={handleCommandSubmit} className="flex items-center gap-2 pt-4 border-t border-white/10 text-xs">
        <span className="text-purple-400 font-bold">jero@jero-os:~$</span>
        <input
          type="text"
          placeholder="type 'help', 'ls', 'whoami', or 'clear'..."
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          className="flex-1 bg-transparent text-emerald-300 placeholder-white/20 outline-none font-mono"
        />
        <span className="w-2 h-4 bg-emerald-400 animate-pulse" />
      </form>
    </div>
  );
}
