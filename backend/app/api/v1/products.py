
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List
from app.db.session import get_db
from app.models.product import Product
from app.schemas.product import ProductResponse

router = APIRouter()

@router.get("/", response_model=List[ProductResponse])
def read_products(db: Session = Depends(get_db)):
    products = db.query(Product).all()
    return products