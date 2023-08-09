import React from 'react'

export default function ManageLinkCard({ item }) {
    return (
        <div
        className="col-span-1 py-4 px-4 md:p-4  rounded-md shadow-md dark:shadow-gray-600 shadow-gray-300 dark:bg-gray-800 bg-gray-100"
        key={index}
    >
        <div className="flex flex-col justify-between h-42 gap-4 overflow-auto">
            <div className="flex justify-between items-center">
                <div className="flex justify-center items-center gap-2">
                    <Link
                        Icon={FiExternalLink}
                        target="blank"
                        href="https://google.com"
                        IconSize={30}
                        btnClass="text-gray-600 dark:text-gray-300 text-sm"
                    />
                    <Button
                        Icon={FiEdit}
                        onClick={() => openEditLinkModal(item)}
                        IconSize={26}
                        btnClass="!p-0 !m-0 !w-auto text-green-600"
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
    )
}
