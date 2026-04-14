# 🛍️ Myntra Clone — Full-Stack E-Commerce Platform

A fully functional, production-deployed e-commerce web application inspired by Myntra, built with the **MERN stack**. Features complete user authentication with OTP verification, product browsing, cart & wishlist management, and a responsive UI.

🔗 **Live Demo:** [myntr-fullstack-ecommerce.netlify.app](https://myntr-fullstack-ecommerce.netlify.app)

---

## ✨ Features

### 🔐 Authentication

- OTP-based email verification (no password required)
- JWT-based session management with secure token storage
- Protected routes — unauthorized users are redirected automatically
- OTP expiry validation with a countdown timer and resend option

### 🛒 Shopping Experience

- Browse products with category and filter support
- Add / remove items from **Cart** with quantity control
- Add / remove items from **Wishlist**
- Cart total calculation with live quantity updates

### 🎨 UI / UX

- Responsive design across mobile, tablet, and desktop
- Two-panel auth layout — sticky branded panel + scrollable form
- Fixed navigation bars
- Clean, Myntra-inspired pink & white design language

### ⚙️ State Management

- Redux Toolkit for global state (auth, cart, wishlist, products)
- redux-persist for cart and wishlist persistence across sessions
- Smart state design: products are NOT persisted (fetched fresh), cart/wishlist are whitelisted

---

## 🛠️ Tech Stack

### Frontend

| Technology       | Purpose                                |
| ---------------- | -------------------------------------- |
| React.js         | Component-based UI                     |
| React Router DOM | Client-side routing & protected routes |
| Redux Toolkit    | Global state management                |
| redux-persist    | Persistent cart & wishlist             |
| Tailwind CSS     | Utility-first responsive styling       |

### Backend

| Technology           | Purpose               |
| -------------------- | --------------------- |
| Node.js              | Runtime environment   |
| Express.js           | REST API framework    |
| MongoDB              | NoSQL database        |
| JSON Web Token (JWT) | Stateless auth tokens |
| Nodemailer           | OTP email delivery    |

### Deployment

| Platform          | Scope                                      |
| ----------------- | ------------------------------------------ |
| **Netlify**       | Frontend hosting with SPA redirect support |
| **Render**        | Backend Node.js server (free tier)         |
| **MongoDB Atlas** | Cloud-hosted database                      |

---

## 📡 API Endpoints

### Auth

| Method | Endpoint               | Description             |
| ------ | ---------------------- | ----------------------- |
| `POST` | `/api/auth/send-otp`   | Send OTP to email       |
| `POST` | `/api/auth/verify-otp` | Verify OTP & return JWT |

### Cart

| Method   | Endpoint                      | Description           |
| -------- | ----------------------------- | --------------------- |
| `GET`    | `/api/cart`                   | Get user's cart       |
| `POST`   | `/api/cart/add`               | Add item to cart      |
| `PUT`    | `/api/cart/update`            | Update item quantity  |
| `DELETE` | `/api/cart/remove/:productId` | Remove item from cart |

### Wishlist

| Method   | Endpoint                          | Description               |
| -------- | --------------------------------- | ------------------------- |
| `GET`    | `/api/wishlist`                   | Get user's wishlist       |
| `POST`   | `/api/wishlist/add`               | Add item to wishlist      |
| `DELETE` | `/api/wishlist/remove/:productId` | Remove item from wishlist |

---

## 🧠 Key Technical Decisions

- **Cart & Wishlist stored in User model** — embedded arrays for atomic updates and simpler queries, avoiding separate collections for a project at this scale.
- **Products NOT persisted in Redux** — products are fetched fresh on load; only cart and wishlist IDs are persisted, keeping the store lightweight and data consistent.
- **OTP via Nodemailer** — eliminates trial account restrictions; Gmail SMTP is free and reliable for development and demo purposes.
- **Netlify `_redirects` for SPA** — added `/* /index.html 200` to prevent 404 errors on page refresh for client-side routes.

## 🙋‍♀️ Author

**Purbasha**
3rd Year BCA Student | MERN Stack Developer

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Purbasha222)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/purbasha-goswami)

---

## 📄 License

This project is built for educational and portfolio purposes. The UI is inspired by Myntra — all product data is sample/mock data.
