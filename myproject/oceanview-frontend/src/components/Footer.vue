<template>
           <footer id="colophon" class="site-footer footer-primary">
            <div class="bottom-footer">
               <div class="container">
        <div class="row">
          <div class="col-lg-8 d-lg-block">
            <div class="header-contact-info  ">
              <ul class="footer-info">
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
                    href="https://maps.google.com/maps?q=41.302601,69.268190&ll=41.302601,69.268190&z=16" target="__blank"
                    ><i class="fas fa-map-marker-alt"></i
                    >{{ activeLang.nav.adress }}</a
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-4 d-flex footer-info mobile-social justify-content-between">
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
          </div>
        </div>
      </div>
            </div>
            <div class="top-footer">
               <div class="container">
                  <div class="row justify-content-between align-items-center">
                     <div class="col-md-3 text-center">
                        <div class="footer-logo">
                           <a href="#"><img src="@/assets/images/logo_white.svg" alt=""></a>
                        </div>
                     </div>
                     <div class="col-md-5">
                        <div class="copy-right text-right">Copyright © 2023 Oceanview</div>
                     </div>
                  </div>
               </div>
            </div>

         </footer>
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

<style>

</style>