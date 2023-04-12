<template lang="pug">
main#content.site-main
  .no-content-section.not-found-404(:style="{'background-image': `url(${require('@/assets/images/404-bg.jpg')})`,}")
      h1.amount-title {{ activeLang.pay_title }}
      form.amount(action="")
        .amount-inputs-content
          .amount-inputs-left
              input#amount.amount__input(type="text" placeholder="ФИО")
              input#amount.amount__input(type="number" placeholder="Номер Брони")
              input#amount.amount__input(type="number" placeholder="Сумма платежа, сўм")
              input#amount.amount__input(type="email" placeholder="E-mail")
              input#amount.amount__input(type="number" placeholder="Ваш номер телефона")
          .amount-inputs-right
              textarea.amount__input(placeholder="Комментарий")
        .amount-btns
            h3.amount-paywith {{ activeLang.pay_with }}
            a.amount__btn(href="https://oceanview.uz/click/")
              img(src="@/assets/images/click.png")


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
