import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import { ContainerBody, Title } from 'components/App/App.styled';
import { useFetchContactsQuery } from 'redux/contactsQuery/contactAPI';
import Loader from 'utils/Loader';

const Contacts = () => {
  // РТК Query (отримання данних з беку)
  const { data, isFetching } = useFetchContactsQuery();

  return (
    <>
      <ContainerBody>
        <Title>All contacts</Title>

        <Filter />
        {isFetching && <Loader />}
        {data && <ContactList contacts={data} />}
        <ToastContainer />
      </ContainerBody>
    </>
  );
};

export default Contacts;
