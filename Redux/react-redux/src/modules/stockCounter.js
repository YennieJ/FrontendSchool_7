export const sale = () => {
  return { type: "SALE" };
};

export const soldOut = () => {
  return { type: "SOLD_OUT" };
};

const initState = {
  message: "sale!",
};

const stockReducer = (state = initState, action) => {
  switch (action.type) {
    case "SALE": {
      return {
        ...state,
        message: "sale!",
      };
    }
    case "SOLD_OUT": {
      return {
        ...state,
        message: "sold out",
      };
    }
    default:
      return state;
  }
};

export default stockReducer;
