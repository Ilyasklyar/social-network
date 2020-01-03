import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../Redux/dialogs-reducer';
import { Redirect } from 'react-router-dom';


const Dialogs = (props) => {

    let state = props.dialogsPage;
    let dialogElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);
    let massagesData = state.messages.map(m => <Message key={m.id} message={m.message} />);
    let newMessageBody = state.newMessageBody;


    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    if (!props.isAuth) return <Redirect to="/login" />;

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {massagesData}
            </div>
            <div>
                <textarea onChange={onNewMessageChange}  value={newMessageBody} />
                <button onClick={onSendMessageClick}>Send</button>
            </div>
        </div>
    );
}
export default Dialogs;