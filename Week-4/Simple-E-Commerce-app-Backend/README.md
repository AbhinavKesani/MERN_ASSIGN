# Simple E‑Commerce App — Backend

This is a minimal Express + MongoDB backend used as a Week 4 exercise. It demonstrates:
- Mongoose models for `user` and `product`.
- Basic REST endpoints for creating/listing products and creating users and managing a user's cart.

Files of interest
- `server.js` — application entry point, connects to MongoDB and mounts routes.
- `APIs/` — `productAPI.js`, `userAPI.js` (route handlers).
- `Models/` — Mongoose schemas: `productModel.js`, `userModel.js`.
- `req.http` — example HTTP requests (create product, create user, add to cart, read user).

Prerequisites
- Node.js v14+ and MongoDB running locally (the code uses `mongodb://127.0.0.1:27017/simpleEcommerceDB` by default).

Install & Run

```bash
cd Simple-E-Commerce-app-Backend
npm install
npm start
```

Behavior
- The server listens on port `3000`.
- Create products with `POST /product-api/products` and users with `POST /user-api/users`.
- Add products to a user's cart with the `PUT /user-api/user-cart/userid/:userId/productid/:productId` endpoint.

Testing
- Use the provided `req.http` file with VS Code REST Client or Postman to exercise the API.

Customization
- To use a remote MongoDB instance, edit the connection string in `server.js`.

If you'd like, I can: add environment variable support, Dockerfile, or small integration tests.

