<template lang="pug">
section.order(:class="{'hidden-scroll':doneWindow}")
        .container.order-content
          h1.order-title {{ activeLang.formOrder.title }}
          form.amount(action="" @submit.prevent="checkForm")
            .amount-inputs-content
              .amount-inputs-left
                  input#name.amount__input(type="text" :placeholder="activeLang.formOrder.namePlaceholder" v-model="name" name="name")
                  input#email.amount__input(type="email" v-model="email"  placeholder="E-mail" name="email")
                  VueDatePicker.amount__input(v-model="date" :placeholder="activeLang.formOrder.dateOfFlyPlaceholder")
                  input#phone.amount__input(type="text" v-model="phoneNum"  :placeholder="activeLang.formOrder.phonePlaceholder" name="phone")
                  input#amount.amount__input(type="number" v-model="amount" :placeholder="activeLang.formOrder.peopleCountPlaceholder" name="amount")
              .amount-inputs-right
                  textarea.amount__input(:placeholder="activeLang.formOrder.commentPlaceholder" v-model="comment")
            p.order-errors(v-if='errors.length')
              h3.order-errors-title Пожалуйста исправьте ошибки:
              ul.order-errors-lists
                li.amount-errors-list(v-for='error in errors') {{ error }}
              .amount-payment
            button.order__btn(@click="checkForm") Бронировать
.done-win(v-if="doneWindow")
  .done-win-content
    a.close(@click="doneWindow = false")
      i.fa-solid.fa-xmark
    i.fa-regular.fa-circle-check.cheked
    span Спасибо! Мы свяжемся с Вами в ближайшее время!
</template>

<script>
import { mapGetters } from 'vuex'
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
export default {
  computed: {
    ...mapGetters(['activeLang']),
  },
  components: {
    VueDatePicker,
  },
  data() {
    return {
      errors: [],
      name: null,
      email: null,
      bookNum: null,
      amount: null,
      date:null,
      phoneNum: null,
      comment: null,
      doneWindow: false
    }
  },
  methods: {
    clearForm(){
      this.name = null
      this.email = null
      this.bookNum = null
      this.amount = null
      this.phoneNum = null
      this.comment = null
      this.date = null
      this.doneWindow = true
    },
    generateBookNum() {
      this.bookNum = Math.floor(Math.random() * (90 - 50 + 1)) + 50
    },
    checkForm: function (e) {
      this.errors = []
      if (!this.name) {
        this.errors.push('Укажите имя.')
      }
      if (!this.name) {
        this.errors.push('Укажите имя.')
      }
      if (!this.email) {
        this.errors.push('Укажите электронную почту.')
      } else if (!this.validEmail(this.email)) {
        this.errors.push('Укажите корректный адрес электронной почты.')
      }
      if (!this.phoneNum) {
        this.errors.push('Укажите ваш номер в формате  +998974749099.')
      } else if (!this.validPhone(this.phoneNum)) {
        this.errors.push(
          'Укажите корректный телефоный номер пример: +998974749099.'
        )
      }
      if (!this.errors.length) {
        this.clearForm()
        return true
      }
      e.preventDefault()
      return
    },
    validEmail: function (email) {
      var re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    },
    validPhone: function (phone) {
      var re = /\+998\d{2}\d{3}\d{2}\d{2}/
      return re.test(phone)
    },
  },
}
</script>
