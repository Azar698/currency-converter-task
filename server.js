import express from 'express';
import axios from 'axios';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

const CURRENCY_API_BASE = process.env.CURRENCY_API_URL || 'https://api.exchangerate-api.com/v4/latest/';


app.get('/api/rates', async (req, res) => {
  const base = req.query.base || 'USD';

  try {
    const response = await axios.get(`${CURRENCY_API_BASE}${base}`);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch exchange rates', details: err.message });
  }
});


app.post('/api/convert', async (req, res) => {
  const { from, to, amount } = req.body;


  if (!from || !to || isNaN(amount) || amount <= 0) {
    return res.status(400).json({ error: 'Invalid input: Please provide valid currencies and a positive amount' });
  }

  try {
    const response = await axios.get(`${CURRENCY_API_BASE}${from}`);
    const rate = response.data.rates[to];

    if (!rate) {
      return res.status(400).json({ error: 'Invalid currency code' });
    }

    const convertedAmount = (amount * rate).toFixed(2);
    res.json({ from, to, amount, convertedAmount });
  } catch (err) {
    res.status(500).json({ error: 'Conversion failed', details: err.message });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
