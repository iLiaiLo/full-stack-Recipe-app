import "./statusPages.css";

const ErrorPage = ({ error }) => {
  if (error.status !== 200) {
    return (
      <div className="error-page">
        {error.status} {error.statusText}
      </div>
    );
  }
  return <div className="error-page">{error.message}</div>;
};

export default ErrorPage;
