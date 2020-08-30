import React, { useState, ChangeEvent, FormEvent } from "react";

// Native
import { useTranslation } from 'react-i18next'
import { Link } from "react-router-dom";

// Components
import PageDefault from "components/PageDefault";
import FormField from 'components/FormField'

const NewCategory = () => {
  const { t } = useTranslation('NewCategory')

  const values = {
    name: "",
    color: "",
    description: ""
  }

  interface Values {
    name?: string;
    color?: string;
    description?: string;
  }

  const [categories, setCategories] = useState<any[]>([]);
  const [formData, setFormData] = useState<Values>({});

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

    console.log('categories', categories)

    alert(`Nova categoria cadastrada: ${name}`);
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {formData.name}</h1>

      <form onSubmit={handleSubmit}>

        <FormField
          type="text"
          name="name"
          label='Nome da Categoria'
          onChange={handleInputChange}
        />

        <div>
          <label>
            Descrição da Categoria:
            <textarea
              id="description"
              name="description"
              onChange={handleTextAreaChange}
            />
          </label>
        </div>

        <FormField
          type="color"
          name="color"
          label='Cor da Categoria'
          onChange={handleInputChange}
        />

        <button type="submit">Cadastrar</button>
      </form>

      <ul>
        {categories.map((category) => {
          return <li key={(category.name)}>{category.name}</li>;
        })}
      </ul>

      <Link to="/">Ir pra home</Link>
    </PageDefault>
  );
};

export default NewCategory;
