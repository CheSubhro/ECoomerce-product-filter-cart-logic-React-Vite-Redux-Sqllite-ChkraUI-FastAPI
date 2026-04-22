<img width="900" height="1895" alt="localhost_5173_ (16)" src="https://github.com/user-attachments/assets/64f0e8e6-e1cd-4c7d-893f-2afe78653192" /><img width="900" height="1895" alt="localhost_5173_ (17)" src="https://github.com/user-attachments/assets/11202820-b4ac-46c9-b3d9-f443d4adc9f2" /><img width="900" height="1996" alt="127 0 0 1_8000_docs (4)" src="https://github.com/user-attachments/assets/62e212bd-1d08-4fac-9e7b-e51605c31ef5" /><img width="900" height="1895" alt="localhost_5173_ (15)" src="https://github.com/user-attachments/assets/811cc8c6-0987-4fb3-8e23-1640fcc25a4f" /># 🛒 ProCart - Modern Full-Stack E-Commerce Solution

ProCart is a production-grade e-commerce application built with a focus on high performance, clean architecture, and seamless user experience. It features a robust **FastAPI** backend and a dynamic **React** frontend with **Redux Toolkit** for sophisticated state management.

---

## 🚀 Key Features

- **Real-time Product Filtering:** Instant category-based sorting (Electronics, Fashion, etc.) without page reloads.
- **Advanced Shopping Cart:** Add to cart, adjust quantities, and real-time price calculation logic.
- **Unified Branding:** Professional UI with a custom Teal-to-Orange gradient theme.
- **Responsive Design:** Fully optimized for all screen sizes using Chakra UI.
- **Modern Loading States:** Custom animated spinners and graceful error handling.
- **Production Folder Structure:** Organized directory layout for scalability and maintainability.

---

## 🛠️ Tech Stack

### Frontend
- **React.js (Vite)** - For a lightning-fast development experience.
- **Redux Toolkit** - Handling complex global state for cart and product filters.
- **Chakra UI** - For modern, accessible, and responsive component design.
- **React Icons** - For intuitive visual cues.

### Backend
- **FastAPI (Python)** - High-performance asynchronous REST API.
- **SQLAlchemy** - ORM for efficient database communication.
- **SQLite** - Lightweight and reliable relational database.



<img width="900" height="1996" alt="127 0 0 1_8000_docs (4)" src="https://github.com/user-attachments/assets/419485c4-b5c0-483c-b17b-baf3be0d2e62" />
<img width="900" height="1895" alt="localhost_5173_ (15)" src="https://github.com/user-attachments/assets/83e1c110-a20a-46cf-adac-2b4b8299a95e" />
<img width="900" height="1895" alt="localhost_5173_ (16)" src="https://github.com/user-attachments/assets/8d734511-f346-4026-bee0-9d3a7763b22f" />
<img width="900" height="1895" alt="localhost_5173_ (17)" src="https://github.com/user-attachments/assets/8eec94c9-8f7e-4a2c-97fb-76f489472075" />



---

## 📂 Project Structure

```text
├── backend/
│   ├── main.py            # Entry point for FastAPI
│   ├── database.py        # SQLite & SQLAlchemy config
│   └── models.py          # Database schemas
├── frontend/
│   ├── src/
│   │   ├── app/           # Redux Store config
│   │   ├── components/    # Reusable UI (Common/Layout)
│   │   ├── features/      # Cart & Product logic slices
│   │   ├── services/      # API integration
│   │   └── theme/         # Chakra UI custom theme
└── README.md


1. Clone the repository
Bash
git clone [https://github.com/CheSubhro/ECoomerce-product-filter-cart-logic.git](https://github.com/CheSubhro/ECoomerce-product-filter-cart-logic.git)
cd ECoomerce-product-filter-cart-logic
2. Backend Setup
Bash
cd backend
python -m venv venv
source venv/scripts/activate  # On Windows use: venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
3. Frontend Setup
Bash
cd frontend
npm install
npm run dev
📸 UI Highlights
Custom Components: Reusable CustomButton with loading states and FilterBar for easy navigation.

Animations: Emotion-driven pulse animations for the LoadingSpinner.

Global Consistency: Synchronized gradient theme between the Navbar and interactive elements.

👨‍💻 Author
CheSubhro

Full-Stack Developer

GitHub: @CheSubhro
