import { Send, Mail, Github, MessageCircle } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="relative bg-ocean-950 pt-20 pb-10 border-t border-white/5 overflow-hidden">

            {/* Фоновое свечение */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-neon-cyan/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Верхняя часть: CTA (Call to Action) */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Готовы нырнуть <br />
                            <span className="text-neon-cyan">глубже?</span>
                        </h2>
                        <p className="text-slate-400 text-lg max-w-md">
                            Обсудим вашу задачу. Мы найдем решение там, где другие видят только темную воду.
                        </p>
                    </div>

                    {/* Кнопки контактов */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="https://t.me/ТВОЙ_НИК"
                            target="_blank"
                            rel="noreferrer"
                            className="group flex items-center justify-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-xl text-white font-bold hover:bg-neon-cyan hover:text-ocean-950 hover:border-neon-cyan transition-all duration-300"
                        >
                            <Send size={20} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                            Telegram
                        </a>
                        <a
                            href="mailto:hello@cachalot.ai"
                            className="group flex items-center justify-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-xl text-white font-bold hover:bg-white hover:text-ocean-950 transition-all duration-300"
                        >
                            <Mail size={20} />
                            Email
                        </a>
                    </div>
                </div>

                <hr className="border-white/10 mb-10" />

                {/* Нижняя часть: Навигация и Копирайт */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                    {/* Лого */}
                    <div className="text-2xl font-bold tracking-widest text-white flex items-center gap-2">
                        CACHALOT<span className="text-neon-cyan">.</span>
                    </div>

                    {/* Ссылки */}
                    <div className="flex gap-8 text-sm font-medium text-slate-500">
                        <a href="#about" className="hover:text-neon-cyan transition-colors">Философия</a>
                        <a href="#services" className="hover:text-neon-cyan transition-colors">Услуги</a>
                        <a href="#cases" className="hover:text-neon-cyan transition-colors">Кейсы</a>
                    </div>

                    {/* Соцсети / Github */}
                    <div className="flex gap-4">
                        <a href="#" className="p-2 text-slate-500 hover:text-white transition-colors"><Github size={20} /></a>
                        <a href="#" className="p-2 text-slate-500 hover:text-white transition-colors"><MessageCircle size={20} /></a>
                    </div>
                </div>

                <div className="text-center mt-12 text-xs text-slate-600">
                    © 2025 Cachalot Digital Lab. All systems operational.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
