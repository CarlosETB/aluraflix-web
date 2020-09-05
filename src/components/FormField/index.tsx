import React, { useEffect, useState } from "react";

// Private
import { FormFieldWrapper, LabelText, Input, Label } from "./styles";

interface LayoutProps {
  value?: any;
  name?: string;
  label?: string;
  onChange?: any;
  type?: "text" | "textarea" | "color";
}

const FormField: React.FC<LayoutProps> = (props) => {
  const { type, name, label, onChange, value } = props;

  const [fieldType, setFieldType] = useState("");
  const [tag, setTag] = useState<any>();

  useEffect(() => {
    if (type === "textarea") {
      setFieldType("text");
      setTag("textarea");
    } else {
      setFieldType(String(type));
      setTag(undefined);
    }
  }, []);

  const fieldId = `id_${name}`;

  return (
    <FormFieldWrapper>
      <Label htmlFor={fieldId}>
        <Input
          id={fieldId}
          name={name}
          type={fieldType}
          onChange={onChange}
          as={tag}
          value={value}
        />
        <LabelText>{`${label} :`}</LabelText>
      </Label>
    </FormFieldWrapper>
  );
};

export default FormField;
