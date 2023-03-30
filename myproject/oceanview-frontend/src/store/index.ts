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
          adress:'г.Ташкент, Мирабадский район, ул. Афрасиеб,4а',
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
            country:'Малазия'
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
            title: "Милан",
            country:'Италия'
          },
          {
            title: "Париж",
            country:'Франция'
          },
        ],
        video_sec:['Постоянных клиентов',`Партнеров
        тур-операторов по миру`, `Партнеров отелей
        по миру`, 'Запросов ежедневно'],
        cards_title:['Вид на закат на красивую резиденцию на берегу озера', 'Испытайте природную красоту острова', 'Отпуск в водном городе Португалии'],
        cards_price:"/ на человека",
        cards_person:'Человека',
        cards_review:'отзывов',
        cards_btns:['Забронируйте сейчас', 'Избранное'],
        btns:['Другие направления',"Дать запрос на просчет маршрута",'ЗАКАЗАТЬ ТУР','ПОСМОТРЕТЬ ВСЕ ПАКЕТЫ'],
        contact_us:['Свяжитесь с нами','Мы на связи: +998974749099'],
        pages:{
          dubai:{
            title:'Дубай',
            included_travel:["Авиаперелет Ташкент — Дубай — Ташкент","Проживание в отеле выбранной категории", "Питание — Завтраки", "Трансфер аэропорт — отель — аэропорт", "Мед. страховка на весь период", "Виза  ОАЭ", "Услуги компании."],
            places:[
              {
                title:'Океанариум и дельфинарий',
                descr:'Один из самых больших океанариумов мира, расположен в самом крупном торгово-развлекательном центре Ближнего Востока — «Дубай Молл».',
                img:'',
            },
              {
                title:'Дубайский небоскреб',
                descr:'«Бурдж-Халифа» — небоскрёб высотой 828 метров в Дубае, самое высокое сооружение в мире.',
                img:'',

            },
              {
                title:'Парк Феррари',
                descr:'Парк размещается под крышей площадью 200000 м² и является самым большим в мире тематическим парком, расположенным в помещении.',
                img:'',

            },
              {
                title:'Горнолыжный курорт',
                descr:'Первый горнолыжный комплекс на Ближнем Востоке под крышей и один из крупнейших в мире, круглый год покрытый искусственным снегом.',
                img:'',

            },
              {
                title:'Роскошный отель Парус',
                descr:'Бурдж-эль-Араб — роскошный отель в Дубае, самом крупном городе Объединённых Арабских Эмиратов.',
                img:'',
            },
              {
                title:'Пустынное сафари',
                descr:'Посещение достопримечательностей в Дубаи будет неполноценным без поездки на внедорожнике по барханам пустыни ОАЭ.',
                img:'',
            },
            ]
          },
          stambul:{
            title:'Стамбул',
            included_travel:['Авиаперелет Ташкент — Стамбул — Ташкент (прямой чартер)','Проживание в отеле', 'Питание по системе — все включено','Трансфер аэропорт — отель — аэропорт',"Мед. страховка на весь период",'Услуги фирмы'],
            palaces:[
              {
                title:'Собор Святой Софии',
                descr:'Более тысячи лет Софийский собор в Константинополе оставался самым большим храмом в христианском мире — вплоть до постройки собора Святого Петра в Риме.',
                img:'',
              },
              {
                title:'Пролив Босфор',
                descr:'Вас ждет удивительный круиз с лучшими панорамами Босфора. Величественные дворцы, монументальные храмы и мечети.',
                img:'',
              },
              {
                title:'Дворец Топкапи',
                descr:'После падения Османской империи дворец превращён в музей — один из крупнейших по площади в мире. Число экспонатов, выставленных для общего обозрения, достигает 65 000 единиц (и это только десятая часть коллекции).',
                img:'',
              },
              {
                title:'Миниатюрк',
                descr:'Парк миниатюр в котором на территории площадью более 60.000 кв. м. выставлены модели архитектурных объектов Турции и других стран, выполненные в масштабе 1:25.',
                img:'',
              },
              {
                title:'Крупные аквапарки',
                descr:'Для любителей экстрима и острых ощущений лучшего развлечения, чем посещение аквапарка не найти.',
                img:'',
              },
            ]
          },
          tbilisi:{
            title:'Тблиси',
            included_travel:['Авиаперелет Ташкент — Тбилиси — Ташкент','Проживание в отеле выбранной категории','Питание по системе все включено — Питание Завтраки', "Трансфер аэропорт — отель — аэропорт", 'Мед. страховка на весь период','Услуги компании.'],
            places:[
              {
                title:'Река Кура',
                descr:'Река с ее живописными скалистыми берегами, протекающая через весь город Мцхета',
                img:'',
              },
              {
                title:'Пещерный город Уплисцихе ',
                descr:'Включает в себя более 700 пещер и сооружений, в т.ч. винные погреба, пекарни, античный театр, зал приемов царицы Тамары, сохранившиеся по сей день.',
                img:'',
              },
              {
                title:'Старый город',
                descr:'Исторический центр Тбилиси, находится у подножья горы Мтацминда (Святая Гора). Проходя по улочкам вы посетите исторические или культурные памятники.',
                img:'',
              },
              {
                title:'Музея Сталина. ',
                descr:'Музей состоит из трех блоков: самого музея, дома и личного ж/д вагона Сталина.',
                img:'',
              },
              {
                title:'Грузинский Сингапур',
                descr:'самый известный черноморский курорт Грузии с населением в 120 000 человек.',
                img:'',
              },
              {
                title:'Дельфинарий',
                descr:'Дельфинарий предлагает своим гостям новое интерактивное шоу. Оно включает около 30 номеров: три танца, игры с кольцами и шарами, которые дельфины балансируют на хвостах, незабываемое Foot Push и многих других трюков.',
                img:'',
              },
            ]
          },
          malasiya:{
            title:'Куала-Лумпур',
            included_travel:['Авиаперелеты Ташкент — Куала Лумпур — о. Лангкави — Куала Лумпур — Ташкент','Трансфер аэропорт — отель — аэропорт','Проживание в отеле выбранной категории + завтраки', 'Услуги компании','Страховка','Обзорная экскурсия по городу'],
            places:[
              {
                title:'Архитектура городов',
                descr:'Поражая сплавом традиций и современности, архитектура Малайзии отражает многочисленность стилей, культур и религий Азии.',
                img:'',
              },
              {
                title:'Самый большой в мире океанариум',
                descr:'Это подводный тоннель длиной 90 метров со стеклянными стенами, полный жителями морей и океанов. В Водном театре океанариума можно кинуть корм пираньям.',
                img:'',
              },
              {
                title:'Пляжи с белоснежным песком',
                descr:'Малайзия по-прежнему остается уголком девственной природы, бережно сохраняющихся традиций, чистых пляжей и отличного сервиса.',
                img:'',
              },
              {
                title:'Полет на воздушном шаре',
                descr:'Любите тишину небес и воздушный шар для вас это лучший способ отдыха? Тогда вам обязательно нужно полетать в Малайзии.',
                img:'',
              },
              {
                title:'Национальный парк Таман Негара',
                descr:'Вас ждут бескрайние джунгли, Куала-Тахан, подвесная тропа, река Сунгаи-Тембелинг и, конечно же, богатый животный мир.',
                img:'',
              },
              {
                title:'Самый большой пешеходный мост',
                descr:'Небесный мост на Лангкави, с которого открывается сказочный вид на остров. Мост подвешен над пропастью и в ветреные дни это наиболее заметно ощущается.',
                img:'',
              },
            ]
          },
          baku:{
            title:'Баку',
            included_travel:['Авиаперелет Ташкент – Баку – Ташкент','Трансфер','Проживание в отеле','Страховой мед полис','Услуги компании'],
            places:[
              {
                title:'Нагорный Парк',
                descr:'«Огни Вечернего Баку» начинаются с посещения Нагорного Парка. Именно здесь «Город Ветров», как часто называют Баку, откроется вам во всей своей красе.',
                img:'',
              },
              {
                title:'Музей Ковров',
                descr:'Ковроткачество было одним из ранних форм искусства в Азербайджане. Сложные паттерны и точные линии показывают насколько существенна работа азербайджанских мастеров!',
                img:'',
              },
              {
                title:'Маленькая Венеция',
                descr:'Ресторан Венеция находится на морском побережье в центре города. Место, где вы можете отведать вкусного итальянского блюда, но и насладиться замечательной итальянской атмосферой. ',
                img:'',
              },
              {
                title:'Центр Гейдара Алиева',
                descr:'Хотите посмотреть как выглядит одно из самых красивых зданий в мире? Архитектором этой прекрасной работы является всемирно известная Захи Хадид, благодаря которой здание было удостоено награды в номинации «Дизайн года» в 2014 году.',
                img:'',
              },
              {
                title:'Каспийский пляж ',
                descr:'Если вам повезёт посетить Баку в летнюю пору, тогда поспешите на пляж! Вы можете выбрать любой из городских пляжей, курорты, также аквапарк.',
                img:'',
              },
            ]
          },
          tailand:{
            title:'Пхукет',
            included_travel:['Авиаперелет Ташкент — Пхукет — Ташкент','Проживание в отеле выбранной категории','Питание завтрак','Трансфер аэропорт — отель — аэропорт','Мед. страховка','Тур Код','Услуги фирмы'],
            places:[
              {
                title:'Лучшие пляжи мира',
                descr:'Пляжи Таиланда — это идеальное место отдыха для любителей полого спуска к воде, песчаной прибрежной линии, прозрачного и теплого моря и потрясающего пейзажа вокруг.',
                img:'',
              },
              {
                title:'Дайвинг',
                descr:'Дайв-центры есть на любом тайском курорте. Большинство из них расположено в Паттайе и на Пхукете.',
                img:'',
              },
              {
                title:'Тайский массаж',
                descr:'Тайский массаж формировался под влиянием древней культуры Китая и Индии и приобрел нынешний вид благодаря долгой практике, наблюдению за природой человеческого тела, создавая чёткую систему оздоровительной терапии.',
                img:'',
              },
              {
                title:'Кристальная вода',
                descr:'Вода настолько лазурная и прозрачная, что плавать в ней невероятно приятно – оказавшись на Пхукете испытаете удовольствие от моря.',
                img:'',
              },
              {
                title:'Вечный карнавал',
                descr:'Помимо ночных праздников, которые в Тайланде каждый день, регулярно устраиваются карнавалы.',
                img:'',
              },
              {
                title:'Рафтинг и тарзанка',
                descr:'Вы получите удовольствие от захватывающего дух сплава по реке на надувных лодках. Получите всплеск адреналина прыгнув с тарзанки.',
                img:'',
              },
              {
                title:'Морские круизы',
                descr:'Надоел отель и его окресности, тогда морской круиз вас сильно удивит. Посмотрите на Тайланд с другой стороны, по одному из морских маршрутов.',
                img:'',
              },
            ]
          },
        },
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
          adress: "Toshkent shahri, Mirobod tumani, Afrosiyob ko'chasi, 4a",
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
        cards_review:'sharhlar',
        cards_btns:['Hozir bron qiling', "Sevimlilar"],
        video_sec:['Doimiy mijozlar',`Hamkorlar
        dunyo bo'ylab turoperatorlar`, `Mehmonxona hamkorlari
        dunyo bo'ylab`, `Kundalik so'rovlar`],
        contact_us:["Biz bilan bog'laning", 'Biz aloqadamiz: +99871-253 9900'],
        pages:{
          dubai:{
            title:'Dubay',
            included_travel:["Toshkent — Dubay — Toshkent havo qatnovi","Tanlangan toifadagi mehmonxonada turar joy", "Ovqatlanish — nonushta", "Transfer aeroporti — mehmonxona — aeroport", "Butun davr uchun tibbiy sug'urta", "BAA vizasi", "Kompaniya xizmatlari."],
            places:[
              {
                title:'Okeanarium va delfinarium',
                descr:`Dunyodagi eng katta okeanariumlardan biri, yaqin Sharqning eng yirik savdo va ko'ngilochar markazi-Dubay mallda joylashgan.`,
                img:'',
            },
              {
                title:`Dubay osmono'par binosi`,
                descr:`"Burj Xalifa" Dubaydagi 828 metr balandlikdagi osmono'par bino bo'lib, dunyodagi eng baland inshootdir.`,
                img:'',

            },
              {
                title:'Ferrari Park',
                descr:`Park 200 000 m2 tom ostida joylashgan va dunyodagi eng katta yopiq tematik parkdir.`,
                img:'',

            },
              {
                title:`Chang'i kurorti`,
                descr:`Yaqin Sharqdagi birinchi tog' - chang'i majmuasi tom ostida va butun yil davomida sun'iy qor bilan qoplangan dunyodagi eng yiriklaridan biri.`,
                img:'',

            },
              {
                title:`Hashamatli mehmonxona yelkan`,
                descr:`Burj Al Arab-Birlashgan Arab Amirliklarining eng yirik shahri Dubaydagi hashamatli mehmonxona.`,
                img:'',
            },
              {
                title:`Cho'l safari`,
                descr:`Dubaydagi diqqatga sazovor joylarga tashrif BAA cho'l barxanlari bo'ylab suv sayohatisiz to'liq bo'lmaydi.`,
                img:'',
            },
            ]
          },
          stambul:{
            title:'Istanbul',
            included_travel:[`Toshkent — Istanbul — Toshkent havo qatnovi (to'g'ridan — to'g'ri charter)`,`Mehmonxonada qolish`, `Tizim orqali ovqatlanish — hamma narsani o'z ichiga oladi`,`Transfer aeroporti — mehmonxona-aeroport`,"Butun davr uchun tibbiy sug'urta",'Firma xizmatlari'],
            palaces:[
              {
                title:'Ayasofya',
                descr:`Ming yildan ko'proq vaqt davomida Konstantinopoldagi Sofiya sobori xristian olamidagi eng katta ibodatxona bo'lib qoldi — Rimda Avliyo Pyotr sobori qurilgunga qadar.`,
                img:'',
              },
              {
                title:`Bosfor bo'g'ozi`,
                descr:`Sizni Bosforning eng yaxshi panoramalari bilan ajoyib kruiz kutmoqda. Ulug'vor saroylar, monumental ibodatxonalar va masjidlar.`,
                img:'',
              },
              {
                title:'Topkapi saroyi',
                descr:`Usmonli imperiyasi qulaganidan keyin saroy muzeyga aylantirildi — dunyodagi eng katta maydonlardan biri. Umumiy ko'rish uchun namoyish etilgan eksponatlar soni 65000 donaga etadi (va bu to'plamning o'ndan bir qismi).`,
                img:'',
              },
              {
                title:'Miniatyura',
                descr:`Miniatyuralar parki 60.000 kvadrat metrdan ortiq maydonda.M. Turkiya va boshqa mamlakatlarning me'moriy ob'ektlarining 1:25 masshtabida namoyish etilgan modellari.`,
                img:'',
              },
              {
                title:'Katta suv parklari',
                descr:`Ekstremal va hayajonli ishqibozlar uchun akvaparkga tashrif buyurishdan ko'ra yaxshiroq o'yin-kulgi yo'q.`,
                img:'',
              },
            ]
          },
          tbilisi:{
            title:'Tblisi',
            included_travel:['Havo qatnovi Toshkent — Tbilisi — Toshkent','Tanlangan toifadagi mehmonxonada turar joy',`Hamma narsani o'z ichiga olgan ovqatlanish — nonushta ovqatlari`, "Transfer aeroporti — mehmonxona — aeroport", `Butun davr uchun tibbiy sug'urta`,'Kompaniya xizmatlari.'],
            places:[
              {
                title:'Kura daryosi',
                descr:`Mtsxeta shahri bo'ylab oqadigan go'zal toshli qirg'oqlari bo'lgan Daryo`,
                img:'',
              },
              {
                title:`Upliskixe g'or shahri`,
                descr:`700 dan ortiq g'or va inshootlarni o'z ichiga oladi, shu jumladan.sharob qabrlari, Novvoyxonalar, qadimiy teatr, Qirolicha Tamarani qabul qilish zali, bugungi kungacha saqlanib qolgan.`,
                img:'',
              },
              {
                title:'Eski shahar',
                descr:`Tbilisining tarixiy markazi, Mtatsminda tog'ining etagida joylashgan (Muqaddas tog'). Ko'chalardan o'tayotganda siz tarixiy yoki madaniy yodgorliklarga tashrif buyurasiz.`,
                img:'',
              },
              {
                title:'Stalin muzeyi.',
                descr:`Muzey uchta blokdan iborat: muzeyning o'zi, uyi va Stalinning shaxsiy temir yo'l vagoni.`,
                img:'',
              },
              {
                title:'Gruziya Singapur',
                descr:`Gruziyaning eng mashhur qora dengiz kurorti, aholisi 120 ming kishi.`,
                img:'',
              },
              {
                title:'Delfinarium',
                descr:`Delfinarium o'z mehmonlariga yangi interaktiv shou taklif qiladi. U 30 ga yaqin raqamlarni o'z ichiga oladi: uchta raqs, delfinlar dumlarini muvozanatlashtiradigan halqalar va to'plar bilan o'yinlar, unutilmas oyoq surish va boshqa ko'plab fokuslar.`,
                img:'',
              },
            ]
          },
          malasiya:{
            title:'Kuala-Lumpur',
            included_travel:[`Havo qatnovi Toshkent-Kuala Lumpur-O. Langkavi — Kuala Lumpur — Toshkent`,`Transfer aeroporti-mehmonxona-aeroport`,'Tanlangan toifadagi mehmonxonada qolish + nonushta', 'Kompaniya xizmatlari',`Sug'urta`,`Shahar bo'ylab ekskursiya`],
            places:[
              {
                title:'Shahar arxitekturasi',
                descr:`An'analar va zamonaviylikning uyg'unligi bilan ajralib turadigan Malayziya me'morchiligi Osiyodagi ko'plab uslublar, madaniyatlar va dinlarni aks ettiradi.`,
                img:'',
              },
              {
                title:'Dunyodagi eng katta Akvarium',
                descr:`Bu dengiz va okeanlar aholisi bilan to'la shisha devorlari bo'lgan 90 metr uzunlikdagi suv osti tunnelidir. Akvariumning suv teatrida siz piranhalarga ovqat tashlashingiz mumkin.`,
                img:'',
              },
              {
                title:'Qor-oq qumli plyajlar',
                descr:`Malayziya hali ham bokira tabiat, ehtiyotkorlik bilan saqlanib qolgan an'analar, toza plyajlar va ajoyib xizmatning burchagi`,
                img:'',
              },
              {
                title:'Balon parvozi',
                descr:`Osmon sukunati va sharni seving siz uchun bu dam olishning eng yaxshi usuli? Keyin, albatta, Malayziyaga uchishingiz kerak.`,
                img:'',
              },
              {
                title:`Taman Negara Milliy bog'i`,
                descr:`Sizni cheksiz o'rmon, Kuala Tahan, osma yo'l, Sungai tembeling daryosi va, albatta, boy hayvonot dunyosi kutmoqda`,
                img:'',
              },
              {
                title:`Eng katta piyodalar ko'prigi`,
                descr:`Langkavidagi osmon ko'prigi, bu orolning ajoyib ko'rinishini taqdim etadi. Ko'prik jarlik ustida osilgan va shamolli kunlarda u eng sezilarli darajada seziladi.`,
                img:'',
              },
            ]
          },
          baku:{
            title:'Boku',
            included_travel:['Toshkent – Boku – Toshkent havo qatnovi','Transfer','Mehmonxonada qolish',`Sug'urta asal siyosati`,'Kompaniya xizmatlari'],
            places:[
              {
                title:`Tog'li Park`,
                descr:`Kechki Boku chiroqlari" tog ' parkiga tashrif buyurishdan boshlanadi. Bu erda" shamollar shahri", Boku tez-tez chaqirilganidek, sizga butun shon-shuhratida ochiladi.`,
                img:'',
              },
              {
                title:'Gilam muzeyi',
                descr:`Gilam to'qish Ozarbayjonda san'atning dastlabki turlaridan biri bo'lgan. Murakkab naqshlar va aniq chiziqlar Ozarbayjon ustalarining ishi qanchalik muhimligini ko'rsatadi!`,
                img:'',
              },
              {
                title:'Kichik Venetsiya',
                descr:`Restoran Venetsiya shahar markazidagi dengiz qirg'og'ida joylashgan. Siz mazali italyan taomidan bahramand bo'lishingiz mumkin bo'lgan joy, lekin ayni paytda ajoyib italyan muhitidan bahramand bo'lishingiz mumkin.`,
                img:'',
              },
              {
                title:'Haydar Aliyev markazi',
                descr:`Ko'rishni xohlaysizmi dunyodagi eng chiroyli binolardan biri qanday ko'rinishga ega? Ushbu go'zal asarning me'mori dunyoga mashhur Zaha Hadid bo'lib, u binoni 2014 yilda "yil dizayni" nominatsiyasida mukofotga sazovor qildi.`,
                img:'',
              },
              {
                title:'Kaspiy plyaji',
                descr:`Agar siz yozda Bokuga tashrif buyurish baxtiga muyassar bo'lsangiz, plyajga shoshiling! Siz har qanday shahar plyajlarini, kurortlarni, shuningdek suv parkini tanlashingiz mumkin.`,
                img:'',
              },
            ]
          },
          tailand:{
            title:'Pxuket',
            included_travel:['Havo qatnovi Toshkent-Pxuket-Toshkent','Tanlangan toifadagi mehmonxonada turar joy','Ovqatlanish nonushta','Transfer aeroporti — mehmonxona — aeroport',`Tibbiy sug'urta`,'Tur kodi','Firma xizmatlari'],
            places:[
              {
                title:'Dunyoning eng yaxshi plyajlari',
                descr:`Tailand plyajlari suvga, qumli qirg'oq chizig'iga, tiniq va iliq dengizga va atrofdagi ajoyib manzaraga ichi bo'sh tushishni yaxshi ko'radiganlar uchun ajoyib dam olish maskanidir.`,
                img:'',
              },
              {
                title:`Sho'ng'in`,
                descr:`Har qanday Tailand kurortida sho'ng'in markazlari mavjud. Ularning aksariyati Pattaya va Pxuketda joylashgan.`,
                img:'',
              },
              {
                title:'Tailand massaji',
                descr:`Tailand massaji Xitoy va Hindistonning qadimiy madaniyati ta'siri ostida shakllangan va uzoq amaliyot, inson tanasining tabiatini kuzatish, aniq sog'lomlashtirish terapiyasi tizimini yaratish orqali hozirgi ko'rinishga ega bo'lgan.`,
                img:'',
              },
              {
                title:'Kristalli suv',
                descr:`Suv shunchalik jozibali va shaffofki, unda suzish juda yoqimli – Pxuketda bo'lganingizdan so'ng, siz dengizdan zavqlanasiz.`,
                img:'',
              },
              {
                title:'Abadiy karnaval',
                descr:`Tailandda har kuni o'tkaziladigan tungi bayramlardan tashqari, karnavallar muntazam ravishda o'tkaziladi.`,
                img:'',
              },
              {
                title:'Rafting va bungee',
                descr:`Siz puflanadigan qayiqlarda hayajonli Daryo raftingidan bahramand bo'lasiz. Bungee-dan sakrab adrenalinni oling.`,
                img:'',
              },
              {
                title:'Dengiz sayohatlari',
                descr:`Mehmonxona va uning tuzsizlanishidan charchadingiz, keyin dengiz sayohati sizni hayratda qoldiradi. Tailandga boshqa tomondan, dengiz yo'nalishlaridan biriga qarang.`,
                img:'',
              },
            ]
          },
        },
      },
      en: {
        nav: {
          main: ['Home', 'Tours', 'Sections'],
          toursdropdwn: [
            {
              text: 'Destinations',
              link: '#',
            },
            {
              text: 'Tour packages',
              link: '#',
            },
            {
              text: 'Comprehensive offer',
              link: '#',
            },
            {
              text: 'Package details',
              link: '#',
            },
            {
              text: 'Tourist map',
              link: '#',
            },
            {
              text: 'Booking',
              link: '#',
            },
            {
              text: 'Confirmation',
              link: '#',
            },
          ],
          adress:'Tashkent, Mirabad district, Afrosiab str., 4a',
          sectionsdropdwn: [
            {
              text:'About Us',
              link: '#'
            },
            {
              text:'Services',
              link: '#'
            },
            {
              text:'Jobs',
              link: '#'
            },
            {
              text:'Job Details',
              link: '#'
            },
            {
              text:'Tour guides',
              link: '#'
            },
            {
              text:'Gallery',
              link: '#'
            },
            {
              text:'Support Services',
              link: '#'
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
        cards_review:'reviews',
        cards_btns:['Book now', 'Favourites'],
        btns:['Other directions',"Give a request to calculate the route",'BOOK A TOUR','VIEW ALL PACKAGES'],
        contact_us:['Contact us','We are in touch: +998974749099'],
        pages:{
          dubai:{
            title:'Dubai',
            text:`Dubai is the largest city in the UAE, lying on the shores of the Persian Gulf. It strikes the imagination from the first minutes of staying in it - as if you get into a movie about a high-tech future where everything is possible. Reserves and reservoirs are being created here, canals are being laid, glass skyscrapers are being erected, shopping malls are being built, the size of small cities, and there is even its own - Dubai Venice. Wealth and luxury are the way of life of this largest commercial, financial and tourist metropolis in the entire Middle East. Local emirs strive to show the beauty and grandeur of the city to the whole world, as well as to create new, amazing and unique structures in it that will attract even more tourists.

            The gastronomic diversity in Dubai's shopping malls and the highest class of local restaurants ready to offer you dishes of any cuisine in the world will surprise even those who, it would seem, have tried everything in their lives.`
          },
          stambul:{
            title:'Istanbul',
            text:'Over the centuries, more than one culture has left its mark on the land of Istanbul. Today you can see their influence with your own eyes: just walk through his "mahalla" (quarters). From the sacred sites of Sultanahmet district and elegant Beyoglu, reminiscent of 19th-century Europe, to the fashionable Nisantasi quarter, the lively club society in Kadikey district and the streets of Besiktas district, where football fans gather, it is not difficult to guess why, according to travelers, Istanbul is not just a city, but several cities in one.',
          },
          tbilisi:{
            title:'Tbilisi',
            text:`Located on the banks of the Mtkvari (Kura) River, Tbilisi is not only the capital of Georgia, but also a city with a rich history. Visa restrictions for citizens of the countries of the Cooperation Council of the Arab States of the Arab Gulf were lifted this year, so you should definitely visit this wonderful city.

            The great Pushkin once called Tbilisi a “magical land". Today it is the largest city in Georgia and a popular tourist destination due to its vibrant culture and abundance of attractions.

            Legend has it that Tbilisi was founded by the Georgian king Vakhtang I Gorgasali while hunting in these places. Throughout its history, the city has been destroyed more than 29 times by the hands of invaders seeking to benefit from its economic and strategic advantages. But every time Tbilisi was restored, which, of course, left its mark on its rich centuries-old history.

            Due to the unique history of the city, there are many attractions in Tbilisi. Tourists can expect a variety of Art Deco buildings and churches of the Old Town. It is very interesting to walk around Tbilisi, see the heart of the lively city and get acquainted with the traditions of the Georgian people.`,
          },
          malasiya:{
            title:'Kuala Lumpur',
            text: `Kuala Lumpur is the gateway between Asia and Oceania, a city like an exotic flower that bloomed in a century and a half from a mining village to a powerful metropolis. Located in a low-lying valley surrounded by mountains covered with equatorial forests, Kuala Lumpur, like an Asian tiger, watches everything that happens around it. Here the Klang and Gombak rivers merge and flow into the Strait of Malacca. The symbol of his power is the Petronas twin towers, which rise above the urban landscape. It is a city of contrasts, where different peoples, languages and religions are intertwined, where economic and cultural life is bubbling. But it is not only this that attracts tourists. Evergreen forests, hilly terrain and equatorial beaches with white-golden sand, washed by the warm waters of the Strait of Malacca, will surprise the most sophisticated connoisseur of exotic holidays.`,
          },
          bangkok:{
            title:'Bangkok',
            text:`In Bangkok, every traveler finds something to do. Lovers of historical sights go on an excursion to the Grand Palace, and connoisseurs of quality shopping go to modern shopping centers such as Terminal 21. The capital of Thailand ranks first in the ranking of the most popular tourist destinations, surprising with its rich cultural heritage, lively nightlife, world-class restaurants and incredible affordability. Find out when it's best to go to Bangkok, how to get around the city, what sights to visit and in which area to stay.`,
          },
          baku:{
            title:'Baku',
            text:`The historical center of Baku recalls its turbulent past — from the period when the city was a port of the Great Silk Road to the oil boom of Soviet times. The Old City is a maze of alleys, mosques, historical buildings and remnants of fortifications, including the Shirvanshahs' Palace and the Maiden Tower, which is now included in the UNESCO World Heritage List. It is not just a historical landmark: the city is known for its fine arts and cultural entertainment, as well as a vibrant business sector.`,
          },
          milan:{
            title:'Milan',
            text:`The first thing that comes to mind when you mention Milan is shopping. This is not surprising at all, because sales are held here twice a year, and the number of fashion boutiques per square meter is considered the largest in Europe. Fashion weeks, stylish Italians and Italians, noisy streets, fast pace of life – Milan is radically different from other Italian cities. Even the coffee here is not strong, and even with milk, and even in the evening - an unforgivable liberty for real Italians. But Milan can be forgiven for everything, because this city unites what we love so much in Italy: history, architecture and art, cuisine and, of course, impeccable style.`,
          },
          paris:{
            title:'Paris',
            text:'Paris has a reputation as the best city for a romantic trip. However, in fact, visitors lose their heads from the city itself. Magnificent buildings made of stone and wrought iron, sidewalks, cozy cafes, winding banks of the Seine — feel like in a movie. However, the charm of the city is not limited to the appearance. The local cuisine is famous for its endless variety. Juicy and hearty rooster in wine, golden butter croissants... Here it is also worth trying modern fusion cuisine and original international dishes. (Believe me, they make amazing falafel in this city.) And the spirit of Paris beckons to stroll through the alleys, look into numerous museums and explore the labyrinths of shops. Well, in the evening, go to the Champ de Mars to enjoy the view of the sparkling Eiffel Tower.',
          },
        },
      },
    } as ILang,
    bg_img:{
      dubai:'dubai.jpg',
      stambul:'stambul.jpg',
      tbilisi:'tblisi.jpg',
      malasiya:'kuala-lumpur.jpg',
      bangkok:'bangkok.jpg',
      baku:'baku.jpg',
      milan:'milan.jpg',
      paris:'paris.jpg',
    },
  },
  getters: {
    activeLang(state){
      return state.active_lang
    },
    bg_img(state){
      return state.bg_img
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