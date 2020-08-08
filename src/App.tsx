import React from "react";

// Components
import Menu from "components/Menu";
import BannerMain from "components/BannerMain";
import Carousel from "components/Carousel";
import Footer from "components/Footer";

// Data
import initialData from "data/initial_data.json";

function App() {
  return (
    <div style={{ backgroundColor: "#141414" }}>
      <Menu />

      <BannerMain
        videoTitle={initialData.category[0].videos[0].title}
        url={initialData.category[0].videos[0].url}
        videoDescription="O que é Front-end?"
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

export default App;
