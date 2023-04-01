<template lang="pug">
section.direction
  .container.direction-content
    h1.direction-title {{ direct.title }}
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    props:{
        direct: {
            type:Object,
            require: true
        },
    }
})
</script>


<style lang="sass" scoped>

</style>