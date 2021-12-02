export const profileSelector = (props) => (state) => {
  console.log("profileSelector", props);
  return state.profile;
};
export const profileSelectorSelector = (state) => {
  console.log("profileSelectorSelector");
  return state.profile;
};
