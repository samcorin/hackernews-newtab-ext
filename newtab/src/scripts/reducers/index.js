export var nameReducer = (state='', action) => {
  switch(action.type) {
    case 'CHANGE_NAME':
      return action.name;
    default:
      return state;
  }
}

export var dataReducer = (state=[], action) => {
  switch(action.type) {
    case 'ADD_FETCH_DATA':
      return [
        ...state,
        {
          data: action.data
        }
      ];
    default:
      return state;
  }
}
