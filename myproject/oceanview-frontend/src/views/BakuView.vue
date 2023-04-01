<template lang="pug">
CountryDetail(
            :direct="activeLang.pages.baku"
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
                    ...mapGetters(['activeLang'])
                }
            }
        </script>

        <style lang="scss" scoped>

        </style>