<template>
  <q-layout view="lHh Lpr lFf" class="main-container shadow-10" container>
    <q-header class=" bg-white text-black">
      <q-toolbar>
        <q-btn flat round dense :icon="showMenu ? 'close' : 'menu'" class="q-mr-sm lt-md">
          <q-menu class="bg-black text-white" v-model="showMenu" transition-duration="500" transition-hide="jump-up"
            transition-show="jump-down">
            <q-list style="min-width: 100px">
              <q-item clickable v-close-popup>
                <q-item-section>Teachings</q-item-section>
              </q-item>
              <q-item clickable v-close-popup>
                <q-item-section>Books</q-item-section>
              </q-item>
              <q-separator dark />
              <q-item clickable v-close-popup>
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
          <q-btn flat round dense color="blue-10" icon="mdi-facebook" class="q-mx-sm" size="sm" />
          <q-btn flat round dense color="blue" icon="mdi-twitter" class="q-mx-sm" size="sm" />
          <q-btn flat round dense color="red-8" icon="mdi-youtube" class="q-mx-sm" size="sm" />
          <q-btn flat round dense color="blue-7" icon="fas fa-paper-plane" class="q-mx-sm" size="xs" />
          <q-btn flat round dense color="grey-9" icon="mdi-radio" size="sm" />
        </div>


      </q-toolbar>
      <q-toolbar spellcheck inset>
        <!-- <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" /> -->

        <q-toolbar-title :style="$q.screen.gt.sm ? '' : 'text-align: center;'">
          <img src="https://www.livingwordmedia.org/wp-content/uploads/2018/09/lwm-logo-1.png"
            title="Bringing sons to glory" />
        </q-toolbar-title>
        <div v-for="i in 6" :key="i" class="q-pa-lg gt-sm">
          <b>Home</b>
        </div>
        <!-- <div>Quasar v{{ $q.version }}</div> -->
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
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
                <li v-for="i in 7" :key="i">
                  <div class="fs-13 ls-06 title-text">Want to
                    attend our Special Meetings in 2022?
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

export default defineComponent({
  name: "MainLayout",

  components: {

  },

  setup() {
    const leftDrawerOpen = ref(false);
    const showMenu = ref(false);
    return {
      showMenu,
      socials: [
        { name: "FaceBook", link: 'https://www.facebook.com/ShekinahAssemblyUnnCampusChurch' },
        { name: "Telegram", link: 'https://t.me/shekinahUNNlive?livestream' },
        { name: "Mixir Radio", link: 'https://t.me/shekinahUNNlive?livestream' },

      ],
      leftDrawerOpen,
      text: ref(''),
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
