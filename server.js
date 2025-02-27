import express from 'express';
import cors from 'cors';
import { sameer } from './server2.js';

const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));  // ✅ Place before defining routes
app.use(express.json());  // ✅ Place before defining routes

app.get('/', (req, res) => {
  res.send('Hello from server1.js');
});

app.post('/api/veeresh', sameer);  // ✅ Ensure sameer is a function in server2.js

app.listen(3000, () => {
  console.log('Server is running on port 5000');
});
 