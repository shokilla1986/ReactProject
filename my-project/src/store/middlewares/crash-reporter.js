export const crashReporter = (store) => (next) => (action) => {
  try {
    return next(action);
  } catch (error) {
    console.log("error", error, action);
  }
};
