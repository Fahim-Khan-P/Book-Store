import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { checkStatus } from '../redux/Categories/CategoriesSlice';

const Categories = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.categoriesReducer);
  const CheckStatusHandler = () => {
    dispatch(checkStatus());
  };
  return (
    <div>
      <button type="button" onClick={CheckStatusHandler}>Check Status</button>
      <p>{status}</p>
    </div>
  );
};

export default Categories;
