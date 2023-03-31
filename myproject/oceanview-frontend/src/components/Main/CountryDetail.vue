<template lang="pug">
section.direction
  
Footer
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
    },
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