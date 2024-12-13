import { useDispatch, useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import css from "../ContactList/ContactList.module.css";
import { useEffect } from "react";
import Contact from "../Contact/Contact";
import { fetchContacts } from "../../redux/contacts/operations";

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
