import React, { useEffect, useState } from "react";

// Native
import { useTranslation } from "react-i18next";

// Components
import PageDefault from "components/PageDefault";
import { Title } from "components/Text";

// Interface
import { Category } from "interface";

// Repositories
import { categoryRepository } from "repositories";

// Private
import { Option, Button } from "./styles";

const EditCategory = () => {
  const { t } = useTranslation("Home");
  const [categories, serCategories] = useState<Category[]>([]);

  useEffect(() => {
    categoryRepository
      .getAllVideos()
      .then((res) => {
        serCategories(res);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  return (
    <PageDefault>
      <Title>Categorias Cadastradas</Title>

      {categories.length === 0 && <div>Loading...</div>}
      <ul>
        {categories.map((data) => (
          <Option key={data.title} color={data.color}>
            {data.title}
            <Button>Remover</Button>
          </Option>
        ))}
      </ul>
    </PageDefault>
  );
};

export default EditCategory;
