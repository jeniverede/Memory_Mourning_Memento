/* add some inline styling */

export function Error() {
  return (
    <div>
      <h1 className="secondary-text-bold-dark center-align" style={{ margin: "1rem 0"}}>404 - Page Not Found</h1>
      <h2 className="secondary-text-reg-dark center-align">Sorry, the page you are looking for does not exist.</h2>
    </div>
  );
}

export default Error;
