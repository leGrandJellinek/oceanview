<template>
         <main id="content" class="site-main">
            <div class="no-content-section not-found-404" :style="{'background-image': `url(${require('@/assets/images/404-bg.jpg')})`,}">
               <div class="container">
                  <div class="no-content-wrap">
                     <span>404</span>
                     <h1>Oops! That page can't be found</h1>
                     <h4>It looks like nothing was found at this location. Maybe try one of the links below or a search?</h4>
                     <div class="search-form-wrap">
                        <form class="search-form">
                           <input type="text" name="search" placeholder="Search...">
                           <button class="search-btn"><i class="fas fa-search"></i></button>
                        </form>
                     </div>
                  </div>
               </div>
               <div class="overlay"></div>
            </div>
         </main>
</template>

<script lang="ts">
    export default {

    }
</script>

<style lang="scss" scoped>

</style>