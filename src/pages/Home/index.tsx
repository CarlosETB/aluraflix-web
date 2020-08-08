import React from "react";

// Components
import BannerMain from "components/BannerMain";
import Carousel from "components/Carousel";
import Footer from "components/Footer";
import Menu from "components/Menu";

// Data
import initialData from "data/initial_data.json";

function Home() {
  let description =
    "O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!";

  return (
    <div style={{ backgroundColor: "#141414" }}>
      <Menu />

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

      <Footer />
    </div>
  );
}

export default Home;
