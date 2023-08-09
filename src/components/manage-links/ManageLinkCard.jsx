import Button from '@elements/Button'
import Link from '@elements/Link'
import React from 'react'
import { FiExternalLink, FiEdit } from "react-icons/fi";
import { FaTwitterSquare, FaFacebookSquare } from "react-icons/fa";
import { BiEdit } from "react-icons/bi";
import LinkedInShareButton from "@components/share/LinkedInShareButton";
import TwitterShareButton from "@components/share/TwitterShareButton";
import FaceBookShareButton from "@components/share/FaceBookShareButton";
import Input from "@elements/Input";
// import Button from "@elements/Button";
// import Modal from "@elements/Modal";
// const postTitle = "Check out my awesome post!";
// const postSummary = "A brief summary of the post";
// const postSource = "Your Website Name";
// const postUrl =
//   "https://www.youtube.com/watch?v=h2ZS5rTsuRQ&ab_channel=RichardOliverBray";
// const tweetText = "Check out my awesome tweet!";
// const tweetUrl = "https://your-tweet-url.com";
export default function ManageLinkCard({ data,onClick }) {
    return (
        <div
        className="col-span-1 py-4 px-4 md:p-4  rounded-md shadow-md dark:shadow-gray-600 shadow-gray-300 dark:bg-gray-800 bg-gray-100"
    >
        <div className="flex flex-col justify-between h-42 gap-4 overflow-auto">
            <div className="flex justify-between items-center">
                <div className="flex justify-center items-center gap-2">
                    <Link
                        Icon={FiExternalLink}
                        target="blank"
                        href={data.link}
                        IconSize={30}
                        btnClass="text-gray-600 dark:text-gray-300 text-sm"
                    />
                    <Button
                        Icon={FiEdit}
                        onClick={() => onClick(data)}
                        IconSize={26}
                        btnClass="!p-0 !m-0 !w-auto text-green-600"
                    />
                </div>
                <div className="flex justify-between items-center gap-2">
                    <TwitterShareButton
                        // text={tweetText}
                        url={data.link}
                        hashtags={"nikhil,pankaj"}
                    />

                    <LinkedInShareButton
                        // title={postTitle}
                        // summary={postSummary}
                        // source={postSource}
                        url={data.link}
                    />

                    <FaceBookShareButton
                        url={data.link}
                        // title={postTitle}
                        // summary={postSummary}
                        // source={postSource}
                    //   url={postUrl}
                    />
                </div>
            </div>
            <div>
                <Input
                    type="clipboard"
                    placeholder={data.link}
                    value={data.link}
                    readOnly
                // className="z-10"
                />
                <p className="text-gray-600 dark:text-gray-200 font-normal text-sm">
                    {" "}
                    <span className="font-bold text-base">Quick Note: </span>
                    {data.quickNote}
                </p>
                {/* <p className="text-gray-600 dark:text-gray-200 font-bold text-md">
  {item.title}
</p> */}
            </div>
        </div>
    </div>
    )
}
