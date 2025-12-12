
import OceanBackground from './components/OceanBackground';
import Hero from './components/Hero';
import SpecGenerator from './components/SpecGenerator';
import ChatWidget from './components/ChatWidget';

function App() {
    return (
        <div className="min-h-screen text-slate-200 selection:bg-neon-cyan selection:text-ocean-950">

            {/* 1. Глобальный фон (Canvas) */}
            <OceanBackground />

            {/* 2. Навигация */}
            <nav className="fixed top-0 left-0 w-full z-40 px-6 py-4 flex justify-between items-center bg-ocean-950/50 backdrop-blur-md border-b border-white/5">
                <div className="text-xl font-bold tracking-widest text-white flex items-center gap-2">
                    CACHALOT<span className="text-neon-cyan">.</span>
                </div>
                <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
                    <a href="#about" className="hover:text-neon-cyan transition-colors">Философия</a>
                    <a href="#services" className="hover:text-neon-cyan transition-colors">Услуги</a>
                    <a href="#cases" className="hover:text-neon-cyan transition-colors">Кейсы</a>
                </div>
                <button className="px-4 py-2 text-xs font-bold bg-white text-ocean-950 rounded hover:bg-neon-cyan transition-colors">
                    Связаться
                </button>
            </nav>

            <main className="relative z-10">
                <Hero />

                {/* Блок-заглушка для Кейсов (сделаем следующим шагом) */}
                <section className="py-20 bg-ocean-900/50 border-t border-white/5 text-center">
                    <p className="text-slate-500 font-mono">[ Здесь будет блок "Модули и Кейсы" ]</p>
                </section>

                {/* Твой Генератор ТЗ */}
                <section className="py-24 relative overflow-hidden">
                    {/* Фоновое пятно */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] -z-10"></div>

                    <div className="relative z-10 max-w-7xl mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-white mb-2">Архитектор Идей</h2>
                            <p className="text-slate-400">Опишите задачу, и AI составит технический план.</p>
                        </div>
                        <SpecGenerator />
                    </div>
                </section>

            </main>

            <footer className="py-10 text-center text-slate-600 text-sm border-t border-white/5 bg-ocean-950 relative z-10">
                © 2025 Cachalot Digital Lab. Deep Tech Solutions.
            </footer>

            <ChatWidget />

        </div>
    );
}

export default App;
