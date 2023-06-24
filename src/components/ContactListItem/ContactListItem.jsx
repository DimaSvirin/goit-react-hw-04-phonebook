import PropTypes from 'prop-types';
import { Contact, Name,  DeleteBtn } from "./ContactListItem.styled";

export const  ContactItem = ({ deleteRec, name, number, id }) => {
  return (
    <Contact>
      <Name>
        {name}: {number}
      </Name>
      <DeleteBtn onClick={() => deleteRec(id)}>Delete</DeleteBtn>
    </Contact>
  );
}

ContactItem.propTypes = {
  deleteRec: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};