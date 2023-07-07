<template>
  <div>
    <section class="home-slider-section">
      <div class="home-slider">
        <swiper :loop="true" :autoplay="autoplay">
          <swiper-slide
            v-for="slide in activeLang.slider"
            :key="slide"
            class="home-banner-items"
          >
            <div
              class="banner-inner-wrap"
              :style="{
                'background-image': `url(${require('@/assets/images/' + slide.img)})`,
              }"
            ></div>
            <div class="banner-content-wrap">
              <div class="container">
                <div class="banner-content text-center">
                  <h2 class="banner-title">{{ slide.title}}</h2>
                  <p>
                    {{ slide.descr}}
                  </p>
                </div>
              </div>
            </div>
            <div class="overlay"></div>
          </swiper-slide>
        </swiper>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import SwiperCore, {
  EffectCube,
  Autoplay,
} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { mapGetters } from 'vuex'
import 'swiper/css'
SwiperCore.use([EffectCube,  Autoplay])
export default {
  computed: {
    ...mapGetters(['activeLang']),
  },
  data() {
    return {
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
    }
  },

  components: {
    Swiper,
    SwiperSlide,
  },
}
</script>
