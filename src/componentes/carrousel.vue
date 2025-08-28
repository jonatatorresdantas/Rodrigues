<template>
  <Swiper
    :modules="[Navigation, Pagination]"
    :slides-per-view="1"
    :loop="true"
    navigation
    pagination
    class="mySwiper"
  >
    <SwiperSlide>
      <div class="slide">
        <img src="../components/images/img1.jpg" class="img" />
        <div class="overlay"></div>
        <div class="text-overlay">
          <h1 class="hover-title"><a href="/Agendar">Agendar</a></h1>
          <h2>Corte com excelência,<br> cuidado em cada detalhe.<br>
                Reflete profissionalismo<br> e atenção ao cliente.</h2>
        </div>
      </div>
    </SwiperSlide>

    <SwiperSlide>
      <div class="slide">
        <img src="../components/images/img2.jpg" class="img" />
        <div class="overlay"></div>
        <div class="text-overlay">
          <h1 class="hover-title"><a href="/servicos">Qualidade e <br>cuidado no serviço</a></h1>
            <h2>Atendimento exclusivo<br>produtos premium <br> porque você merece o melhor.</h2>
        </div>
      </div>
    </SwiperSlide>

    <SwiperSlide>
      <div class="slide">
        <img src="../components/images/img3.jpg" class="img" />
        <div class="overlay"></div>
        <div class="text-overlay">
          <h1 class="hover-title"><a href="/home">Conforto</a></h1>
          <h2>Ambiente acolhedor,<br> temos a melhor estrutura.</h2>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules'
</script>

<style>
/* Importar as fontes Google */
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Parisienne&display=swap');

.mySwiper {
  width: 100%;
  height: 600px;
}

.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  mask-image: linear-gradient(to left, transparent, rgb(0, 0, 0));
}
 
/* Cada slide */
.slide {
  position: relative;
  width: 100%;
  height: 100%;
}

/* Overlay degradê */
.overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: linear-gradient(to left, rgba(0, 0, 0, 0.4));
  z-index: 1;
}

/* Texto sobre o degradê */
.text-overlay {
  position: absolute;
  top: 50%;
  right: 150px;
  transform: translateY(-50%);
  color: rgb(188, 176, 176);
  font-size: 2rem;
  font-weight: bold;
  z-index: 2;
}

/* Aplicar a fonte Dancing Script nos títulos */
.hover-title a {
  color: #fff;
  text-decoration: none;
  transition: transform 0.3s ease, font-size 0.3s ease;
  display: inline-block;
  font-size: 3.2rem;
  font-family: 'Dancing Script', cursive; /* Aplicar fonte elegante */
  font-weight: 600;
}

.hover-title a:hover {
  color: #ffd700; 
  transform: scale(1.05);
}

/* Aplicar fonte Parisienne nos subtítulos para contraste */
.text-overlay h2 {
  font-family: 'Parisienne', cursive;
  font-weight: 400;
  font-size: 2rem;
  line-height: 1.6;
  margin-top: 15px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

/* Responsividade */
@media (max-width: 768px) {
  .text-overlay {
    right: 50px;
    font-size: 1.5rem;
  }
  
  .hover-title a {
    font-size: 1.8rem;
  }
  
  .text-overlay h2 {
    font-size: 1.2rem;
  }
}

@media (max-width: 480px) {
  .text-overlay {
    right: 20px;
    left: 20px;
    text-align: center;
  }
  
  .hover-title a {
    font-size: 1.6rem;
  }
  
  .text-overlay h2 {
    font-size: 1rem;
  }
}
</style>