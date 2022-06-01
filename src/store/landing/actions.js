import axios from "axios";

export async function fetchIndex(context) {
  try {
    await axios.get(`/index`).then((response) => {
      context.commit("setLanding", response.data);
      context.commit(
        "setAllTeachings",
        response.data.allTeachings.slice(0, 10)
      );
      console.log(response.data);
    });
  } catch (error) {
    console.log(error);
  }
}
