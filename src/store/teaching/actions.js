import axios from "axios";

export async function fetchTeachings({ commit }) {
  try {
    await axios.get(`/teaching`).then(response => {
      commit('setTeachings', response.data)
      console.log(response.data)
    })
  } catch (error) {
    console.log(error)
  }
}
export async function fetchTeachingByUrl({ commit }, short_url) {
  try {
    await axios.get(`/teaching/url/${short_url}`).then(response => {
      commit('setTeaching', response.data)
      console.log(response.data)
    })
  } catch (error) {
    console.log(error)
  }
}
