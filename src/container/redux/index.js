const { compose, createStore } = require("redux");
const { default: allReducers } = require("./reducers");

const allStoreEnhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const store = createStore(allReducers, allStoreEnhancers);
export default store;
