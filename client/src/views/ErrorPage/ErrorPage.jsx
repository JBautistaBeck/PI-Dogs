import './ErrorPage.css';
import errorPage from "../../utils/error-Page.png"

function ErrorPage() {
  return (
    <div>
      <h1>Error on your endpoint, please go back and try again</h1>
      <img src={errorPage}></img>
    </div>
  );
}

export default ErrorPage;