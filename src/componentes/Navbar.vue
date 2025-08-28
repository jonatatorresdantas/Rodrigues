<template>
  <nav class="navbar">
    <ul :class="['nav-links', { active: isOpen }]">
      <li><a href="#">Home</a></li>
      <li><a href="#">Serviços</a></li>
      <li>
        <a
          href="https://wa.me/5561991302401"
          target="_blank"
          rel="noopener noreferrer"
        >
          Agendar
        </a>
      </li>
      <li><a href="#">Produtos</a></li>
      <li>
        <a href="#" @click.prevent="$emit('abrir-cadastro')">Cadastro</a>
      </li>

      <!-- Contato com submenu -->
      <li class="contato-item">
        <a href="#" @click.prevent="toggleContatoMenu">Contato</a>
        <ul v-if="isContatoMenuOpen" class="submenu">
          <li><a href="https://wa.me/5561991302401" target="_blank">WhatsApp</a></li>
          <li><a href="https://instagram.com/seuperfil" target="_blank">Instagram</a></li>
        </ul>
      </li>
    </ul>

    <!-- Hamburguer -->
    <div class="hamburger" @click="toggleMenu">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
const isContatoMenuOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const toggleContatoMenu = () => {
  isContatoMenuOpen.value = !isContatoMenuOpen.value
}
</script>

<style scoped>

.navbar {
  position: sticky;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #000; /* fundo preto */
  padding: 1rem 3rem;
  font-family: 'Oswald', sans-serif; /* estilo parecido */
   border-radius: 1px;            /* bordas suaves */
  border-top: 3px solid #a9a005; /* linha vermelha no topo */
}

/* Logo */
.logo {
  color: #fff;
  font-size: 1.8rem;
  font-weight: bold;
  letter-spacing: 2px;
}

/* Links desktop */
.nav-links {
  display: flex;
  list-style: none;
  gap: 30px;
}

.nav-links li a {
  text-decoration: none;
  color: #fff;
  font-size: 1rem;
  letter-spacing: 1px;
  transition: color 0.3s ease;
}

.nav-links li a:hover {
  color: #c7a15a; /* dourado estilo barbearia */
}

/* Hamburguer (só mobile) */
.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 5px;
}

.hamburger span {
  height: 3px;
  width: 25px;
  background: #fff;
  border-radius: 5px;
}

/* Responsivo */
@media (max-width: 768px) {
  .nav-links {
    position: absolute;
    top: 70px;
    right: 0;
    background: #000;
    flex-direction: column;
    width: 220px;
    height: 0;
    overflow: hidden;
    transition: height 0.3s ease;
    text-align: center;
  }

  .nav-links.active {
    height: 250px;
    padding: 20px 0;
  }

  .nav-links li {
    margin: 15px 0;
  }

  .hamburger {
    display: flex;
  }

  .submenu {
  display: none;
  list-style: none;
  padding-left: 20px;
}

.menu-item.active .submenu {
  display: block;
}

  
}
</style>
