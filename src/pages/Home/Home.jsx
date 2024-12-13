import { NavLink } from "react-router-dom";
import css from "./Home.module.css";
import DocumentTitle from "../../DocumentTitle";

const Home = () => {
  return (
    <>
      <DocumentTitle>Phonebook</DocumentTitle>

      <section className={css.bgImg}>
        <div className={css.container}>
          <h1 data-aos="zoom-in" className={css.mainTitle}>
            Phone Book
          </h1>
          <NavLink
            data-aos="zoom-in"
            className={css.btnContacts}
            to="/contacts"
          >
            Go to contacts
          </NavLink>
        </div>
      </section>
    </>
  );
};

export default Home;
