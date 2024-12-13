import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ContactList from "../../components/ContactList/ContactList";
import ContactForm from "../../components/ContactForm/ContactForm";
import { fetchContacts } from "../../redux/contacts/contactsOps";
import SearchBox from "../../components/SearchBox/SearchBox";
import css from "./Contacts.module.css";
import DocumentTitle from "../../DocumentTitle";

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <section>
        <div className={css.bgImgContacts}></div>
        <DocumentTitle>Contacts page</DocumentTitle>
        <div className={css.positionSection}>
          <ContactForm />
          <SearchBox />
          <ContactList />
        </div>
      </section>
    </>
  );
};

export default ContactsPage;
