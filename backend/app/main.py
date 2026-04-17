
from fastapi import FastAPI
from app.routes import interaction

app = FastAPI()

app.include_router(interaction.router)

@app.get("/")
def root():
    return {"message": "Backend Running"}
