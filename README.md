# E-Commerce Website (MERN)

## Current status

What is implemented in this repo today:

- **Backend** (`backend/app.js`, Express + Mongoose)
  - `POST /user/auth/signup` – creates a user (`fullName`, `email`, `password`), passwords hashed with bcrypt
  - `POST /user/auth/signin` – checks email and password
- **Frontend** (`frontend/`, React 19 + Vite + Tailwind CSS + React Router)
  - Sign up and sign in pages with toast notifications (react-toastify)
  - Home page (`/home`) with header, hero slider, featured products (static sample data, category tabs) and footer

Everything in the list further below is the **planned roadmap**, not yet built.

## Run locally

```bash
# Backend – needs DBURL (MongoDB connection string) and optionally PORT in backend/.env
cd backend
npm install
npm start            # http://localhost:3000 by default

# Frontend
cd frontend
npm install
npm run dev          # set VITE_API_URL in frontend/.env.local if the API is not on http://localhost:3000
```

---

## Planned features (roadmap)

📦 E-Commerce Website — Feature List

This project is a full-featured modern E-Commerce Web Application built using the MERN Stack (MongoDB, Express, React, Node.js).

🚀 1. Core User Features
🏠 Browsing & Discovery

Homepage with hero banners

Product categories & subcategories

Advanced filters (price, brand, rating, category)

Sorting options (Price Low→High, High→Low, Newest, Trending)

Search with suggestions & keyword matching

📄 Product Page

Multiple product images (carousel)

Product title, price, discount, specifications

Stock availability indicator

Product variants (size, color, model)

Ratings & reviews

Related / similar products

🛒 Cart & Checkout

Add to cart / remove from cart

Update item quantity

Auto-calculated totals

Persistent cart (localStorage + server sync)

Checkout flow (address → review → payment)

📦 Orders

Place orders

Track order status (Processing → Shipped → Delivered)

Order history

Download invoice / receipt

👤 User Account

Register / Login

JWT authentication

Update profile

Manage addresses

Wishlist

Recently viewed items

Forgot/Reset password via email

⭐ Ratings & Reviews

Add, edit & delete reviews

Star ratings

Mark reviews helpful

🛠 2. Admin Features
📊 Dashboard

Total users, orders, revenue

Daily/Monthly sales analytics

Low stock alerts

Best-selling products

🛍 Product Management

Add / edit / delete products

Product image upload

Bulk upload (CSV)

Manage inventory

🗂 Category & Brand Management

Add / edit / delete categories

Manage brands

📦 Order Management

View all orders

Update order & payment status

Refund/cancel orders

👥 User Management

View customers

Block / unblock users

Reset passwords

💸 Promotional Features

Coupon code system

Flash sale management

Homepage banner management

💳 3. Payment Features

Payment gateway integration (Stripe / Razorpay)

UPI, Net banking, Cards

Payment verification

Refund support

Tokenized card saving

🔍 4. Search & Recommendations

Autocomplete suggestions

Trending searches

Recently viewed items

“You may also like”

“Frequently bought together”

Similar product recommendations

✉️ 5. Notification System

Email notifications (order, shipping, password reset)

SMS notifications (optional)

Push notifications (optional)

🔐 6. Security Features

JWT + Refresh Token

Password hashing (bcrypt)

Role-based access

Rate limiting

Helmet security middleware

CORS protection

Input validation (Joi/Zod)

CSRF protection

Secure file upload

⚡ 7. Performance Features

CDN image hosting

Lazy loading

Pagination / infinite scroll

API caching (optional)

Code splitting

Mobile responsive UI

📈 8. SEO & Marketing

SEO-friendly URLs

Dynamic meta tags

Sitemap.xml & robots.txt

Schema.org product markup

Social share buttons

A/B testing support

🚚 9. Logistics & Delivery

Delivery charge calculation

Estimated delivery date

Shipping tracking integration (optional)

Shipping labels

Returns / Refunds module

🌟 10. Advanced Optional Features

Dark / Light Mode

Multi-language support

Multi-currency support

Product comparison

Gift cards

Loyalty points

Referral system

Multi-vendor marketplace

AI chatbot

AI product recommendations

PWA (Add to home screen, offline cart)

☁️ 11. DevOps & Deployment

CI/CD pipeline

Docker support

Environment configuration

Cloud deployment (Vercel / Render / Netlify)

Database backups

Logging & monitoring (Sentry)
