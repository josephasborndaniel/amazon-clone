export const initialState = {
  basket: [],
  user:null
  // add other initial state properties if needed
};

const reducer = (state, action) => {
  console.log(action);
  switch(action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case 'REMOVE_FROM_BASKET':
      const index = action.index;
      let newBasket = [...state.basket];
      if (index >= 0 && index < newBasket.length) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`Can't remove product at index ${index} as it's not in basket!`);
      }
      return {
        ...state,
        basket: newBasket,
      };
    // other action cases here

    case "SET_USER":
      return {
        ...state,
        user: action.user
      };

    default:
      return state;
  }
};

export default reducer;
