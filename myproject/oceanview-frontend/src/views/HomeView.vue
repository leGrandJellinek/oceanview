<template>
           <main id="content" class="site-main">
            <!-- Home slider html start -->
            <section class="home-slider-section">
               <div class="home-slider">
                  <div class="home-banner-items">
                     <div class="banner-inner-wrap " :style="{ 'background-image': 'url(' + require('@/assets/images/slider-banner-1.jpg') + ')' }"></div>
                        <div class="banner-content-wrap">
                           <div class="container">
                              <div class="banner-content text-center">
                                 <h2 class="banner-title">Недельные туры <br> по всему миру</h2>
                                 <p>Мы используем все доступные сегодня технологии, чтобы сделать выбор, оплату и бронирование Вашего путешествия максимально удобными и приятными.</p>
                              </div>
                           </div>
                        </div>
                     <div class="overlay"></div>
                  </div>
                  <div class="home-banner-items">
                     <div class="banner-inner-wrap up-img" :style="{ 'background-image': 'url(' + require('@/assets/images/slider-banner-2.jpg') + ')' }"></div>
                        <div class="banner-content-wrap">
                           <div class="container">
                              <div class="banner-content text-center">
                                 <h2 class="banner-title">O`zbekiston bo`ylab</h2>
                                 <p>Коллективные туры по Узбекистану и соседним странам</p>
                              </div>
                           </div>
                        </div>
                     <div class="overlay"></div>
                  </div>
                     <div class="home-banner-items">
                        <div class="banner-inner-wrap" :style="{ 'background-image': 'url(' + require('@/assets/images/slider-banner-3.jpg') + ')' }"></div>
                           <div class="banner-content-wrap">
                              <div class="container">
                                 <div class="banner-content text-center">
                                    <h2 class="banner-title">Cоотношение <br>цен и качества</h2>
                                    <p>Подбираем сезонные скидки у авиакомпаний и отелях мира</p>
                                 </div>
                              </div>
                           </div>
                        <div class="overlay"></div>
                     </div>
                     <div class="home-banner-items">
                        <div class="banner-inner-wrap" :style="{ 'background-image': 'url(' + require('@/assets/images/slider-banner-4.jpg') + ')' }"></div>
                           <div class="banner-content-wrap">
                              <div class="container">
                                 <div class="banner-content text-center">
                                    <h2 class="banner-title">Круглосуточная служба поддержки клиентов</h2>
                                    <p>Сотрудники компании всегда на связи в Telegram <br>Если у вас вопрос возник в поездке, ваш персональных менеджер будет круглосуточно на связи и найдёт решение в кратчайший срок</p>
                                 </div>
                              </div>
                           </div>
                        <div class="overlay"></div>
                     </div>
               </div>
            </section>
            <!-- slider html start -->
            <section class="destination-section">
               <div class="container">
                  <div class="section-heading">
                     <div class="row align-items-end">
                        <div class="col-lg-7">
                           <h5 class="dash-style">Популярные туры</h5>
                           <h2 class="upper">ТОП сезонные туры</h2>
                        </div>
                     </div>
                  </div>
                  <div class="destination-inner destination-three-column">
                     <div class="row">
                        <div class="col-lg-7">
                           <div class="row">
                              <div class="col-sm-6">
                                 <div class="desti-item overlay-desti-item">
                                    <figure class="desti-image">
                                       <img src="@/assets/images/img1.jpg" alt="">
                                    </figure>
                                    <div class="meta-cat bg-meta-cat">
                                       <a href="#">THAILAND</a>
                                    </div>
                                    <div class="desti-content">
                                       <h3>
                                          <a href="#">Disney Land</a>
                                       </h3>
                                       <div class="rating-start" title="Rated 5 out of 4">
                                          <span style="width: 53%"></span>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="col-sm-6">
                                 <div class="desti-item overlay-desti-item">
                                    <figure class="desti-image">
                                       <img src="@/assets/images/img2.jpg" alt="">
                                    </figure>
                                    <div class="meta-cat bg-meta-cat">
                                       <a href="#">NORWAY</a>
                                    </div>
                                    <div class="desti-content">
                                       <h3>
                                          <a href="#">Besseggen Ridge</a>
                                       </h3>
                                       <div class="rating-start" title="Rated 5 out of 5">
                                          <span style="width: 100%"></span>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-lg-5">
                           <div class="row">
                              <div class="col-md-6 col-lg-12 col-xl-12">
                                 <div class="desti-item overlay-desti-item">
                                    <figure class="desti-image">
                                       <img src="@/assets/images/img3.jpg" alt="">
                                    </figure>
                                    <div class="meta-cat bg-meta-cat">
                                       <a href="#">NEW ZEALAND</a>
                                    </div>
                                    <div class="desti-content">
                                       <h3>
                                          <a href="#">Oxolotan City</a>
                                       </h3>
                                       <div class="rating-start" title="Rated 5 out of 5">
                                          <span style="width: 100%"></span>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="col-md-6 col-lg-12 col-xl-12">
                                 <div class="desti-item overlay-desti-item">
                                    <figure class="desti-image">
                                       <img src="@/assets/images/img4.jpg" alt="">
                                    </figure>
                                    <div class="meta-cat bg-meta-cat">
                                       <a href="#">SINGAPORE</a>
                                    </div>
                                    <div class="desti-content">
                                       <h3>
                                          <a href="#">Marina Bay Sand City</a>
                                       </h3>
                                       <div class="rating-start" title="Rated 5 out of 4">
                                          <span style="width: 60%"></span>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="btn-wrap d-flex btn-content justify-content-center align-items-center text-center">
                        <a href="#" class="button-primary">Другие направления</a>
                        <a href="#" class="button-primary">Дать запрос <br> на просчет маршрута</a>
                     </div>
                  </div>
               </div>
            </section>
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
                                    <img src="@/assets/images/img5.jpg" alt="">
                                 </a>
                              </figure>
                              <div class="package-price">
                                 <h6>
                                    <span>$900 </span> / per person
                                 </h6>
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
                                       <a href="#" class="button-text width-6">Book Now<i class="fas fa-arrow-right"></i></a>
                                       <a href="#" class="button-text width-6">Wish List<i class="far fa-heart"></i></a>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                           <div class="package-wrap">
                              <figure class="feature-image">
                                 <a href="#">
                                    <img src="@/assets/images/img6.jpg" alt="">
                                 </a>
                              </figure>
                              <div class="package-price">
                                 <h6>
                                    <span>$600 </span> / per person
                                 </h6>
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
                                       <a href="#" class="button-text width-6">Book Now<i class="fas fa-arrow-right"></i></a>
                                       <a href="#" class="button-text width-6">Wish List<i class="far fa-heart"></i></a>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                           <div class="package-wrap">
                              <figure class="feature-image">
                                 <a href="#">
                                    <img src="@/assets/images/img7.jpg" alt="">
                                 </a>
                              </figure>
                              <div class="package-price">
                                 <h6>
                                    <span>$850 </span> / per person
                                 </h6>
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
                                       <a href="#" class="button-text width-6">Book Now<i class="fas fa-arrow-right"></i></a>
                                       <a href="#" class="button-text width-6">Wish List<i class="far fa-heart"></i></a>
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
                        <div class="callback-img" :style="{ 'background-image': 'url(' + require('@/assets/images/img8.jpg') + ')' }">
                           <div class="video-button">
                            <!-- id="play-video" -->
                              <a id="video-container" data-video-id="heS-eGCbyVk" >
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
                           <div class="callback-counter-wrap   ">
                              <div class="counter-item">
                                 <div class="counter-icon">
                                 </div>
                                 <div class="counter-content">
                                    <span class="counter-no">
                                       <span class="counter">500</span>+
                                    </span>
                                    <span class="counter-text">
                                       Постоянных клиентов
                                    </span>
                                 </div>
                              </div>
                              <div class="counter-item">
                                 <div class="counter-icon">
                                 </div>
                                 <div class="counter-content">
                                    <span class="counter-no">
                                       <span class="counter">100</span>+
                                    </span>
                                    <span class="counter-text">
                                       Партнеров <br> тур-операторов по миру
                                    </span>
                                 </div>
                              </div>
                              <div class="counter-item">
                                 <div class="counter-icon">
                                 </div>
                                 <div class="counter-content">
                                    <span class="counter-no">
                                       <span class="counter">300</span>+
                                    </span>
                                    <span class="counter-text">
                                       Партнеров отелей <br> по миру
                                    </span>
                                 </div>
                              </div>
                              <div class="counter-item">
                                 <div class="counter-icon">
                                 </div>
                                 <div class="counter-content">
                                    <span class="counter-no">
                                       <span class="counter">25</span>+
                                    </span>
                                    <span class="counter-text">
                                       Запросов ежедневно
                                    </span>
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
                        <div class="contact-img" :style="{ 'background-image': 'url(' + require('@/assets/images/img24.jpg') + ')' }">
                        </div>
                     </div>
                     <div class="contact-section-right">
                        <div class="support-area">
                           <div class="support-icon">
                              <img src="@/assets/images/icon5.png" alt="">
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
                                          <img src="@/assets/images/icon12.png" alt="">
                                       </div>
                                       <ul>
                                          <li>
                                             <a href="#"><span class="__cf_email__" data-cfemail="6b181e1b1b04191f2b0c060a020745080406">sales@whitelotus.uz</span></a>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                                 <div class="col-sm-4">
                                    <div class="contact-details">
                                       <div class="contact-icon">
                                          <img src="@/assets/images/icon13.png" alt="">
                                       </div>
                                       <ul>
                                          <li>
                                             <a href="#">Моб./ Telegram/ Whatsapp: <br><br>+99871-253 9900</a>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                                 <div class="col-sm-4">
                                    <div class="contact-details">
                                       <div class="contact-icon">
                                          <img src="@/assets/images/icon14.png" alt="">
                                       </div>
                                       <ul>
                                          <li>
                                             г. Ташкент
                                          </li>
                                          <li>
                                             ул. Шота Руставели, 63
                                          </li>
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
import { defineComponent } from 'vue'

export default defineComponent({
})
</script>


<style>

</style>