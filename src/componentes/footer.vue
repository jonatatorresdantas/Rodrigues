<template>
  <footer class="footer">
    <!-- Seção principal do footer -->
    <div class="footer-main">
      <div class="container">
        <div class="footer-content">
          
          <!-- Logo e descrição -->
          <div class="footer-section">
            <div class="footer-logo">
              <h2>Rodrigues</h2>
              <p class="footer-subtitle">Cabeleireiros</p>
            </div>
            <p class="footer-description">
              Tradição e excelência em cuidados masculinos. 
              Desde 2020 oferecendo os melhores serviços 
              de barbearia com profissionalismo e qualidade.
            </p>
            <div class="social-links">
              <a href="#" class="social-link">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="social-link">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#" class="social-link">
                <i class="fab fa-whatsapp"></i>
              </a>
              <a href="#" class="social-link">
                <i class="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          <!-- Serviços -->
          <div class="footer-section">
            <h3>Nossos Serviços</h3>
            <ul class="footer-links">
              <li><a href="/servicos">Cortes de Cabelo</a></li>
              <li><a href="/servicos">Barbear Tradicional</a></li>
              <li><a href="/servicos">Tratamentos</a></li>
              <li><a href="/servicos">Corte Infantil</a></li>
              <li><a href="/servicos">Serviço Completo</a></li>
            </ul>
          </div>

          <!-- Links Úteis -->
          <div class="footer-section">
            <h3>Links Úteis</h3>
            <ul class="footer-links">
              <li><a href="/home">Início</a></li>
              <li><a href="/sobre">Sobre Nós</a></li>
              <li><a href="/servicos">Serviços</a></li>
              <li><a href="/agendar">Agendar</a></li>
              <li><a href="/contato">Contato</a></li>
            </ul>
          </div>

          <!-- Contato -->
          <div class="footer-section">
            <h3>Contato</h3>
            <div class="contact-info">
              <div class="contact-item">
                <i class="fas fa-map-marker-alt"></i>
                <div>
                  <p>Rua das Flores, 123</p>
                  <p>Centro - Brasília/DF</p>
                </div>
              </div>
              <div class="contact-item">
                <i class="fas fa-phone"></i>
                <div>
                  <p>(61) 99999-8766</p>
                  <p>(61) 3333-4444</p>
                </div>
              </div>
              <div class="contact-item">
                <i class="fas fa-envelope"></i>
                <div>
                  <p>contato@rodriguescabeleireiros.com</p>
                </div>
              </div>
              <div class="contact-item">
                <i class="fas fa-clock"></i>
                <div>
                  <p>Seg à Sex: 8h às 19h</p>
                  <p>Sáb: 8h às 17h</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <!-- Seção de newsletter -->
    <div class="newsletter-section">
      <div class="container">
        <div class="newsletter-content">
          <div class="newsletter-text">
            <h3>Fique por dentro das novidades</h3>
            <p>Receba promoções exclusivas e dicas de cuidados</p>
          </div>
          <form class="newsletter-form" @submit.prevent="subscribeNewsletter">
            <input 
              type="email" 
              v-model="email"
              placeholder="Seu melhor e-mail"
              required
            >
            <button type="submit" class="newsletter-btn">
              <i class="fas fa-paper-plane"></i>
              Inscrever-se
            </button>
          </form>
        </div>
      </div>
    </div>

    <!-- Rodapé final -->
    <div class="footer-bottom">
      <div class="container">
        <div class="footer-bottom-content">
          <p>&copy; {{ currentYear }} Rodrigues Cabeleireiros. Todos os direitos reservados.</p>
          <div class="footer-bottom-links">
            <a href="/privacidade">Política de Privacidade</a>
            <span>|</span>
            <a href="/termos">Termos de Uso</a>
            <span>|</span>
            <a href="/cookies">Cookies</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, computed } from 'vue'

// Dados reativos
const email = ref('')

// Ano atual
const currentYear = computed(() => new Date().getFullYear())

// Função para newsletter
const subscribeNewsletter = () => {
  if (email.value) {
    // Aqui você pode integrar com sua API
    alert(`Obrigado! E-mail ${email.value} cadastrado com sucesso!`)
    email.value = ''
  }
}
</script>

<style scoped>
/* Importar fontes */
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Parisienne&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css');

.footer {
  background-color: #000;
  color: #fff;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Seção principal do footer */
.footer-main {
  padding: 60px 0 40px;
  border-bottom: 1px solid #444;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: 40px;
}

.footer-section h3 {
  font-family: 'Dancing Script', cursive;
  font-size: 1.8em;
  color: #d4af37;
  margin-bottom: 20px;
  font-weight: 600;
}

/* Logo e descrição */
.footer-logo h2 {
  font-family: 'Parisienne', cursive;
  font-size: 2.5em;
  color: #d4af37;
  margin-bottom: 5px;
}

.footer-subtitle {
  font-family: 'Dancing Script', cursive;
  font-size: 1.2em;
  color: #ccc;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.footer-description {
  line-height: 1.6;
  color: #bbb;
  margin-bottom: 30px;
  font-size: 0.95em;
}

/* Redes sociais */
.social-links {
  display: flex;
  gap: 15px;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background: linear-gradient(45deg, #d4af37, #f4d03f);
  border-radius: 50%;
  color: #1a1a1a;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 1.2em;
}

.social-link:hover {
  transform: translateY(-3px) scale(1.1);
  box-shadow: 0 8px 25px rgba(212, 175, 55, 0.4);
}

/* Links do footer */
.footer-links {
  list-style: none;
  padding: 0;
}

.footer-links li {
  margin-bottom: 12px;
}

.footer-links a {
  color: #bbb;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 0.95em;
}

.footer-links a:hover {
  color: #d4af37;
  padding-left: 5px;
}

/* Informações de contato */
.contact-info {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.contact-item i {
  color: #d4af37;
  font-size: 1.1em;
  margin-top: 2px;
  min-width: 20px;
}

.contact-item p {
  margin: 0;
  color: #bbb;
  font-size: 0.9em;
  line-height: 1.4;
}

/* Seção Newsletter */
.newsletter-section {
  background: rgba(212, 175, 55, 0.1);
  padding: 40px 0;
  border-bottom: 1px solid #444;
}

.newsletter-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
}

.newsletter-text h3 {
  font-family: 'Dancing Script', cursive;
  font-size: 2em;
  color: #d4af37;
  margin-bottom: 8px;
}

.newsletter-text p {
  color: #bbb;
  font-size: 0.95em;
}

.newsletter-form {
  display: flex;
  gap: 10px;
  min-width: 350px;
}

.newsletter-form input {
  flex: 1;
  padding: 15px 20px;
  border: 2px solid #444;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  font-size: 0.95em;
  transition: all 0.3s ease;
}

.newsletter-form input:focus {
  outline: none;
  border-color: #d4af37;
  background: rgba(255, 255, 255, 0.1);
}

.newsletter-form input::placeholder {
  color: #888;
}

.newsletter-btn {
  padding: 15px 25px;
  background: linear-gradient(45deg, #d4af37, #f4d03f);
  border: none;
  border-radius: 8px;
  color: #1a1a1a;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;
}

.newsletter-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(212, 175, 55, 0.4);
}

/* Rodapé final */
.footer-bottom {
  padding: 25px 0;
  background: rgba(0, 0, 0, 0.3);
}

.footer-bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-bottom-content p {
  color: #888;
  font-size: 0.9em;
  margin: 0;
}

.footer-bottom-links {
  display: flex;
  align-items: center;
  gap: 15px;
}

.footer-bottom-links a {
  color: #888;
  text-decoration: none;
  font-size: 0.9em;
  transition: color 0.3s ease;
}

.footer-bottom-links a:hover {
  color: #d4af37;
}

.footer-bottom-links span {
  color: #555;
}

/* Responsividade */
@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }

  .newsletter-content {
    flex-direction: column;
    text-align: center;
    gap: 30px;
  }

  .newsletter-form {
    min-width: 100%;
    max-width: 400px;
  }

  .footer-bottom-content {
    flex-direction: column;
    gap: 15px;
    text-align: center;
  }

  .social-links {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .footer-main {
    padding: 40px 0 30px;
  }

  .newsletter-section {
    padding: 30px 0;
  }

  .newsletter-form {
    flex-direction: column;
  }

  .newsletter-btn {
    justify-content: center;
  }

  .footer-bottom-links {
    flex-wrap: wrap;
    justify-content: center;
  }
}

/* Animações */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.footer-section {
  animation: fadeInUp 0.6s ease forwards;
}

.footer-section:nth-child(2) { animation-delay: 0.1s; }
.footer-section:nth-child(3) { animation-delay: 0.2s; }
.footer-section:nth-child(4) { animation-delay: 0.3s; }
</style>