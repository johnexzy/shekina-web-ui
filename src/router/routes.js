const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Index.vue") },
      { path: "teachings", component: () => import("pages/teachings.vue") },
      {
        path: "teaching/:slug",
        name: "teaching",
        component: () => import("pages/teaching.vue"),
      },
      { path: "videos", component: () => import("src/pages/videos.vue") },
      { path: "ebooks", component: () => import("pages/ebooks.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
