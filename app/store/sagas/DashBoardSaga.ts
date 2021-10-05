/* Redux saga class
 * logins the user into the app
 * requires username and password.
 * un - username
 * pwd - password
 */
import { call, put } from 'redux-saga/effects';
// import { delay } from 'redux-saga';

import { Alert } from 'react-native';
import Dashboard from 'app/services/Dashboard';
import * as DashboardActions from 'app/store/actions/DashboardActions';

// Our worker Saga that logins the user
export default function* loginAsync() {
  yield put(DashboardActions.enableLoader());

  //how to call api
  const response = yield call(Dashboard, 20, 0);
  //mock response

  if (response.success) {
    yield put(DashboardActions.onPokemonResponse(response.data));
    yield put(DashboardActions.disableLoader());

    // no need to call navigate as this is handled by redux store with SwitchNavigator
    //yield call(navigationActions.navigateToHome);
  } else {
    yield put(DashboardActions.disableLoader());
    setTimeout(() => {
      Alert.alert('Pokemon', response.message);
    }, 200);
  }
}
