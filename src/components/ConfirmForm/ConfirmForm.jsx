import css from "./ConfirmForm.module.css";

const ConfirmForm = ({ onClick, setVisible }) => {
  return (
    <>
      <p className={css.modalDelete}>
        Do you really want to delete the contact?
      </p>
      <div className={css.thumbBtnAction}>
        <button className={css.btnAction} type="button" onClick={onClick}>
          Yes
        </button>
        <button
          className={css.btnAction}
          type="button"
          onClick={() => setVisible(false)}
        >
          No
        </button>
      </div>
    </>
  );
};

export default ConfirmForm;
