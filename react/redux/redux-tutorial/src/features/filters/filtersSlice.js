export const StatusFilters = {
  All: "All",
  Active: "Active",
  Completed: "Completed",
};

export const availableColors = ["green", "blue", "orange", "purple", "red"];

const initialState = {
  status: "All",
  colors: [],
};

export const FILTER_CHANGED = "filters/statusChanged";
export const COLOR_CHANGED = "filters/colorChanged";

const filtersReudcer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_CHANGED: {
      return { ...state, status: action.payload };
    }
    case COLOR_CHANGED: {
      switch (action.payload.changeType) {
        case "added":
          if (state.colors.includes(action.payload.color)) {
            return state;
          }
          return { ...state, colors: [...state.colors, action.payload.color] };
        case "removed":
          if (!state.colors.includes(action.payload.color)) {
            return state;
          }
          const colors = state.colors.filter(
            (color) => color !== action.payload.color
          );
          return { ...state, colors };
        default:
          return state;
      }
    }
    default: {
      return state;
    }
  }
};

export default filtersReudcer;
