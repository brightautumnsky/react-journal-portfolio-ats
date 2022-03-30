export default function settingsReducer(state = {}, action) {
  switch (action.type) {
    case "SET_FONTSIZE":
      return { ...state, ...action.payload };
    case "SET_BACKGROUND":
      return { ...state, ...action.payload };
    case "SET_UPDATE":
      return { ...state, ...action.payload };
    case "SET_LIST":
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
