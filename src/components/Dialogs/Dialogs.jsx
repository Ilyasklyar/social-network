import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import { Field, reduxForm } from 'redux-form';


const Dialogs = (props) => {

    let state = props.dialogsPage;
    let dialogElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);
    let massagesData = state.messages.map(m => <Message key={m.id} message={m.message} />);


    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {massagesData}
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage} />
        </div>
    );
}

const AddMessageForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component='textarea' name='newMessageBody' placeholder='Enter message' />
        </div>
        <button>Send</button>
    </form>
}

const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm);

export default Dialogs;