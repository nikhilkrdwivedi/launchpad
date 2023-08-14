/* eslint-disable no-unused-vars */
export const SOCIAL_SHARE_URL_MAPPING = {
    FACEBOOK: 'https://www.facebook.com/sharer/sharer.php',
    TWITTER: 'https://twitter.com/intent/tweet',
    LINKEDIN: 'https://www.linkedin.com/sharing/share-offsite',
    INSTAGRAM: 'https://www.instagram.com/create/captioned',
}

export const SOCIAL_MEDIA = {
    FACEBOOK: 'FACEBOOK',
    TWITTER: 'TWITTER',
    LINKEDIN: 'LINKEDIN',
    INSTAGRAM: 'INSTAGRAM',
    EMAIL: 'EMAIL',
}



export const SOCIAL_SHARE_URL = {
    FACEBOOK: (url) => `${SOCIAL_SHARE_URL_MAPPING.FACEBOOK}?u=${encodeURIComponent(url)}`,
    LINKEDIN: (url) => `${SOCIAL_SHARE_URL_MAPPING.LINKEDIN}?mini=true&url=${encodeURIComponent(url)}`,
    TWITTER: (url) => `${SOCIAL_SHARE_URL_MAPPING.TWITTER}?url=${encodeURIComponent(url)}`,
    INSTAGRAM: (url) => `${SOCIAL_SHARE_URL_MAPPING.INSTAGRAM}?url=${encodeURIComponent(url)}`,
    EMAIL: (url, subject = 'New Link!',) => `mailto:?&subject=${subject}&body=Hi,\n ${url}`
};