/* eslint-disable react/prop-types */
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Button from "./Button";
import { SlClose } from "react-icons/sl";
export default function Modal({
  closeModal,
  isOpen,
  title,
  modalSizeCss = "w-3/4 md:w-2/3 lg:w-1/2",
}) {
  //   let [isOpen, setIsOpen] = useState(true);

  //   function closeModal() {
  //     setIsOpen(false);
  //   }

  //   function openModal() {
  //     setIsOpen(true);
  //   }

  return (
    <>
      {/* <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open dialog
        </button>
      </div> */}

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-400 dark:bg-gray-900  opacity-90" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto ">
            <div className="flex min-h-full items-center justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className={`w-full ${modalSizeCss}  transform overflow-hidden rounded-md bg-white dark:bg-gray-800  text-left align-middle border border-gray-300 dark:border-gray-600 shadow-md shadow-gray-200 dark:shadow-gray-600 transition-all`}
                >
                  {/* <div className="flex justify-between items-center">
                    <Button btnClass="!w-0 text-black" title={"sdn"} />
                    <Button btnClass="text-black" title={"sdn"} />
                  </div> */}
                  <Dialog.Title
                    as="div"
                    className="flex justify-between items-center text-md font-semibold  text-gray-600 dark:text-gray-200 border-b border-gray-200 dark:border-gray-600 px-4 py-4"
                  >
                    {title}
                    <Button
                      btnClass="!w-auto !text-gray-400 !dark:text-gray-200"
                      Icon={SlClose}
                      IconSize={24}
                      onClick={closeModal}
                    />
                  </Dialog.Title>
                  <div className="mt-2 p-4">
                    <p className="text-sm text-gray-500">
                      Your payment has been successfully submitted. We’ve sent
                      you an email with all of the details of your order.
                    </p>
                  </div>

                  <div className="mt-4 p-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
