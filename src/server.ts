import express from 'express';
import routes from './routes';

const app = express();

// Middleware para processar JSON
app.use(express.json());

// Utilizando as rotas
app.use(routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
