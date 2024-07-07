import { createConnection } from 'typeorm';

try {
  createConnection();
  console.log('conectado ao DB');
} catch (err) {
  console.log('Erro de conecxão');
}
