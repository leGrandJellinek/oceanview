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
            },
            {
              text:'Вакансии',
              link: '#'
            },
            {
              text:'Детали Вакансии',
              link: '#'
            },
            {
              text:'Гайды по турам',
              link: '#'
            },
            {
              text:'Галерея',
              link: '#'
            },
            {
              text:'Службы поддержки',
              link: '#'
            },
            {
              text:'Контакты',
              link: '#'
            },
          ],
        },
        slider:[
          {
            title:`Недельные туры
            по всему миру`,
            descr:`Мы используем все доступные сегодня технологии, чтобы
            сделать выбор, оплату и бронирование Вашего путешествия
            максимально удобными и приятными.`,
            img_link:`@/assets/images/slider-banner-1.jpg`
          },
          {
            title:`Туры По всему Узбекистану`,
            descr:`Коллективные туры по Узбекистану и соседним странам`,
            img_link:`@/assets/images/slider-banner-2.jpg`
          },
          {
            title:`Cоотношение
            цен и качества`,
            descr:`Подбираем сезонные скидки у авиакомпаний и отелях мира`,
            img_link:`@/assets/images/slider-banner-3.jpg`
          },
          {
            title:`Круглосуточная служба поддержки клиентов`,
            descr:`Сотрудники компании всегда на связи в Telegram
            Если у вас вопрос возник в поездке, ваш персональных менеджер будет
            круглосуточно на связи и найдёт решение в кратчайший срок`,
            img_link:`@/assets/images/slider-banner-4.jpg`
          },
        ],
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
            },
            {
              text:'Ishlar',
              link: '#'
            },
            {
              text:'Ish tafsilotlari',
              link: '#'
            },
            {
              text:'Ekskursiya guydlar',
              link: '#'
            },
            {
              text:'Galereya',
              link: '#'
            },
            {
              text:'Yordam xizmatlari',
              link: '#'
            },
            {
              text:'Kontaktlar',
              link: '#'
            },
          ],
        },
        slider:[
          {
            title:`Haftalik sayohatlar
            Butun dunyoda`,
            descr:`Biz bugungi kunda mavjud bo'lgan barcha texnologiyalardan foydalanamiz
            tanlov qiling, to'lang va sayohatingizni bron qiling
            eng qulay va yoqimli.`,
            img_link:`@/assets/images/slider-banner-1.jpg`
          },
          {
            title:`O'zbekiston bo'ylab sayohatlar`,
            descr:`O'zbekiston va qo'shni davlatlar bo'ylab jamoaviy sayohatlar`,
            img_link:`@/assets/images/slider-banner-2.jpg`
          },
          {
            title:`Nisbat
            narxlar va sifat`,
            descr:`Biz butun dunyo bo'ylab aviakompaniyalar va mehmonxonalardan mavsumiy chegirmalarni tanlaymiz`,
            img_link:`@/assets/images/slider-banner-3.jpg`
          },
          {
            title:`24/7 mijozlarni qo'llab-quvvatlash`,
            descr:`Kompaniya xodimlari Telegram’da doimo aloqada
            Safar davomida savolingiz bo'lsa, shaxsiy menejeringiz javob beradi
            24/7 qo'ng'iroq va eng qisqa vaqt ichida yechim topadi`,
            img_link:`@/assets/images/slider-banner-4.jpg`
          },
        ],
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