import React, { useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactItem, Contacts, DeleteButton } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/contacts/selector';
import { deleteContactThunk, fetchDataThunk } from 'redux/contacts/operations';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

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
    <div>
      <Contacts>
        {filteredContacts.map(({ id, name, phone }) => (
          <ContactItem key={nanoid()}>
            {name}: {phone}
            <DeleteButton onClick={() => handleDelete(id)}>Delete</DeleteButton>
          </ContactItem>
        ))}
      </Contacts>
    </div>
  );
};
