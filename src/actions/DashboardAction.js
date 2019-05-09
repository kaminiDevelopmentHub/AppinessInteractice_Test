// import axios from 'axios';
import { DashboardType } from './ActionType';
import empData from '../../config/empData.json';

export function getEmpData() {
  return (dispatch) => {
    dispatch({
      type: DashboardType.EMPLOYE_LIST_SUCCESS,
      employee: empData.user
    });
  };
}
