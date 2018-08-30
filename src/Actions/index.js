import axios from 'axios'

export const GETTINGREFERRALS = 'GETTINGREFERRALS';
export const RECEIVEDREFERRALS = 'RECEIVEDREFERRALS'

export const ADDINGREFERRAL = 'ADDINGREFERRAL';
export const REFERRALADDED = 'REFERRALADDED';

export const UPDATINGREFERRAL = 'UPDATINGREFERRAL';
export const REFERRALUPDATED = 'REFERRALUPDATED';

export const DELETINGREFERRAL = 'DELETINGREFERRAL';
export const REFERRALDELETED = 'REFERRALDELETED';

export const ERROR = 'ERROR';


export const getReferrals = () => {
  return dispatch => {
    dispatch({ type: GETTINGREFERRALS })
    axios.get('http://127.0.0.1:8000/api')
      .then(response => {
        dispatch({ type: RECEIVEDREFERRALS, payload: response.data })
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: error})
      })
  }
}

export const addReferral = title => {
  return dispatch => {
    dispatch({ type: ADDINGREFERRAL })
    axios.post('http://127.0.0.1:8000/api/', { title })
      .then(response => {
        dispatch({ type: REFERRALADDED, payload: response.data })
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: error })
      })
  }
}

export const updateReferral = (id, title) => {
  return dispatch => {
    dispatch({ type: UPDATINGREFERRAL })
    axios.put(`http://127.0.0.1:8000/api/${id}`, { title })
      .then(response => {
        dispatch({ type: REFERRALUPDATED, payload: response.data })
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: error })
      })
  }
}

export const deleteReferral = id => {
  return dispatch => {
    dispatch({ type: DELETINGREFERRAL })
    axios.delete(`http://127.0.0.1:8000/api/${id}`)
      .then(() => {
        dispatch({ type: REFERRALDELETED, payload: id})
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: error })
      })
  }
}