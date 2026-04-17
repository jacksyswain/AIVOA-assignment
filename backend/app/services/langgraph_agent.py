
from app.services.tools.log_tool import log_tool
from app.services.tools.summary_tool import summary_tool

def run_agent(message):
    summary = summary_tool(message)
    return log_tool(summary)
