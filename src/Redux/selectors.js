export const selectContacts = (state) => state.tweets.follower.items;
export const selectIsFollower = (state) => state.tweets.user;
export const selectDisplayedItems = (state) => state.tweets.displayedItems;
export const selectItemsPerPage = (state) => state.tweets.follower.itemsPerPage;
export const selectCurrentPage = (state) => state.tweets.follower.currentPage;
export const selectOperetion = (state) => state.tweets.follower.operetion;
