import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectFilteredContacts } from "../../redux/selectors";
import { selectLoading } from "../../redux/selectors";
import { selectNameFilter } from "../../redux/filtersSlice";

import css from "../ContactList/ContactList.module.css";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoading);

  return (
    <>
      {filteredContacts.length === 0 && !isLoading ? (
        <p className={css.infoText}>No contacts found 😢</p>
      ) : (
        <ul className={css.listContacts}>
          {filteredContacts.map((contact) => (
            <li className={css.itemContact} key={contact.id}>
              <Contact data={contact} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ContactList;
