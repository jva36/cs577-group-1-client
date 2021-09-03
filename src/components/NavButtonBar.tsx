import React from "react";

export interface NavButtonBarProps {
    onBack: () => void;
    onNext?: () => void;
    onSubmit?: () => void;
}

export default (props: NavButtonBarProps) => (
    <div className="columns">
        <div className="column is-3 has-text-centered">
            <button className="button is-medium is-fullwidth is-light" onClick={_ => props.onBack()}>
                Back
            </button>
        </div>
        {props.onNext && (
        <div className="column is-3 is-offset-6 has-text-centered" onClick={_ => props.onNext?.()}>
            <button className="button is-medium is-fullwidth is-primary">
                Next
            </button>
        </div>
        )}
        {props.onSubmit && (
            <div className="column is-3 is-offset-6 has-text-centered" onClick={_ => props.onSubmit?.()}>
                <button className="button is-medium is-fullwidth is-success">
                    Submit
                </button>
            </div>
        )}
    </div>
);