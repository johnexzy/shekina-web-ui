/*
export function someMutation (state) {
}
*/
export function setFeaturedPosts(state, posts) {
  state.featuredPosts = posts
}
export function setLoadingFeaturedPosts(state) {
  state.loadingFeaturedPosts = !state.loadingFeaturedPosts
}
export function setPost(state, post) {
  state.post = post
}
export function setAnnouncement(state, announcement) {
  state.announcement = announcement
}
export function setLoadingPost(state) {
  state.loadingPost = !state.loadingPost
}
export function setLoadingAnnouncement(state) {
  state.loadingAnnouncement = !state.loadingAnnouncement
}
export function setStickyPost(state, posts) {
  state.stickyPost = posts.posts[0]
}
export function setLoadingStickyPost(state) {
  state.loadingStickyPost = !state.loadingStickyPost
}
export function setCategories(state, categories) {
  state.categories = categories
}
export function setLoadingPostsByCategories(state) {
  state.loadingPostsByCategories = !state.loadingPostsByCategories
}
export function setPostsByCategories(state, postsByCategories) {
  state.postsByCategories = postsByCategories
}
export function setLoadingCategories(state) {
  state.loadingCategories = !state.loadingCategories
}
