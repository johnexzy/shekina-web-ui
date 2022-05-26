<template>
  <q-page class="container">
    <q-card class="card w-100" flat square>

      <q-card-section class="q-pa-lg">
        <h4 class="tt text-weight-bold text-capitalize">Videos</h4>
        <span class="liner"></span>
      </q-card-section>
      <q-card-section class="q-pa-lg">
        <div class="flex flex-center">
          <iframe width="1028" height="578" src="https://www.youtube.com/embed/O84tUSq9fbc" title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        </div>
        <div class="text-center q-my-lg">
          <q-btn color="red" icon="mdi-youtube" flat label="Subscribe Now" @click="onClick" />
        </div>
      </q-card-section>
      <q-card-section class="q-pa-lg">
        <div class="row">
          <div class="col-12 col-md-4 col-sm-6 q-pa-md" v-for="i in 9" :key="i">
            <q-card class="my-card" flat>
              <img :src="teaching.image" class="rectangle">
              <q-card-section>
                <div class="fs-12 text-center text-capitalize ls-06">{{ teaching.title }}</div>
              </q-card-section>
            </q-card>
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
        image: 'https://livingword.s3.us-west-2.amazonaws.com/Album+Arts/CCM+2022+-+The+Mandate+(As+we+go).jpeg',
        title: 'CHARIS CAMPMEETING 2022 – THE MANDATE (AS WE GO)',
        slug: 'helloworld'
      }
    }
  }
}
</script>
