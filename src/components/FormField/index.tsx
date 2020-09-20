import React from "react";

// Private
import { FormFieldWrapper, LabelText, Input, TextArea, Label } from "./styles";

interface LayoutProps {
  value?: any;
  name?: string;
  label?: string;
  onChange?: any;
  type?: "text" | "textarea" | "color";
}

const FormField: React.FC<LayoutProps> = (props) => {
  const { type, name, label, onChange, value } = props;

  const id = `id_${name}`;

  const settings = {
    id: id,
    name: name,
    value: value,
    onChange: onChange,
  };

  return (
    <FormFieldWrapper>
      <Label htmlFor={id}>
        {type === "textarea" ? (
          <TextArea {...settings} />
        ) : (
          <Input {...settings} type={type} />
        )}

        <LabelText>{`${label} :`}</LabelText>
      </Label>
    </FormFieldWrapper>
  );
};

export default FormField;
