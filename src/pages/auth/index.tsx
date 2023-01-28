import { Col, Row } from 'react-bootstrap';
import ImageSide from './image-side';
import ValidationSchema from './login';
import './index.style.css';
import { Toaster } from 'react-hot-toast';

const AuthPage = () => {
  return (
    <div>
      <Row className="vh-100 align-items-center justify-content-center bg-white">
        <Col lg={6}>
          <ValidationSchema />
        </Col>
        <Col
          lg={6}
          className="d-none vh-100 d-lg-flex align-items-center justify-content-center image_content "
        >
          <ImageSide />
        </Col>
      </Row>
      <Toaster position="bottom-center" />
    </div>
  );
};

export default AuthPage;
