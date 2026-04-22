# 🛒 ProCart - Modern Full-Stack E-Commerce Solution

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
