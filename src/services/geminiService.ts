import { GoogleGenerativeAI } from "@google/generative-ai";

// ⚠️ ВАЖНО: В реальном проекте ключ лучше хранить в .env файле (VITE_GOOGLE_API_KEY)
// Но для быстрого старта можно временно вставить сюда, если не будешь пушить в публичный репозиторий.
// Получить ключ: https://aistudio.google.com/app/apikey
const API_KEY = "AIzaSyA1DeFmtZktqW048cD7iUy-ZSxvBVqjbxY";

const genAI = new GoogleGenerativeAI(API_KEY);

export const generateProjectSpec = async (userIdea: string): Promise<string> => {
    // Если ключа нет, вернем заглушку, чтобы сайт не падал при тесте
    if (API_KEY === "ТВОЙ_API_KEY_ОТ_GEMINI") {
        return new Promise(resolve => setTimeout(() => resolve(`
### 🛑 Отсутствует API Key
Я пока работаю в демо-режиме. Чтобы я мог сгенерировать настоящее ТЗ:
1. Получите ключ в [Google AI Studio](https://aistudio.google.com/).
2. Вставьте его в файл \`src/services/geminiService.ts\`.

**Ваша идея была:** ${userIdea}
        `), 1000));
    }

    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });

    const prompt = `
    Ты опытный Senior IT Архитектор и Product Manager студии Cachalot Digital Lab.
    Твоя задача: на основе короткой идеи пользователя составить профессиональное мини-ТЗ.
    
    Идея пользователя: "${userIdea}"
    
    Верни ответ в формате Markdown. Структура:
    1. 🎯 **Суть проекта** (1 предложение).
    2. 🛠 **Стек технологий** (рекомендуемый: Python/FastAPI/Aiogram/React и т.д.).
    3. 📋 **Основные функции (MVP)**: список из 3-5 главных фич.
    4. 💰 **Сложность**: Низкая/Средняя/Высокая.
    
    Тон: Технологичный, уверенный, лаконичный.
    `;

    try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        return response.text();
    } catch (error: any) {
        console.error("Gemini Error Details:", error);
        // Возвращаем реальный текст ошибки для отладки
        return `⚠️ Ошибка: ${error.message || JSON.stringify(error)}`;
    }
};
