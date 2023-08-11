import HomePageBanner from "@components/banners/HomePageBanner";
import Footer from "@components/headers/Footer";
import TopHeaderWrapper from "@components/headers/TopHeaderWrapper";
import Button from "@elements/Button";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 dark:bg-gray-90">
      <TopHeaderWrapper>

        <HomePageBanner />
        <Footer />
      </TopHeaderWrapper>
    </div>
  );
}
