<template>
  <div class="bottom-header">
    <div class="container d-flex justify-content-between align-items-center">
      <div class="site-identity">
        <h1 class="site-title">
          <a href="">
            <img
              class="white-logo"
              src="@/assets/images/logo_white.svg"
              alt="logo"
            />
            <img
              class="black-logo"
              src="@/assets/images/logo_blue.svg"
              alt="logo"
            />
          </a>
        </h1>
      </div>
      <div class="main-navigation d-none d-lg-block">
        <nav id="navigation" class="navigation">
          <ul>
            <li class="menu-item-has-children no-item">
              <router-link to="/">Главная</router-link>
            </li>
            <li class="menu-item-has-children">
              <a href="#">Туры</a>
              <ul>
                <li>
                  <a href="#">Пункты назначения</a>
                </li>
                <li>
                  <a href="#">Турпакеты</a>
                </li>
                <li>
                  <a href="#">Комплексное предложение</a>
                </li>
                <li>
                  <a href="#">Детали пакета</a>
                </li>
                <li>
                  <a href="#">Туристическая карта</a>
                </li>
                <li>
                  <a href="#">Бронирование</a>
                </li>
                <li>
                  <a href="#">Подтверждение</a>
                </li>
              </ul>
            </li>
            <li class="menu-item-has-children">
              <a href="#">Разделы</a>
              <ul>
                <li>
                  <a href="#">О нас</a>
                </li>
                <li>
                  <a href="#">Сервис</a>
                </li>
                <li>
                  <a href="#">Вакансии</a>
                </li>
                <li>
                  <a href="#">Детали Вакансии</a>
                </li>
                <li>
                  <a href="#">Гайды по турам</a>
                </li>
                <li>
                  <a href="#">Галерея</a>
                </li>

                <li>
                  <a href="#">Служба поддержки</a>
                </li>
                <li>
                  <a href="contact.html">Контакты</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
      <div class="header-btn">
        <div class="language-select" id="lang-sel">
          <option v-for="(lang, index) in getAllLang" :value="lang" :key="index">
            {{ lang }}
          </option>
        </div>
      </div>
    </div>
  </div>
  <div class="top-header">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 d-none d-lg-block">
          <div class="header-contact-info">
            <ul>
              <li>
                <a href="tel:+998712539900"
                  ><i class="fas fa-phone-alt"></i> +998 (71) 253-99-00</a
                >
              </li>
              <li>
                <div class="mobile-menu-container"></div>
                <a href="mailto:info@watsondj.uz"
                  ><i class="fas fa-envelope"></i>
                  <span
                    class="__cf_email__"
                    >info@oceanview.uz</span
                  ></a
                >
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/place/63+Shota+Rustaveli+Street,+Tashkent,+Uzbekistan/@41.2853808,69.2527336,17.88z/data=!4m5!3m4!1s0x38ae8aed0aa2176f:0x4235674141659ea6!8m2!3d41.2851776!4d69.2535719"
                  ><i class="fas fa-map-marker-alt"></i> г. Ташкент, ул. Шота
                  Руставели, 63</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-4 d-flex start-center justify-content-between">
          <div class="mobile-menu-container"></div>
          <div class="header-social social-links">
            <ul>
              <li>
                <a href="#"
                  ><i class="fab fa-facebook-f" aria-hidden="true"></i
                ></a>
              </li>
              <li>
                <a href="#"
                  ><i class="fab fa-twitter" aria-hidden="true"></i
                ></a>
              </li>
              <li>
                <a href="#"
                  ><i class="fab fa-instagram" aria-hidden="true"></i
                ></a>
              </li>
              <li>
                <a href="#"
                  ><i class="fab fa-linkedin" aria-hidden="true"></i
                ></a>
              </li>
            </ul>
          </div>
          <div class="header-search-icon">
            <button class="search-icon">
              <i class="fas fa-search"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex';
export default defineComponent({
  computed:{
    ...mapGetters(['getAllLang'])
  }
})
</script>
