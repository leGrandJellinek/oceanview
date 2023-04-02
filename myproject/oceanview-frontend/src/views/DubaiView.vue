<template lang="pug">
CountryDetail(
    :text="activeLang.pages"
    :direct='activeLang.pages.dubai'
    :bg='bgImg.dubai'
    :placesImgs='placesImgs.dubai'
)
</template>

<script lang="ts">

import CountryDetail from '@/components/Main/CountryDetail.vue';
import { mapGetters } from 'vuex';
    export default {
        components:{
            CountryDetail
        },
        computed:{
            ...mapGetters(['activeLang', 'placesImgs', 'bgImg'])
        }
    }
</script>

<style lang="scss" scoped>

</style>
