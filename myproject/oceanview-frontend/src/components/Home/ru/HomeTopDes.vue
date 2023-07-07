<template>
  <section id="#actual-tours" class="destination-section">
    <div class="container">
      <div class="section-heading">
        <div class="row align-items-end">
          <div class="col-lg-7">
            <h5 class="dash-style">{{ activeLang.sections_descr[0] }}</h5>
            <h2 class="upper">{{ activeLang.sections_title[0] }}</h2>
          </div>
        </div>
      </div>
      <div class="destination-inner destination-three-column">
        <div class="row">
          <div class="col-lg-7">
            <div class="row cards-mob">
              <div class="col-sm-12 col-lg-6">
                <div class="desti-item overlay-desti-item">
                  <router-link to="/dubai"  class="desti-image">
                    <img
                      style="height: 35em"
                      src="https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZHViYWl8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                      alt=""
                    />
                  </router-link>
                  <div class="meta-cat bg-meta-cat">
                    <router-link to="/dubai" >{{
                      activeLang.directs[0].title
                    }}</router-link>
                  </div>
                  <div class="desti-content">
                    <h3>
                      <router-link to="/dubai" >{{
                        activeLang.directs[0].country
                      }}</router-link>
                    </h3>
                    <div class="rating-start" title="Rated 5 out of 4">
                      <span style="width: calc(17.5% * 4)"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-lg-6">
                <div class="desti-item overlay-desti-item">
                  <router-link to="/stambul"  class="desti-image">
                    <img
                      style="height: 35em"
                      src="@/assets/images/turkish.jpeg"
                      alt=""
                    />
                  </router-link>
                  <div class="meta-cat bg-meta-cat">
                    <router-link to="/stambul" >{{
                      activeLang.directs[1].title
                    }}</router-link>
                  </div>
                  <div class="desti-content">
                    <h3>
                      <router-link to="/stambul" >{{
                        activeLang.directs[1].country
                      }}</router-link>
                    </h3>
                    <div class="rating-start" title="Rated 5 out of 4">
                      <span style="width: calc(17.5% * 4)"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="row">
              <div class="col-md-6 col-lg-12 col-xl-12">
                <div class="desti-item overlay-desti-item">
                  <router-link to='/tbilisi'  class="desti-image">
                    <img
                      style="height: 16.5em; width: 100%"
                      src="@/assets/images/tblisi.jpeg"
                      alt=""
                    />
                  </router-link>
                  <div class="meta-cat bg-meta-cat">
                    <router-link to="/tbilisi" >{{
                      activeLang.directs[2].title
                    }}</router-link>
                  </div>
                  <div class="desti-content">
                    <h3>
                      <router-link to="/tbilisi" >{{
                        activeLang.directs[2].country
                      }}</router-link>
                    </h3>
                    <div class="rating-start" title="Rated 5 out of 5">
                      <span style="width: calc(17.5% * 5)"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-12 col-xl-12">
                <div class="desti-item overlay-desti-item">
                  <router-link to="/malasiya"  class="desti-image">
                    <img
                      style="height: 16.5em; width: 100%"
                      src="@/assets/images/malasia.jpeg"
                      alt=""
                    />
                  </router-link>
                  <div class="meta-cat bg-meta-cat">
                    <router-link to="/malasiya" >{{
                      activeLang.directs[3].title
                    }}</router-link>
                  </div>
                  <div class="desti-content">
                    <h3>
                      <router-link to="/malasiya" >{{
                        activeLang.directs[3].country
                      }}</router-link>
                    </h3>
                    <div class="rating-start" title="Rated 5 out of 4">
                      <span style="width: calc(17.5% * 4)"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="row">
              <div class="col-md-6 col-lg-12 col-xl-12">
                <div class="desti-item overlay-desti-item">
                  <router-link to="/baku"  class="desti-image">
                    <img
                      style="height: 16.5em; width: 100%"
                      src="@/assets/images/baku.jpg"
                      alt=""
                    />
                  </router-link>
                  <div class="meta-cat bg-meta-cat">
                    <router-link to="/baku" >{{activeLang.directs[5].title}}</router-link>
                  </div>
                  <div class="desti-content">
                    <h3>
                      <router-link to="/baku" >{{activeLang.directs[5].country}}</router-link>
                    </h3>
                    <div class="rating-start" title="Rated 5 out of 5">
                      <span style="width: calc(17.5% * 5)"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="row">
              <div class="col-md-6 col-lg-12 col-xl-12">
                <div class="desti-item overlay-desti-item">
                  <router-link to="/tailand" class="desti-image">
                    <img
                      style="height: 16.5em; width: 100%"
                      src="@/assets/images/phuket.jpg"
                      alt=""
                    />
                  </router-link>
                  <div class="meta-cat bg-meta-cat">
                    <router-link to="/tailand">{{activeLang.directs[6].title}}</router-link>
                  </div>
                  <div class="desti-content">
                    <h3>
                      <router-link to="/tailand">{{activeLang.directs[6].country}}</router-link>
                    </h3>
                    <div class="rating-start" title="Rated 5 out of 5">
                      <span style="width: calc(17.5% * 5)"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="btn-wrap d-flex btn-content justify-content-center align-items-center text-center"
        >
          <a href="#" class="button-primary">{{ activeLang.btns[1] }}</a>
          <a href="#" class="button-primary">{{ activeLang.btns[0] }}</a>
          <router-link to="/payment" class="button-primary">{{ activeLang.btns[2] }}</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">

import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['activeLang']),
  },
  
  // mounted() {
  //   new WOW({live: false}).init()
  // }
}
</script>

<style lang="scss" scoped></style>
