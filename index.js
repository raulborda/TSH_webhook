import express from 'express';
const app = express();
const port = 3000;

app.use(express.json());

app.post('/webhook', (req, res) => {
  const receivedData = req.body;
  
  console.log(receivedData);
  
  res.status(200).send('Webhook recibido OK!');
});

app.listen(port, () => {
  console.log(`Webhook en port${port}`);
});
