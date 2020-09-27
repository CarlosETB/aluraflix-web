import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";

// Native
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

// Components
import PageDefault from "components/PageDefault";
import FormField from "components/FormField";
import { Button } from "components/Button";

// Hooks
import { useForm } from "hooks";

const NewCategory = () => {
  const { t } = useTranslation("NewCategory");

  const values = {
    title: "",
    color: "",
    description: "",
  };

  const { formData, handleInputChange, handleTextAreaChange } = useForm(values);

  const [categories, setCategories] = useState<any[]>([]);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const { title, color, description } = formData;

    const data = new FormData();

    data.append("title", String(title));
    data.append("color", String(color));
    data.append("description", String(description));

    setCategories([...categories, formData]);

    alert(`Nova categoria cadastrada: ${title}`);
  }

  useEffect(() => {
    const URL = "http://localhost:8080/categories";

    fetch(URL).then(async (res) => {
      const response = await res.json();

      setCategories([...response]);
    });
  }, []);

  return (
    <PageDefault>
      <h1>{`${t("pageTitle")}: ${formData.title}`}</h1>

      <form onSubmit={handleSubmit}>
        <FormField
          name="title"
          value={formData.title}
          label={t("titleLabel")}
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

      {categories.length === 0 && <div>Loading...</div>}

      <ul>
        {categories.map((category) => (
          <li key={category.title}>{category.title}</li>
        ))}
      </ul>

      <Link to="/">Ir pra home</Link>
    </PageDefault>
  );
};

export default NewCategory;
