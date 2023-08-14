import PropTypes from "prop-types";
import Modal from "@elements/Modal";
import { PiLinkLight } from "react-icons/pi";
import {
  FaFacebookF,
  //   FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import ShareButton from "@components/share/ShareButton";
import { MdOutlineMailOutline } from "react-icons/md";
import { SOCIAL_MEDIA, SOCIAL_SHARE_URL } from "@constants/social";
export default function ShareLinkModal({
  isOpen = true,
  closeModal,
  openModal,
  title,
  data,
}) {
  const renderBody = () => {
    const openShareLink = (socialMedia, link) => {
      const url = SOCIAL_SHARE_URL[socialMedia](link);
      window.open(url, "_blank");
    };
    return (
      <div>
        <div className="flex flex-col items-center border-b-2 dark:border-gray-600 gap-2">
          <div className="text-gray-600 dark:text-gray-200 font-semibold text-xl">
            Social
          </div>
          <div className="flex items-center justify-between py-2 gap-4 md:gap-8">
            <ShareButton
              icon={FaFacebookF}
              iconClass="text-skyblue-600"
              iconSize={52}
              title="Facebook"
              onClick={() => openShareLink(SOCIAL_MEDIA.FACEBOOK, data.link)}
            />
            <ShareButton
              icon={FaTwitter}
              iconClass="text-cyan-500"
              iconSize={52}
              title="Twitter"
              onClick={() => openShareLink(SOCIAL_MEDIA.TWITTER, data.link)}
            />
            <ShareButton
              icon={FaLinkedinIn}
              iconClass="!text-sky-600 "
              iconSize={52}
              title="Linkedin"
              onClick={() => openShareLink(SOCIAL_MEDIA.LINKEDIN, data.link)}
            />
          </div>
        </div>
        <div className="flex flex-col items-center border-b-2 dark:border-gray-600 p-2 gap-2">
          <div className="text-gray-600 dark:text-gray-200 font-semibold text-xl">
            Other
          </div>
          <div className="flex items-center justify-between py-2 gap-4 md:gap-8">
            <ShareButton
              icon={MdOutlineMailOutline}
              iconClass="text-orange-300"
              iconSize={52}
              title="Email"
              onClick={() => openShareLink(SOCIAL_MEDIA.EMAIL, data.link)}
            />
            <ShareButton
              icon={PiLinkLight}
              iconClass="text-cyan-500"
              iconSize={52}
              title="Copy "
              onClick={async () =>
                await navigator.clipboard.writeText(data.link)
              }
            />
          </div>
        </div>
      </div>
    );
  };
  return (
    <Modal
      modalSizeCss="w-4/5 md:w-2/3 lg:w-1/3"
      openModal={openModal}
      closeModal={closeModal}
      isOpen={isOpen}
      title={title}
      body={renderBody()}
    />
  );
}

ShareLinkModal.propTypes = {
  isOpen: PropTypes.bool,
  closeModal: PropTypes.func,
  openModal: PropTypes.func,
  title: PropTypes.string,
  data: PropTypes.any,
  onChange: PropTypes.func,
  actionClick: PropTypes.func,
};

ShareLinkModal.defaultProps = {
  isOpen: true,
  closeModal: null,
  openModal: null,
  title: "",
  data: {},
  onChange: null,
  actionClick: null,
};
