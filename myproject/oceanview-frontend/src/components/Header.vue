<template>
    <header id="masthead" class="site-header header-primary">
        <div class="bottom-header">
            <div class="container d-flex justify-content-between align-items-center">
                <div class="site-identity">
                    <h1 class="site-title">
                        <a href="">
                           <img class="white-logo" src="@/assets/images/WL_main_logo_white.svg" alt="logo">
                           <img class="black-logo" src="@/assets/images/WL_main_logo_blue.svg" alt="logo">
                        </a>
                    </h1>
                </div>
                <div class="main-navigation d-none d-lg-block">
                    <Navbar/>
                </div>
                  <div class="header-btn">
                     <img class="white-logo" src="@/assets/images/WL_slogan_white.svg" alt="">
                     <img class="black-logo" src="@/assets/images/WL_slogan.svg" alt="">
                  </div>
               </div>
            </div>
            <div class="top-header">
               <div class="container">
                  <div class="row">
                     <div class="col-lg-8 d-none  d-lg-block">
                        <div class="header-contact-info">
                           <ul>
                              <li>
                                 <a href="tel:+998712539900"><i class="fas fa-phone-alt"></i> +998 (71) 253-99-00</a>
                              </li>
                              <li>
                                 <div class="mobile-menu-container"></div>
                                 <a href="mailto:info@watsondj.uz"><i class="fas fa-envelope"></i> <span class="__cf_email__" data-cfemail="52313d3f22333c2b12363d3f333b3c7c313d3f">sales@whitelotus.uz</span></a>
                              </li>
                              <li>
                                 <a href="https://www.google.com/maps/place/63+Shota+Rustaveli+Street,+Tashkent,+Uzbekistan/@41.2853808,69.2527336,17.88z/data=!4m5!3m4!1s0x38ae8aed0aa2176f:0x4235674141659ea6!8m2!3d41.2851776!4d69.2535719"><i class="fas fa-map-marker-alt"></i> г. Ташкент, ул. Шота Руставели, 63</a>
                              </li>
                           </ul>
                        </div>
                     </div>
                     <div class="col-lg-4 d-flex start-center justify-content-between">
                        <div class="mobile-menu-container"></div>
                        <div class="header-social social-links">
                           <ul>
                              <li><a href="#"><i class="fab fa-facebook-f" aria-hidden="true"></i></a></li>
                              <li><a href="#"><i class="fab fa-twitter" aria-hidden="true"></i></a></li>
                              <li><a href="#"><i class="fab fa-instagram" aria-hidden="true"></i></a></li>
                              <li><a href="#"><i class="fab fa-linkedin" aria-hidden="true"></i></a></li>
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
   </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from "@/components/Header/Navbar.vue";

export default defineComponent({
    components: {
        Navbar,
    }
})
</script>
