
from fastapi import APIRouter
from app.services.langgraph_agent import run_agent
from app.db.database import save_interaction

router = APIRouter()

@router.post("/chat")
async def chat(data: dict):
    return {"response": run_agent(data["message"])}

@router.post("/log")
async def log(data: dict):
    return {"saved": save_interaction(data)}
