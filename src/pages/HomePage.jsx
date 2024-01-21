import Layout from "../commonComponents/Layout";
import Banner from "../Components/Banner/Banner";
import HomeGallery from "../Components/HomeGallery/HomeGallery";
const HomePage = () => {
  return (
    <>
      <Layout>
        <Banner />
        <HomeGallery />
      </Layout>
    </>
  );
};

export default HomePage;
