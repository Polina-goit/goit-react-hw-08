import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
// import { selectContacts } from "../../redux/contactsSlice";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import { selectLoading } from "../../redux/contactsSlice";
// import { selectNameFilter } from "../../redux/filtersSlice";

import css from "../ContactList/ContactList.module.css";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <>
      <ul className={css.list}>
        {filteredContacts.map((contact) => (
          <li className={css.listItem} key={contact.id}>
            <Contact
              name={contact.name}
              number={contact.number}
              id={contact.id}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
