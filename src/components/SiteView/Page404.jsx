import "./page404.css";
const Page404 = () => {
  return (
    <div className="container p-5">
      <div className="content-404 p-5 text-start">
        <div className="w-100 text-start img-404"></div>
        <div className="fw-bold fs-2">Hmmm… can't reach this page</div>
        <div className="fw-bold fs-5">
          Try:
          <ul className="fw-normal fs-5">
            <li> Checking the connection</li>
            <li> Checking the proxy and the firewall</li>
          </ul>{" "}
          ERR_CAUSE_I_DON'T_WANT
        </div>
      </div>
    </div>
  );
};

export default Page404;
