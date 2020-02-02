import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import { Field, reduxForm } from 'redux-form';
import AddMessageForm from './AddMessageForm';


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
            <AddMessageForm onSubmit={addNewMessage} />
        </div>
    );
}


export default Dialogs;