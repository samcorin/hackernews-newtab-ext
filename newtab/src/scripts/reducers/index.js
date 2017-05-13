export var nameReducer = (state='', action) => {
  switch(action.type) {
    case 'CHANGE_NAME':
      return action.name;
    default:
      return state;
  }
}

export var dataReducer = (state=[], action) => {
  // console.log(action)
  switch(action.type) {
    // case 'START_FETCH_DATA':
    //   return {
    //     isFetching: true
    //   };
    // case 'COMPLETE_FETCH_DATA':
    //   return {
    //     isFetching: false,
    //     data: action.data
    //   };
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
