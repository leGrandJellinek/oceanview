<template lang="pug">
main#content.site-main
  .no-content-section(:style="{'background-image': `url(${require('@/assets/images/404-bg.jpg')})`,}")
      h1.amount-title {{ activeLang.pay_title }}
      form.amount(action="/click/" @submit="checkForm"  method="post")
        .amount-inputs-content
          .amount-inputs-left
              input#name.amount__input(type="text" placeholder="ФИО" v-model="name" name="name")
              input#book-num.amount__input(type="number" v-model="bookNum" placeholder="Номер Брони" name="order-number")
              input#amount.amount__input(type="number" v-model="amount" placeholder="Сумма платежа, сўм" name="amount")
              input#email.amount__input(type="email" v-model="email"  placeholder="E-mail" name="email")
              input#phone.amount__input(type="text" v-model="phoneNum"  placeholder="Ваш номер телефона" name="phone")
          .amount-inputs-right
              textarea.amount__input(placeholder="Примечание" v-model="comment")
        p.amount-errors(v-if='errors.length')
          h3.amount-errors-title Пожалуйста исправьте ошибки:
          ul.amount-errors-lists
            li.amount-errors-list(v-for='error in errors') {{ error }}
        h3.amount-paywith {{ activeLang.pay_with }}
        .amount-payment
          button.amount__btn(type="submit")
              img(src="@/assets/images/click.png")
          button.amount__btn(type="submit")
              img(src="@/assets/images/payme-logo.svg")
</template>

<script>
import { mapGetters } from 'vuex'
import VueTelInput from 'vue-tel-input'
export default {
  computed: {
    ...mapGetters(['activeLang']),
  },
  data(){
    return{
      errors:[],
      name: null,
      email: null,
      bookNum: null,
      amount: null,
      phoneNum: null,
      comment: null,

    }
  },
  methods: {
    checkForm: function (e) {
      this.errors = [];
      if (!this.name) {
        this.errors.push('Укажите имя.');
      }
      if (!this.email) {
        this.errors.push('Укажите электронную почту.');
      } else if (!this.validEmail(this.email)) {
        this.errors.push('Укажите корректный адрес электронной почты.');
      }
      if(this.amount <= 1000){
        this.errors.push('Укажите сумму платежа минимум: 1000 сум.');
      }
      if(!this.phoneNum){
        this.errors.push('Укажите ваш номер в формате  +998974749099.');
      } else if (!this.validPhone(this.phoneNum)){
        this.errors.push('Укажите корректный телефоный номер пример: +998974749099.');

      }
      if (!this.errors.length) {
        return true;
      }

      e.preventDefault();
    },
    validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    validPhone: function (phone) {
      var re = /\+998\d{2}\d{3}\d{2}\d{2}/;
      return re.test(phone);
    }
  }
}
</script>

<style lang="scss" scoped></style>
