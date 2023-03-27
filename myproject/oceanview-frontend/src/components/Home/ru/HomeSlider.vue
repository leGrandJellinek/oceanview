<template>
  <div>
    <section class="home-slider-section">
      <div class="home-slider">
        <swiper :loop="true" :autoplay="autoplay" :navigation="navigation">
          <swiper-slide
            v-for="slide in activeLang.slider"
            :key="slide"
            class="home-banner-items"
          >
            <div
              class="banner-inner-wrap"
              :style="{
              background:  `url(${require(slide.img_link)})`
              }"
            ></div>
            <div class="banner-content-wrap">
              <div class="container">
                <div class="banner-content text-center">
                  <h2 class="banner-title">
                    {{}}
                  </h2>
                  <p>
                    Мы используем все доступные сегодня технологии, чтобы
                    сделать выбор, оплату и бронирование Вашего путешествия
                    максимально удобными и приятными.
                  </p>
                </div>
              </div>
            </div>
            <div class="overlay"></div>
          </swiper-slide>
          <!-- <swiper-slide class="home-banner-items">
            <div
              class="banner-inner-wrap up-img"
              :style="{
                'background-image':
                  'url(' + require('@/assets/images/slider-banner-2.jpg') + ')',
              }"
            ></div>
            <div class="banner-content-wrap">
              <div class="container">
                <div class="banner-content text-center">
                  <h2 class="banner-title">O`zbekiston bo`ylab</h2>
                  <p>Коллективные туры по Узбекистану и соседним странам</p>
                </div>
              </div>
            </div>
            <div class="overlay"></div>
          </swiper-slide>
          <swiper-slide class="home-banner-items">
            <div
              class="banner-inner-wrap"
              :style="{
                'background-image':
                  'url(' + require('@/assets/images/slider-banner-3.jpg') + ')',
              }"
            ></div>
            <div class="banner-content-wrap">
              <div class="container">
                <div class="banner-content text-center">
                  <h2 class="banner-title">Cоотношение <br />цен и качества</h2>
                  <p>Подбираем сезонные скидки у авиакомпаний и отелях мира</p>
                </div>
              </div>
            </div>
            <div class="overlay"></div>
          </swiper-slide>
          <swiper-slide class="home-banner-items">
            <div
              class="banner-inner-wrap"
              :style="{
                'background-image':
                  'url(' + require('@/assets/images/slider-banner-4.jpg') + ')',
              }"
            ></div>
            <div class="banner-content-wrap">
              <div class="container">
                <div class="banner-content text-center">
                  <h2 class="banner-title">
                    Круглосуточная служба поддержки клиентов
                  </h2>
                  <p>
                    Сотрудники компании всегда на связи в Telegram <br />Если у
                    вас вопрос возник в поездке, ваш персональных менеджер будет
                    круглосуточно на связи и найдёт решение в кратчайший срок
                  </p>
                </div>
              </div>
            </div>
            <div class="overlay"></div>
          </swiper-slide> -->
        </swiper>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import SwiperCore, {
  EffectCube,
  Pagination,
  Autoplay,
  Navigation,
} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { mapGetters } from 'vuex'
import 'swiper/css'
SwiperCore.use([EffectCube, Pagination, Autoplay, Navigation])
export default {
  computed: {
    ...mapGetters(['activeLang']),
  },
  data() {
    return {
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
}
</script>
