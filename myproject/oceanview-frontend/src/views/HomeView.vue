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
              <h5 class="dash-style">{{ activeLang.sections_descr[1] }}</h5>
              <h2>{{ activeLang.sections_title[1] }}</h2>
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
                  <h6><span>$900 </span>{{ activeLang.cards_price }}</h6>
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
                        {{ activeLang.cards_person }} 4
                      </li>
                      <li>
                        <i class="fas fa-map-marker-alt"></i>
                        {{ activeLang.cards_direct[0]}}
                      </li>
                    </ul>
                  </div>
                  <div class="package-content">
                    <h3>
                      <a class="first-card" href="#">{{ activeLang.cards_title[0] }}</a>
                    </h3>
                    <div class="review-area">
                      <span class="review-text">(25 {{ activeLang.cards_review }})</span>
                      <div class="rating-start" title="Rated 5 out of 5">
                        <span style="width: 60%"></span>
                      </div>
                    </div>
                    <div class="btn-wrap">
                      <router-link to="/payment" class="button-text "
                        >{{ activeLang.cards_btns[0] }}<i class="fas fa-arrow-right"></i
                      ></router-link>
                      <a href="#" class="button-text width-6"
                        >{{ activeLang.cards_btns[1] }}<i class="far fa-heart"></i
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
                  <h6><span>$600 </span>{{ activeLang.cards_price }}</h6>
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
                        {{ activeLang.cards_person }} 2
                      </li>
                      <li>
                        <i class="fas fa-map-marker-alt"></i>
                        {{ activeLang.cards_direct[1]}}
                      </li>
                    </ul>
                  </div>
                  <div class="package-content">
                    <h3>
                      <a href="#">{{ activeLang.cards_title[1] }}</a>
                    </h3>
                    <div class="review-area">
                      <span class="review-text">(17 {{ activeLang.cards_review }})</span>
                      <div class="rating-start" title="Rated 5 out of 5">
                        <span style="width: 100%"></span>
                      </div>
                    </div>
                    <div class="btn-wrap">
                      <router-link to="/payment" class="button-text "
                        >{{ activeLang.cards_btns[0] }}<i class="fas fa-arrow-right"></i
                      ></router-link>
                      <a href="#" class="button-text width-6"
                        >{{ activeLang.cards_btns[1] }}<i class="far fa-heart"></i
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
                  <h6><span>$850 </span>{{ activeLang.cards_price }}</h6>
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
                        {{ activeLang.cards_person }} 6
                      </li>
                      <li>
                        <i class="fas fa-map-marker-alt"></i>
                        {{ activeLang.cards_direct[2]}}
                      </li>
                    </ul>
                  </div>
                  <div class="package-content">
                    <h3>
                      <a href="#">{{ activeLang.cards_title[2] }}</a>
                    </h3>
                    <div class="review-area">
                      <span class="review-text">(22 {{ activeLang.cards_review }})</span>
                      <div class="rating-start" title="Rated 5 out of 5">
                        <span style="width: 80%"></span>
                      </div>
                    </div>
                    <div class="btn-wrap">
                      <router-link to="/payment" class="button-text "
                        >{{ activeLang.cards_btns[0] }}<i class="fas fa-arrow-right"></i
                      ></router-link>
                      <a href="#" class="button-text width-6"
                        >{{ activeLang.cards_btns[1] }}<i class="far fa-heart"></i
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="btn-wrap text-center">
            <a href="#" class="button-primary">{{ activeLang.btns[3] }}</a>
            <router-link to="/payment" class="button-primary upper">{{ activeLang.btns[2] }}</router-link>
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
                'background-image': 'url(' + require('@/assets/images/img8.jpg') + ')',
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
                <h2 class="upper">{{ activeLang.sections_title[2] }}</h2>
              </div>
              <div class="callback-counter-wrap">
                <div class="counter-item">
                  <div class="counter-icon"></div>
                  <div class="counter-content">
                    <span class="counter-no"> <span class="counter">500</span>+ </span>
                    <span class="counter-text"> {{ activeLang.video_sec[0] }} </span>
                  </div>
                </div>
                <div class="counter-item">
                  <div class="counter-icon"></div>
                  <div class="counter-content">
                    <span class="counter-no"> <span class="counter">100</span>+ </span>
                    <span class="counter-text">
                      {{ activeLang.video_sec[1] }}
                    </span>
                  </div>
                </div>
                <div class="counter-item">
                  <div class="counter-icon"></div>
                  <div class="counter-content">
                    <span class="counter-no"> <span class="counter">300</span>+ </span>
                    <span class="counter-text">
                      {{ activeLang.video_sec[2] }}
                    </span>
                  </div>
                </div>
                <div class="counter-item">
                  <div class="counter-icon"></div>
                  <div class="counter-content">
                    <span class="counter-no"> <span class="counter">25</span>+ </span>
                    <span class="counter-text">{{ activeLang.video_sec[3] }}</span>
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
                'background-image': 'url(' + require('@/assets/images/img24.jpg') + ')',
              }"
            ></div>
          </div>
          <div class="contact-section-right col-lg-8">
            <div class="support-area">
              <div class="support-icon">
                <img src="@/assets/images/icon5.png" alt="" />
              </div>
              <div class="support-content">
                <h3>
                  <a href="tel:+998974749099">{{ activeLang.contact_us[1] }}</a>
                </h3>
              </div>
            </div>
            <div class="col-lg-12 contact-icons">
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
                            ><span class="__cf_email__">info@oceanview.uz</span></a
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
                            >Моб./ Telegram/ Whatsapp: <br /><br />+998974749099</a
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
                        <li> <a href="https://goo.gl/maps/zhUtmfVyeAyKEYTN6">{{ activeLang.nav.adress }}</a> </li>
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

<script>
import { mapGetters } from "vuex";
import HomeSlider from "@/components/Home/ru/HomeSlider.vue";
import HomeTopDes from "@/components/Home/ru/HomeTopDes.vue";
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Loader from "@/components/Loader.vue"


export default {
    computed: {
      ...mapGetters(['activeLang']),
    },
    components:{
      HomeSlider,
      HomeTopDes,
      Header,
      Footer,
      Loader
    },
    data() {
      return {
        errors: [],
        name: null,
        email: null,
        bookNum: null,
        amount: null,
        phoneNum: null,
        comment: null,
      }
    },
    methods: {
      generateBookNum(){
        this.bookNum = Math.floor(Math.random() * (90 - 50 + 1)) + 50
      },
      checkForm: function (e) {
        this.errors = []
        if (!this.name) {
          this.errors.push('Укажите имя.')
        }
        if (!this.email) {
          this.errors.push('Укажите электронную почту.')
        } else if (!this.validEmail(this.email)) {
          this.errors.push('Укажите корректный адрес электронной почты.')
        }
        if (this.amount <= 1000) {
          this.errors.push('Укажите сумму платежа минимум: 1000 сум.')
        }
        if (!this.phoneNum) {
          this.errors.push('Укажите ваш номер в формате  +998974749099.')
        } else if (!this.validPhone(this.phoneNum)) {
          this.errors.push(
            'Укажите корректный телефоный номер пример: +998974749099.'
          )
        }
        if (!this.errors.length) {
          this.submitPaymentForm()
          return true
        }
        e.preventDefault()
          return
      },
      validEmail: function (email) {
        var re =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return re.test(email)
      },
      validPhone: function (phone) {
        var re = /\+998\d{2}\d{3}\d{2}\d{2}/
        return re.test(phone)
      },
      submitPaymentForm() {
        const formData = new FormData()
        formData.append('name', this.name)
        formData.append('email', this.email)
        formData.append('bookNum', this.bookNum)
        formData.append('amount', this.amount)
        formData.append('phoneNum', this.phoneNum)
        formData.append('comment', this.comment)
        // Отправляем AJAX запрос на бэк
        axios
          .post('/ajax/payment.php', formData)
          .then((response) => {
            console.log(response.data)
            // Обработка ответа от сервера
          })
          .catch((error) => {
            console.error(error)
            // Обработка ошибки
          })
        },
    },
  }
</script>

<style></style>
