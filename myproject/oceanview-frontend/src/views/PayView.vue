<template lang="pug">
main#content.site-main
  .no-content-section.not-found-404(:style="{'background-image': `url(${require('@/assets/images/404-bg.jpg')})`,}")
      form.amount(action="")
        .amount-input
            label.amount__label(for="amount") Введите сумму
            input#amount.amount__input(type="number")
            label.amount__label.amount__label-back(for="amount") сум
        .amount-btns
            a.amount__btn(href="https://oceanview.uz/click/")
              img(src="@/assets/images/click.png")


  .overlay
</template>

<script lang="ts">
export default {
  data(){
    return{

    }
  }
}
</script>

<style lang="scss" scoped></style>
