import { call, put, select } from 'redux-saga/effects';
import * as signupActions from 'store/actions/action-types/signup-actions';
import * as statusActions from 'store/actions/action-types/status-actions';

import * as helper from '@common/utils/helper';
import {
  pushToDataLayer,
  pushToDataLayerGA4
} from '@common/components/TrackingUtils';

export function* submitForm(actions) {
  const state = yield select();
  const { ProjectName, EventLabel } = state.theme.data;
  try {
    const response = yield call(() =>
      fetch(`${actions.endPoint}`, {
        method: 'POST',
        body: Object.keys(actions.data).reduce((postData, key) => {
          postData.append(key, actions.data[key]);

          return postData;
        }, new FormData()),
      }),
    );

    //const responseBody = yield call(() => response.json());

    if (response.statusText === 'OK') {
      // if(responseBody.Status === 201){
      //   yield put({
      //     type: signupActions.SIGN_UP_SUCCESS,
      //   });
      // }else{
      //   yield put({
      //     type: signupActions.SIGN_UP_FAILED,
      //   });
      // }

      yield put({
        type: signupActions.SIGN_UP_SUCCESS,
      });

      yield put({ type: statusActions.SET_FORM_SUBMITTED, data: true });
      // Tracking
      if (ProjectName || EventLabel) {
        //console.log('submitted:', `${EventLabel ? EventLabel : ProjectName}`);
        pushToDataLayer({event:'petition_complete', petition_name:`${EventLabel ? EventLabel : ProjectName}`})
        pushToDataLayerGA4({
          event: 'custom_event',
          event_name: 'petition_complete',
          event_category: 'petitions',
          event_action: 'signup', 
          event_label: `${EventLabel ? EventLabel : ProjectName}`,
          custom_metric: 'petition_complete'
        });
      } else {
        console.log('Project undefined');
      }
    } else {
      yield put({
        type: signupActions.SIGN_UP_FAILED,
      });
      yield put({ type: statusActions.SET_FORM_SUBMITTED, data: true });
    }
  } catch (e) {
    console.log(`e`, e);
  }
}
