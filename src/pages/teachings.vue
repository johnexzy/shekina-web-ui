<template>
  <q-page class="container">
    <q-card class="card w-100" flat square>

      <q-card-section class="q-pa-lg">
        <h4 class="tt text-weight-bold text-capitalize">Teachings</h4>
        <span class="liner"></span>
      </q-card-section>
      <q-card-section class="q-pa-lg">
        <div class="row">
          <div class="col-12 col-md-6 col-sm-6 q-pa-md" v-for="i in 10" :key="i">
            <div class="fit row inline justify-start items-stretch content-start cursor-pointer">

              <q-img :src="'https://placeimg.com/500/300/' + i" class="square q-mr-md" spinner-color="primary"
                spinner-size="82px" />
              <div class="col self-start wrap q-ml-sm text-weight-bold text-black-50 teaching_title">
                CHARIS CAMPMEETING 2022 – GOD’S RESTING PLACE
              </div>
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
      current: 4
    }
  }
}
</script>
