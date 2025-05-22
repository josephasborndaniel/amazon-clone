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
      const id = action.id;
      let newBasket = [...state.basket];
      const itemIndex = newBasket.findIndex(item => item.id === id);
      if (itemIndex >= 0) {
        newBasket.splice(itemIndex, 1);
      } else {
        console.warn(`Can't remove product with id ${id} as it's not in basket!`);
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
