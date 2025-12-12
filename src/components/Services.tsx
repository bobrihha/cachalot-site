import { Bot, Network, Workflow } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
    {
        icon: <Bot size={40} />,
        title: "AI Staff & Voice",
        desc: "Цифровые сотрудники, заменяющие колл-центр. Понимают контекст, говорят голосом, работают 24/7 в Telegram и WhatsApp."
    },
    {
        icon: <Workflow size={40} />,
        title: "CRM Integration",
        desc: "Нервная система бизнеса. Глубокая связка AmoCRM/Bitrix24 с сайтом. Автоматическая квалификация и ведение лидов."
    },
    {
        icon: <Network size={40} />,
        title: "Web3 & Fintech",
        desc: "Торговые роботы, смарт-контракты и мониторинг блокчейна. Безопасные интерфейсы для работы с криптовалютой."
    }
];

const Services = () => {
    return (
        <section id="services" className="py-20 bg-ocean-950 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-neon-cyan tracking-widest uppercase text-sm font-bold">Экосистема</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Наши Модули</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="group p-8 rounded-2xl bg-ocean-900/30 border border-white/5 hover:bg-ocean-800/50 hover:border-neon-cyan/30 transition-all duration-300"
                        >
                            <div className="mb-6 text-slate-400 group-hover:text-neon-cyan transition-colors duration-300 bg-white/5 w-16 h-16 rounded-xl flex items-center justify-center">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                            <p className="text-slate-400 leading-relaxed text-sm">
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
