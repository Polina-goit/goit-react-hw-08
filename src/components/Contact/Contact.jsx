import css from "../Contact/Contact.module.css";
import { HiUser } from "react-icons/hi";
import { FaRegEdit } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { BsTrash } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, updateContact } from "../../redux/contacts/operations";
import {
  selectIsDeletingContact,
  selectIsEditingContact,
} from "../../redux/contacts/selectors";
import { CircularProgress } from "@mui/material";
import { useState } from "react";
import ContainerModalForm from "../ContainerModalForm/ContainerModalForm";
import ContactEditor from "../ContactEditor/ContactEditor";
import ConfirmForm from "../ConfirmForm/ConfirmForm";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const [confirm, setConfirm] = useState(false);
  const isDeleteContact = useSelector(selectIsDeletingContact) === id;
  const isEditContact = useSelector(selectIsEditingContact) === id;

  const handleDeleteItem = () => {
    dispatch(deleteContact(id));
  };
  const handleUpdateContact = (updatedData) => {
    dispatch(updateContact(updatedData));
  };
  const [update, setUpadate] = useState(false);
  const [currentContact, setCurrentContact] = useState(null);

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
      <div className={css.thumbBtn}>
        <button className={css.buttonAction} onClick={() => setConfirm(true)}>
          {isDeleteContact ? (
            <CircularProgress size={15} />
          ) : (
            <>
              <BsTrash className={css.iconContact} size="15" /> Delete
            </>
          )}
        </button>
        <button
          className={css.buttonAction}
          onClick={() => {
            setCurrentContact({ id, name, number });
            setUpadate(true);
          }}
        >
          {isEditContact ? (
            <CircularProgress size={15} />
          ) : (
            <>
              <FaRegEdit className={css.iconContact} size="15" /> Edit
            </>
          )}
        </button>
      </div>
      <ContainerModalForm visible={confirm} setVisible={setConfirm}>
        <ConfirmForm onClick={handleDeleteItem} setVisible={setConfirm} />
      </ContainerModalForm>

      <ContainerModalForm visible={update} setVisible={setUpadate}>
        <ContactEditor
          updateContact={handleUpdateContact}
          contact={currentContact}
          setVisible={setUpadate}
        />
      </ContainerModalForm>
    </>
  );
};

export default Contact;
