<template lang="pug">
div(:class="{'hide-scroll': doneWindow}")
  .forms-nav-bg

  FormOrder
  main#content.site-main
    .no-content-section(:style="{'background-image': `url(${require('@/assets/images/404-bg.jpg')})`,}")
        h1.amount-title {{ activeLang.pay_title }}
        form.amount(:action="`https://my.click.uz/services/pay?service_id=27448&merchant_id=19850&amount=${amount}&transaction_param=${bookNum}`" @submit="checkForm"  method="post")
          .amount-inputs-content
            .amount-inputs-left
                input#name.amount__input(type="text" :placeholder="activeLang.formOrder.namePlaceholder" v-model="name" name="name")
                input#email.amount__input(type="email" v-model="email"  placeholder="E-mail" name="email")
                input#phone.amount__input(type="text" v-model="phoneNum"  :placeholder="activeLang.formOrder.phonePlaceholder" name="phone")
                input#amount.amount__input(type="number" v-model="amount" :placeholder="activeLang.formOrder.sumPlaceholder" name="amount")
            .amount-inputs-right
                textarea.amount__input(:placeholder="activeLang.formOrder.commentPlaceholder" v-model="comment")
          p.amount-errors(v-if='errors.length')
            h3.amount-errors-title Пожалуйста исправьте ошибки:
            ul.amount-errors-lists
              li.amount-errors-list(v-for='error in errors') {{ error }}
          .amount-paywith
            h3.amount-paywith {{ activeLang.pay_with }}
            .amount-payment
              button.amount__btn(type="submit")
                  img(src="@/assets/images/click.png")

</template>

<script>
import { mapGetters } from 'vuex'
import FormOrder from '@/components/Main/FormOrder.vue'

export default {
  components: {
    FormOrder,
  },
  created(){
    console.log(this.bookNum);
  },
  computed: {
    ...mapGetters(['activeLang']),
  },
  data() {
    return {
      errors: [],
      name: null,
      email: null,
      bookNum: Math.floor(Math.random() * (99 - 10) + 10 , 1),
      amount: null,
      phoneNum: null,
      comment: null,
      doneWindow: true,
    }
  },
  methods: {
    generateBookNum() {
      this.bookNum = Math.floor(Math.random() * (90 - 50 + 1)) + 50
    },
    checkForm: function (e) {
      this.errors = []
      if (!this.name) {
        this.errors.push('Укажите имя.')
      }
      if (!this.email) {
        this.errors.push('Укажите электронную почту.')
      } else if (!this.validEmail(this.email)) {
        this.errors.push('Укажите корректный адрес электронной почты.')
      }
      if (this.amount <= 1000) {
        this.errors.push('Укажите сумму платежа минимум: 1000 сум.')
      }
      if (!this.phoneNum) {
        this.errors.push('Укажите ваш номер в формате  +998974749099.')
      } else if (!this.validPhone(this.phoneNum)) {
        this.errors.push(
          'Укажите корректный телефоный номер пример: +998974749099.'
        )
      }
      if (!this.errors.length) {
        this.submitPaymentForm()
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
    submitPaymentForm() {
      const formData = new FormData()
      formData.append('name', this.name)
      formData.append('email', this.email)
      formData.append('bookNum', this.bookNum)
      formData.append('amount', this.amount)
      formData.append('phoneNum', this.phoneNum)
      formData.append('comment', this.comment)
      // Отправляем AJAX запрос на бэк
      axios
        .post('/ajax/payment.php', formData)
        .then((response) => {
          console.log(response.data)
          // Обработка ответа от сервера
        })
        .catch((error) => {
          console.error(error)
          // Обработка ошибки
        })
    },
  },
}
</script>

<style lang="scss" scoped></style>
