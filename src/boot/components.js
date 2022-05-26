import { boot } from "quasar/wrappers";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default boot(({ app }) => {
  app.component("Carousel", Carousel);
  app.component("Slide", Slide);
  app.component("Navigation", Navigation);
  app.component("Pagination", Pagination);
});
