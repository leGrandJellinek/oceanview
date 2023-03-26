<template>
  <main id="content" class="site-main">
    <!-- Home slider html start -->
    <HomeSlider />
    <!-- slider html start -->
    <HomeTopDes />
    <!-- Home packages section html start -->
    <section class="package-section">
      <div class="container">
        <div class="section-heading text-center">
          <div class="row">
            <div class="col-lg-8 offset-lg-2">
              <h5 class="dash-style">EXPLORE GREAT PLACES</h5>
              <h2>POPULAR PACKAGES</h2>
            </div>
          </div>
        </div>
        <div class="package-inner">
          <div class="row justify-content-center">
            <div class="col-lg-4 col-md-6">
              <div class="package-wrap">
                <figure class="feature-image">
                  <a href="#">
                    <img src="@/assets/images/img5.jpg" alt="" />
                  </a>
                </figure>
                <div class="package-price">
                  <h6><span>$900 </span> / per person</h6>
                </div>
                <div class="package-content-wrap">
                  <div class="package-meta text-center">
                    <ul>
                      <li>
                        <i class="far fa-clock"></i>
                        7D/6N
                      </li>
                      <li>
                        <i class="fas fa-user-friends"></i>
                        People: 4
                      </li>
                      <li>
                        <i class="fas fa-map-marker-alt"></i>
                        Malaysia
                      </li>
                    </ul>
                  </div>
                  <div class="package-content">
                    <h3>
                      <a href="#">Sunset view of beautiful lakeside resident</a>
                    </h3>
                    <div class="review-area">
                      <span class="review-text">(25 reviews)</span>
                      <div class="rating-start" title="Rated 5 out of 5">
                        <span style="width: 60%"></span>
                      </div>
                    </div>
                    <div class="btn-wrap">
                      <a href="#" class="button-text width-6"
                        >Book Now<i class="fas fa-arrow-right"></i
                      ></a>
                      <a href="#" class="button-text width-6"
                        >Wish List<i class="far fa-heart"></i
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="package-wrap">
                <figure class="feature-image">
                  <a href="#">
                    <img src="@/assets/images/img6.jpg" alt="" />
                  </a>
                </figure>
                <div class="package-price">
                  <h6><span>$600 </span> / per person</h6>
                </div>
                <div class="package-content-wrap">
                  <div class="package-meta text-center">
                    <ul>
                      <li>
                        <i class="far fa-clock"></i>
                        5D/4N
                      </li>
                      <li>
                        <i class="fas fa-user-friends"></i>
                        People: 2
                      </li>
                      <li>
                        <i class="fas fa-map-marker-alt"></i>
                        Dubai
                      </li>
                    </ul>
                  </div>
                  <div class="package-content">
                    <h3>
                      <a href="#">Experience the natural beauty of island</a>
                    </h3>
                    <div class="review-area">
                      <span class="review-text">(17 reviews)</span>
                      <div class="rating-start" title="Rated 5 out of 5">
                        <span style="width: 100%"></span>
                      </div>
                    </div>
                    <div class="btn-wrap">
                      <a href="#" class="button-text width-6"
                        >Book Now<i class="fas fa-arrow-right"></i
                      ></a>
                      <a href="#" class="button-text width-6"
                        >Wish List<i class="far fa-heart"></i
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="package-wrap">
                <figure class="feature-image">
                  <a href="#">
                    <img src="@/assets/images/img7.jpg" alt="" />
                  </a>
                </figure>
                <div class="package-price">
                  <h6><span>$850 </span> / per person</h6>
                </div>
                <div class="package-content-wrap">
                  <div class="package-meta text-center">
                    <ul>
                      <li>
                        <i class="far fa-clock"></i>
                        6D/5N
                      </li>
                      <li>
                        <i class="fas fa-user-friends"></i>
                        People: 6
                      </li>
                      <li>
                        <i class="fas fa-map-marker-alt"></i>
                        Vietnam
                      </li>
                    </ul>
                  </div>
                  <div class="package-content">
                    <h3>
                      <a href="#">Vacation to the water city of Portugal</a>
                    </h3>
                    <div class="review-area">
                      <span class="review-text">(22 reviews)</span>
                      <div class="rating-start" title="Rated 5 out of 5">
                        <span style="width: 80%"></span>
                      </div>
                    </div>
                    <div class="btn-wrap">
                      <a href="#" class="button-text width-6"
                        >Book Now<i class="fas fa-arrow-right"></i
                      ></a>
                      <a href="#" class="button-text width-6"
                        >Wish List<i class="far fa-heart"></i
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="btn-wrap text-center">
            <a href="#" class="button-primary">VIEW ALL PACKAGES</a>
            <a href="#" class="button-primary upper">Request a tour</a>
          </div>
        </div>
      </div>
    </section>
    <!-- packages html end -->
    <!-- Home callback section html start -->
    <section class="callback-section">
      <div class="container">
        <div class="row no-gutters align-items-center">
          <div class="col-lg-5">
            <div
              class="callback-img"
              :style="{
                'background-image':
                  'url(' + require('@/assets/images/img8.jpg') + ')',
              }"
            >
              <div class="video-button">
                <!-- id="play-video" -->
                <a id="video-container" data-video-id="heS-eGCbyVk">
                  <i id="video-play" class="fas fa-play"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-7">
            <div class="callback-inner">
              <div class="section-heading section-heading-white">
                <h5 class="dash-style">CALLBACK FOR MORE</h5>
                <h2 class="upper">Sayohat qilishni qoldirmang!</h2>
              </div>
              <div class="callback-counter-wrap">
                <div class="counter-item">
                  <div class="counter-icon"></div>
                  <div class="counter-content">
                    <span class="counter-no">
                      <span class="counter">500</span>+
                    </span>
                    <span class="counter-text"> Постоянных клиентов </span>
                  </div>
                </div>
                <div class="counter-item">
                  <div class="counter-icon"></div>
                  <div class="counter-content">
                    <span class="counter-no">
                      <span class="counter">100</span>+
                    </span>
                    <span class="counter-text">
                      Партнеров <br />
                      тур-операторов по миру
                    </span>
                  </div>
                </div>
                <div class="counter-item">
                  <div class="counter-icon"></div>
                  <div class="counter-content">
                    <span class="counter-no">
                      <span class="counter">300</span>+
                    </span>
                    <span class="counter-text">
                      Партнеров отелей <br />
                      по миру
                    </span>
                  </div>
                </div>
                <div class="counter-item">
                  <div class="counter-icon"></div>
                  <div class="counter-content">
                    <span class="counter-no">
                      <span class="counter">25</span>+
                    </span>
                    <span class="counter-text"> Запросов ежедневно </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- callback html end -->
    <!-- Home contact details section html start -->
    <section class="contact-section">
      <div class="container">
        <div class="row contact-content">
          <div class="col-lg-4">
            <div
              class="contact-img"
              :style="{
                'background-image':
                  'url(' + require('@/assets/images/img24.jpg') + ')',
              }"
            ></div>
          </div>
          <div class="contact-section-right">
            <div class="support-area">
              <div class="support-icon">
                <img src="@/assets/images/icon5.png" alt="" />
              </div>
              <div class="support-content">
                <h4>Biz bilan bo'glaning/ Свяжитесь с нами</h4>
                <h3>
                  <a href="tel:+998712539900">Мы на связи: +99871-253 9900</a>
                </h3>
              </div>
            </div>
            <div class="col-lg-8 contact-icons">
              <div class="contact-details-wrap">
                <div class="row">
                  <div class="col-sm-4">
                    <div class="contact-details">
                      <div class="contact-icon">
                        <img src="@/assets/images/icon12.png" alt="" />
                      </div>
                      <ul>
                        <li>
                          <a href="#"
                            ><span class="__cf_email__"
                              >info@oceanview.uz</span
                            ></a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="contact-details">
                      <div class="contact-icon">
                        <img src="@/assets/images/icon13.png" alt="" />
                      </div>
                      <ul>
                        <li>
                          <a href="#"
                            >Моб./ Telegram/ Whatsapp: <br /><br />+99871-253
                            9900</a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="contact-details">
                      <div class="contact-icon">
                        <img src="@/assets/images/icon14.png" alt="" />
                      </div>
                      <ul>
                        <li>г. Ташкент</li>
                        <li>ул. Шота Руставели, 63</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--  contact details html end -->
  </main>
</template>

<script lang="ts">
import HomeSlider from '@/components/Home/ru/HomeSlider.vue';
import { defineComponent } from 'vue'
import HomeTopDes from '@/components/Home/ru/HomeTopDes.vue';

export default defineComponent({
  components: {
    HomeSlider,
    HomeTopDes,
  },
})
</script>

<style></style>
