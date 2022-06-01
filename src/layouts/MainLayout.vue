<template>
  <q-layout class="main-container shadow-10" container>
    <q-header class=" bg-white text-black">
      <q-toolbar>
        <q-btn flat round dense :icon="showMenu ? 'close' : 'menu'" class="q-mr-sm lt-md">
          <q-menu class="bg-black text-white" v-model="showMenu" transition-duration="500" transition-hide="jump-up"
            transition-show="jump-down">
            <q-list style="min-width: 100px">
              <q-item clickable v-close-popup to="/">
                <q-item-section>Home</q-item-section>
              </q-item>
              <q-item clickable v-close-popup to="/teachings">
                <q-item-section>Teachings</q-item-section>
              </q-item>
              <q-item clickable v-close-popup to="/ebooks">
                <q-item-section>Books</q-item-section>
              </q-item>
              <q-separator dark />
              <q-item clickable v-close-popup to="/videos">
                <q-item-section>Videos</q-item-section>
              </q-item>
              <q-item clickable v-close-popup>
                <q-item-section>Blog</q-item-section>
              </q-item>
              <q-item clickable>
                <q-item-section>Socials</q-item-section>
                <q-item-section side>
                  <q-icon name="keyboard_arrow_right" />
                </q-item-section>

                <q-menu anchor="top end" self="top start">
                  <q-list>
                    <q-item v-for="s, n in socials" :key="n" dense clickable :href="s.link" target="_blank">
                      <q-item-section>{{ s.name }}</q-item-section>
                      <q-item-section side>
                        <q-icon name="open_in_new" size="xs" />
                      </q-item-section>
                    </q-item>
                  </q-list>
                </q-menu>

              </q-item>
              <q-separator dark />

            </q-list>
          </q-menu>
        </q-btn>
        <q-space></q-space>
        <q-input rounded outlined v-model="text" placeholder="Search..." dense class="nav-search-input">
          <template v-slot:append>
            <q-avatar icon="search" />
          </template>
        </q-input>
        <div class="gt-sm q-pa-md">
          <q-btn v-for="c, i in socials" :key="i" flat :title="c.name" round dense :color="c.color" :icon="c.icon"
            class="q-mx-sm" :size="c.size" :href="c.link" target="_blank" />
        </div>
      </q-toolbar>
      <q-toolbar spellcheck inset class="nav-menu">
        <!-- <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" /> -->

        <q-toolbar-title :style="$q.screen.gt.sm ? '' : 'text-align: center;'">
          <img src="~assets/logo.png" title="Bringing sons to glory" />
        </q-toolbar-title>
        <div class="q-pa-lg gt-sm">
          <router-link to="/" class="text-decoration-none">Home</router-link>
        </div>
        <div class="q-pa-lg gt-sm">
          <router-link to="/teachings" class="text-decoration-none">Teachings</router-link>
        </div>
        <div class="q-pa-lg gt-sm">
          <router-link to="/videos" class="text-decoration-none">Videos</router-link>
        </div>
        <div class="q-pa-lg gt-sm">
          <router-link to="/ebooks" class="text-decoration-none">Ebooks</router-link>
        </div>
        <div class="q-pa-lg gt-sm">
          <router-link to="" class="text-decoration-none">Blog</router-link>
        </div>
        <!-- <div>Quasar v{{ $q.version }}</div> -->
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
    <div class="text-black footer">
      <div class="row justify-between">
        <div class="col-12 col-lg-6 col-md-6 col-sm-12 q-pa-md">
          <q-card class="card" flat square>

            <q-card-section class="q-pa-lg">
              <h4 class="tt text-weight-bold text-capitalize">Recent news</h4>
              <span class="liner"></span>
            </q-card-section>
            <q-card-section class="q-pa-lg">
              <ul class="recent-news-footer">
                <li v-for="n, i in featuredPosts" :key="i">
                  <div class="fs-13 ls-06 title-text">
                    {{ n.title }}
                  </div>
                </li>
              </ul>

              <q-separator spaced inset dark />
            </q-card-section>

          </q-card>
        </div>
        <div class="col-12 col-lg-6 col-md-6 col-sm-12 q-pa-md">
          <q-card class="card" flat square>

            <q-card-section class="q-pa-lg">
              <h4 class="tt text-weight-bold text-capitalize">Like us on facebook</h4>
              <span class="liner"></span>
            </q-card-section>
            <q-card-section class="q-pa-lg text-center">
              <div class="fb-page" data-href="https://www.facebook.com/ShekinahAssemblyUnnCampusChurch"
                data-tabs="timeline" data-width="" data-height="" data-small-header="true"
                data-adapt-container-width="false" data-hide-cover="false" data-show-facepile="true">
                <blockquote cite="https://www.facebook.com/ShekinahAssemblyUnnCampusChurch"
                  class="fb-xfbml-parse-ignore"><a
                    href="https://www.facebook.com/ShekinahAssemblyUnnCampusChurch">Shekinah Assembly Unn, Campus
                    Church</a></blockquote>
              </div>
            </q-card-section>

          </q-card>
        </div>
      </div>
    </div>
    <div class="row q-pa-lg bg-pink-12 text-white">
      Copyright &copy; {{ (new Date).getFullYear() }} Shekinah Assembly Unn Campus Church. All rights reserved
    </div>
  </q-layout>
</template>

<script>

import { defineComponent, ref } from "vue";

export default {
  preFetch({ store }) {
    return (async () => {
      await store.dispatch("blog/fetchFeaturedPosts")
      await store.dispatch("blog/fetchCategories")
      await store.dispatch("blog/fetchAnnouncement")
    })()

  },
  name: "MainLayout",

  components: {

  },

  data() {


    return {
      showMenu: false,
      socials: [
        { name: "FaceBook", link: 'https://www.facebook.com/ShekinahAssemblyUnnCampusChurch', size: 'sm', icon: 'mdi-facebook', color: "blue-10" },
        { name: "Telegram", link: 'https://t.me/shekinahUNNlive?livestream', size: 'xs', color: "blue-7", icon: "fas fa-paper-plane" },
        { name: "Twitter", link: 'https://twitter.com/shekinahunn', size: 'sm', color: "blue", icon: "mdi-twitter" },
        { name: "Instagram", link: 'https://www.instagram.com/shekinahunn', size: 'sm', color: "pink-7", icon: "mdi-instagram" },
        { name: "Youtube", link: 'https://www.youtube.com/channel/UCbAnyTfkN1uSN4viPVx3crw', size: 'sm', color: "red-8", icon: "mdi-youtube" },
        { name: "Mixir Radio", link: 'https://t.me/shekinahUNNlive?livestream', size: 'sm', color: "grey-9", icon: "mdi-radio" },

      ],
      text: ''
    };
  },
  computed: {
    featuredPosts() {
      return this.$store.getters['blog/FeaturedPosts']
    },
    Announcement() {
      return this.$store.getters['blog/Announcement']
    },
  }
};
</script>
