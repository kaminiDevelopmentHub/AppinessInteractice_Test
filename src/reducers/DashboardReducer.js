import { DashboardType } from '../actions/ActionType';

const DEFAULT_STATE = {
  employee: []
};

const setEmployee = (state, action) => {
  const newState = [];
  Object.assign(newState, state);
  newState.employee = action.employee;
  return newState;
};

export default function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case DashboardType.EMPLOYE_LIST_SUCCESS:
      return setEmployee(state, action);
    default:
      return state;
  }
}
