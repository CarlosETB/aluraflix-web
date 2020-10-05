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

interface PropsCategory {
  id?: number;
  title?: string;
}

interface PropsVideo {
  title?: string;
  url?: string;
  category?: string;
}

const NewVideo = () => {
  const history = useHistory();
  const { t } = useTranslation("NewVideos");
  const [categories, setCategories] = useState<PropsCategory[]>([]);
  const categoryTitles = categories.map(({ title }) => title);

  const values = {
    title: "",
    url: "",
    category: "",
  };

  useEffect(() => {
    console.log("Titulos", categoryTitles);
    categoryRepository.getAll().then((res) => {
      setCategories(res);
    });
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

    videoRepository
      .create({
        title: formData.title,
        url: formData.url,
        category: formData.category,
        categoryId: categoryId && categoryId.id,
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
          suggestions={categoryTitles}
        />

        <Button type="submit">{t("button")}</Button>
      </form>

      <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
    </PageDefault>
  );
};

export default NewVideo;
