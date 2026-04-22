from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware 
from app.db.session import engine, Base
from app.api.v1 import products

# Create Tables
Base.metadata.create_all(bind=engine)

app = FastAPI(title="ProCart API")

origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include Routers
app.include_router(products.router, prefix="/api/v1/products", tags=["Products"])

@app.get("/")
def root():
    return {"message": "Welcome to ProCart Advanced E-commerce API"}