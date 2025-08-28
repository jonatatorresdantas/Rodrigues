import express from 'express';
import cors from 'cors';
import { prisma } from './src/utils/prisma.js';

const app = express();

// Middlewares
app.use(cors({
  origin: 'http://localhost:5173', // URL do seu Vue.js
  credentials: true
}));
app.use(express.json());

// GET - Listar todos os usuários
app.get('/usuarios', async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      orderBy: { createdAt: 'desc' }
    });
    res.json({
      success: true,
      data: users,
      total: users.length
    });
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    res.status(500).json({ 
      success: false,
      erro: 'Erro ao buscar usuários' 
    });
  }
});

// POST - Criar novo usuário
app.post('/usuarios', async (req, res) => {
  try {
    const { name, email, telefone } = req.body;

    // Validações básicas
    if (!name || !email || !telefone) {
      return res.status(400).json({
        success: false,
        erro: 'Nome, email e telefone são obrigatórios'
      });
    }

    // Verificar se email já existe
    const emailExiste = await prisma.user.findUnique({
      where: { email }
    });

    if (emailExiste) {
      return res.status(409).json({
        success: false,
        erro: 'Este email já está cadastrado'
      });
    }

    const novoUsuario = await prisma.user.create({
      data: { 
        name: name.trim(), 
        email: email.toLowerCase().trim(), 
        telefone: telefone.trim() 
      }
    });

    res.status(201).json({
      success: true,
      message: 'Usuário cadastrado com sucesso!',
      data: novoUsuario
    });
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    res.status(500).json({ 
      success: false,
      erro: 'Erro interno do servidor' 
    });
  }
});

app.listen(3000, () => {
  console.log('🚀 Servidor rodando em http://localhost:3000');
});