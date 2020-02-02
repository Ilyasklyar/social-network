import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Input } from '../components/common/FormsControls/FormsControls';
import { required } from '../utils/validators/validators';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'login'}
                    validate={[required]} name={'login'} component={Input} />
            </div>
            <div>
                <Field placeholder={'password'}
                    validate={[required]} name={'password'} component={Input} />
            </div>
            <div>
                <Field component={Input} name={'rememberMe'} type={'checkbox'} />remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
    const onSubmit = (FormData) => {
        console.log(FormData);
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}


export default Login;