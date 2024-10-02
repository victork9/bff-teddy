import { Router } from "express";
import express from "express";
import bodyParser from "body-parser";
import { createClient, deleteClient, editClient, getAll, getById } from "./controlers/clients/clients";
import dotenv from 'dotenv'
import cors from 'cors'

const app = express();
const router = Router();
dotenv.config({ path: './.env' });


app.use(cors());

router.get('/users', getAll);
router.get('/users/:id', getById);
router.patch('/users/:id', editClient);

router.post('/users', createClient);
router.delete('/users/:id', deleteClient);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(router)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});