import { Item, Button } from './ContactList.styled';
import { useDeleteContactsMutation } from 'redux/contactsQuery/contactAPI';

const ContactListItem = ({ id, name, number }) => {
  // РТК Query (логіка кнопки видалення)
  const [deleteContact, { isLoading: isDeleting }] =
    useDeleteContactsMutation();

  return (
    <Item>
      {name}: {number}
      <Button onClick={() => deleteContact(id)} disabled={isDeleting}>
        {isDeleting ? 'Deleting...' : 'Delete'}
      </Button>
    </Item>
  );
};

export default ContactListItem;
