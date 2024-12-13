import css from "../Contact/Contact.module.css";
import { HiUser } from "react-icons/hi";
import { FaPhone } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDeleteItem = () => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <div>
        <p>
          <HiUser />
          {name}
        </p>
        <p>
          <FaPhone />
          {number}
        </p>
      </div>
      <button className={css.button} onClick={() => handleDeleteItem(id)}>
        Delete
      </button>
    </>
  );
};

export default Contact;
