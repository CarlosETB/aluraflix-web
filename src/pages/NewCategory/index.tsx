import React, { useState, ChangeEvent, FormEvent } from "react";

// Native
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

// Components
import PageDefault from "components/PageDefault";
import FormField from "components/FormField";
import { Button } from "components/Button";

const NewCategory = () => {
  const { t } = useTranslation("NewCategory");

  const values = {
    name: "",
    color: "",
    description: "",
  };

  interface Values {
    name?: string;
    color?: string;
    description?: string;
  }

  const [categories, setCategories] = useState<any[]>([]);
  const [formData, setFormData] = useState<Values>(values);

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  }

  function handleTextAreaChange(event: ChangeEvent<HTMLTextAreaElement>) {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const { name, color, description } = formData;

    const data = new FormData();

    data.append("name", String(name));
    data.append("color", String(color));
    data.append("description", String(description));

    setCategories([...categories, formData]);

    alert(`Nova categoria cadastrada: ${name}`);
  }

  return (
    <PageDefault>
      <h1>{`${t("title")}: ${formData.name}`}</h1>

      <form onSubmit={handleSubmit}>
        <FormField
          name="name"
          value={formData.name}
          label={t("nameLabel")}
          onChange={handleInputChange}
        />

        <FormField
          type="textarea"
          name="description"
          value={formData.description}
          label={t("descriptionLabel")}
          onChange={handleTextAreaChange}
        />

        <FormField
          type="color"
          name="color"
          value={formData.color}
          label={t("colorLabel")}
          onChange={handleInputChange}
        />

        <Button type="submit">{t("button")}</Button>
      </form>

      <ul>
        {categories.map((category) => (
          <li key={category.name}>{category.name}</li>
        ))}
      </ul>

      <Link to="/">Ir pra home</Link>
    </PageDefault>
  );
};

export default NewCategory;
