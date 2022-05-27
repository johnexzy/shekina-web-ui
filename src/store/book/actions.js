import axios from "axios";

export async function fetchBooks({ commit }) {
  try {
    await axios.get(`/book`).then(response => {
      commit('setBooks', response.data)
      console.log(response.data)
    })
  } catch (error) {
    console.log(error)
  }
}
export async function fetchBookByUrl({ commit }, short_url) {
  try {
    await axios.get(`/book/url/${short_url}`).then(response => {
      commit('setBook', response.data)
      console.log(response.data)
    })
  } catch (error) {
    console.log(error)
  }
}
