import React from 'react';
import { Input } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/contacts/contactsSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const onFilterValueChange = e => {
    dispatch(filterContacts(e.target.value));
  };

  return (
    <div>
      <Input
        type="text"
        placeholder=" Contact Name"
        name="filter"
        onChange={onFilterValueChange}
      />
    </div>
  );
};
