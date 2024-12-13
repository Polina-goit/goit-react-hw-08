import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ContactList from "../../components/ContactList/ContactList";
import ContactForm from "../../components/ContactForm/ContactForm";

import SearchBox from "../../components/SearchBox/SearchBox";
import css from "./ContactsPage.module.css";
import DocumentTitle from "../../DocumentTitle";
import { fetchContacts } from "../../redux/contacts/operations";

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("eff");
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
