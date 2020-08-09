import React from "react";

// Native
import { Link } from "react-router-dom";

// Components
import PageDefault from "components/PageDefault";

function NewVideo() {
  return (
    <PageDefault>
      <h1>Página de Cadastro de Video</h1>

      <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
    </PageDefault>
  );
}

export default NewVideo;
