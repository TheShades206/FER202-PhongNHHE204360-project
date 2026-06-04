import fptLogo from "../assets/fpt.png";

function Card() {
  return (
    <div className="row">
      <div className="col">

        <img src={fptLogo} className="img-fluid" alt="FPT Logo" />
      </div>
      <div className="col">
        <h4 className="fw-bold">Phong Huu - FPT Ha Noi</h4>
        <p>0399425206</p>
      </div>
    </div>
  );
}

export default Card;
