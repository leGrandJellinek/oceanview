<template lang="pug">
CountryDetail(
        :direct="activeLang.pages.malasiya"
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
                ...mapGetters(['activeLang'])
            }
        }
    </script>

    <style lang="scss" scoped>

    </style>