/*
export function someGetter (state) {
}
*/

/**
 * Fetch All Posts~
 * @param {*} state
 * @returns
 */
export function FeaturedPosts(state) {
  return state.featuredPosts.posts
}

/**
 * Fetch post by slug
 * @return {Object} object
 */
export function Post(state) {
  return state.post
}
/**
 * Loading state for Posts
 * @param {*} state
 * @returns
 */
export function LoadingFeaturedPosts(state) {
  return state.loadingFeaturedPosts
}
/**
 * Fetch Sticky Post~
 * @param {*} state
 * @returns
 */
export function StickyPost(state) {
  return state.stickyPost
}
/**
 * Fetch All categories
* @param {*} state
 * @returns
 */
export function Categories(state) {
  return state.categories
}

/**
 * Fetch Posts by Categories
 * @param {*} state
 * @returns
 */
export function PostsByCategories(state) {
  return state.postsByCategories
}

/**
 * Show Loading for Posts by Categories
 * @param {*} state
 * @returns
 */
export function LoadingPostsByCategories(state) {
  return state.loadingPostsByCategories
}

/**
 * Show Loading for Categories
 * @param {*} state
 * @returns
 */
export function LoadingCategories(state) {
  return state.loadingCategories
}
/**
 * Fetch Announcement
 * @param {*} state
 * @returns Object
 */
export function Announcement(state) {
  return state.announcement
}
/**
 * Show Loading for StickyPost
 * @param {*} state
 * @returns Object
 */
export function LoadingStickyPost(state) {
  return state.loadingStickyPost
}
