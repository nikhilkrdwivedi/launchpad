import FeaturesList from "@components/banners/FeaturesList";
import HomePageBanner from "@components/banners/HomePageBanner";
import Container from "@components/containers/Container";
import Footer from "@components/headers/Footer";
import TopHeaderWrapper from "@components/headers/TopHeaderWrapper";

export default function Home() {
  return (
    <TopHeaderWrapper>
      <Container className="flex-1 dark:bg-gray-900 px-4 md:px-20 md:py-4">
        <HomePageBanner />
        <FeaturesList />
      </Container>
      <Footer />
    </TopHeaderWrapper>
  );
}
