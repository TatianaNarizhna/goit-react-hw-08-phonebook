const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user.name;
const getIsLoadingCurrentUser = state => state.auth.isLoadingCurrentUser;

// const authSelectors = {
//     getIsLoggedIn,
//     getUserName,
// };

// eslint-disable-next-line import/no-anonymous-default-export
export default { getIsLoggedIn, getUserName, getIsLoadingCurrentUser };