import React from 'react'


interface LayoutProps {
    type?: string
    name?: string
    label?: string
    onChange?: any;
}

const FormField: React.FC<LayoutProps> = (props) => {
    const { type, name, label, onChange } = props

    return (
        <div>
            <label>
                {`${label} :`}
                <input
                    id={name}
                    name={name}
                    type={type}
                    onChange={onChange}
                />
            </label>
        </div>
    )
}

export default FormField