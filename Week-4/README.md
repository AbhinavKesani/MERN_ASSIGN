## Week 4 — Simple E‑Commerce Backend & Exercises

This week contains a small Express + MongoDB backend for a simple e-commerce demo and related exercises.

Contents
- `Simple-E-Commerce-app-Backend/` — Express server, Mongoose models, and example requests

Quick start (backend)
- Prerequisites: Node.js (v14+) and a running MongoDB instance (default: `mongodb://127.0.0.1:27017`).
- From the `Simple-E-Commerce-app-Backend` folder:

```bash
npm install
npm start
```

- Server will run on `http://localhost:3000` by default. If MongoDB runs elsewhere, update the connection string in `server.js`.

APIs
- Product endpoints: `POST /product-api/products`, `GET /product-api/products`
- User endpoints: `POST /user-api/users`, `PUT /user-api/user-cart/userid/:userId/productid/:productId`, `GET /user-api/users/:id`

Notes
- Sample HTTP requests are provided in `Simple-E-Commerce-app-Backend/req.http` for easy testing with REST clients.
- Open the backend folder's README for more details and to explore the code in `APIs/` and `Models/`.
