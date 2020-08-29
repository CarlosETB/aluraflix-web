import React from "react";

// Native
import { useTranslation } from 'react-i18next'

// Components
import PageDefault from "components/PageDefault";
import BannerMain from "components/BannerMain";
import Carousel from "components/Carousel";

// Data
import initialData from "data/initial_data.json";

const Home = () => {

  const { t } = useTranslation('Home')

  let description =
    "O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!";

  return (
    <PageDefault noPadding>
      <BannerMain
        description={t('description')}
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
};

export default Home;
