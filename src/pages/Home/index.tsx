import React, { useEffect, useState } from "react";

// Native
import { useTranslation } from "react-i18next";

// Components
import PageDefault from "components/PageDefault";
import BannerMain from "components/BannerMain";
import Carousel from "components/Carousel";

// Repositories
import { categoryRepository } from "repositories";

interface Values {
  id?: number;
  videos?: any;
  category: {
    title?: string;
    color?: string;
    link_extra?: {
      text: string;
      url: string;
    };
    videos?: {
      id: number;
      url: string;
      title: string;
      categoryId: number;
    }[];
  };
}

const Home = () => {
  const { t } = useTranslation("Home");
  const [initialData, setInitialData] = useState<Values[]>([]);

  useEffect(() => {
    categoryRepository
      .getAllVideos()
      .then((res) => {
        setInitialData(res);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  return (
    <PageDefault noPadding>
      {initialData.length === 0 && <div>Loading...</div>}

      {initialData.map((data, index) => {
        if (index === 0) {
          return (
            <div key={data.id}>
              <BannerMain
                description={t("description")}
                url={initialData[0].videos[0].url}
                title={initialData[0].videos[0].title}
              />
              <Carousel ignoreFirstVideo category={initialData[0]} />
            </div>
          );
        }

        return <Carousel key={data.id} category={data} />;
      })}
    </PageDefault>
  );
};

export default Home;
