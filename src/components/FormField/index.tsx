import { string } from "prop-types";
import React from "react";

// Private
import { FormFieldWrapper, LabelText, Input, TextArea, Label } from "./styles";

interface LayoutProps {
  value?: any;
  name?: string;
  label?: string;
  onChange?: any;
  suggestions?: any[];
  type?: "text" | "textarea" | "color";
}

const FormField: React.FC<LayoutProps> = (props) => {
  const { type, name, label, suggestions, onChange, value } = props;

  const id = `id_${name}`;
  const hasSuggestions = Boolean(suggestions && suggestions.length);

  const settings = {
    id,
    name,
    value,
    onChange,
    list: `suggestionFor_${id}`,
    autoComplete: hasSuggestions ? "off" : "on",
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

        {hasSuggestions && (
          <datalist id={`suggestionFor_${id}`}>
            {suggestions &&
              suggestions.map((suggestion) => (
                <option
                  value={suggestion}
                  key={`suggestionFor_${id}_option_${suggestion}`}
                >
                  {suggestion}
                </option>
              ))}
          </datalist>
        )}
      </Label>
    </FormFieldWrapper>
  );
};

export default FormField;
