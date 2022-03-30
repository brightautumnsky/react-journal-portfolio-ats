function journalReducer(
  state = {
    journalInfo: null,
    loading: false,
    error: null,
    success: false,
    count: 0,
  },
  action
) {
  switch (action.type) {
    case "WRITE_JOURNAL":
      return {
        ...state,
        success: action.payload.success,
      };
    case "LIKE_JOURNAL":
      return {
        ...state,
        success: action.payload.success,
      };
    case "DELETE_JOURNAL":
      return {
        ...state,
        success: action.payload.success,
      };
    case "GET_JOURNALS":
      return { ...state, loading: true, error: null };
    case "SUCCESS_JOURNALS":
      return {
        ...state,
        journalInfo: action.payload.info,
        count: action.payload.count,
        success: action.payload.success,
        loading: false,
        error: null,
      };
    case "ERROR_JOURNALS":
      return {
        ...state,
        journalInfo: null,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
}

export default journalReducer;
