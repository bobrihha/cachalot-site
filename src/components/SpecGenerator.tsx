import { useState } from 'react';
import { generateProjectSpec } from '../services/geminiService';
import ReactMarkdown from 'react-markdown';
import { Sparkles, Send } from 'lucide-react';

const SpecGenerator = () => {
    const [idea, setIdea] = useState('');
    const [result, setResult] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleGenerate = async () => {
        if (!idea.trim()) return;
        setIsLoading(true);
        setResult('');
        try {
            const text = await generateProjectSpec(idea);
            setResult(text);
        } catch (e) {
            console.error(e);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="w-full max-w-4xl mx-auto font-sans">
            {/* Dark Glass Container */}
            <div className="bg-ocean-900/40 backdrop-blur-xl rounded-[2rem] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.3)] overflow-hidden relative group hover:border-neon-cyan/30 transition-all duration-500">

                {/* Декоративное свечение */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-neon-cyan/50 to-transparent"></div>

                {/* Header */}
                <div className="p-8 border-b border-white/5 bg-white/5">
                    <h3 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
                        <Sparkles className="text-neon-cyan" />
                        AI Архитектор
                    </h3>
                    <p className="text-slate-400 mt-2 font-light">
                        Опишите идею, и нейросеть <span className="text-neon-cyan">Cachalot</span> составит технический план погружения.
                    </p>
                </div>

                {/* Body */}
                <div className="p-8 space-y-6">
                    <div className="relative">
                        <textarea
                            className="w-full h-32 p-4 bg-ocean-950/60 rounded-xl border border-white/10 focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan/50 transition-all outline-none resize-none text-slate-200 placeholder-slate-600"
                            placeholder="Например: Бот для автосервиса, который сам записывает клиентов в календаре Bitrix24 и напоминает о записи..."
                            value={idea}
                            onChange={(e) => setIdea(e.target.value)}
                            disabled={isLoading}
                        />
                        <button
                            onClick={handleGenerate}
                            disabled={isLoading || !idea}
                            className={`absolute bottom-4 right-4 p-2 rounded-lg transition-all ${isLoading || !idea
                                    ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                                    : 'bg-neon-cyan text-ocean-950 hover:bg-cyan-400 shadow-lg shadow-cyan-900/20'
                                }`}
                        >
                            {isLoading ? <div className="animate-spin h-5 w-5 border-2 border-ocean-950 border-t-transparent rounded-full" /> : <Send size={20} />}
                        </button>
                    </div>

                    {/* Result */}
                    {result && (
                        <div className="bg-black/20 p-6 rounded-xl border border-white/5 animate-fade-in text-left">
                            <div className="prose prose-invert prose-p:text-slate-300 prose-headings:text-neon-cyan prose-strong:text-white max-w-none">
                                <ReactMarkdown>{result}</ReactMarkdown>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SpecGenerator;
