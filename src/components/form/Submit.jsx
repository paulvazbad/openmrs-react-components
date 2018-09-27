import React from 'react';
import { Button } from 'react-bootstrap';
import withFormContext from './withFormContext';

const Submit = (props) => {

  return (
    <Button
      bsSize="large"
      bsStyle="success"
      disabled={props.context.submitting}
      //onClick={() => props.onClick && props.onClick()}
      type="submit"
    >
      Submit
    </Button>
  );
};

export default withFormContext(Submit);
