<script setup>
import PrimeiroComponente from './componentes/title.vue'
import Navbar from './componentes/Navbar.vue';
import Carrousel from './componentes/carrousel.vue';
import FooterComponent from './componentes/footer.vue';
import Cadastro from './componentes/cadastro.vue';
import { ref } from 'vue'
import services from './services.vue';


const mostrarCadastro = ref(false)
</script>

<template>
    <PrimeiroComponente />
    <Navbar @abrir-cadastro="mostrarCadastro = true" />
    <carrousel />
    <services />
    <FooterComponent />

  <transition name="fade-zoom">
  <Cadastro
    v-if="mostrarCadastro"
    @fechar="mostrarCadastro = false"
    @sucesso="mostrarCadastro = false"
  />
</transition>
</template>

<!-- Apenas animações específicas do App.vue -->
<style>
.fade-zoom-enter-active,
.fade-zoom-leave-active {
  transition: all 0.4s ease;
}

.fade-zoom-enter-from,
.fade-zoom-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

.fade-zoom-enter-to,
.fade-zoom-leave-from {
  opacity: 1;
  transform: scale(1);
}
</style>