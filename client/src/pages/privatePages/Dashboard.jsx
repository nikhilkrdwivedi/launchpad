import Container from "@components/containers/Container";
import TopHeaderWrapper from "@components/headers/TopHeaderWrapper";
// import Button from "@elements/Button";
import Link from "@elements/Link";
import { useEffect } from "react";
import { useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { FaTwitterSquare, FaFacebookSquare } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import LinkedInShareButton from "@components/share/LinkedInShareButton";
import TwitterShareButton from "@components/share/TwitterShareButton";
import FaceBookShareButton from "@components/share/FaceBookShareButton";
import Input from "@elements/Input";

export default function Dashboard() {
  const postTitle = "Check out my awesome post!";
  const postSummary = "A brief summary of the post";
  const postSource = "Your Website Name";
  const postUrl =
    "https://www.youtube.com/watch?v=h2ZS5rTsuRQ&ab_channel=RichardOliverBray";
  const tweetText = "Check out my awesome tweet!";
  const tweetUrl = "https://your-tweet-url.com";
  const [data, setData] = useState([]);
  const fetchDate = async () => {
    let data = await fetch("https://jsonplaceholder.typicode.com/posts");
    // console.log({ data: await data.json() });
    data = await data.json();
    setData(data);
  };
  useEffect(() => {
    fetchDate();
  }, []);
  return (
    <TopHeaderWrapper>
      <Container className="flex-1 dark:bg-gray-900">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 py-8 px-4">
          {data.map((item, index) => (
            <div
              className="col-span-1 py-4 px-4 md:p-4  rounded-md shadow-md dark:shadow-gray-600 shadow-gray-300 dark:bg-gray-800 bg-gray-100"
              key={index}
            >
              <div className="flex flex-col justify-between h-42 gap-4 overflow-auto">
                <div className="flex justify-between items-center">
                  <div>
                    <Link
                      Icon={FiExternalLink}
                      target="blank"
                      href="https://google.com"
                      IconSize={24}
                      btnClass="gap-1 !justify-start text-gray-600 dark:text-gray-300 text-sm"
                    />
                  </div>
                  <div className="flex justify-between items-center gap-2">
                    <TwitterShareButton
                      text={tweetText}
                      url={tweetUrl}
                      hashtags={"nikhil,pankaj"}
                    />

                    <LinkedInShareButton
                      title={postTitle}
                      summary={postSummary}
                      source={postSource}
                      url={postUrl}
                    />

                    <FaceBookShareButton
                      url={postUrl}
                      title={postTitle}
                      summary={postSummary}
                      source={postSource}
                      //   url={postUrl}
                    />
                  </div>
                </div>
                <div>
                  <Input
                    type="clipboard"
                    placeholder={item.title}
                    value={item.title}
                    // className="z-10"
                  />
                  <p className="text-gray-600 dark:text-gray-200 font-normal text-sm">
                    {" "}
                    <span className="font-bold text-base">Quick Note: </span>
                    {item.body}
                  </p>
                  {/* <p className="text-gray-600 dark:text-gray-200 font-bold text-md">
                    {item.title}
                  </p> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </TopHeaderWrapper>
  );
}
