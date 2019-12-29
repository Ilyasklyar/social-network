import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', likesCount: 12 },
                { id: 2, message: 'It is my first post', likesCount: 5 },
                { id: 3, message: 'It  second post', likesCount: 15 },
            ],
            newPostText: 'hohoho'
        },
        dailogsPage: {
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
        }
    },
    _callSubscriber() {
        console.log('state changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dailogsPage = dialogsReducer(this._state.dailogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
}


export default store;