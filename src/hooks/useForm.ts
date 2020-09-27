import { ChangeEvent, useState } from "react";

export default (values: any) => {
  const [formData, setFormData] = useState(values);

  const handleInputChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleTextAreaChange = async (
    event: ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  };

  return {
    formData,
    handleInputChange,
    handleTextAreaChange,
  };
};
