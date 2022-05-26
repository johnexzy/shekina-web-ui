<template>
  <q-page class="container">
    <q-card class="card w-100" flat square>

      <q-card-section class="q-pa-lg">
        <h4 class="tt text-weight-bold text-capitalize">Ebooks</h4>
        <span class="liner"></span>
      </q-card-section>
      <q-card-section class="q-pa-lg">
        <div class="row">
          <div class="col-12 col-md-3 col-sm-6 q-pa-md" v-for="i in 6" :key="i">
            <div class="flex flex-center">
              <q-card class="my-card square" :style="`background: url('${teaching.image}')`" flat>
                <q-card-section class="flex ebook-title">
                  <div class="fs-12 text-center text-capitalize text-weight-bold text-white ls-06 title-text">{{
                      teaching.title
                  }}
                  </div>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </div>
      </q-card-section>
      <q-separator spaced inset dark />
      <q-card-section>
        <div class="flex flex-center">
          <q-pagination v-model="current" color="black" :max="10" :max-pages="6" direction-links boundary-numbers />

        </div>

      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  data() {
    return {
      current: 4,
      teaching: {
        image: 'https://www.livingwordmedia.org/old/img/album-cover/e-book.png',
        title: 'CHARIS CAMPMEETING 2022 – THE MANDATE (AS WE GO)',
        slug: 'helloworld'
      }
    }
  }
}
</script>
