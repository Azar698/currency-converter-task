Currency Fetcher API & React Frontend and Backend with Node JS 🌍💰
This project is a full-stack currency exchange application that consists of:

A Node.js/Express backend that fetches real-time exchange rates.
A React.js frontend to display and convert currency values.
🚀 Features
✅ Fetch live exchange rates using an external API.
✅ List available currencies dynamically.
✅ Convert currency values in real time.
✅ Simple and responsive UI using React.


## Node.js Server

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```

### API Routes

- **GET /api/currencies**
  - Description: Fetches a list of available currencies.
  - Response: JSON array of currency codes and names.

- **GET /api/exchange-rate?base={currency}**
  - Description: Fetches the exchange rates for a specified base currency.
  - Query Parameters:
    - `base`: The currency code to fetch rates for (e.g., USD).
  - Response: JSON object containing exchange rates.



## React Frontend

### Installation

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the React app:
   ```bash
   npm start
   ```

### Components

- **CurrencyList**: Displays a list of available currencies.
- **ExchangeRate**: Shows the exchange rates for a selected base currency.


This README provides a basic overview of the Node.js server and React frontend for fetching currency data. Customize the routes and components as needed for your application.

