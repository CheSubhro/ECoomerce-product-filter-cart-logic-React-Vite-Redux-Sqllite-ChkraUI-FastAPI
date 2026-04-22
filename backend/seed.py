from app.db.session import SessionLocal
from app.models.product import Product

def seed_data():
    db = SessionLocal()
    
    db.query(Product).delete()
    
    dummy_products = [
    # Electronics
    Product(name="Gaming Laptop", price=1200.0, category="Electronics", image="https://picsum.photos/seed/laptop/400/400"),
    Product(name="Smartphone X", price=899.0, category="Electronics", image="https://picsum.photos/seed/phone/400/400"),
    Product(name="Wireless Earbuds", price=150.0, category="Electronics", image="https://picsum.photos/seed/buds/400/400"),
    Product(name="Smart Speaker", price=99.0, category="Electronics", image="https://picsum.photos/seed/speaker/400/400"),
    Product(name="Action Camera", price=299.0, category="Electronics", image="https://picsum.photos/seed/camera/400/400"),
    
    # Fashion
    Product(name="Blue Denim", price=60.0, category="Fashion", image="https://picsum.photos/seed/denim/400/400"),
    Product(name="White Sneakers", price=80.0, category="Fashion", image="https://picsum.photos/seed/shoes/400/400"),
    Product(name="Leather Wallet", price=40.0, category="Fashion", image="https://picsum.photos/seed/wallet/400/400"),
    Product(name="Summer Cap", price=25.0, category="Fashion", image="https://picsum.photos/seed/cap/400/400"),
    Product(name="Formal Shirt", price=45.0, category="Fashion", image="https://picsum.photos/seed/shirt/400/400"),
]
    
    db.add_all(dummy_products)
    db.commit()
    db.close()
    print("Success: 10 Products with real images inserted!")

if __name__ == "__main__":
    seed_data()