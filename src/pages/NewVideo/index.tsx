import React, { useState, useEffect, FormEvent } from "react";

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
import { videoRepository, categoryRepository } from "repositories";

interface PropsVideo {}

const NewVideo = () => {
  const history = useHistory();
  const { t } = useTranslation("NewVideos");
  const [categories, setCategories] = useState([]);

  const values = {
    title: "",
    url: "",
    category: "",
  };

  useEffect(() => {
    categoryRepository.getAll().then((res) => {
      setCategories(res);
    });
    console.log(categories);
  }, []);

  const { formData, handleInputChange } = useForm(values);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const { title, url, category } = formData;

    const data = new FormData();

    data.append("title", String(title));
    data.append("url", String(url));
    data.append("category", String(category));

    const categoryId = categories.find((res: any) => {
      return res.title === formData.category;
    });

    console.log("Cadastrado", categoryId && categoryId.id);

    videoRepository
      .create({
        title: formData.title,
        url: formData.url,
        category: formData.category,
        categoryId,
      })
      .then(() => {
        history.push("/");
      });
  }

  return (
    <PageDefault>
      <h1>{`${t("pageTitle")}`}</h1>

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
