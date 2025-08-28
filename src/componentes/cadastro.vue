<template>
  <div class="modal-overlay" @click.self="$emit('fechar')">
    <div class="modal-content">
      <form class="cadastro-form" @submit.prevent="handleSubmit">
        <h2>Cadastro</h2>

        <label for="nome">Nome:</label>
        <input 
          type="text" 
          id="nome" 
          v-model="nome" 
          :disabled="loading"
          required 
        />

        <label for="email">Email:</label>
        <input 
          type="email" 
          id="email" 
          v-model="email" 
          :disabled="loading"
          required 
        />

        <label for="telefone">Telefone:</label>
        <input 
          type="tel" 
          id="telefone" 
          v-model="telefone" 
          :disabled="loading"
          required 
        />

        <button type="submit" :disabled="loading">
          {{ loading ? 'Cadastrando...' : 'Cadastrar' }}
        </button>

        <!-- Mensagem de sucesso -->
        <p v-if="mensagem && !erro" class="mensagem sucesso">
          {{ mensagem }}
        </p>

        <!-- Mensagem de erro -->
        <p v-if="erro" class="mensagem erro">
          {{ erro }}
        </p>
      </form>

      <button class="fechar" @click="$emit('fechar')">×</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

// Configuração do Axios
const API_BASE_URL = 'http://localhost:3000'

// Reactive variables
const nome = ref('')
const email = ref('')
const telefone = ref('')
const mensagem = ref('')
const erro = ref('')
const loading = ref(false)

// Emits
const emit = defineEmits(['fechar', 'sucesso'])

// Função para limpar mensagens
const limparMensagens = () => {
  mensagem.value = ''
  erro.value = ''
}

// Função para limpar formulário
const limparFormulario = () => {
  nome.value = ''
  email.value = ''
  telefone.value = ''
}

// Função principal de submit
const handleSubmit = async () => {
  // Limpar mensagens anteriores
  limparMensagens()
  
  // Validações do frontend
  if (!nome.value.trim() || !email.value.trim() || !telefone.value.trim()) {
    erro.value = 'Por favor, preencha todos os campos.'
    return
  }

  if (nome.value.trim().length < 2) {
    erro.value = 'Nome deve ter pelo menos 2 caracteres.'
    return
  }

  if (!email.value.includes('@')) {
    erro.value = 'Por favor, insira um email válido.'
    return
  }

  if (telefone.value.trim().length < 10) {
    erro.value = 'Telefone deve ter pelo menos 10 caracteres.'
    return
  }

  // Iniciar loading
  loading.value = true

  try {
    // Fazer requisição POST para a API
    const response = await axios.post(`${API_BASE_URL}/usuarios`, {
      name: nome.value.trim(),
      email: email.value.trim(),
      telefone: telefone.value.trim()
    })

    // Sucesso
    console.log('Usuário cadastrado:', response.data)
    mensagem.value = response.data.message || 'Cadastro realizado com sucesso!'
    
    // Limpar formulário
    limparFormulario()

    // Emitir evento de sucesso após 2 segundos
    setTimeout(() => {
      emit('sucesso')
    }, 2000)

  } catch (error) {
    console.error('Erro ao cadastrar usuário:', error)

    // Tratar diferentes tipos de erro
    if (error.response) {
      // Erro da API (400, 409, 500, etc.)
      const status = error.response.status
      const errorMessage = error.response.data?.erro || 'Erro desconhecido'

      switch (status) {
        case 400:
          erro.value = errorMessage
          break
        case 409:
          erro.value = errorMessage // Email já cadastrado
          break
        case 500:
          erro.value = 'Erro interno do servidor. Tente novamente.'
          break
        default:
          erro.value = `Erro: ${errorMessage}`
      }
    } else if (error.request) {
      // Erro de conexão
      erro.value = 'Erro de conexão. Verifique se o servidor está rodando.'
    } else {
      // Erro desconhecido
      erro.value = 'Erro inesperado. Tente novamente.'
    }
  } finally {
    // Finalizar loading
    loading.value = false
  }
}
</script>

<style scoped>
.cadastro-form {
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
  background: #111;
  border-radius: 10px;
  color: white;
  font-family: 'Oswald', sans-serif;
}

.cadastro-form h2 {
  margin-bottom: 1rem;
  color: #c7a15a;
}

.cadastro-form label {
  display: block;
  margin-top: 1rem;
  font-weight: bold;
}

.cadastro-form input {
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.3rem;
  border: none;
  border-radius: 5px;
  background: #222;
  color: white;
  transition: opacity 0.3s ease;
}

.cadastro-form input:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.cadastro-form button {
  margin-top: 1.5rem;
  padding: 0.7rem 1.5rem;
  background: #c7a15a;
  border: none;
  border-radius: 5px;
  color: black;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease, opacity 0.3s ease;
  width: 100%;
}

.cadastro-form button:hover:not(:disabled) {
  background: #e0c170;
}

.cadastro-form button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.mensagem {
  margin-top: 1rem;
  font-weight: bold;
  padding: 0.5rem;
  border-radius: 5px;
  text-align: center;
}

.mensagem.sucesso {
  color: #4caf50;
  background: rgba(76, 175, 80, 0.1);
  border: 1px solid #4caf50;
}

.mensagem.erro {
  color: #f44336;
  background: rgba(244, 67, 54, 0.1);
  border: 1px solid #f44336;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
}

.modal-content {
  position: relative;
}

.fechar {
  position: absolute;
  top: 10px;
  right: 15px;
  background: transparent;
  border: none;
  font-size: 24px;
  color: white;
  cursor: pointer;
  transition: color 0.3s ease;
}

.fechar:hover {
  color: #c7a15a;
}
</style>