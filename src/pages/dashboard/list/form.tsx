import { ErrorMessage, Field, Formik } from 'formik';
import { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { SignupSchema } from '../../../schemas/auth.schema';
import { updateMemberRequest } from '../../../_helpers/update.member';

const FormAddMember = ({ listId, initialValue, handleReload }: any) => {
  let loginFields: string[] = ['name', 'contact', 'email'];
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <div>
      <Formik
        initialValues={
          initialValue || {
            name: '',
            contact: '',
            email: '',
            check: false,
          }
        }
        enableReinitialize={true}
        validationSchema={SignupSchema}
        onSubmit={async (formsData, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          setSubmitting(false);
          updateMemberRequest(listId, formsData, setLoading, handleReload);
          resetForm();
        }}
      >
        {({ handleSubmit, values, handleChange }) => (
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
