import React from "react";

export interface InputFieldProps {
    label: string;
    htmlName: string;
    htmlType?: string;
    icon: string;
    required: boolean;
    autoComplete?: string;
    value: string;
    setValue: (value: string) => void;
}

export default (props: InputFieldProps) => <div className="field">
    <label className="label" htmlFor={props.htmlName}>{props.label}</label>
    <div className="control has-icons-left">
        <input className={`${props.required && props.value === "" ? "is-danger" : ""} input`}
               name={props.htmlName}
               type={props.htmlType && "text"}
               autoComplete={props.autoComplete}
               required={props.required}
               defaultValue={props.value}
               onChange={e => props.setValue(e.target.value)}/>
        <span className="icon is-left"><i className={props.icon}></i></span>
    </div>
    {props.required && props.value === "" && (<p className="help is-danger">Field {props.label} is required</p>)}
</div>;