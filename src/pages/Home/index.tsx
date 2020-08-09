import React from "react";

// Components
import PageDefault from "components/PageDefault";
import BannerMain from "components/BannerMain";
import Carousel from "components/Carousel";
import Footer from "components/Footer";
import Header from "components/Header";

// Data
import initialData from "data/initial_data.json";

function Home() {
  let description =
    "O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!";

  return (
    <PageDefault noPadding >
      <BannerMain
        description={description}
        url={initialData.category[0].videos[0].url}
        title={initialData.category[0].videos[0].title}
      />

      <Carousel ignoreFirstVideo category={initialData.category[0]} />
      <Carousel ignoreFirstVideo category={initialData.category[1]} />
      <Carousel ignoreFirstVideo category={initialData.category[2]} />
      <Carousel ignoreFirstVideo category={initialData.category[3]} />
      <Carousel ignoreFirstVideo category={initialData.category[4]} />
      <Carousel ignoreFirstVideo category={initialData.category[5]} />
    </PageDefault>
  );
}

export default Home;
