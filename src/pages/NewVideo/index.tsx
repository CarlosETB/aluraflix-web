import React, { useState, FormEvent } from "react";

// Native
import { useTranslation } from "react-i18next";
import { Link, useHistory } from "react-router-dom";

// Components
import PageDefault from "components/PageDefault";
import FormField from "components/FormField";
import { Button } from "components/Button";

// Hooks
import { useForm } from "hooks";

// Repositories
import { videoRepository } from "repositories";

const NewVideo = () => {
  const history = useHistory();
  const { t } = useTranslation("NewVideos");

  const values = {
    title: "",
    url: "",
    category: "",
  };

  const { formData, handleInputChange } = useForm(values);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const { title, url, category } = formData;

    const data = new FormData();

    data.append("title", String(title));
    data.append("url", String(url));
    data.append("category", String(category));

    videoRepository
      .create({
        titulo: formData.title,
        url: formData.url,
        category: formData.category,
        categoryId: 1,
      })
      .then(() => {
        history.push("/");
      });
  }

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
          name="url"
          value={formData.url}
          label={t("urlLabel")}
          onChange={handleInputChange}
        />

        <FormField
          name="category"
          value={formData.category}
          label={t("categoryLabel")}
          onChange={handleInputChange}
        />

        <Button type="submit">{t("button")}</Button>
      </form>

      <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
    </PageDefault>
  );
};

export default NewVideo;
