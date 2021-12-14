import { Container } from 'react-bootstrap';

const HomePage = () => {
  return (
    <Container className="my-auto">
      <h1>@Polyms/electron-boilerplate</h1>
      <div className="Hello">
        <a
          href="https://electron-react-boilerplate.js.org/"
          target="_blank"
          rel="noreferrer"
          className="btn btn-outline-primary"
        >
          <span role="img" aria-label="books" className="me-2">
            📚
          </span>
          Read our docs
        </a>
      </div>
    </Container>
  );
};

export default HomePage;
