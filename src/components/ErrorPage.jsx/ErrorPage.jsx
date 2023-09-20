import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
//   console.log(error);

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      {error.status === 404 && (
        <div>
          <h3>404 page Not Found</h3>
          <p>Go Back to Home</p>

          <Link to="/">
            <button>Home</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ErrorPage;
