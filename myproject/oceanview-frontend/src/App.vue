<template lang="pug">
.wrapper
  Loader
  Header
  router-view( style="height: 100%; width: 100%;")
  Footer
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Loader from "@/components/Loader.vue"

import { useStore } from 'vuex'
export default defineComponent({
  methods: {},
  components: {
    Header,
    Footer,
    Loader
  },
  setup() // props, { attrs }
  {
    const store = useStore()
    const localLang = localStorage.getItem('lang')
    if (localLang) {
      document.documentElement.lang = localLang
    }
    const currentlang = document.documentElement.lang
    store.commit('setActiveLang', currentlang)
    // const lang: string = attrs.lang;
    // console.log(lang); // выводит значение атрибута lang в консоль
    // return {};
  },
})
</script>

<style lang="scss"></style>
