import Carousel from 'react-bootstrap/Carousel';
import slides from '../datas/slides';

function PizzaSlide() {
  return (
    <Carousel>
      {/* Slide 1 */}
      <Carousel.Item>
        <img  src={slides[0].image} alt={slides[0].title} />
        <Carousel.Caption>
          <h2>{slides[0].title}</h2>
          <p>{slides[0].description}</p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Slide 2 */}
      <Carousel.Item>
        <img  src={slides[1].image} alt={slides[1].title} />
        <Carousel.Caption>
          <h2>{slides[1].title}</h2>
          <p>{slides[1].description}</p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Slide 3 */}
      <Carousel.Item>
        <img  src={slides[2].image} alt={slides[2].title} />
        <Carousel.Caption>
          <h2>{slides[2].title}</h2>
          <p>{slides[2].description}</p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Slide 4 */}
      <Carousel.Item>
        <img src={slides[3].image} alt={slides[3].title} />
        <Carousel.Caption>
          <h2>{slides[3].title}</h2>
          <p>{slides[3].description}</p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Slide 5 */}
      <Carousel.Item>
        <img  src={slides[4].image} alt={slides[4].title} />
        <Carousel.Caption>
          <h2>{slides[4].title}</h2>
          <p>{slides[4].description}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default PizzaSlide;