import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

import { Title } from 'components/App.styled';
import { useSelector } from 'react-redux';
import { selectError, selectLoading } from 'redux/contacts/selector';
import { Loader } from 'components/Loader/Loader';
import styled from 'styled-components';

export const App = () => {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <div>
      <Title>Phonebook</Title>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />
      {error && <StyledError>{error}</StyledError>}
      {loading && <Loader />}
      <ContactList />
    </div>
  );
};

const StyledError = styled.h2`
  display: flex;
  justify-content: center;
  color: #4d4dcd;
`;
