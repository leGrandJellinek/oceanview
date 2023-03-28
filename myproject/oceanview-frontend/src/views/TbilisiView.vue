<template>
         <main id="content" class="site-main">
            <div class="no-content-section not-found-page" :style="{
                'background-image': `url(${require('@/assets/images/'+ bg_img.tbilisi)})`,
              }">
               <div class="container text-container">
                  <div class="no-content-wrap">
                     <span class="space-top">&nbsp</span>
                     <h1>{{ activeLang.pages.tbilisi.title }}</h1>
                     <h4>{{ activeLang.pages.tbilisi.text }}</h4>
                  </div>
               </div>
               <div class="overlay"></div>
            </div>
         </main>
</template>

<script lang="ts">
import Navbar from '@/components/Header/Navbar.vue';
import { mapGetters } from 'vuex';
    export default {
        components:{
            Navbar
        },
        computed:{
            ...mapGetters(['activeLang', 'bg_img'])
        }
    }
</script>

<style lang="scss" scoped>

</style>