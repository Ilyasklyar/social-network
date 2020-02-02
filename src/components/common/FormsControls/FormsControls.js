import React from 'react';
import styles from './FormsControls.module.css'

const FromControl = ({ input, meta, child, ...props} ) => {
    const hasError = meta.touched && meta.error;

    return (
        <div className={hasError ? styles.error : ''}>
           {props.children}
            <div>
                { hasError && <span>{meta.error}</span>}
            </div>
        </div>
    )
}


export const Textarea = (props) => {
    const { input, meta, child, ...restProps} = props;
    return <FromControl {...props}><textarea {...input} {...restProps} /></FromControl>
}

export const Input = (props) => {
    const { input, meta, child, ...restProps} = props;
    return <FromControl {...props}><input {...input} {...restProps} /></FromControl>
    }