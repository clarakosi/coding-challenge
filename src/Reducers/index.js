import {
  RECEIVEDREFERRALS,
  REFERRALADDED,
  REFERRALUPDATED,
  REFERRALDELETED,
  ERROR
} from "../Actions";
const initialState = {
  referrals: [],
  error: null
};

const linksReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVEDREFERRALS:
      return { ...state, referrals: action.payload };
    case REFERRALADDED:
      return { ...state, referrals: [...state.referrals, action.payload] };
    case REFERRALDELETED:
      return {
        ...state,
        referrals: state.referrals.filter((referral) => {
          return referral.id !== action.payload;
        })
      };
    case REFERRALUPDATED:
      return {
        ...state,
        referrals: state.referrals.map((referral) => {
          if (referral.id === action.payload.id) {
            return action.payload;
          }
          return referral;
        })
      };
    case ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default linksReducer;
