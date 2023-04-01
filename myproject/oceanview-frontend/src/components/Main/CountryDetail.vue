<template lang="pug">
main#content.site-main
  .no-content-section.not-found-page()
    .container.text-container
      .no-content-wrap
        span.space-top &nbsp
    .overlay
</template>

<script lang="ts">
/*     :style="{\ 'background-image': `url(${require('@/assets/images/'+ img)})`,\}" */
import { defineComponent } from 'vue'
export default defineComponent({
    props:{
        direct: {
            type:Object,
            require: false
        },
    }
})
</script>


<style lang="sass" scoped>

</style>