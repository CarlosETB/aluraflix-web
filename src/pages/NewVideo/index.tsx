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
import { Category, Video } from "interface";

// Repositories
import { videoRepository, categoryRepository } from "repositories";

const NewVideo = () => {
  const history = useHistory();
  const { t } = useTranslation("NewVideos");
  const [categories, setCategories] = useState<Category[]>([]);
  const [videos, setVideos] = useState<Video[]>([]);
  const categoryTitles = categories.map(({ title }) => title);

  const values = {
    title: "",
    url: "",
    category: "",
    description: "",
  };

  useEffect(() => {
    categoryRepository.getAll().then((res) => {
      setCategories(res);
    });
  }, []);

  const { formData, clearForm, handleInputChange } = useForm(values);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const { title, url, category, description } = formData;

    const data = new FormData();

    data.append("title", String(title));
    data.append("url", String(url));
    data.append("category", String(category));
    data.append("description", String(description));

    const categoryId = categories.find((res) => {
      return res.title === formData.category;
    });

    const videoId = videos.find((res) => {
      return res.url === formData.url;
    });

    if (videoId?.title === "") {
      videoRepository
        .create({
          title: formData.title,
          url: formData.url,
          category: formData.category,
          description: formData.description,
          categoryId: categoryId && categoryId.id,
        })
        .then(() => {
          clearForm();
          history.push("/");
        });
    } else {
      alert("Vídeo já cadastrado");
    }
  }

  return (
    <PageDefault>
      <Title>
        {`${t("pageTitle")}`}
        <Link to="/cadastro/categoria">{t("buttonLink")}</Link>
      </Title>

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

        <FormField
          type="textarea"
          name="description"
          value={formData.description}
          label={t("descriptionLabel")}
          onChange={handleInputChange}
        />

        <Button type="submit">{t("button")}</Button>
      </form>
    </PageDefault>
  );
};

export default NewVideo;
