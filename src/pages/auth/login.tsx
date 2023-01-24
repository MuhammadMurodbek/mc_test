import { Formik, Form, Field, ErrorMessage } from 'formik';
import { SignupSchema } from '../../schemas/auth.schema';
import { Button, Row, Col } from 'react-bootstrap';

const LoginSchema = () => (
  <div>
    <h1>Signup</h1>
    <Formik
      initialValues={{
        name: '',
        contact: '',
        email: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        console.log(values);
      }}
    >
      {() => (
        <Form>
            <Row>
                <Col xl={12}>
                    <Field name="name"  />
                    <ErrorMessage name="name" />
                </Col>
                   
                <Col xl={12}>
                     <Field name="contact" type="contact" />
                    <ErrorMessage name="contact" />
                </Col>
               
                <Col xl={12}>
                     <Field name="email" type="email" />
                    <ErrorMessage name="email" />
                </Col>
                <Button type="submit">Submit</Button>
            </Row>
            
        </Form>
      )}
    </Formik>
  </div>
);

export default LoginSchema