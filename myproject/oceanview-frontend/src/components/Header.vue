<template>
    <header id="masthead" class="site-header header-primary">
        
      <Navbar/>
   </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from "@/components/Header/Navbar.vue";

export default defineComponent({
    components: {
        Navbar,
    }
})
</script>
