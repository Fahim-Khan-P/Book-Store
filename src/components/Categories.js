import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/Categories/CategoriesSlice';

const Categories = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  return (
    <div>
      <button type="button" className="status-btn" onClick={() => dispatch(checkStatus())}>Check Status</button>
      <h2 className="underConstruction">{categories}</h2>
    </div>
  );
};
export default Categories;
