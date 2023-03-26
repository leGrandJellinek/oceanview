import { createStore } from 'vuex'
import { ILang } from "@/types/types";

export default createStore({
  state: {
    currentLang: "" as String,
    active_lang: {} as Object,
    lang: {
      ru: {
        nav: {
          main: ['Главная', 'Туры', 'Разделы'],
          toursdropdwn: [
            {
              text: 'Пункты назначения',
              link: '#',
            },
            {
              text: 'Турпакеты',
              link: '#',
            },
            {
              text: 'Комплексное предложение',
              link: '#',
            },
            {
              text: 'Детали пакета',
              link: '#',
            },
            {
              text: 'Туристическая карта',
              link: '#',
            },
            {
              text: 'Бронирование',
              link: '#',
            },
            {
              text: 'Подтверждение',
              link: '#',
            },
          ],
          adress:'г. Ташкент, ул. Шота Руставели, 63',
          sectionsdropdwn: [
            {
              text:'О нас',
              link: '#'
            },
            {
              text:'Сервисы',
              link: '#'
            }
          ],
        },
        text: "text"
      },
      uz: {
        nav: {
          main: ['Asosiy', 'Barcha Turlar', "bo'limlar"],
          toursdropdwn: [
            {
              text: 'Manzillar',
              link: '#',
            },
            {
              text: 'Tur paketlari',
              link: '#',
            },
            {
              text: 'Keng qamrovli taklif',
              link: '#',
            },
            {
              text: 'Paket tafsilotlari',
              link: '#',
            },
            {
              text: 'turistik xaritasi',
              link: '#',
            },
            {
              text: 'Bron qilish',
              link: '#',
            },
            {
              text: 'Tasdiqlash',
              link: '#',
            },
          ],
          adress: "Toshkent sh, Shota Rustaveli ko‘chasi, 63-uy",
          sectionsdropdwn: [
            {
              text:'Biz haqimizda',
              link: '#'
            },
            {
              text:'Xizmatlar',
              link: '#'
            }
          ],
        },
      },
    } as ILang,
  },
  getters: {
    activeLang(state){
      return state.active_lang
    },
    getAllLang(state){
      const array:String[] = []
      for (const key in state.lang) {
        if (key !== state.currentLang) {
          array.push(key)
        }
      }
      return array
    },
    getCurrentLang(state){
      return state.currentLang
    }
  },
  mutations: {
    setActiveLang(state, payload:string):void{
      state.active_lang = state.lang[payload]
      state.currentLang = payload
    },
    switchActiveLang(state,payload:string):void{
      localStorage.setItem("lang", payload)
      document.documentElement.lang = payload
      state.active_lang = state.lang[payload]
      state.currentLang = payload

    }
  },
  actions: {},
  modules: {},
})
