// import { db } from "../../Firebase/Firebase";
// import { doc, updateDoc } from "firebase/firestore";

// Global state variables
export const initialState = {
  basketId: null,
  basket: [],
  user: null,
};

// const addToBasket = (id, newBasket) => {
//   const docRef = doc(db, "basket", id);
//   updateDoc(docRef, newBasket)
//     .then((docRef) => {
//       console.log(
//         "A New Document Field has been added to an existing document"
//       );
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

// Get the total price of the basket
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "ADD_TO_BASKET":
      // logic for adding item to basket
      // addToBasket(state.basketId, [...state.basket, action.item]);
      return {
        ...state,
        basket: [...state.basket, action.item],
        basketId: state.basketId ? state.basketId : action.basketId,
      };
    case "REMOVE_FROM_BASKET":
      // logic for removing item from basket
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        // item exists
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id} as its not in the basket) `
        );
      }
      return { ...state, basket: newBasket };
    default:
      return state;
  }
};

export default reducer;
