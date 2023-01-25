import { Formik, Form, ErrorMessage, Field } from 'formik';
import { SignupSchema } from '../../schemas/auth.schema';
import { Button, Row, Col } from 'react-bootstrap';
import { loginRequest } from '../../_helpers/login.request';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

let loginFields: string[] = ['name', 'contact', 'email'];

const LoginSchema = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <div className="text-center">
      <h1>Log in</h1>
      <Formik
        initialValues={{
          name: '',
          contact: '',
          email: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
          localStorage.setItem('credentials', JSON.stringify(values));
          loginRequest(values, setLoading, navigate);
        }}
      >
        {() => (
          <Form className="w-50 mx-auto">
            <Row className="gap-3">
              {loginFields.map((item: string, index: number) => (
                <Col key={index} xl={12} className="mt-3">
                  <Field
                    name={item}
                    placeholder={item}
                    className="w-100 py-2 px-1 border rounded"
                  />
                  <ErrorMessage
                    name={item}
                    component="div"
                    render={msg => (
                      <div className="text-danger small">{msg}</div>
                    )}
                  />
                </Col>
              ))}
              <Col xl={12} className="mt-3">
                <Button className="w-100 py-2" type="submit">
                  {loading && <i className="fa fa-spinner fa-spin"></i>}
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginSchema;
