const SEND_MESSAGE = 'SEND-MESSAGE';

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
    countId: 6
};

const dialogsReducer = (state = initialState, action) => {


    switch (action.type) {
        case SEND_MESSAGE: {
            let newMessageBody = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, { id: state.countId++, message: newMessageBody }]
            };
        }
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })

export default dialogsReducer;