import fptLogo from "../assets/fpt.png";

function Website() {
  return (
    <>
      <div
        className="p-2 mb-4 text-center text-white"
        style={{ backgroundColor: "orange" }}
      >
        <img
          src={fptLogo}
          alt=""
          className="w-25 mb-3 bg-white p-3 pe-4 ps-5"
        />
        <nav className="nav justify-content-center">
          <a className="nav-link text-white" href="#">
            Home
          </a>
          <a className="nav-link text-white" href="#">
            About
          </a>
          <a className="nav-link text-white" href="#">
            Contact
          </a>
        </nav>
      </div>

      <div className="text-center py-4">
        <h2 className="fw-bold text-dark ">About</h2>
        <p className="mb-5">This is the about section of the website.</p>

        <h2 className="fw-bold text-dark">Contact</h2>
        <p className="mb-4">
          For any inquiries, please contact us at example@example.com.
        </p>
      </div>

      <div
        className="p-4 text-white text-center"
        style={{ backgroundColor: "rgb(239, 156, 56)" }}
      >
        @2023 Website. All rights reserved!
      </div>
    </>
  );
}

export default Website;
