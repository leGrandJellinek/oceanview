<template lang="pug">
section.contacts
    h1.container.contacts-title Наши контакты
    .container.contacts-content
        .contacts-left
            .phone
                h2.contacts-sub-title Телефоный номер
                .contacts-link
                    i.fa-solid.fa-phone
                    a(href="tel:+998974749099") +998 (97) 4749099
            .mail
                h2.contacts-sub-title Корпоративная почта
                .contacts-link
                    i.fa-solid.fa-envelope
                    a(href="mailto:info@oceanview.uz") info@oceanview.uz
            .location
                h2.contacts-sub-title Основной адрес
                .contacts-link
                    i.fa-solid.fa-location-dot
                    a(href="https://goo.gl/maps/WpSePrghwgdSDStq5?coh=178573&entry=tt" target="_blank") г.Ташкент, Мирабадский район, ул. Афрасиеб,4а
        .contacts-right

            iframe.maps( src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d749.3261533957789!2d69.26838139610517!3d41.302236476660276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8adedfaf90cf%3A0x1ace9f511ea52bcc!2zNNCwINGD0LvQuNGG0LAg0JDRhNGA0L7RgdC40LDQsSwg0KLQsNGI0LrQtdC90YIgMTAwMDI1LCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e0!3m2!1sru!2sus!4v1683135001354!5m2!1sru!2sus' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade')



</template>

<script>
export default {
    setup () {


        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>