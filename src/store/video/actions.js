import axios from "axios";

export async function fetchVideos({ commit }, page = 1) {
  try {
    console.log("fetchVideos");
    await axios.get(`/video/pages/${page}`).then((response) => {
      commit("setVideos", response.data);
      console.log(response.data);
    });
  } catch (error) {
    console.log(error);
  }
}
export async function fetchVideoByUrl({ commit }, short_url) {
  try {
    await axios.get(`/video/url/${short_url}`).then((response) => {
      commit("setVideo", response.data);
      console.log(response.data);
    });
  } catch (error) {
    console.log(error);
  }
}
