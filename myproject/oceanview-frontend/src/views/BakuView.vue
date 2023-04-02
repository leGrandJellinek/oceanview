<template lang="pug">
CountryDetail(
                    :text="activeLang.pages"
                    :direct='activeLang.pages.baku'
                    :bg='bgImg.baku'
                    :placesImgs='placesImgs.baku'
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
