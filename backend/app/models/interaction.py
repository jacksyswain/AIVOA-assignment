
from pydantic import BaseModel

class Interaction(BaseModel):
    hcp_name: str
    notes: str
    sentiment: str = "neutral"
