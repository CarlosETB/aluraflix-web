import React, { useState, useEffect, FormEvent } from "react";

// Native
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

// Components
import PageDefault from "components/PageDefault";
import FormField from "components/FormField";
import { Button } from "components/Button";
import { Title } from "components/Text";
import Link from "components/Link";

// Hooks
import { useForm } from "hooks";

// Interface
import { Category } from "interface";

// Repositories
import { categoryRepository } from "repositories";

const NewCategory = () => {
  const history = useHistory();
  const { t } = useTranslation("NewCategory");

  const values = {
    title: "",
    color: "",
    description: "",
  };

  const {
    formData,
    clearForm,
    handleInputChange,
    handleTextAreaChange,
  } = useForm(values);

  const [categories, setCategories] = useState<Category[]>([]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const { title, color, description } = formData;

    const data = new FormData();

    data.append("title", String(title));
    data.append("color", String(color));
    data.append("description", String(description));

    const videoId = categories.find((res) => {
      return res.title === formData.title;
    });

    console.log("Res", videoId?.title);

    if (videoId?.title === undefined) {
      setCategories([...categories, formData]);
      categoryRepository
        .create({
          title: formData.title,
          color: formData.color,
          description: formData.description,
        })
        .then(() => {
          clearForm();
          history.push("/");
        });
    } else {
      alert("Categoria já cadastrada");
    }
  }

  useEffect(() => {
    categoryRepository.getAll().then((res) => {
      setCategories(res);
    });
  }, []);

  return (
    <PageDefault>
      <Title>{t("pageTitle")}</Title>

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
    </PageDefault>
  );
};

export default NewCategory;
