<template lang="pug">
CountryDetail(
    :title="activeLang.pages.baku.title"
    :text="activeLang.pages.baku.text"
    :img="bg_img.baku"
)
</template>

<script lang="ts">
import Navbar from '@/components/Header/Navbar.vue';
import CountryDetail from '@/components/Main/CountryDetail.vue';
import { mapGetters } from 'vuex';
    export default {
        components:{
            Navbar,
            CountryDetail
        },
        computed:{
            ...mapGetters(['activeLang', 'bg_img'])
        }
    }
</script>

<style lang="scss" scoped>

</style>