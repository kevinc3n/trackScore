import { Carousel } from 'react-bootstrap';

function HomePage() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/path/to/image1.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/path/to/image2.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
    
    </Carousel>
  );
}

export default HomePage;
