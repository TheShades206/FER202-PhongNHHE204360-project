import { Carousel } from "react-bootstrap";
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

const Banner = () => {
  return (
    <Carousel fade className="shadow-sm">
      <Carousel.Item style={{ height: "450px" }}>
        <img
          className="d-block w-100 h-100"
          src={banner1}
          alt="First slide"
          style={{ objectFit: "cover" }}
        />
        <Carousel.Caption className="bg-dark bg-opacity-50 rounded p-4 mb-5">
          <h1 className="fw-bold text-uppercase text-warning">
            FASHION COLLECTION 2026
          </h1>
          <p className="fs-5 mb-0 text-white">
            Discover the latest fashion trends for 2026
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item style={{ height: "450px" }}>
        <img
          className="d-block w-100 h-100"
          src={banner2}
          alt="Second slide"
          style={{ objectFit: "cover" }}
        />
        <Carousel.Caption className="bg-dark bg-opacity-50 rounded p-4 mb-5">
          <h1 className="fw-bold text-uppercase text-warning">
            SUMMER SALES UP TO 50%
          </h1>
          <p className="fs-5 mb-0 text-white">
            Enjoy special discounts on selected products
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item style={{ height: "450px" }}>
        <img
          className="d-block w-100 h-100"
          src={banner3}
          alt="Third slide"
          style={{ objectFit: "cover" }}
        />
        <Carousel.Caption className="bg-dark bg-opacity-50 rounded p-4 mb-5">
          <h1 className="fw-bold text-uppercase text-warning">NEW ARRIVALS</h1>
          <p className="fs-5 mb-0 text-white">
            Explore our newest clothing collection
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
