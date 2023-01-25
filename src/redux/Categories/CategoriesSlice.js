const STATUS = 'STATUS';

const INITIAL_STATUS = '';

export const checkStatus = () => ({
  type: STATUS,
  payload: 'Under construction',
});

const categoriesReducer = (state = INITIAL_STATUS, action) => {
  switch (action.type) {
    case STATUS:
      return action.payload;
    default:
      return state;
  }
};

export default categoriesReducer;
