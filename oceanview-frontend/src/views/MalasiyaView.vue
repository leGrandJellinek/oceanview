<template lang="pug">
CountryDetail(
                :text="activeLang.pages"
                :direct='activeLang.pages.malasiya'
                :bg='bgImg.malasiya'
                :placesImgs='placesImgs.malasiya'
                :activeLang="activeLang"
            )
            </template>

    <script lang="ts">
    import CountryDetail from '@/components/Main/CountryDetail.vue'
    import { mapGetters } from 'vuex'
    export default {
      components: {
        CountryDetail,
      },
      computed: {
        ...mapGetters(['activeLang', 'placesImgs', 'bgImg']),
      },
    }
    </script>

    <style lang="scss" scoped></style>
