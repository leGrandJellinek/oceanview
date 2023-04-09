<template>
<main id="content" class="site-main">
<div class="no-content-section not-found-404" :style="{'background-image': `url(${require('@/assets/images/404-bg.jpg')})`,}">
    <div class="container">
        <div class="no-content-wrap">
            <span>404</span>
            <h1>{{ activeLang.not_found}}</h1>
            </div>
        </div>
    </div>
    <div class="overlay"></div>
</main>
</template>

<script lang="ts">
import { mapGetters } from 'vuex';
    export default {
        computed:{
            ...mapGetters(['activeLang'])
        }
    }
</script>

<style lang="scss" scoped>

</style>