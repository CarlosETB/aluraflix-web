import React from "react";

// Native
import { Link } from "react-router-dom";

// Components
import PageDefault from "components/PageDefault";

function NewCategory() {
  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>

      <form>
        <label>
          Nome da Categoria:
          <input type="text" />
        </label>

        <button>Cadastrar</button>
      </form>

      <Link to="/">Ir pra home</Link>
    </PageDefault>
  );
}

export default NewCategory;
