
from pydantic import BaseModel
from typing import Optional

class ProductBase(BaseModel):
    name: str
    price: float
    category: str
    image: str

class ProductCreate(ProductBase):
    pass

class ProductResponse(ProductBase):
    id: int

    class Config:
        from_attributes = True