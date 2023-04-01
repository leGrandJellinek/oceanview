<template lang="pug">
h1 dubai
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
