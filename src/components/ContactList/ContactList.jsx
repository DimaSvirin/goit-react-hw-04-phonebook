import PropTypes from 'prop-types';
import { ContactStyle } from './ContactList.styled';
import { ContactItem } from 'components/ContactListItem/ContactListItem';

function ContactList({ filter, contacts, onDelete }) {
  const defineList = () => {
    const subStr = filter.toLowerCase();
    return contacts.filter(({ name }) => name.toLowerCase().includes(subStr));
  };

  return (
    <ContactStyle>
      {defineList().map(({ name, id, number }) => (
        <ContactItem
          id={id}
          key={id}
          number={number}
          name={name}
          deleteRec={id => onDelete(id)}
        />
      ))}
    </ContactStyle>
  );
}

ContactList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  contacts: PropTypes.arrayOf(Object).isRequired,
};

export default ContactList;