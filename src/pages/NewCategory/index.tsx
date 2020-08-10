import React, { useState, ChangeEvent, FormEvent } from "react";

// Native
import { Link } from "react-router-dom";

// Components
import PageDefault from "components/PageDefault";

const NewCategory = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: "",
  });

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const { name } = formData;

    const data = new FormData();

    data.append("name", name);

    setCategories([...categories, name]);

    alert(`
      Nova categoria cadastrada: ${name} 
    `);
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {formData.name}</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Nome da Categoria:
            <input
              id="name"
              name="name"
              type="text"
              onChange={handleInputChange}
            />
          </label>
        </div>

        <div>
          <label>
            Descrição da Categoria:
            <textarea
              id="description"
              name="description"
              type="text"
              onChange={handleInputChange}
            />
          </label>
        </div>

        <div>
          <label>
            Nome da Categoria:
            <input
              id="name"
              name="name"
              type="text"
              onChange={handleInputChange}
            />
          </label>
        </div>

        <button type="submit">Cadastrar</button>
      </form>

      <ul>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ul>

      <Link to="/">Ir pra home</Link>
    </PageDefault>
  );
};

export default NewCategory;
