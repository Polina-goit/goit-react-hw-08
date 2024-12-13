import { Link, useLocation } from "react-router-dom";
import css from "./NotFoundPage.module.css";
import DocumentTitle from "../../DocumentTitle";

const NotFoundPage = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";

  return (
    <>
      <DocumentTitle>Page not found</DocumentTitle>
      <section className={css.containerNotFound}>
        <div className={css.notFound}>
          <h1 className={css.notFoundTitle}>404</h1>

          <h2 className={css.notFoundTitleInform}>Page not found</h2>

          <p className={css.notFoundMessage}>
            The page you requesterd could not be found
          </p>
          <Link to={backLinkHref}>
            <button className={css.notFoundBtn}>Go to homepage</button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default NotFoundPage;
