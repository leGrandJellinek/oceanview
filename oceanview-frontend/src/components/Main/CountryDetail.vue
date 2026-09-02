<template lang="pug">
main#content.site-main
  .no-content-section.direction-pages.not-found-page(:style="{'background-image': `url(${require('@/assets/images/'+ bg )})`,}")
    .container.text-container
      .no-content-wrap
        //- span.space-top &nbsp
        h1.site-main-title {{ text.title }} {{ direct.title }}
    .overlay
  .container.site-content
    h2.site-title {{ text.included  }}
    ul.included-lists
        li(v-for="list in direct.included_travel" :key="list")
            span {{ list }}
    h2.site-title {{ text.places  }}
    .places-content
        .places-card(v-for="card in direct.places" :key="card")
            .places-card__body(:style="{'background-image': `url(${require(`@/assets/images/${placesImgs[card.id]}`)})`}")
                h3.places-title {{ card.title }}
            .places-card__text
                p.places-descr {{ card.descr }}
    .btn-wrap.d-flex.btn-content.justify-content-center.align-items-center.text-center
        a.button-primary(href='#') {{ activeLang.btns[0] }}
        a.button-primary(href='#') {{ activeLang.btns[1] }}
        router-link.button-primary( to="/payment") {{ activeLang.btns[2] }}
</template>

<script lang="ts">

import { defineComponent } from 'vue'
export default defineComponent({
    props:{
        text: {
            type:Object,
            require: true
        },
        direct: {
            type:Object,
            require: true
        },
        bg: {
            type:String,
            require: true
        },
        placesImgs: {
            type:Array,
            require: true
        },
        activeLang:{
            type:Object,
            require: true
        }
    }
})
</script>


<style lang="sass" scoped>

</style>