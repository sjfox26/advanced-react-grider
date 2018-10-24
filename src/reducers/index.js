import { combineReducers } from 'redux';
import commentsReducer from 'reducers/comments';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from 'reducers';

import App from 'components/App';

ReactDOM.render(
  <Provider store={createStore(reducers, {})}>
      <App/>
  </Provider>, document.querySelector('#root')
);

export default combineReducers({
   comments: commentsReducer
});