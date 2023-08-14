import HomePageBanner from "@components/banners/HomePageBanner";
import Footer from "@components/headers/Footer";
import TopHeaderWrapper from "@components/headers/TopHeaderWrapper";

export default function Home() {
  return (
    <div className="bg-gray-100 dark:bg-gray-90">
      <TopHeaderWrapper>
        <HomePageBanner />
        <Footer />
      </TopHeaderWrapper>
    </div>
  );
}
