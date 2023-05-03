import { createStore } from 'vuex'
import { ILang } from "@/types/types";

export default createStore({
  state: {
    currentLang: "" as String,
    active_lang: {} as Object,
    lang: {
      ru: {
        pay_title:'Прием платежей',
        pay_with:'Вы сможете оплатить с помощью:',
        not_found:'Упс! Эта страница не может быть найдена',
        nav: {
          main: ['Главная', 'Туры', 'Разделы'],
          toursdropdwn: [

          ],
          adress:'г.Ташкент, Мирабадский район, ул. Афрасиеб,4а',
          sectionsdropdwn: [
            {
              text:'О нас',
              link: '#'
            },
            {
              text:'Актуальные туры',
              link: '#'
            },
            {
              text:'Вакансии',
              link: '#'
            },
            {
              text: 'БРОНЬ И ОПЛАТА',
              link: '/payment',
            },
            {
              text:'Контакты',
              link: '/contacts'
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
            img:`slider-banner-1.jpg`
          },
          {
            title:`Туры По всему Узбекистану`,
            descr:`Коллективные туры по Узбекистану и соседним странам`,
            img:`slider-banner-2.jpg`
          },
          {
            title:`Cоотношение
            цен и качества`,
            descr:`Подбираем сезонные скидки у авиакомпаний и отелях мира`,
            img:`slider-banner-3.jpg`
          },
          {
            title:`Круглосуточная служба поддержки клиентов`,
            descr:`Сотрудники компании всегда на связи в Telegram
            Если у вас вопрос возник в поездке, ваш персональных менеджер будет
            круглосуточно на связи и найдёт решение в кратчайший срок`,
            img:`slider-banner-4.jpg`
          },
        ],
        sections_descr:['ПОПУЛЯРНЫЕ ТУРЫ', 'ИССЛЕДУЙТЕ ПРЕКРАСНЫЕ МЕСТА', 'ЗВОНИТЕ ДЛЯ БОЛЬШЕЙ ИНФОРМАЦИЕЙ'],
        sections_title:['ТОП СЕЗОННЫЕ ТУРЫ', 'ПОПУЛЯРНЫЕ ПАКЕТЫ', 'НЕ УПУСКАЙТЕ ПУТЕШЕСТВИЯ!'],
        directs:[
          {
            title: "Дубай",
            country:'ОАЭ'
          },
          {
            title: "Стамбул",
            country:'Турция'
          },
          {
            title: "Тбилиси",
            country:'Грузия'
          },
          {
            title: "Куала-Лумпур",
            country:'Малайзия'
          },
          {
            title: "Бангкок",
            country:'Таиланд'
          },
          {
            title: "Баку",
            country:'Азербайджан'
          },
          {
            title: "Пхукет",
            country:'Тайланд'
          },

        ],
        video_sec:['Постоянных клиентов',`Партнеров
        тур-операторов по миру`, `Партнеров отелей
        по миру`, 'Запросов ежедневно'],
        cards_title:['Вид на закат на красивую резиденцию на берегу озера', 'Испытайте природную красоту острова', 'Отпуск в водном городе Португалии'],
        cards_price:"/ на человека",
        cards_person:'Человека',
        cards_review:'отзывов',
        cards_direct:['Малайзия', 'Дубай', 'Вьетнам'],
        cards_btns:['Забронируйте сейчас', 'Избранное'],
        btns:['Другие направления',"Дать запрос на просчет маршрута",'Забронировать','ПОСМОТРЕТЬ ВСЕ ПАКЕТЫ'],
        contact_us:['Свяжитесь с нами','Мы на связи: +998974749099'],
        pages:{
          title:'Путешествие в',
          included:'Что входит в поездку',
          places:'Места которые вы сможете посетить',
          dubai:{
            title:'Дубай',
            included_travel:["Авиаперелет Ташкент — Дубай — Ташкент","Проживание в отеле выбранной категории", "Питание — Завтраки", "Трансфер аэропорт — отель — аэропорт", "Мед. страховка на весь период", "Виза  ОАЭ", "Услуги компании."],
            places:[
              {
                id:0,
                title:'Океанариум и дельфинарий',
                descr:'Один из самых больших океанариумов мира, расположен в самом крупном торгово-развлекательном центре Ближнего Востока — «Дубай Молл».',
            },
              {
                id:1,
                title:'Дубайский небоскреб',
                descr:'«Бурдж-Халифа» — небоскрёб высотой 828 метров в Дубае, самое высокое сооружение в мире.',

            },
              {
                id:2,
                title:'Парк Феррари',
                descr:'Парк размещается под крышей площадью 200000 м² и является самым большим в мире тематическим парком, расположенным в помещении.',

            },
              {
                id:3,
                title:'Горнолыжный курорт',
                descr:'Первый горнолыжный комплекс на Ближнем Востоке под крышей и один из крупнейших в мире, круглый год покрытый искусственным снегом.',

            },
              {
                id:4,
                title:'Роскошный отель Парус',
                descr:'Бурдж-эль-Араб — роскошный отель в Дубае, самом крупном городе Объединённых Арабских Эмиратов.',
            },
              {
                id:5,
                title:'Пустынное сафари',
                descr:'Посещение достопримечательностей в Дубаи будет неполноценным без поездки на внедорожнике по барханам пустыни ОАЭ.',
            },
            ]
          },
          stambul:{
            title:'Стамбул',
            included_travel:['Авиаперелет Ташкент — Стамбул — Ташкент (прямой чартер)','Проживание в отеле', 'Питание по системе — все включено','Трансфер аэропорт — отель — аэропорт',"Мед. страховка на весь период",'Услуги фирмы'],
            places:[
              {
                id:0,
                title:'Собор Святой Софии',
                descr:'Более тысячи лет Софийский собор в Константинополе оставался самым большим храмом в христианском мире — вплоть до постройки собора Святого Петра в Риме.',
              },
              {
                id:1,

                title:'Пролив Босфор',
                descr:'Вас ждет удивительный круиз с лучшими панорамами Босфора. Величественные дворцы, монументальные храмы и мечети.',
              },
              {
                id:2,
                title:'Дворец Топкапи',
                descr:'После падения Османской империи дворец превращён в музей — один из крупнейших по площади в мире. Число экспонатов, выставленных для общего обозрения, достигает 65 000 единиц (и это только десятая часть коллекции).',
              },
              {
                id:3,
                title:'Миниатюрк',
                descr:'Парк миниатюр в котором на территории площадью более 60.000 кв. м. выставлены модели архитектурных объектов Турции и других стран, выполненные в масштабе 1:25.',
              },
              {
                id:4,
                title:'Крупные аквапарки',
                descr:'Для любителей экстрима и острых ощущений лучшего развлечения, чем посещение аквапарка не найти.',
              },
            ]
          },
          tbilisi:{
            title:'Тблиси',
            included_travel:['Авиаперелет Ташкент — Тбилиси — Ташкент','Проживание в отеле выбранной категории','Питание по системе все включено — Питание Завтраки', "Трансфер аэропорт — отель — аэропорт", 'Мед. страховка на весь период','Услуги компании.'],
            places:[
              {
                id:0,
                title:'Река Кура',
                descr:'Река с ее живописными скалистыми берегами, протекающая через весь город Мцхета',
              },
              {
                id:1,
                title:'Пещерный город Уплисцихе ',
                descr:'Включает в себя более 700 пещер и сооружений, в т.ч. винные погреба, пекарни, античный театр, зал приемов царицы Тамары, сохранившиеся по сей день.',
              },
              {
                id:2,
                title:'Старый город',
                descr:'Исторический центр Тбилиси, находится у подножья горы Мтацминда (Святая Гора). Проходя по улочкам вы посетите исторические или культурные памятники.',
              },
              {
                id:3,
                title:'Музея Сталина',
                descr:'Музей состоит из трех блоков: самого музея, дома и личного ж/д вагона Сталина.',
              },
              {
                id:4,
                title:'Грузинский Сингапур',
                descr:'самый известный черноморский курорт Грузии с населением в 120 000 человек.',
              },
              {
                id:5,
                title:'Дельфинарий',
                descr:'Дельфинарий предлагает своим гостям новое интерактивное шоу. Оно включает около 30 номеров: три танца, игры с кольцами и шарами, которые дельфины балансируют на хвостах, незабываемое Foot Push и многих других трюков.',
              },
            ]
          },
          malasiya:{
            title:'Куала-Лумпур',
            included_travel:['Авиаперелеты Ташкент — Куала Лумпур — о. Лангкави — Куала Лумпур — Ташкент','Трансфер аэропорт — отель — аэропорт','Проживание в отеле выбранной категории + завтраки', 'Услуги компании','Страховка','Обзорная экскурсия по городу'],
            places:[
              {
                id:0,
                title:'Архитектура городов',
                descr:'Поражая сплавом традиций и современности, архитектура Малайзии отражает многочисленность стилей, культур и религий Азии.',
              },
              {
                id:1,
                title:'Самый большой в мире океанариум',
                descr:'Это подводный тоннель длиной 90 метров со стеклянными стенами, полный жителями морей и океанов. В Водном театре океанариума можно кинуть корм пираньям.',
              },
              {
                id:2,
                title:'Пляжи с белоснежным песком',
                descr:'Малайзия по-прежнему остается уголком девственной природы, бережно сохраняющихся традиций, чистых пляжей и отличного сервиса.',
              },
              {
                id:3,
                title:'Полет на воздушном шаре',
                descr:'Любите тишину небес и воздушный шар для вас это лучший способ отдыха? Тогда вам обязательно нужно полетать в Малайзии.',
              },
              {
                id:4,
                title:'Национальный парк Таман Негара',
                descr:'Вас ждут бескрайние джунгли, Куала-Тахан, подвесная тропа, река Сунгаи-Тембелинг и, конечно же, богатый животный мир.',
              },
              {
                id:5,
                title:'Самый большой пешеходный мост',
                descr:'Небесный мост на Лангкави, с которого открывается сказочный вид на остров. Мост подвешен над пропастью и в ветреные дни это наиболее заметно ощущается.',
              },
            ]
          },
          baku:{
            title:'Баку',
            included_travel:['Авиаперелет Ташкент – Баку – Ташкент','Трансфер','Проживание в отеле','Страховой мед полис','Услуги компании'],
            places:[
              {
                id:0,
                title:'Нагорный Парк',
                descr:'«Огни Вечернего Баку» начинаются с посещения Нагорного Парка. Именно здесь «Город Ветров», как часто называют Баку, откроется вам во всей своей красе.',
              },
              {
                id:1,
                title:'Музей Ковров',
                descr:'Ковроткачество было одним из ранних форм искусства в Азербайджане. Сложные паттерны и точные линии показывают насколько существенна работа азербайджанских мастеров!',
              },
              {
                id:2,
                title:'Маленькая Венеция',
                descr:'Ресторан Венеция находится на морском побережье в центре города. Место, где вы можете отведать вкусного итальянского блюда, но и насладиться замечательной итальянской атмосферой. ',
              },
              {
                id:3,
                title:'Центр Гейдара Алиева',
                descr:'Хотите посмотреть как выглядит одно из самых красивых зданий в мире? Архитектором этой прекрасной работы является всемирно известная Захи Хадид, благодаря которой здание было удостоено награды в номинации «Дизайн года» в 2014 году.',
              },
              {
                id:4,
                title:'Каспийский пляж ',
                descr:'Если вам повезёт посетить Баку в летнюю пору, тогда поспешите на пляж! Вы можете выбрать любой из городских пляжей, курорты, также аквапарк.',
              },
            ]
          },
          tailand:{
            title:'Пхукет',
            included_travel:['Авиаперелет Ташкент — Пхукет — Ташкент','Проживание в отеле выбранной категории','Питание завтрак','Трансфер аэропорт — отель — аэропорт','Мед. страховка','Тур Код','Услуги фирмы'],
            places:[
              {
                id:0,
                title:'Лучшие пляжи мира',
                descr:'Пляжи Таиланда — это идеальное место отдыха для любителей полого спуска к воде, песчаной прибрежной линии, прозрачного и теплого моря и потрясающего пейзажа вокруг.',
              },
              {
                id:1,
                title:'Дайвинг',
                descr:'Дайв-центры есть на любом тайском курорте. Большинство из них расположено в Паттайе и на Пхукете.',
              },
              {
                id:2,
                title:'Тайский массаж',
                descr:'Тайский массаж формировался под влиянием древней культуры Китая и Индии и приобрел нынешний вид благодаря долгой практике, наблюдению за природой человеческого тела, создавая чёткую систему оздоровительной терапии.',
              },
              {
                id:3,
                title:'Кристальная вода',
                descr:'Вода настолько лазурная и прозрачная, что плавать в ней невероятно приятно – оказавшись на Пхукете испытаете удовольствие от моря.',
              },
              {
                id:4,
                title:'Вечный карнавал',
                descr:'Помимо ночных праздников, которые в Тайланде каждый день, регулярно устраиваются карнавалы.',
              },
              {
                id:5,
                title:'Рафтинг и тарзанка',
                descr:'Вы получите удовольствие от захватывающего дух сплава по реке на надувных лодках. Получите всплеск адреналина прыгнув с тарзанки.',
              },
              {
                id:6,
                title:'Морские круизы',
                descr:'Надоел отель и его окресности, тогда морской круиз вас сильно удивит. Посмотрите на Тайланд с другой стороны, по одному из морских маршрутов.',
              },
            ]
          },
        },
      },
      uz: {
        pay_title:`To'lovlarni qabul qilish`,
        pay_with:`Siz bilan to'lashingiz mumkin:`,

        not_found:'Voy! Bu sahifa topilmadi',
        nav: {
          main: ['Asosiy', 'Barcha Turlar', "bo'limlar"],
          toursdropdwn: [

          ],
          adress: "Toshkent shahri, Mirobod tumani, Afrosiyob ko'chasi, 4a",
          sectionsdropdwn: [
            {
              text:'Biz haqimizda',
              link: '#'
            },
            {
              text:'Haqiqiy sayohatlar',
              link: '#'
            },
            {
              text:'Ishlar',
              link: '#'
            },
            {
              text: `To'lovlarni qabul qilish`,
              link: '/payment',
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
            img:`slider-banner-1.jpg`
          },
          {
            title:`O'zbekiston bo'ylab sayohatlar`,
            descr:`O'zbekiston va qo'shni davlatlar bo'ylab jamoaviy sayohatlar`,
            img:`slider-banner-2.jpg`
          },
          {
            title:`Nisbat
             narxlar va sifat`,
            descr:`Biz butun dunyo bo'ylab aviakompaniyalar va mehmonxonalardan mavsumiy chegirmalarni tanlaymiz`,
            img:`slider-banner-3.jpg`
          },
          {
            title:`24/7 mijozlarni qo'llab-quvvatlash`,
            descr:`Kompaniya xodimlari Telegram’da doimo aloqada
             Safar davomida savolingiz bo'lsa, shaxsiy menejeringiz javob beradi
             24/7 qo'ng'iroq va eng qisqa vaqt ichida yechim topadi`,
            img:`slider-banner-4.jpg`
          },
        ],
        sections_descr:['MASHHUR SAYURLAR', `GO'ZAL JOYLARNI TASHG'AT ETING`, `Qo'shimcha ma'lumot olish uchun qo'ng'iroq qiling`],
        sections_title:['MAVSUM TURLARI', 'MASHHUR PAKETLAR', `Sayohatni o'tkazib yubormang!`],
        directs:[
          {
            title: "Dubay",
            country:'BAA'
          },
          {
            title: "Istanbul",
            country:'Turkiya'
          },
          {
            title: "Tbilisi",
            country:'Gruziya'
          },
          {
            title: "Kuala-Lumpur",
            country:'Malayziya'
          },
          {
            title: "Bangkok",
            country:'Tailand'
          },
          {
            title: "Boku",
            country:'Ozarbayjon'
          },
          {
            title: "Milan",
            country:'Italiya'
          },
          {
            title: "Parij",
            country:'Frantsiya'
          },
        ],
        btns:[`Boshqa yo'nalishlar`,"Marshrutni hisoblash uchun so'rov berish",'EKSKURSIYAGA BUYURTMA BERING',`BARCHA PAKETLARNI KO'RISH`],
        cards_title:[`Ko'l bo'yidagi go'zal qarorgohning quyosh botishi manzarasi`, `Orolning tabiiy go'zalligini his eting`, "Portugaliyaning suv shahrida ta'til"],
        cards_price:"/ kishi boshiga",
        cards_person:'Kishi',
        cards_direct:['Malayziya', 'Dubay', 'Vetnam'],
        cards_review:'sharhlar',
        cards_btns:['Hozir bron qiling', "Sevimlilar"],
        video_sec:['Doimiy mijozlar',`Hamkorlar
        dunyo bo'ylab turoperatorlar`, `Mehmonxona hamkorlari
        dunyo bo'ylab`, `Kundalik so'rovlar`],
        contact_us:["Biz bilan bog'laning", 'Biz aloqadamiz: +99871-253 9900'],
        pages:{
          title:"Sayohat",
          included:`Nima kiritilgan`,
          places:`Siz tashrif buyurishingiz mumkin bo'lgan joylar:`,
          dubai:{
            title:'Dubay',
            included_travel:["Toshkent — Dubay — Toshkent havo qatnovi","Tanlangan toifadagi mehmonxonada turar joy", "Ovqatlanish — nonushta", "Transfer aeroporti — mehmonxona — aeroport", "Butun davr uchun tibbiy sug'urta", "BAA vizasi", "Kompaniya xizmatlari."],
            places:[
              {
                id:0,
                title:'Okeanarium va delfinarium',
                descr:`Dunyodagi eng katta okeanariumlardan biri, yaqin Sharqning eng yirik savdo va ko'ngilochar markazi-Dubay mallda joylashgan.`,
            },
              {
                id:1,
                title:`Dubay osmono'par binosi`,
                descr:`"Burj Xalifa" Dubaydagi 828 metr balandlikdagi osmono'par bino bo'lib, dunyodagi eng baland inshootdir.`,

            },
              {
                id:2,
                title:'Ferrari Park',
                descr:`Park 200 000 m2 tom ostida joylashgan va dunyodagi eng katta yopiq tematik parkdir.`,

            },
              {
                id:3,
                title:`Chang'i kurorti`,
                descr:`Yaqin Sharqdagi birinchi tog' - chang'i majmuasi tom ostida va butun yil davomida sun'iy qor bilan qoplangan dunyodagi eng yiriklaridan biri.`,

            },
              {
                id:4,
                title:`Hashamatli mehmonxona yelkan`,
                descr:`Burj Al Arab-Birlashgan Arab Amirliklarining eng yirik shahri Dubaydagi hashamatli mehmonxona.`,
            },
              {
                id:5,
                title:`Cho'l safari`,
                descr:`Dubaydagi diqqatga sazovor joylarga tashrif BAA cho'l barxanlari bo'ylab suv sayohatisiz to'liq bo'lmaydi.`,
            },
            ]
          },
          stambul:{
            title:'Istanbul',
            included_travel:[`Toshkent — Istanbul — Toshkent havo qatnovi (to'g'ridan — to'g'ri charter)`,`Mehmonxonada qolish`, `Tizim orqali ovqatlanish — hamma narsani o'z ichiga oladi`,`Transfer aeroporti — mehmonxona-aeroport`,"Butun davr uchun tibbiy sug'urta",'Firma xizmatlari'],
            places:[
              {
                id:0,
                title:'Ayasofya',
                descr:`Ming yildan ko'proq vaqt davomida Konstantinopoldagi Sofiya sobori xristian olamidagi eng katta ibodatxona bo'lib qoldi — Rimda Avliyo Pyotr sobori qurilgunga qadar.`,
              },
              {
                id:1,
                title:`Bosfor bo'g'ozi`,
                descr:`Sizni Bosforning eng yaxshi panoramalari bilan ajoyib kruiz kutmoqda. Ulug'vor saroylar, monumental ibodatxonalar va masjidlar.`,
              },
              {
                id:2,
                title:'Topkapi saroyi',
                descr:`Usmonli imperiyasi qulaganidan keyin saroy muzeyga aylantirildi — dunyodagi eng katta maydonlardan biri. Umumiy ko'rish uchun namoyish etilgan eksponatlar soni 65000 donaga etadi (va bu to'plamning o'ndan bir qismi).`,
              },
              {
                id:3,
                title:'Miniatyura',
                descr:`Miniatyuralar parki 60.000 kvadrat metrdan ortiq maydonda.M. Turkiya va boshqa mamlakatlarning me'moriy ob'ektlarining 1:25 masshtabida namoyish etilgan modellari.`,
              },
              {
                id:4,
                title:'Katta suv parklari',
                descr:`Ekstremal va hayajonli ishqibozlar uchun akvaparkga tashrif buyurishdan ko'ra yaxshiroq o'yin-kulgi yo'q.`,
              },
            ]
          },
          tbilisi:{
            title:'Tblisi',
            included_travel:['Havo qatnovi Toshkent — Tbilisi — Toshkent','Tanlangan toifadagi mehmonxonada turar joy',`Hamma narsani o'z ichiga olgan ovqatlanish — nonushta ovqatlari`, "Transfer aeroporti — mehmonxona — aeroport", `Butun davr uchun tibbiy sug'urta`,'Kompaniya xizmatlari.'],
            places:[
              {
                id:0,
                title:'Kura daryosi',
                descr:`Mtsxeta shahri bo'ylab oqadigan go'zal toshli qirg'oqlari bo'lgan Daryo`,
              },
              {
                id:1,
                title:`Upliskixe g'or shahri`,
                descr:`700 dan ortiq g'or va inshootlarni o'z ichiga oladi, shu jumladan.sharob qabrlari, Novvoyxonalar, qadimiy teatr, Qirolicha Tamarani qabul qilish zali, bugungi kungacha saqlanib qolgan.`,
              },
              {
                id:2,
                title:'Eski shahar',
                descr:`Tbilisining tarixiy markazi, Mtatsminda tog'ining etagida joylashgan (Muqaddas tog'). Ko'chalardan o'tayotganda siz tarixiy yoki madaniy yodgorliklarga tashrif buyurasiz.`,
              },
              {
                id:3,
                title:'Stalin muzeyi.',
                descr:`Muzey uchta blokdan iborat: muzeyning o'zi, uyi va Stalinning shaxsiy temir yo'l vagoni.`,
              },
              {
                id:4,
                title:'Gruziya Singapur',
                descr:`Gruziyaning eng mashhur qora dengiz kurorti, aholisi 120 ming kishi.`,
              },
              {
                id:5,
                title:'Delfinarium',
                descr:`Delfinarium o'z mehmonlariga yangi interaktiv shou taklif qiladi. U 30 ga yaqin raqamlarni o'z ichiga oladi: uchta raqs, delfinlar dumlarini muvozanatlashtiradigan halqalar va to'plar bilan o'yinlar, unutilmas oyoq surish va boshqa ko'plab fokuslar.`,
              },
            ]
          },
          malasiya:{
            title:'Kuala-Lumpur',
            included_travel:[`Havo qatnovi Toshkent-Kuala Lumpur-O. Langkavi — Kuala Lumpur — Toshkent`,`Transfer aeroporti-mehmonxona-aeroport`,'Tanlangan toifadagi mehmonxonada qolish + nonushta', 'Kompaniya xizmatlari',`Sug'urta`,`Shahar bo'ylab ekskursiya`],
            places:[
              {
                id:0,
                title:'Shahar arxitekturasi',
                descr:`An'analar va zamonaviylikning uyg'unligi bilan ajralib turadigan Malayziya me'morchiligi Osiyodagi ko'plab uslublar, madaniyatlar va dinlarni aks ettiradi.`,
              },
              {
                id:1,
                title:'Dunyodagi eng katta Akvarium',
                descr:`Bu dengiz va okeanlar aholisi bilan to'la shisha devorlari bo'lgan 90 metr uzunlikdagi suv osti tunnelidir. Akvariumning suv teatrida siz piranhalarga ovqat tashlashingiz mumkin.`,
              },
              {
                id:2,
                title:'Qor-oq qumli plyajlar',
                descr:`Malayziya hali ham bokira tabiat, ehtiyotkorlik bilan saqlanib qolgan an'analar, toza plyajlar va ajoyib xizmatning burchagi`,
              },
              {
                id:3,
                title:'Balon parvozi',
                descr:`Osmon sukunati va sharni seving siz uchun bu dam olishning eng yaxshi usuli? Keyin, albatta, Malayziyaga uchishingiz kerak.`,
              },
              {
                id:4,
                title:`Taman Negara Milliy bog'i`,
                descr:`Sizni cheksiz o'rmon, Kuala Tahan, osma yo'l, Sungai tembeling daryosi va, albatta, boy hayvonot dunyosi kutmoqda`,
              },
              {
                id:5,
                title:`Eng katta piyodalar ko'prigi`,
                descr:`Langkavidagi osmon ko'prigi, bu orolning ajoyib ko'rinishini taqdim etadi. Ko'prik jarlik ustida osilgan va shamolli kunlarda u eng sezilarli darajada seziladi.`,
              },
            ]
          },
          baku:{
            title:'Boku',
            included_travel:['Toshkent – Boku – Toshkent havo qatnovi','Transfer','Mehmonxonada qolish',`Sug'urta asal siyosati`,'Kompaniya xizmatlari'],
            places:[
              {
                id:0,
                title:`Tog'li Park`,
                descr:`Kechki Boku chiroqlari" tog ' parkiga tashrif buyurishdan boshlanadi. Bu erda" shamollar shahri", Boku tez-tez chaqirilganidek, sizga butun shon-shuhratida ochiladi.`,
              },
              {
                id:1,
                title:'Gilam muzeyi',
                descr:`Gilam to'qish Ozarbayjonda san'atning dastlabki turlaridan biri bo'lgan. Murakkab naqshlar va aniq chiziqlar Ozarbayjon ustalarining ishi qanchalik muhimligini ko'rsatadi!`,
              },
              {
                id:2,
                title:'Kichik Venetsiya',
                descr:`Restoran Venetsiya shahar markazidagi dengiz qirg'og'ida joylashgan. Siz mazali italyan taomidan bahramand bo'lishingiz mumkin bo'lgan joy, lekin ayni paytda ajoyib italyan muhitidan bahramand bo'lishingiz mumkin.`,
              },
              {
                id:3,
                title:'Haydar Aliyev markazi',
                descr:`Ko'rishni xohlaysizmi dunyodagi eng chiroyli binolardan biri qanday ko'rinishga ega? Ushbu go'zal asarning me'mori dunyoga mashhur Zaha Hadid bo'lib, u binoni 2014 yilda "yil dizayni" nominatsiyasida mukofotga sazovor qildi.`,
              },
              {
                id:4,
                title:'Kaspiy plyaji',
                descr:`Agar siz yozda Bokuga tashrif buyurish baxtiga muyassar bo'lsangiz, plyajga shoshiling! Siz har qanday shahar plyajlarini, kurortlarni, shuningdek suv parkini tanlashingiz mumkin.`,
              },
            ]
          },
          tailand:{
            title:'Pxuket',
            included_travel:['Havo qatnovi Toshkent-Pxuket-Toshkent','Tanlangan toifadagi mehmonxonada turar joy','Ovqatlanish nonushta','Transfer aeroporti — mehmonxona — aeroport',`Tibbiy sug'urta`,'Tur kodi','Firma xizmatlari'],
            places:[
              {
                id:0,
                title:'Dunyoning eng yaxshi plyajlari',
                descr:`Tailand plyajlari suvga, qumli qirg'oq chizig'iga, tiniq va iliq dengizga va atrofdagi ajoyib manzaraga ichi bo'sh tushishni yaxshi ko'radiganlar uchun ajoyib dam olish maskanidir.`,
              },
              {
                id:1,
                title:`Sho'ng'in`,
                descr:`Har qanday Tailand kurortida sho'ng'in markazlari mavjud. Ularning aksariyati Pattaya va Pxuketda joylashgan.`,
              },
              {
                id:2,
                title:'Tailand massaji',
                descr:`Tailand massaji Xitoy va Hindistonning qadimiy madaniyati ta'siri ostida shakllangan va uzoq amaliyot, inson tanasining tabiatini kuzatish, aniq sog'lomlashtirish terapiyasi tizimini yaratish orqali hozirgi ko'rinishga ega bo'lgan.`,
              },
              {
                id:3,
                title:'Kristalli suv',
                descr:`Suv shunchalik jozibali va shaffofki, unda suzish juda yoqimli – Pxuketda bo'lganingizdan so'ng, siz dengizdan zavqlanasiz.`,
              },
              {
                id:4,
                title:'Abadiy karnaval',
                descr:`Tailandda har kuni o'tkaziladigan tungi bayramlardan tashqari, karnavallar muntazam ravishda o'tkaziladi.`,
              },
              {
                id:5,
                title:'Rafting va bungee',
                descr:`Siz puflanadigan qayiqlarda hayajonli Daryo raftingidan bahramand bo'lasiz. Bungee-dan sakrab adrenalinni oling.`,
              },
              {
                id:6,
                title:'Dengiz sayohatlari',
                descr:`Mehmonxona va uning tuzsizlanishidan charchadingiz, keyin dengiz sayohati sizni hayratda qoldiradi. Tailandga boshqa tomondan, dengiz yo'nalishlaridan biriga qarang.`,
              },
            ]
          },
        },
      },
      en: {
        pay_title:`Acceptance of payments`,
        pay_with:'You will be able to pay using:',
        not_found:`Oops! That page can't be found`,
        nav: {
          main: ['Home', 'Tours', 'Sections'],
          toursdropdwn: [

          ],
          adress:'Tashkent, Mirabad district, Afrosiab str., 4a',
          sectionsdropdwn: [
            {
              text:'About Us',
              link: '#'
            },
            {
              text:'Active Tours',
              link: '#'
            },
            {
              text:'Jobs',
              link: '#'
            },
            {
              text: 'Acceptance of payments',
              link: '/payment',
            },
            {
              text:'Contacts',
              link: '#'
            },
          ],
        },
        slider:[
          {
            title:`Week tours
            Worldwide`,
            descr:`We use every technology available today to
            make a choice, pay and book your trip
            most comfortable and enjoyable.`,
            img:`slider-banner-1.jpg`
          },
          {
            title:`Tours All over Uzbekistan`,
            descr:`Collective tours in Uzbekistan and neighboring countries`,
            img:`slider-banner-2.jpg`
          },
          {
            title:`Ratio
            prices and quality`,
            descr:`We select seasonal discounts from airlines and hotels around the world`,
            img:`slider-banner-3.jpg`
          },
          {
            title:`24/7 customer support`,
            descr:`Employees of the company are always in touch in Telegram
            If you have a question during the trip, your personal manager will
            24/7 on call and will find a solution in the shortest possible time`,
            img:`slider-banner-4.jpg`
          },
        ],
        sections_descr:['POPULAR TOURS', 'EXPLORE BEAUTIFUL PLACES', 'CALL FOR MORE INFORMATION'],
        sections_title:['TOP SEASON TOURS', 'POPULAR PACKAGES', `DON'T MISS THE JOURNEY!`],
        directs:[
          {
            title: "Dubai",
            country:'UAE'
          },
          {
            title: "Istanbul",
            country:'Turkey'
          },
          {
            title: "Tbilisi",
            country:'Georgia'
          },
          {
            title: "Kuala Lumpur",
            country:'Malaysia'
          },
          {
            title: "Bangkok",
            country:'Thailand'
          },
          {
            title: "Baku",
            country:'Azerbaijan'
          },
          {
            title: "Milan",
            country:'Italy'
          },
          {
            title: "Paris",
            country:'France'
          },
        ],
        video_sec:['Regular customers',`Partners
        tour operators around the world`, `Hotel Partners
        around the world`, 'Requests daily'],
        cards_title:['Sunset view of a beautiful residence on the lake shore', 'Experience the natural beauty of the island', 'Vacation in the water city of Portugal'],
        cards_price:"/ per person",
        cards_person:'Person',
        cards_direct:['Malayziya', 'Dubay', 'Vetnam'],
        cards_review:'reviews',
        cards_btns:['Book now', 'Favourites'],
        btns:['Other directions',"Give a request to calculate the route",'BOOK A TOUR','VIEW ALL PACKAGES'],
        contact_us:['Contact us','We are in touch: +998974749099'],
        pages:{
          title:"Tour to",
          included:`What's included`,
          places:'Places you can visit',
          dubai:{
            title:'Dubai',
            included_travel:["Flight Tashkent — Dubai — Tashkent","Accommodation in a hotel of the selected category", "Meals — Breakfast", "Airport — hotel — airport transfer", "Medical insurance for the entire period", "UAE Visa", "Company services."],
            places:[
              {
                id:0,
                title:'Oceanarium and Dolphinarium',
                descr:'One of the largest oceanariums in the world, located in the largest shopping and entertainment center of the Middle East - "Dubai Mall',
            },
              {
                id:1,
                title:'Dubai Skyscraper',
                descr:'Burj Khalifa is an 828-meter—high skyscraper in Dubai, the tallest structure in the world.',

            },
              {
                id:2,
                title:'Ferrari Park',
                descr:`The park is located under a 200,000 m2 roof and is the world's largest indoor theme park.`,

            },
              {
                id:3,
                title:'Ski resort',
                descr:'The first ski resort in the Middle East under a roof and one of the largest in the world, covered with artificial snow all year round.',

            },
              {
                id:4,
                title:'Luxury Hotel Sail',
                descr:'Burj Al Arab is a luxury hotel in Dubai, the largest city in the United Arab Emirates.',
            },
              {
                id:5,
                title:'Desert Safari',
                descr:'Visiting the sights in Dubai will be incomplete without a trip by SUV through the dunes of the UAE desert.',
            },
            ]
          },
          stambul:{
            title:'Istanbul',
            included_travel:['Tashkent — Istanbul — Tashkent flight (direct charter)','Hotel accommodation', 'All—inclusive meals','Airport — hotel — airport transfer',"Med. insurance for the entire period",'Company services'],
            places:[
              {
                id:0,
                title:'Hagia Sophia',
                descr:`'For more than a thousand years, St. Sophia Cathedral in Constantinople remained the largest church in the Christian world — until the construction of St. Peter's Cathedral in Rome.`,
              },
              {
                id:1,
                title:'Bosphorus Strait',
                descr:'An amazing cruise with the best panoramas of the Bosphorus awaits you. Majestic palaces, monumental temples and mosques.',
              },
              {
                id:2,
                title:'Topkapi Palace',
                descr:'After the fall of the Ottoman Empire, the palace was turned into a museum — one of the largest in the world by area. The number of exhibits on display for general viewing reaches 65,000 units (and this is only a tenth of the collection).',
              },
              {
                id:3,
                title:'Miniature',
                descr:'A miniature park in which models of architectural objects of Turkey and other countries, made on a scale of 1:25, are exhibited on an area of more than 60,000 sq. m.',
              },
              {
                id:4,
                title:'Large water parks',
                descr:'For fans of extreme sports and thrills, there is no better entertainment than visiting a water park.',
              },
            ]
          },
          tbilisi:{
            title:'Tbilisi',
            included_travel:['Tashkent — Tbilisi — Tashkent flight','Accommodation in a hotel of the selected category','All-inclusive meals — Meals Breakfast', "Airport — hotel — airport transfer", 'Med. insurance for the entire period','Company services'],
            places:[
              {
                id:0,
                title:'Kura River',
                descr:'The river with its picturesque rocky shores, flowing through the entire city of Mtskheta',
              },
              {
                id:1,
                title:'Uplistsikhe Cave City',
                descr:'It includes more than 700 caves and structures, including wine cellars, bakeries, an antique theater, a reception hall of Queen Tamara, preserved to this day.',
              },
              {
                id:2,
                title:'Old Town',
                descr:'The historical center of Tbilisi is located at the foot of Mtatsminda Mountain (Holy Mountain). Walking through the streets you will visit historical or cultural monuments.',
              },
              {
                id:3,
                title:'The Stalin Museum.',
                descr:`The museum consists of three blocks: the museum itself, the house and Stalin's personal railway car.`,
              },
              {
                id:4,
                title:'Georgian Singapore',
                descr:'The most famous Black Sea resort in Georgia with a population of 120,000 people.',
              },
              {
                id:5,
                title:'Dolphinarium',
                descr:'The Dolphinarium offers its guests a new interactive show. It includes about 30 numbers: three dances, games with rings and balls that dolphins balance on their tails, an unforgettable Foot Push and many other tricks.',
              },
            ]
          },
          malasiya:{
            title:'Kuala Lumpur',
            included_travel:['Flights Tashkent — Kuala Lumpur — Langkawi Island — Kuala Lumpur — Tashkent','Airport — hotel — airport transfer','Accommodation in a hotel of the selected category + breakfast', 'Company services','Insurance','City sightseeing tour'],
            places:[
              {
                id:0,
                title:'Architecture of cities',
                descr:`Striking a fusion of tradition and modernity, the architecture of Malaysia reflects the multiplicity of styles, cultures and religions of Asia.`,
              },
              {
                id:1,
                title:`The world's largest aquarium`,
                descr:`This is an underwater tunnel 90 meters long with glass walls, full of inhabitants of the seas and oceans. In the aquarium's Water Theater, you can throw food to piranhas.`,
              },
              {
                id:2,
                title:'Beaches with white sand',
                descr:'Malaysia is still a corner of pristine nature, carefully preserved traditions, clean beaches and excellent service.',
              },
              {
                id:3,
                title:'Hot air balloon flight',
                descr:`Do you love the silence of the heavens and a balloon is the best way for you to relax? Then you definitely need to fly to Malaysia.`,
              },
              {
                id:4,
                title:'Taman Negara National Park',
                descr:'Endless jungles, Kuala Tahan, a hanging trail, the Sungai River-Tembeling and, of course, a rich animal world are waiting for you.',
              },
              {
                id:5,
                title:'The biggest pedestrian bridge',
                descr:'Sky Bridge on Langkawi, which offers a fabulous view of the island. The bridge is suspended over a precipice and on windy days it is most noticeably felt.',
              },
            ]
          },
          baku:{
            title:'Baku',
            included_travel:['Tashkent – Baku – Tashkent flight','Transfer','Hotel accommodation','Medical insurance policy','Company services'],
            places:[
              {
                id:0,
                title:'Nagorny Park',
                descr:'The "Lights of Evening Baku" begin with a visit Nagorny Park. It is here that the "City of Winds", as Baku is often called, will open to you in all its glory.',
              },
              {
                id:1,
                title:'Carpet Museum',
                descr:'Carpet weaving was one of the earliest art forms in Azerbaijan. Complex patterns and precise lines show how essential the work of Azerbaijani masters is!',
              },
              {
                id:2,
                title:'Little Venice',
                descr:'The Venice restaurant is located on the seashore in the city center. A place where you can taste delicious Italian dishes, but also enjoy the wonderful Italian atmosphere.  ',
              },
              {
                id:3,
                title:'Heydar Aliyev Center',
                descr:'Do you want to see what one of the most beautiful buildings in the world looks like? The architect of this beautiful work is the world-famous Zaha Hadid, thanks to whom the building was awarded in the nomination "Design of the Year" in 2014.',
              },
              {
                id:4,
                title:'Caspian Beach',
                descr:'If you are lucky enough to visit Baku in the summer, then hurry to the beach! You can choose any of the city beaches, resorts, also a water park.',
              },
            ]
          },
          tailand:{
            title:'Phuket',
            included_travel:['Flight Tashkent — Phuket — Tashkent','Accommodation in a hotel of the selected category','Meals breakfast','Airport — hotel — airport transfer','Med. insurance','Tour Code','Services of the company'],
            places:[
              {
                id:0,
                title:'The best beaches in the world',
                descr:'The beaches of Thailand are an ideal holiday destination for lovers of a gentle descent to the water, sandy coastline, clear and warm sea and stunning scenery around.',
              },
              {
                id:1,
                title:'Diving',
                descr:`There are dive centers at any Thai resort. Most of them are located in Pattaya and Phuket.`,
              },
              {
                id:2,
                title:'Thai massage',
                descr:'Thai massage was formed under the influence of the ancient culture of China and India and acquired its current form thanks to long practice, observation of the nature of the human body, creating a clear system of wellness therapy.',
              },
              {
                id:3,
                title:'Crystal water',
                descr:'The water is so azure and transparent that it is incredibly pleasant to swim in it – once in Phuket you will experience the pleasure of the sea.',
              },
              {
                id:4,
                title:'Eternal Carnival',
                descr:'In addition to night celebrations, which are held in Thailand every day, carnivals are regularly organized.',
              },
              {
                id:5,
                title:'Rafting and bungee jumping',
                descr:'You will enjoy the breathtaking rafting on the river on inflatable boats. Get an adrenaline rush by bungee jumping.',
              },
              {
                id:6,
                title:'Sea cruises',
                descr:'Tired of the hotel and its surroundings, then a sea cruise will surprise you greatly. Look at Thailand from the other side, along one of the sea routes.',
              },
            ]
          },
        },
      },
    } as ILang,
    places_imgs:{
      dubai:['oceanarium-dubai.jpg', 'burj-khalifa.jpg', 'ferrari-park.jpg', 'ski-dubai.jpg','luxury-hotel.jpg','desert-safari.jpg'],
      tailand:['tai-beach.jpg', 'diving-tai.jpg', 'massage-tai.jpg', 'tai-water.jpg', 'tai-carnaval.jpg','rafting-tai.jpg', 'crouse-tai.jpg'],
      baku:['baku-park.jpg', 'carpet-museum.jpg', 'baku-venetsia.jpg', 'center-baku.jpg', 'baku-beach.jpg'],
      malasiya:['kuala-lumpur-arhitech.jpg','oceanarium.jpg', 'beach-malasiya.jpg', 'ballons.jpg', 'expedition.jpg', 'bridge.jpg'],
      tbilisi:['kura-river.jpg','caves-tbilisi.jpg', 'old-city.jpg', 'stalin-museum.jpg', 'singapur-george.jpg', 'doplhin-george.jpg'],
      stambul:['sopia.jpeg','bosfor.jpg', 'topkapi.jpg', 'miniaturk.jpg', 'aquapark-stambul.jpg'],
    },
    bg_img:{
      dubai:'dubai-bg.jpg',
      tbilisi:'tbilisi-bg.jpg',
      stambul:'stambul-bg.jpg',
      malasiya:'kuala-lumpur-bg.jpg',
      baku:'baku-bg.jpg',
      tailand:'tailand-bg.jpg',
    }
  },
  getters: {
    activeLang(state){
      return state.active_lang
    },
    bgImg(state){
      return state.bg_img
    },
    placesImgs(state){
      return state.places_imgs
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