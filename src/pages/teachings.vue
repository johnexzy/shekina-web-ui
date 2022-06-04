<template>
  <q-page class="container">
    <q-card class="card w-100" flat square>

      <q-card-section class="q-pa-lg">
        <h4 class="tt text-weight-bold text-capitalize">Teachings</h4>
        <span class="liner"></span>
      </q-card-section>
      <q-card-section class="q-pa-lg">
        <div class="row">
          <router-link class="col-12 col-md-6 col-sm-6 q-pa-md text-decoration-none" v-for="t, i in Teachings.data"
            :key="i" :to="{ name: 'teaching', params: { slug: t.short_url } }">
            <!-- <div  @click="navigate" @keypress.enter="navigate"> -->
            <div class="fit row inline justify-start items-stretch content-start cursor-pointer">

              <q-img :src="baseUrl + '' + t.images[0]" class="square q-mr-md" spinner-color="primary"
                spinner-size="82px" />
              <div class="col self-center justify-between wrap q-ml-sm teaching_title">
                <p class="text-weight-bold text-black-50 q-mb-md">{{ t.teaching_title }}</p>
                <p class=" text-italic text-grey-8">{{ truncate(t.short_details, 60) }}</p>
              </div>
            </div>
            <!-- </div> -->
          </router-link>
        </div>
      </q-card-section>
      <q-separator spaced inset dark />
      <q-card-section>
        <div class="flex flex-center">
          <q-pagination v-model="current_page" color="black" :max="pagination.last_page" :max-pages="6" direction-links
            boundary-numbers />

        </div>

      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { date } from "quasar"
import { mapActions } from "vuex"
import { createMetaMixin } from "quasar"
export default {
  // name: 'PageName',
  preFetch({ store }) {
    return store.dispatch('teaching/fetchTeachings')
  },
  data() {
    return {
      // current_page:
      baseUrl: process.env.VUE_APP_API_BASE,
      allTeachings: [],
      loading: false,
      pagination: {
      }
    }
  },
  mixins: [
    createMetaMixin(function () {
      // "this" here refers to your component
      return {
        // assuming `this.myTitle` exists in your mixed in component
        title: 'Teachings - Shekinah UNN branch',
        meta: {
          description: { name: 'description', content: 'Gods words tought in accuracy' },
          keywords: { name: 'keywords', content: 'Local church, Teachings' },
          equiv: { 'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8' },
          // note: for Open Graph type metadata you will need to use SSR, to ensure page is rendered by the server
          ogTitle: {
            property: 'og:title',
            // optional; similar to titleTemplate, but allows templating with other meta properties
            template(ogTitle) {
              return `${ogTitle} - My Website`
            }
          }
        },
      }
    })
  ],
  computed: {
    Teachings() {
      return this.$store.getters['teaching/Teachings']
    },
    current_page: {
      set(value) {
        this.pagination.current_page = value
      },
      get() {
        return this.pagination.current_page
      }
    }
  },
  watch: {
    'pagination.current_page': function (page, oldPage) {
      // handler(page, oldPage) {
      if (oldPage !== null) {
        this.loading = true;
        this.$store.dispatch('teaching/fetchTeachings', page).then(() => {
          window.scrollTo({
            top: 100,
            left: 100,
            behavior: 'smooth'
          });
        })
      }

      // this.current_page = newVal.meta.current_page

    }
  },
  mounted() {
    // this.current_page = this.Teachings.meta.current_page
    console.log(this.Teachings)
    this.Teachings.data.length > 0
      ? (this.allTeachings = this.Teachings.data)
      : console.log('Leaderboard ', 'empty')
    this.pagination.current_page = this.Teachings.meta.current_page
    this.pagination.last_page = this.Teachings.meta.total_pages
  },
  methods: {
    ...mapActions('teaching', ['fetchTeachings']),
    formatDateString(d) {
      const fd = new Date(d);
      return date.formatDate(fd, "MMM D, YYYY");
    },
    truncate(t, n) {
      return t.slice(0, n) + "..."
    }
  },
}
</script>
