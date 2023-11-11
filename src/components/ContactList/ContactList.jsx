import React, { useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactItem, Contacts, DeleteButton } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectFilter,
  selectLoading,
} from 'redux/contacts/selector';
import { deleteContactThunk, fetchDataThunk } from 'redux/contacts/operations';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataThunk());
  }, [dispatch]);

  const handleDelete = id => {
    dispatch(deleteContactThunk(id));
  };

  const getFilteredContacts = () => {
    return contacts.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <Contacts>
      {loading && <h1>loading...</h1>}
      {error && <h1>{error}</h1>}
      {filteredContacts.map(({ id, name, phone }) => (
        <ContactItem key={nanoid()}>
          {name}: {phone}
          <DeleteButton onClick={() => handleDelete(id)}>Delete</DeleteButton>
        </ContactItem>
      ))}
    </Contacts>
  );
};
