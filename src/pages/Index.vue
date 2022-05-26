<template>
  <q-page class="container">
    <q-card class="card w-100" flat square>
      <div class="row">
        <div class="col-12 col-lg-8 col-md-12 col-sm-12">
          <q-card-section class="q-pa-lg">
            <h4 class="tt text-weight-bold">LATEST UPLOADS</h4>
            <span class="liner"></span>
          </q-card-section>

          <q-card-section>
            <carousel ref="latestUpload" :itemsToShow="itemsToShow" :wrapAround="true" :autoplay="2000">
              <slide v-for="slide in 10" :key="slide" class="carousel__item">
                <img
                  src="https://livingword.s3.us-west-2.amazonaws.com/Album+Arts/CCM+2022+-+The+Mandate+(As+we+go).jpeg"
                  alt="">
              </slide>

              <template #addons>
                <navigation />
                <!-- <pagination /> -->
              </template>
            </carousel>
          </q-card-section>
        </div>
        <div class="col-12 col-lg-4 col-md-12 col-sm-12">
          <q-card-section class="q-pa-lg">
            <h4 class="tt text-weight-bold">ONLINE RADIO</h4>
            <span class="liner"></span>
          </q-card-section>
          <q-card-section>
            <div class="flex flex-center">
              <!-- <div class="row"> -->
              <h4>
                NOW PLAYING
              </h4>
              <!-- </div> -->

            </div>
            <div class="row justify-center">
              <q-btn color="pink" flat rounded label="PLAY RADIO" />
            </div>
            <div class="flex flex-right q-mt-lg fs-12">
              <a href="" target="_blank" class="text-decoration-none">Livingword is on Mixir</a>
            </div>
          </q-card-section>
        </div>
      </div>

      <hr class="q-ma-md">
      <q-card-section>
        <div class="row justify-center">
          <router-link href="" class="text-decoration-none text-weight-bold" to="/">VIEW FULL ALBUM LIST
          </router-link>
        </div>
        <q-space />
        <div class="row justify-center">
          <q-btn class="collection_span" flat no-caps rounded>All</q-btn>
          <q-btn class="collection_span" flat no-caps rounded v-for="c, i in collection" :key="i">{{ c.name }}</q-btn>
        </div>
        <div class="list_teachings">
          <div class="row">
            <div class="col-12 col-lg-3 col-md-6 col-sm-6" v-for="i in 12" :key="i">
              <div class="teaching_card q-pa-lg">
                <q-card class="my-card" flat>
                  <img :src="teaching.image">
                  <q-card-section>
                    <div class="text-h5 text-capitalize ls-06">{{ teaching.title }}</div>
                  </q-card-section>
                  <q-card-actions vertical align="left">
                    <q-btn flat label="Read more" />
                  </q-card-actions>
                </q-card>
              </div>
            </div>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageIndex",
  data() {
    return {
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
      collection: [
        {
          slug: 2018,
          name: '2018 Collection'
        },
        {
          slug: 2019,
          name: '2019 Collection'
        },
        {
          slug: 2020,
          name: '2020 Collection'
        },
        {
          slug: 2021,
          name: '2021 Collection'
        },
        {
          slug: 2022,
          name: '2022 Collection'
        },
      ],
      teaching: {
        image: 'https://livingword.s3.us-west-2.amazonaws.com/Album+Arts/CCM+2022+-+The+Mandate+(As+we+go).jpeg',
        title: 'CHARIS CAMPMEETING 2022 – THE MANDATE (AS WE GO)',
        slug: 'helloworld'
      }
    }
  },
  mounted() {
    window.addEventListener('resize', this.detectResize);
  },
  methods: {
    nextUploadSlide() {
      this.$refs.latestUpload.prev()
    },
    detectResize() {

      this.innerWidth = window.innerWidth;
      this.innerHeight = window.innerHeight;
      console.log(window.innerHeight)
    }
  },
  computed: {
    itemsToShow() {
      if (this.$q.screen.gt.md) {
        return (this.innerWidth * 3.5) / 1700
      }
      return (this.innerWidth * 5.5) / 1700
    }
  }
});
</script>
<style>
.carousel__prev,
.carousel__next {
  background-color: brown;
}
</style>
