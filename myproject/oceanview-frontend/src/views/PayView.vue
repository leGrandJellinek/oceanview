<template lang="pug">
main#content.site-main
  .no-content-section(:style="{'background-image': `url(${require('@/assets/images/404-bg.jpg')})`,}")
      h1.amount-title {{ activeLang.pay_title }}
      form.amount(action="/click/" method="post")
        .amount-inputs-content
          .amount-inputs-left
              input#amount.amount__input(type="text" placeholder="ФИО" name="name")
              input#amount.amount__input(type="number" placeholder="Номер Брони" name="order-number")
              input#amount.amount__input(type="number" placeholder="Сумма платежа, сўм" name="amount")
              input#amount.amount__input(type="email" placeholder="E-mail" name="email")
              input#amount.amount__input(type="number" placeholder="Ваш номер телефона" name="phone")
          .amount-inputs-right
              textarea.amount__input(placeholder="Примечание")
        h3.amount-paywith {{ activeLang.pay_with }}
        .amount-btns
            button.amount__btn(href="https://oceanview.uz/click/" type="submit")
              img(src="@/assets/images/click.png")
            button.amount__btn(href="https://oceanview.uz/click/" type="submit")
              img(src="@/assets/images/payme-logo.svg")


  .overlay
</template>

<script lang="ts">
import { mapGetters } from 'vuex';

export default {
computed:{
  ...mapGetters(['activeLang'])
}
}
</script>

<style lang="scss" scoped></style>
