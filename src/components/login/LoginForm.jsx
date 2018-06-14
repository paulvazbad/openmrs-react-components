import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Button, ButtonToolbar, Grid, Row, Col, Form, FormGroup, FormControl, ControlLabel, Label } from 'react-bootstrap';


const FieldInput = ({ input, meta, type, placeholder, min, max }) => {
  return (
    <FormControl
      type={type}
      placeholder={placeholder}
      min={min}
      max={max}
      value={input.value}
      onChange={input.onChange} />
  )
}

const LoginForm = props => {
  const { onSubmit, handleSubmit, pristine, reset, submitting } = props;
  return (
    <div>
      <h3><Label>Login</Label></h3>
      <Form horizontal onSubmit={handleSubmit(onSubmit)}>
        <Grid>

          <Row>
            <FormGroup controlId="formUsername">
              <Col componentClass={ControlLabel} sm={2}>
                Username
              </Col>
              <Col sm={4}>
                <Field name="username" type='text' component={FieldInput} placeholder="username"  />
              </Col>
            </FormGroup>
          </Row>

          <Row>
            <FormGroup controlId="formPassword">
              <Col componentClass={ControlLabel} sm={2}>
                Password
              </Col>
              <Col sm={4}>
                <Field name="password" type='password' component={FieldInput} placeholder="password"  />
              </Col>
            </FormGroup>
          </Row>

          <Row>
            <FormGroup controlId="formSubmit">
            <Col smOffset={2} sm={4}>
            <ButtonToolbar>
                <Button
                  bsStyle="success"
                  bsSize="large"
                  disabled={pristine || submitting}
                  type="submit"
                >
                  Submit
                </Button>


                <Button
                  bsStyle="danger"
                  bsSize="large"
                  disabled={pristine || submitting}
                  onClick={reset}
                >
                  Clear Values
                </Button>
            </ButtonToolbar>
            </Col>
            </FormGroup>
          </Row>
        </Grid>
      </Form>
    </div>
  );
};

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  reset: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};


export default reduxForm({
  form: 'login-form' // a unique identifier for this form
})(LoginForm);






