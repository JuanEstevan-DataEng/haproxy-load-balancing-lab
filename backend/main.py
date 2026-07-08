from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
import socket

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api/hello")
def read_hello():
    return {
        "message": "Hello from FastAPI!",
        "hostname": socket.gethostname(),
        "pod_name": os.getenv("HOSTNAME", "local")
    }
