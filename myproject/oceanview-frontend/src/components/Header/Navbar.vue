<template>
  <div class="navigator">
    <div class="bottom-header">
      <div class="container d-flex main-nav align-items-center">
        <div class="site-identity">
          <h1 class="site-title">
            <router-link to="/">
              <img class="white-logo" src="@/assets/images/logo_white.svg" alt="logo" />
              <img class="black-logo" src="@/assets/images/logo_blue.svg" alt="logo" />
            </router-link>
          </h1>
        </div>

        <div class="main-navigation d-none d-lg-block">
          <nav id="navigation" class="navigation">
            <ul>
              <li class="menu-item-has-children no-item">
                <router-link to="/">{{ activeLang.nav.main[0] }}</router-link>
              </li>
              <li class="menu-item-has-children">
                <a href="#">{{ activeLang.nav.main[1] }}</a>
                <ul>
                  <li v-for="li in activeLang.nav.toursdropdwn" :key="li">
                    <a :href="li.link">{{ li.text }}</a>
                  </li>
                </ul>
              </li>
              <li class="menu-item-has-children">
                <a href="#">{{ activeLang.nav.main[2] }}</a>
                <ul>
                  <li v-for="li in activeLang.nav.sectionsdropdwn" :key="li">
                    <a href="#">{{ li.text }}</a>
                  </li>
                </ul>
              </li>
              <li class="menu-item-has-children lang-child">
                <a href="#"> {{ getCurrentLang }}</a>
                <ul class="lang-li">
                  <li>
                    <a class="activeLang">{{ getCurrentLang }}</a>
                  </li>
                  <li v-for="(lang, index) in getAllLang" :key="index">
                    <a @click="switchActiveLang(lang)" class="lang">{{ lang }}</a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
        <div class="header-btn"></div>
      </div>
    </div>
    <div class="top-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 d-none d-lg-block">
            <div class="header-contact-info">
              <ul>
                <li>
                  <a href="tel:+998974749099"
                    ><i class="fas fa-phone-alt"></i> +998 (97) 4749099</a
                  >
                </li>
                <li>
                  <div class="mobile-menu-container"></div>
                  <a href="mailto:info@watsondj.uz"
                    ><i class="fas fa-envelope"></i>
                    <span class="__cf_email__">info@oceanview.uz</span></a
                  >
                </li>
                <li>
                  <a
                    href="https://www.google.com/maps/place/63+Shota+Rustaveli+Street,+Tashkent,+Uzbekistan/@41.2853808,69.2527336,17.88z/data=!4m5!3m4!1s0x38ae8aed0aa2176f:0x4235674141659ea6!8m2!3d41.2851776!4d69.2535719"
                    ><i class="fas fa-map-marker-alt"></i>{{ activeLang.nav.adress }}</a
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-4 d-flex start-center justify-content-between">
            <div class="mobile-menu-container"><div class="slicknav_menu"><a href="#" aria-haspopup="true" role="button" tabindex="0" class="slicknav_btn slicknav_collapsed" style="outline: none;"><span class="slicknav_menutxt">Menu</span><span class="slicknav_icon"><span class="slicknav_icon-bar"></span><span class="slicknav_icon-bar"></span><span class="slicknav_icon-bar"></span></span></a><nav class="slicknav_nav slicknav_hidden" aria-hidden="true" role="menu" style="display: none;">
                <ul>
                  <li class="menu-item-has-children no-item">
                    <a href="" role="menuitem">Главная</a>
                  </li>

                  <li class="menu-item-has-children slicknav_parent slicknav_collapsed"><span class="slicknav_parent-link slicknav_row">
                      <a href="#">Туры</a>
                        <a href="#" role="menuitem" aria-haspopup="true" tabindex="-1" class="slicknav_item" style="outline: none;"><span class="slicknav_arrow"><i class="fas fa-plus"></i></span></a></span><ul role="menu" class="slicknav_hidden" aria-hidden="true" style="display: none;">
                      <li>
                        <a href="#" role="menuitem" tabindex="-1">Пункты назначения</a>
                      </li>
                      <li>
                        <a href="#" role="menuitem" tabindex="-1">Турпакеты</a>
                      </li>
                      <li>
                        <a href="#" role="menuitem" tabindex="-1">Комплексное предложение</a>
                      </li>
                      <li>
                        <a href="#" role="menuitem" tabindex="-1">Детали пакета</a>
                      </li>
                      <li>
                        <a href="#" role="menuitem" tabindex="-1">Туристическая карта</a>
                      </li>
                      <li>
                        <a href="#" role="menuitem" tabindex="-1">Бронирование</a>
                      </li>
                      <li>
                        <a href="#" role="menuitem" tabindex="-1">Подтверждение</a>
                      </li>
                    </ul>
                  </li>
                  <li class="menu-item-has-children slicknav_parent slicknav_collapsed"><span class="slicknav_parent-link slicknav_row">
                    <a href="#">Разделы</a>
                    <a href="#" role="menuitem" aria-haspopup="true" tabindex="-1" class="slicknav_item" style="outline: none;"><span class="slicknav_arrow"><i class="fas fa-plus"></i></span></a></span><ul role="menu" class="slicknav_hidden" aria-hidden="true" style="display: none;">
                      <li>
                        <a href="#" role="menuitem" tabindex="-1">О нас</a>
                      </li>
                      <li>
                        <a href="#" role="menuitem" tabindex="-1">Сервис</a>
                      </li>
                      <li>
                        <a href="#" role="menuitem" tabindex="-1">Вакансии</a>
                      </li>
                      <li>
                        <a href="#" role="menuitem" tabindex="-1">Детали Вакансии</a>
                      </li>
                      <li>
                        <a href="#" role="menuitem" tabindex="-1">Гайды по турам</a>
                      </li>
                      <li>
                        <a href="#" role="menuitem" tabindex="-1">Галерея</a>
                      </li>
                      <li>
                        <a href="#" role="menuitem" tabindex="-1">Служба поддержки</a>
                      </li>
                      <li>
                        <a href="#" role="menuitem" tabindex="-1">Контакты</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
              </div>
            </div>
            <div class="header-social social-links">
              <ul>
                <li>
                  <a href="#"><i class="fab fa-facebook-f" aria-hidden="true"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fab fa-twitter" aria-hidden="true"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fab fa-instagram" aria-hidden="true"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fab fa-linkedin" aria-hidden="true"></i></a>
                </li>
              </ul>
            </div>
            <div class="header-search-icon">
              <button class="search-icon">
                <i class="fas fa-search"></i>
              </button>
              <button class="search-icon">
                <i class="fas fa-bars"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters, mapMutations } from "vuex";
export default defineComponent({
  computed: {
    ...mapGetters(["getAllLang", "getCurrentLang", "activeLang"]),
  },
  methods: {
    ...mapMutations(["switchActiveLang"]),
  },
});
</script>
