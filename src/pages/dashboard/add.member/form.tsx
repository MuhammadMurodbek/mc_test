import { ErrorMessage, Field, Formik } from 'formik';
import { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { SignupSchema } from '../../../schemas/auth.schema';
import { addMemberRequest } from '../../../_helpers/add.member';

const FormAddMember = ({ handleSubmitForm }: any) => {
  let loginFields: string[] = ['name', 'contact', 'email'];
  const [loading, setLoading] = useState<boolean>(false);
  //   const onSubmit = async (values: any, formikProps: any) => {
  //     console.log('onSubmit -> values, formikProps', values, formikProps);

  //     setTimeout(() => {
  //       console.log('resolved timeout at onSubmit');
  //     }, 5000);
  //   };
  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          contact: '',
          email: '',
          check: false,
        }}
        validationSchema={SignupSchema}
        onSubmit={async (formsData, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          // async request
          // --> if wanted to reset on submit: resetForm();
          //   resetForm();
          console.log(formsData);
          setSubmitting(false);
          addMemberRequest(formsData, setLoading, handleSubmitForm);
        }}
      >
        {({ handleSubmit, values, setFieldValue, handleChange }) => (
          <Form onSubmit={handleSubmit} className="w-100 mx-auto">
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
              <Col xl={12}>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="Status"
                  name="check"
                  checked={values.check}
                  onChange={handleChange}
                />
              </Col>
              <Col xl={12}>
                <div className="bg-info d-inline-block p-2 rounded">
                  Load image
                </div>
              </Col>
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

export default FormAddMember;
