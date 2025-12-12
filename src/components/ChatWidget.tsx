import { useState } from 'react';
import { MessageCircle, X, Mic, Send } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="mb-4 w-[340px] h-[500px] bg-ocean-900/95 backdrop-blur-xl border border-neon-cyan/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
                    >
                        {/* Шапка */}
                        <div className="bg-gradient-to-r from-cyan-900 to-blue-900 p-4 flex justify-between items-center border-b border-white/10">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-neon-cyan flex items-center justify-center font-bold text-black text-xs">AI</div>
                                <div>
                                    <h4 className="text-white font-bold text-sm">Cachalot Assistant</h4>
                                    <span className="text-[10px] text-green-400 flex items-center gap-1">● ONLINE</span>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white"><X size={18} /></button>
                        </div>

                        {/* Тело чата */}
                        <div className="flex-1 p-4 bg-black/20 overflow-y-auto space-y-4">
                            <div className="flex gap-3">
                                <div className="bg-white/10 p-3 rounded-2xl rounded-tl-none text-sm text-slate-200 border border-white/5">
                                    Здравствуйте! Я цифровой помощник. Хотите посмотреть кейсы или обсудить проект?
                                </div>
                            </div>
                        </div>

                        {/* Ввод */}
                        <div className="p-3 bg-ocean-950 border-t border-white/10 flex gap-2">
                            <button className="p-2 text-slate-400 hover:text-neon-cyan transition-colors"><Mic size={20} /></button>
                            <input type="text" placeholder="Сообщение..." className="flex-1 bg-transparent text-white text-sm outline-none placeholder-slate-600" />
                            <button className="p-2 bg-neon-cyan/20 text-neon-cyan rounded-lg hover:bg-neon-cyan/40"><Send size={18} /></button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <button onClick={() => setIsOpen(!isOpen)} className="w-14 h-14 rounded-full bg-gradient-to-r from-neon-cyan to-blue-600 flex items-center justify-center text-white shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:scale-110 transition-transform">
                {isOpen ? <X /> : <MessageCircle className="animate-pulse" />}
            </button>
        </div>
    );
};

export default ChatWidget;
