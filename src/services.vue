<template>
  <section class="services">
    <div class="container">
      <h2 class="services-title">Nossos Serviços</h2>
      
      <div class="services-grid">
        <!-- Cortes de Cabelo -->
        <div class="service-card">
          <div class="service-image">
            <img src="./components/images/img7.jpeg" alt="Cortes de cabelo" />
            <div class="service-overlay">
              <div class="service-content">
                <h3>Cortes de Cabelo</h3>
                <p class="service-price">R$ 30,00</p>
                <p class="service-description">Cortes modernos e clássicos</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Tratamento e hidratação -->
        <div class="service-card">
          <div class="service-image">
            <img src="./components/images/img5.jpeg" alt="Tratamento" />
            <div class="service-overlay">
              <div class="service-content">
                <h3>Tratamento e hidratação</h3>
                <p class="service-price">R$ 45,00</p>
                <p class="service-description">Tratamento completo do cabelo e barba</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Barbear -->
        <div class="service-card">
          <div class="service-image">
            <img src="./components/images/img9.jpeg" alt="Barbear" />
            <div class="service-overlay">
              <div class="service-content">
                <h3>Barbear</h3>
                <p class="service-price">R$ 30,00</p>
                <p class="service-description">Barbear tradicional</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Lâmina de Barbear -->
        <div class="service-card">
          <div class="service-image">
            <img src="./components/images/img8.jpeg" alt="Lâmina de barbear" />
            <div class="service-overlay">
              <div class="service-content">
                <h3>Lâmina de Barbear</h3>
                <p class="service-price">R$ 45,00</p>
                <p class="service-description">Barbear com lâmina</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Serviço Infantil -->
        <div class="service-card">
          <div class="service-image">
            <img src="./components/images/img4.jpg" alt="Corte infantil" />
            <div class="service-overlay">
              <div class="service-content">
                <h3>Corte Infantil</h3>
                <p class="service-price">R$ 35,00</p>
                <p class="service-description">Cortes especiais para crianças</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Serviço Completo -->
        <div class="service-card">
          <div class="service-image">
            <img src="./components/images/img6.jpeg" alt="Serviço completo" />
            <div class="service-overlay">
              <div class="service-content">
                <h3>Serviço Completo</h3>
                <p class="service-price">R$ 50,00</p>
                <p class="service-description">Corte + Barba + Tratamentos</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
// Você pode adicionar lógica aqui se necessário
// Por exemplo, dados dos serviços vindos de uma API
</script>

<style scoped>
/* Importar as fontes Google */
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Parisienne&display=swap');

.services {
  background-color: #000;
  padding: 80px 0;
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.services-title {
  text-align: center;
  margin-bottom: 60px;
  color: #fff;
  font-size: 3em;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
  /* APLICAR A FONTE AQUI */
  font-family: 'Dancing Script', cursive;
}

.services-title::after {
  content: '';
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background: linear-gradient(45deg, #d4af37, #f4d03f);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  padding: 20px 0;
}

.service-card {
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: all 0.4s ease;
  cursor: pointer;
}

.service-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
}

.service-image {
  position: relative;
  width: 100%;
  height: 280px;
  overflow: hidden;
}

.service-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
  filter: brightness(0.7);
}

.service-card:hover .service-image img {
  transform: scale(1.1);
  filter: brightness(0.9);
}

.service-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    45deg,
    rgba(212, 175, 55, 0.9) 0%,
    rgba(26, 26, 26, 0.8) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.4s ease;
}

.service-card:hover .service-overlay {
  opacity: 1;
}

.service-content {
  text-align: center;
  color: #fff;
  padding: 20px;
  transform: translateY(30px);
  transition: transform 0.4s ease 0.1s;
}

.service-card:hover .service-content {
  transform: translateY(0);
}

.service-content h3 {
  font-size: 1.5em;
  font-weight: 600;
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
  /* APLICAR FONTE NOS TÍTULOS DOS SERVIÇOS */
  font-family: 'Parisienne', cursive;
  text-transform: none; /* Remover uppercase para esta fonte */
}

.service-price {
  font-size: 1.3em;
  color: #d4af37;
  font-weight: 700;
  margin-bottom: 8px;
  /* APLICAR FONTE NO PREÇO */
  font-family: 'Dancing Script', cursive;
}

.service-description {
  font-size: 0.95em;
  opacity: 0.9;
  line-height: 1.4;
  /* APLICAR FONTE NA DESCRIÇÃO */
  font-family: 'Dancing Script', cursive;
  font-weight: 400;
}

/* Efeito de brilho no hover */
.service-card::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    45deg,
    transparent,
    rgba(255, 255, 255, 0.1),
    transparent
  );
  transform: rotate(45deg);
  transition: all 0.6s ease;
  opacity: 0;
  z-index: 1;
}

.service-card:hover::before {
  animation: shine 0.6s ease-in-out;
}

@keyframes shine {
  0% {
    transform: translateX(-100%) translateY(-100%) rotate(45deg);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateX(100%) translateY(100%) rotate(45deg);
    opacity: 0;
  }
}

/* Responsividade */
@media (max-width: 768px) {
  .services {
    padding: 60px 0;
  }
  
  .services-title {
    font-size: 2.2em;
    margin-bottom: 40px;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .service-image {
    height: 220px;
  }
  
  .service-content h3 {
    font-size: 1.3em;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 15px;
  }
  
  .services-title {
    font-size: 1.8em;
  }
  
  .service-image {
    height: 200px;
  }
}

/* Estados de loading para imagens */
.service-image img {
  background: linear-gradient(90deg, #333 0%, #444 50%, #333 100%);
  background-size: 200px 100%;
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
}
</style>