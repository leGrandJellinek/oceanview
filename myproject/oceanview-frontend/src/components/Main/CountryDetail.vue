<template lang="pug">
main#content.site-main
  .no-content-section.not-found-page(:style="{\
  'background-image': `url(${require('@/assets/images/'+ img)})`,\
  }")
    .container.text-container
      .no-content-wrap
        span.space-top &nbsp
        h1 {{ title }}
        h4 {{ text }}
    .overlay
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
    },
    props:{
        img: {
            type:String,
            require: true
        }, 
        title: {
            type: String,
            require: true
        },
        text: {
            type: String,
            require: true
        }
    }
})
</script>


<style lang="sass" scoped>

</style>