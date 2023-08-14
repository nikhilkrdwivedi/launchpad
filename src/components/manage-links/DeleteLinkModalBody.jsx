export default function DeleteLinkModalBody() {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-xl font-semibold text-gray-600 dark:text-gray-200">
        Are you certain you wish to proceed with the deletion?
        {/* <div className="text-md font-normal my-2 ">{data.link}</div> */}
      </div>
    </div>
  );
}
