import axios from 'axios'

export const RECEIVEDREFERRALS = 'RECEIVEDREFERRALS'
export const REFERRALADDED = 'REFERRALADDED';
export const REFERRALUPDATED = 'REFERRALUPDATED';
export const REFERRALDELETED = 'REFERRALDELETED';
export const ERROR = 'ERROR';


export const getReferrals = () => {
  return dispatch => {
    axios.get('api/')
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
    axios.post('api/', { title })
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
    axios.put(`api/${id}`, { title })
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
    axios.delete(`api/${id}`)
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
    axios.put(`api/count/${id}`)
      .then(() => {
        return;
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: error })
      })
  }
}