Sun Fu Wok - Food Ordering System 🥢
This is a full-stack food ordering platform built with Next.js (App Router) and Express.js, using Firebase/Firestore as the primary database. The system implements a robust event-driven architecture to track user behavior during the checkout flow.

# ----------------------------------------------------------------------------

📁 Repository Structure
Plaintext
.
├── api/ # Backend (Express.js + Node.js)
│ ├── src/
│ │ ├── config/ # Firebase Admin SDK Configuration
│ │ ├── controllers/ # Order, Product, and Timeline logic
│ │ ├── models/ # TypeScript Interfaces
│ │ ├── routes/ # API Endpoints (Orders, Products, Dev)
│ │ └── services/ # Business Logic & Firestore interactions
│ └── package.json
├── src/ # Frontend (Next.js 14+)
│ ├── app/ # Next.js App Router (Pages)
│ ├── components/ # Atomic Design (Atoms, Molecules, Modules)
│ ├── services/ # API Client Modules
│ ├── store/ # State Management (Zustand/Custom)
│ └── utils/ # Theme, Hooks, and Constants
├── .env # Root environment variables
├── firebase.json # Firebase configuration
└── package.json # Root scripts and dependencies

# ----------------------------------------------------------------------------

🚀 Prerequisites
Node.js: v20

Package Manager: npm

Firebase Project: A Firestore database instance.

# ----------------------------------------------------------------------------

🛠️ Environment Setup

1. Backend Credentials
   The API requires a Firebase Service Account key to interact with Firestore.

Create a folder named config inside the "/api/src/" directory.

Place your serviceAccountKey.json file inside "api/src/config/".

2. Environment Variables
   Create a .env file in the root of the project:

Fragmento de código

# Frontend

NEXT_PUBLIC_API_BASE_URL=http://127.0.0.1:5001/restaurant-project-2e5d0/us-central1/v1

# ----------------------------------------------------------------------------

🏃 How to Run Locally
Follow these steps to start the system in under 10 minutes:

Step 1: Install Dependencies
Open two terminals or run:

Bash

# Install Frontend dependencies (Root)

npm install

# Install Backend dependencies (API)

cd api && npm install

Step 2: Start the Services
Terminal 1: Backend (API)
Bash
cd api
npm run dev

Terminal 2: Frontend (UI)

Bash

# In the root directory

npm run dev

# ----------------------------------------------------------------------------

🧪 Seed / Sample Data
The project includes a development utility to populate your Firestore database with the required menu items and modifiers.

Command: Run the following request (via Browser or Postman) once the server is up:

GET http://127.0.0.1:5001/restaurant-project-2e5d0/us-central1/v1/api/dev/seed-menu

# ----------------------------------------------------------------------------

📍 API & UI Endpoints
Frontend
/: Main Menu (Product listing)

/checkout: Cart summary and Checkout form

/checkout/:orderId: Order Status and Timeline view

# ----------------------------------------------------------------------------

Backend
Orders:

POST /api/orders/: Create order (Supports Idempotency-Key)

GET /api/orders/:orderId/timeline: Retrieve order events

PATCH /api/orders/:orderId/status: Update order status

Products:

GET /api/products/: Get all menu items

GET /api/products/customizations/:productId: Get modifiers (Proteins, Sauces, etc.)

# ----------------------------------------------------------------------------

🧠 Technical Highlights

1. Event-Driven Architecture
   The system tracks the full user journey by capturing events locally and persisting them upon checkout. This allows for deep consumption analytics.

Event Types: CART_ITEM_ADDED, CART_ITEM_UPDATED, CART_ITEM_REMOVED, PRICING_CALCULATED, ORDER_PLACED, ORDER_STATUS_CHANGED.

Schema: Includes eventId (UUID), correlationId (to link session events), and payload (limited to 16KB).

2. Advanced Checkout
   Idempotency: The POST /orders endpoint uses an Idempotency-Key header to prevent duplicate orders.

Server-Side Pricing: All totals are recalculated on the server using integer cents to avoid floating-point errors.

Payload Validation: Rejects any request exceeding 16KB.

3. Menu Complexity
   Includes 7+ products.

Advanced modifiers for products (e.g., Veggie Burger) with mandatory protein selection and optional toppings/sauces.

Note: Due to time constraints, the Order Status Timeline UI is developed but currently undergoing final adjustments to fully map all persisted events to the visual display. Deployment was omitted to focus on high-priority technical requirements like idempotency and event-driven logic.
