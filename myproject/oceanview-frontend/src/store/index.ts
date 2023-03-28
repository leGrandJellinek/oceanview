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
        contact_us:['Свяжитесь с нами','Мы на связи: +99871-253 9900'],
        pages:{
          dubai:{
            title:'Дубай',
            text:`Дубай — самый большой город в ОАЭ, лежащий на берегу Персидского залива. Он поражает воображение с первых минут пребывания в нем - как-будто попадаешь в фильм о высокотехнологичном будущем, где возможно всё. Здесь создают заповедники и водоемы, прокладывают каналы, возводят небоскребы из стекла, строят торговые центры, размером с небольшие города и даже есть своя - Дубайская Венеция. Богатство и роскошь являются образом жизни этого крупнейшего на всем Ближнем Востоке торгового, финансового и туристического мегаполиса. Местные эмиры стремятся показать всему миру красоту и величие города, а также создать в нем новые, удивительные и неповторимые сооружения, которые будут привлекать еще большее количество туристов.

            Гастрономическое разнообразие в торговых центрах Дубая и высочайший класс местных ресторанов, готовых предложить вам блюда любой кухни мира, - удивят даже тех, кто, казалось бы, попробовал в своей жизни всё.`
          },
          stambul:{
            title:'Стамбул',
            text:'В течение столетий на земле Стамбула оставила свой след не одна культура. Сегодня Вы можете увидеть их влияние своими глазами: просто пройдитесь по его «махалле» (кварталам). От священных мест района Султанахмет и элегантного Бейоглу, напоминающего Европу 19-го века, до модного квартала Нишанташи, оживленного клубного общества в районе Кадыкёй и улиц района Бешикташ, на которых собираются любители футбола, — нетрудно догадаться, почему, по словам путешественников, Стамбул — это не просто город, но несколько городов в одном.',
          },
          tbilisi:{
            title:'Тблиси',
            text:`Расположенный на берегу реки Мтквари (Кура), Тбилиси - это не только столица Грузии, но и город с богатой историей. В этом году были отменены визовые ограничения для граждан стран Совета сотрудничества арабских государств Арабского залива, поэтому вам непременно стоит посетить этот замечательный город.

            Великий Пушкин однажды назвал Тбилиси “волшебным краем”. Сегодня он является крупнейшим городом Грузии и популярным туристическим направлением благодаря своей яркой культуре и обилию достопримечательностей.

            Легенда гласит, что Тбилиси был основан грузинским царем Вахтангом I Горгасали во время охоты в этих местах. За всю свою историю город был уничтожен более 29 раз руками захватчиков, стремящихся извлечь выгоду из его экономических и стратегических преимуществ. Но каждый раз Тбилиси восстанавливали, что, конечно, оставило свой след в его богатой многовековой истории.

            Благодаря уникальной истории города, в Тбилиси есть множество достопримечательностей. Туристов ожидает разнообразие зданий в стиле ар-деко и церквей Старого города. По Тбилиси очень интересно прогуляться, посмотреть сердце оживленного города и познакомиться с традициями грузинского народа.`,
          },
          malasiya:{
            title:'Куала-Лумпур',
            text: `Куала-Лумпур — ворота между Азией и Океанией, город, словно экзотический цветок, расцветший за полтора века из шахтёрского посёлка в могущественный мегаполис. Расположившись в низинной долине, окруженной горами, покрытыми экваториальными лесами, Куала Лумпур, словно азиатский тигр, следит за всем, что происходит вокруг него. Здесь же сливаются и впадают в Малаккский пролив реки Кланг и Гомбак. Символом его могущества являются башни-близнецы Петронас, которые возвышаются над урбанистическим пейзажем. Это город контрастов, где сплелись воедино разные народы, языки и религии, где клокочет экономическая и культурная жизнь. Но не только этим он манит туристов. Вечнозелёные леса, холмистый рельеф и экваториальные пляжи с бело-золотистым песком, омываемые тёплыми водами Малаккского пролива, удивят самого искушенного ценителя экзотического отдыха.`,
          },
          bangkok:{
            title:'Бангкок',
            text:`В Бангкоке каждый путешественник находит занятие по душе. Любители исторических достопримечательностей отправляются на экскурсию в Большой дворец, а ценители качественного шопинга — в современные торговые центры, такие как Terminal 21. Столица Таиланда занимает первые строчки в рейтинге самых популярных туристических направлений, удивляя богатым культурным наследием, оживленной ночной жизнью, ресторанами мирового класса и невероятной доступностью по цене. Узнайте о том, когда лучше ехать в Бангкок, как передвигаться по городу, какие достопримечательности посетить и в каком районе остановиться.`,
          },
          baku:{
            title:'Баку',
            text:'Исторический центр Баку напоминает о его бурном прошлом — от периода, когда город был портом Великого шелкового пути, до нефтяного бума советских времен. Старый город представляет собой лабиринт аллей, мечетей, исторических зданий и остатков укреплений, включая дворец ширваншахов и Девичью башню, которая теперь входит в список объектов Всемирного наследия ЮНЕСКО. Это не просто историческая достопримечательность: город известен своим изобразительным искусством и культурными развлечениями, а также оживленным предпринимательским сектором.',
          },
          milan:{
            title:'Милан',
            text:'Первое, что приходит на ум при упоминании о Милане – шоппинг. Это совсем неудивительно, ведь распродажи здесь проходят дважды в год, а количество модных бутиков на квадратный метр считается самым большим в Европе. Недели моды, стильные итальянки и итальянцы, шумные улицы, быстрый темп жизни – Милан кардинально отличается от других городов Италии. Даже кофе здесь подают некрепкий, да еще и с молоком, да еще и вечером - непростительная вольность для настоящих итальянцев. Но Милану можно простить все, ведь этот город объединяет то, что мы так любим в Италии: история, архитектура и искусство, кухня и, конечно, безупречный стиль.',
          },
          paris:{
            title:'Париж',
            text:'Париж имеет репутацию лучшего города для романтической поездки. Однако на самом деле посетители теряют голову от самого города. Великолепные здания из камня и кованого железа, тротуары, уютные кафе, извилистые берега Сены — почувствуйте себя как в кино. Однако очарование города не ограничивается внешним видом. Местная кухня славится бесконечным разнообразием. Сочный и сытный петух в вине, золотистые масляные круассаны… Здесь стоит также попробовать блюда современной кухни фьюжн и оригинальные международные блюда. (Поверьте, в этом городе делают потрясающий фалафель.) А дух Парижа так и манит прогуливаться по переулкам, заглядывать в многочисленные музеи и исследовать лабиринты магазинов. Ну а вечером отправляйтесь на Марсово поле, чтобы насладиться видом сверкающей Эйфелевой башни.',
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
            text:`Dubay BAAdagi eng katta shahar bo'lib, fors ko'rfazi sohilida joylashgan. U erda bo'lgan birinchi daqiqalardanoq tasavvurni hayratda qoldiradi-go'yo siz hamma narsa mumkin bo'lgan yuqori texnologiyali kelajak haqidagi filmga tushasiz. Bu erda ular qo'riqxonalar va suv havzalarini yaratadilar, kanallar yotqizadilar, shishadan osmono'par binolar quradilar, kichik shaharlarning kattaligi va hatto o'zlarining - Dubay Venetsiyasini quradilar. Boylik va hashamat butun yaqin Sharqdagi eng yirik savdo, moliyaviy va sayyohlik metropolining turmush tarzidir. Mahalliy amirlar butun dunyoga shaharning go'zalligi va ulug'vorligini namoyish etishga, shuningdek, unda ko'proq sayyohlarni jalb qiladigan yangi, ajoyib va \ u200b \ u200bg'ayrioddiy inshootlarni yaratishga intilishadi.

            Dubay savdo markazlaridagi gastronomik xilma - xillik va sizga dunyoning har qanday oshxonasini taklif qilishga tayyor bo'lgan eng yuqori darajadagi mahalliy restoranlar, hatto hayotlarida hamma narsani sinab ko'rganlarni ham hayratda qoldiradi.`
          },
          stambul:{
            title:'Istanbul',
            text:`Asrlar davomida Istanbulda bir nechta madaniyat o'z izini qoldirdi. Bugun siz ularning ta'sirini o'z ko'zingiz bilan ko'rishingiz mumkin: shunchaki uning "mahallasi" (mahallalari) bo'ylab sayr qiling. Sultonahmet tumanining muqaddas joylaridan va 19-asr Evropasini eslatuvchi nafis Beyoğludan tortib, Kadikei tumanidagi gavjum klub jamiyati va futbol ishqibozlari to'planadigan Beshiktash tumanidagi ko'chalargacha, nima uchun Istanbul shunchaki shahar emas, balki bir nechta shahar ekanligini taxmin qilish qiyin emas..`,
          },
          tbilisi:{
            title:'Tbilisi',
            text:`Mtkvari (kura) daryosi bo'yida joylashgan Tbilisi nafaqat Gruziyaning poytaxti, balki boy tarixga ega shahardir. Bu yil Arab ko'rfazi Arab hamkorlik Kengashi mamlakatlari fuqarolari uchun viza cheklovlari bekor qilindi, shuning uchun siz ushbu ajoyib shaharga albatta tashrif buyurishingiz kerak.

            Buyuk Pushkin bir vaqtlar Tbilisini "sehrli chekka"deb atagan. Bugungi kunda u o'zining jonli madaniyati va diqqatga sazovor joylari tufayli Gruziyaning eng yirik shahri va mashhur sayyohlik maskani hisoblanadi.

            Afsonada aytilishicha, Tbilisi Gruziya qiroli Vaxtang I Gorgasali tomonidan ushbu joylarda ov paytida tashkil etilgan. Butun tarixi davomida shahar o'zining iqtisodiy va strategik afzalliklaridan foydalanishga intilayotgan bosqinchilar qo'li bilan 29 martadan ko'proq vayron qilingan. Ammo har safar Tbilisi qayta tiklandi, bu, albatta, uning boy ko'p asrlik tarixida o'z izini qoldirdi.

            Shaharning noyob tarixi tufayli Tbilisida ko'plab diqqatga sazovor joylar mavjud. Sayyohlarni Art Deco uslubidagi binolar va eski shahar cherkovlari kutmoqda. Tbilisida sayr qilish, gavjum shaharning yuragini tomosha qilish va Gruziya xalqining urf-odatlari bilan tanishish juda qiziq.`,
          },
          malasiya:{
            title:'Kuala-Lumpur',
            text: `Kuala-Lumpur-Osiyo va Okeaniya o'rtasidagi darvoza, shahar bir yarim asr davomida konchilar qishlog'idan qudratli metropolga gullab-yashnagan ekzotik gulga o'xshaydi. Ekvatorial o'rmonlar bilan qoplangan tog'lar bilan o'ralgan pasttekislik vodiysida joylashgan Kuala Lumpur, Osiyo yo'lbarsi kabi, uning atrofida sodir bo'layotgan hamma narsani kuzatib boradi. Bu yerda Klang va Gombak daryolari qo'shilib, Malakka bo'g'ozlariga quyiladi. Uning qudratining ramzi-shahar manzarasidan yuqoriga ko'tarilgan Petronas egizak minoralari. Bu qarama-qarshiliklar shahri bo'lib, u erda turli xalqlar, tillar va dinlar birlashib, iqtisodiy va madaniy hayot to'qnashadi. Ammo bu nafaqat sayyohlarni jalb qiladi. Malakka bo'g'ozining iliq suvlari bilan yuvilgan doim yashil o'rmonlar, tepalikli relyef va oq va oltin qumli ekvatorial plyajlar ekzotik dam olishning eng murakkab bilimdonini hayratda qoldiradi.`,
          },
          bangkok:{
            title:'Bangkok',
            text:`Bangkokda har bir sayyoh o'ziga yoqadigan narsani topadi. Tarixiy diqqatga sazovor joylarni sevuvchilar katta saroyga ekskursiya qilishadi va sifatli xarid qilishni biluvchilar Terminal 21 kabi zamonaviy savdo markazlariga borishadi. Tailand poytaxti eng mashhur sayyohlik yo'nalishlari reytingida birinchi o'rinni egallab, boy madaniy merosi, jonli tungi hayoti, jahon darajasidagi restoranlari va ajoyib narxlari bilan ajablantiradi. Bangkokga borishning eng yaxshi vaqti, shahar bo'ylab qanday sayohat qilish, qaysi diqqatga sazovor joylarga tashrif buyurish va qaysi hududda qolish haqida bilib oling.`,
          },
          baku:{
            title:'Boku shahri',
            text:`Bokuning tarixiy markazi o'zining notinch o'tmishini eslaydi-shahar buyuk ipak yo'lining porti bo'lgan davrdan sovet davridagi neft bumigacha. Eski shahar xiyobonlar, masjidlar, tarixiy binolar va istehkomlarning qoldiqlari, shu jumladan shirvanshohlar saroyi va hozirda YUNESKOning Butunjahon merosi ro'yxatiga kiritilgan qiz minorasi labirintidir. Bu shunchaki tarixiy diqqatga sazovor joy emas: shahar o'zining tasviriy san'ati va madaniy o'yin-kulgilari, shuningdek, jonli tadbirkorlik sektori bilan mashhur.`,
          },
          milan:{
            title:'Milan shahri',
            text:`Milan haqida gapirganda aqlga kelgan birinchi narsa bu xarid qilishdir. Buning ajablanarli joyi yo'q, chunki bu erda sotuvlar yiliga ikki marta bo'lib o'tadi va har kvadrat metr uchun moda butiklari soni Evropadagi eng katta hisoblanadi. Moda haftaliklari, zamonaviy italiyaliklar va italiyaliklar, shovqinli ko'chalar, hayotning tez sur'ati – Milan Italiyaning boshqa shaharlaridan tubdan farq qiladi. Hatto bu erda qahva ham zaif, hatto sut bilan va hatto kechqurun ham xizmat qiladi - haqiqiy italiyaliklar uchun kechirilmas erkinlik. Ammo Milan hamma narsani kechirishi mumkin, chunki bu shahar Italiyada biz juda yaxshi ko'radigan narsalarni birlashtiradi: tarix, arxitektura va san'at, oshxona va, albatta, benuqson uslub.`,
          },
          paris:{
            title:'Parij',
            text:`Parij romantik sayohat uchun eng yaxshi shahar sifatida obro'ga ega. Biroq, tashrif buyuruvchilar aslida shaharning o'zidan boshlarini yo'qotadilar. Tosh va temirdan yasalgan ajoyib binolar, piyodalar yo'laklari, shinam kafelar, Sena daryosining burilishli qirg'oqlari — o'zingizni kino kabi his eting. Biroq, shaharning jozibasi tashqi ko'rinish bilan cheklanmaydi. Mahalliy oshxona cheksiz xilma-xilligi bilan mashhur. Sharobdagi suvli va qoniqarli xo'roz, oltin yog'li kruvasanlar ... bu erda zamonaviy termoyadroviy taomlar va original xalqaro taomlar ham sinab ko'rishga arziydi. (Ishoning, bu shaharda ajoyib falafel tayyorlanadi.) Va Parij ruhi xiyobonlar bo'ylab sayr qilishni, ko'plab muzeylarga qarashni va do'konlarning labirintlarini o'rganishni taklif qiladi. Kechqurun yorqin Eyfel minorasi manzarasidan bahramand bo'lish uchun Mars maydoniga boring.`,
          },
        }
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
          adress:'Tashkent, st. Shota Rustaveli, 63',
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
        contact_us:['Contact us','We are in touch: +99871-253 9900'],
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