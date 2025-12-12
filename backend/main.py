from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from openai import OpenAI
import os
import json
from dotenv import load_dotenv
from bs4 import BeautifulSoup

# Load environment variables
load_dotenv()
load_dotenv("../.env") # Try looking in root as well

app = FastAPI()

# Enable CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # In production, specify the exact domain
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

API_KEY = os.environ.get("OPENAI_API_KEY")
client = OpenAI(api_key=API_KEY)

class ChatRequest(BaseModel):
    message: str

def clean_html(html_text):
    if not isinstance(html_text, str): return ""
    soup = BeautifulSoup(html_text, "html.parser")
    for script in soup(["script", "style"]): script.extract()
    text = soup.get_text(separator=' ')
    return " ".join(text.split())[:3500]

def analyze_deeply(text):
    # Simplified prompt for chat context - treating input as article content/title mix
    prompt = f"""
    Ты архитектор спортивной энциклопедии. Роль: Строгий редактор.
    
    ТЕКСТ ПОЛЬЗОВАТЕЛЯ:
    {text}
    
    ЗАДАЧА:
    Проанализируй текст так, как будто это заголовок или краткое содержание статьи.
    Построй иерархию из 3-х уровней.
    
    !!! КРИТИЧЕСКИ ВАЖНОЕ ПРАВИЛО !!!
    Если статья описывает КОНКРЕТНОЕ УПРАЖНЕНИЕ (подтягивания, жим, присед, бег) или ПРОГРАММУ ТРЕНИРОВОК — это ВСЕГДА "Level 1 = Виды спорта" -> "Level 2 = Силовые виды" (или Фитнес).
    НЕ СТАВЬ упражнения в "Медицину" или "Науку"!
    
    СТРУКТУРА:
    1. LEVEL 1 (Корневой). Строго один из:
       [Виды спорта, История и наука, Соревнования, Персоны в спорте, Организации].
       
    2. LEVEL 2 (Направление).
       - Если Lvl1="Виды спорта" -> Силовые виды, Единоборства, Легкая атлетика, Фитнес.
       - Если Lvl1="История и наука" -> Спортивное питание, Фармакология, Спортивная медицина (только болезни/травмы!), Физиология.
    
    3. LEVEL 3 (Тег). Конкретный предмет статьи.
    
    Ответ верни строго в JSON:
    {{
        "lvl1": "...",
        "lvl2": "...",
        "lvl3": "...",
        "new_h1": "...",
        "seo_title": "...",
        "seo_description": "..."
    }}
    """

    try:
        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[{"role": "user", "content": prompt}],
            temperature=0.2, 
            response_format={"type": "json_object"}
        )
        return json.loads(response.choices[0].message.content)
    except Exception as e:
        print(f"Error AI: {e}")
        return {"error": str(e)}

@app.post("/api/chat")
async def chat_endpoint(request: ChatRequest):
    if not API_KEY:
        raise HTTPException(status_code=500, detail="OPENAI_API_KEY not found in environment variables")
    
    result = analyze_deeply(request.message)
    return result

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
