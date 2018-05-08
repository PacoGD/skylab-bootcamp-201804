import React from 'react'

function InputUser(props) {

    const { name, helpText, labelText, value, submitted, handleChange } = props;

    return(
        <div className={'form-group' + (submitted && !value ? ' has-error' : '')}>
            <label htmlFor={name}>{ labelText }</label>
            <input type="text" className="form-control" name={name} value={value} onChange={handleChange} />
            {submitted && !value &&
                <div className="help-block">{helpText}</div>
            }
        </div>
    )
}

export default InputUser