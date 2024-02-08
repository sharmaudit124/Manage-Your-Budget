const initialState = {
  entries: [],
};

const budgetReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BUDGET_ENTRY':
      const newEntry = {
        ...action.payload,
        id: state.entries.length > 0 ? state.entries[state.entries.length - 1].id + 1 : 1,
      };

      return {
        ...state,
        entries: [...state.entries, newEntry],
      };

    default:
      return state;
  }
};

export default budgetReducer;
