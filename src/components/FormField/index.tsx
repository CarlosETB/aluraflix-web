import React, { useEffect, useState } from "react";

// Private
import { Input } from "./styles";

interface LayoutProps {
  type?: string;
  name?: string;
  label?: string;
  onChange?: any;
}

const FormField: React.FC<LayoutProps> = (props) => {
  const { type, name, label, onChange } = props;

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
    <div>
      <label htmlFor={fieldId}>
        {`${label} :`}
        <Input
          id={fieldId}
          name={name}
          type={fieldType}
          onChange={onChange}
          as={tag}
        />
      </label>
    </div>
  );
};

export default FormField;
