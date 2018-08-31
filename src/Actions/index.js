import axios from 'axios'

export const RECEIVEDREFERRALS = 'RECEIVEDREFERRALS'
export const REFERRALADDED = 'REFERRALADDED';
export const REFERRALUPDATED = 'REFERRALUPDATED';
export const REFERRALDELETED = 'REFERRALDELETED';
export const ERROR = 'ERROR';

const url ="https://tims-referral-app.herokuapp.com/api/";
export const getReferrals = () => {
  return dispatch => {
    axios.get(url)
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
    axios.post(url, { title })
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
    axios.put(`${url}${id}`, { title })
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
    axios.delete(`${url}${id}`)
      .then(() => {
        dispatch({ type: REFERRALDELETED, payload: id})
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: error })
      })
  }
}

export const pageVisited = id => {
  return dispatch => {
    axios.put(`${url}count/${id}`)
      .then(() => {
        return;
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: error })
      })
  }
}