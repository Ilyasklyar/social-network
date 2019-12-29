const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialState = {
    dialogs: [
        { id: 1, name: 'Dima' },
        { id: 2, name: 'Sasha' },
        { id: 3, name: 'Vova' },
        { id: 4, name: 'Masha' },
        { id: 5, name: 'Pasha' }
    ],
    messages: [
        { id: 1, message: 'hello' },
        { id: 2, message: 'how are you' },
        { id: 3, message: 'Voit is wellva' },
        { id: 4, message: 'it is well' },
        { id: 5, message: 'it is well' }
    ],
    newMessageBody: 'wwww'
};

const dialogsReducer = (state = initialState, action) => {
    
    
    switch (action.type) {
        case SEND_MESSAGE:{
            let newMessage = {
                id: 5,
                message: state.newMessageBody
            };
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages,newMessage]
            };

        }
        case UPDATE_NEW_MESSAGE_BODY:{
            return {
                ...state,
                newMessageBody: action.body
            };
        }
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY, body: body
})

export default dialogsReducer;