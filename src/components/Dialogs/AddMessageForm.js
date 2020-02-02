import React from 'react';
import { Textarea } from "../common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../../utils/validators/validators";
import { reduxForm, Field } from "redux-form";

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea}
            validate={[required, maxLength50]}
             name='newMessageBody' placeholder='Enter message' />
        </div>
        <button>Send</button>
    </form>
}

export default reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm);
