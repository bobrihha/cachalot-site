import { motion } from 'framer-motion';

const Philosophy = () => {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

                {/* Текст */}
                <div className="space-y-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Глубина имеет <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-blue-600">значение</span>.
                        </h2>
                        <div className="space-y-6 text-lg text-slate-400 font-light leading-relaxed">
                            <p>
                                В цифровом океане 90% решений плавают на поверхности. Шаблонные сайты и простые чат-боты больше не дают конкурентного преимущества.
                            </p>
                            <p className="border-l-2 border-neon-cyan pl-6 italic text-slate-300">
                                «Мы работаем там, где другие боятся нырять. Технологии глубокого залегания — наша стихия».
                            </p>
                            <p>
                                Как кашалот ориентируется в полной темноте с помощью эхолокации, так наши алгоритмы находят скрытые ресурсы вашего бизнеса. Мы не просто пишем код, мы строим автономные системы.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Визуал / Абстракция */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="relative h-[400px] bg-gradient-to-tr from-ocean-900 to-ocean-800 rounded-3xl border border-white/5 flex items-center justify-center overflow-hidden"
                >
                    <div className="absolute inset-0 bg-[url('https://www.TXD.com/noise.png')] opacity-20"></div> {/* Шум (опционально) */}

                    {/* Декоративные круги */}
                    <div className="absolute w-64 h-64 bg-neon-cyan/20 rounded-full blur-[80px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse-slow"></div>

                    <div className="z-10 text-center p-8 backdrop-blur-sm bg-black/10 rounded-2xl border border-white/10 m-8">
                        <div className="text-5xl font-mono text-white mb-2">3000<span className="text-neon-cyan">m</span></div>
                        <div className="text-sm text-slate-400 uppercase tracking-widest">Максимальная глубина погружения</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Philosophy;
