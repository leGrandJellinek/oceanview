<template>
  <div id="navigator" class="navigator">
    <div
      class="mobile-nav"
      :class="{ active: activeNav }"
      @click="activeNav = !activeNav"
    >
      <ul class="mobile-nav-lists">
        <li class="menu-item-has-children no-item">
          <router-link class="mobile-nav-link" to="/">{{
            activeLang.nav.main[0]
          }}</router-link>
        </li>
        <li class="menu-item-has-children">
          <a class="mobile-nav-link" href="#">{{ activeLang.nav.main[2] }}</a>
          <ul class="mobile-nav-ul">
            <li v-for="li in activeLang.nav.toursdropdwn" :key="li">
              <router-link :to="{ path: `${li.link}`, hash: `${li.hash}` }">{{ li.text }}</router-link>
            </li>
          </ul>
          <ul class="mobile-nav-ul">
                  <li v-for="li in activeLang.nav.sectionsdropdwn" :key="li">
                    <a href="#">{{ li.text }}</a>
                  </li>
                </ul>
        </li>
        <li
          class="menu-item-has-children lang-child"
          @click=";(activeNav = !activeNav), (dropdownActive = !dropdownActive)"
        >
          <a href="#">
            {{ getCurrentLang }}
            <i
              class="fa-solid fa-caret-down"
            ></i
          ></a>
          <ul class="lang-li" :class="{ active: dropdownActive }">
            <li>
              <a class="activeLang">{{ getCurrentLang }}</a>
            </li>
            <li v-for="(lang, index) in getAllLang" :key="index">
              <a @click="switchActiveLang(lang)" class="lang">{{ lang }}</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="bottom-header">
      <div class=" d-flex main-nav  align-items-center">
        <div class="site-identity">
          <h1 class="site-title">
            <router-link to="/">
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
            </router-link>
          </h1>
        </div>
        <div class="main-navigation d-lg-block">
          <nav id="navigation" class="navigation">
            <ul class="navbar-links">
              <li class="menu-item-has-children no-item">
                <router-link to="/">{{ activeLang.nav.main[0] }}</router-link>
              </li>
                  <li v-for="li in activeLang.nav.sectionsdropdwn" :key="li">
                    <a  :href="li.link">{{ li.text }}</a>
                  </li>
                  <li class="activeLang-li">
                    <a class="activeLang">{{ getCurrentLang }}</a>
                  </li>
                  <li v-for="(lang, index) in getAllLang" :key="index">
                    <a @click="switchActiveLang(lang)"  class="lang">{{
                      lang
                    }}</a>
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
                  <a href="mailto:info@watsondj.uz"
                    ><i class="fas fa-envelope"></i>
                    <span class="">info@oceanview.uz</span></a
                  >
                </li>
                <li>
                  <a
                    href="https://maps.google.com/maps?q=41.302601,69.268190&ll=41.302601,69.268190&z=16"
                    target="__blank"
                    ><i class="fas fa-map-marker-alt"></i
                    >{{ activeLang.nav.adress }}</a
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
              <button
                @click="activeNav = !activeNav"
                class="search-icon burger-icon"
              >
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
import { defineComponent } from 'vue'
import { mapGetters, mapMutations } from 'vuex'
export default defineComponent({
  computed: {
    ...mapGetters(['getAllLang', 'getCurrentLang', 'activeLang']),
  },
  methods: {
    ...mapMutations(['switchActiveLang']),
  },
  data() {
    return {
      activeNav: false,
      dropdownActive: false,
    }
  },
})
</script>
