import styled from 'styled-components';

export const Contacts = styled.ul`
  display: flex;
  flex-direction: column;
  margin-left: 620px;
  margin-top: 80px;
  gap: 24px;
  font-size: 18px;
  font-weight: bold;
  color: rgb(67, 118, 169);
`;
export const ContactItem = styled.li`
  display: flex;
  gap: 20px;
`;

export const DeleteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 40px;
  border-radius: 12px;
  border-color: transparent;
  background-color: rgb(65, 115, 166);
  color: rgb(241, 247, 253);
  font-weight: bold;
  font-size: 16px;
`;
