<template lang="pug">
CountryDetail(
        :text="activeLang.pages"
        :direct='activeLang.pages.stambul'
        :bg='bgImg.stambul'
        :placesImgs='placesImgs.stambul'
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
