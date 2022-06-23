import axios from "axios";
export async function search({ commit }, q) {
  try {
    const req = await axios.get(`/search/${q}`);
    console.log(req.data);
    commit("setSearch", req.data);
  } catch (error) {
    console.log(error);
  }
}
