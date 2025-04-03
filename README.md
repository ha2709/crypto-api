# Crypto Price API

This is a simple API to fetch the current price of a specified cryptocurrency from CoinGecko's public API.

## 🚀 Features
- Fetch the current price of a cryptocurrency in USD.
- Routes to access cryptocurrency data (e.g., `/crypto/price/:cryptoId`).
- CORS-enabled for cross-origin requests.
- Supports dynamic routes for different cryptocurrencies.

## 📦 Prerequisites

Before running the project, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (Node package manager)

## ⚙️ Installation

1. **Clone the repository**:

   ```sh
   git clone https://github.com/ha2709/crypto-api.git
   cd crypto-price-api
    ```

curl http://localhost:3000/crypto/price/bitcoin

2. **Install dependencies**:

    ```sh
     npm install
    ```

3. **Create a .env file: Copy the .env.example to a new .env file**:

    ```sh 
    cp .env.example .env
    ```

4. **Start the application**:

    ```sh
    npm run dev
    ```
    The server will now be running at http://localhost:3000.

## 📑 API Endpoints

 - GET /

A welcome message to confirm the API is running.

 - GET /crypto/price/:cryptoId

Fetch the current price of a cryptocurrency (e.g., bitcoin, ethereum) in USD.

Example:

```sh 
    curl http://localhost:3000/crypto/price/bitcoin
```

Response:

```
    {
        "asset": "bitcoin",
        "price": 83397
    }

```