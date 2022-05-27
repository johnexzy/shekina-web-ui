import axios from "axios";

export async function fetchIndex(context) {
  try {
    await axios.get(`/index`).then(response => {
      context.commit('setLanding', response.data)
      console.log(response.data)
    })
  } catch (error) {
    console.log(error)
  }
}
