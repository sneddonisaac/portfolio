const defaultUrl = 'www.isaacsneddonjenkins.co.uk'
const title = 'Home'
const description = 'Welcome to my portfolio'

const SEO = {
    title,
    titleTemplate: '%s | ISJ',
    description,
    openGraph: {
        title,
        description,
        type: 'website',
        url: defaultUrl,
    },
    twitter: {
        handle: '@sneddev',
        site: '@sneddev',
        cardType: 'summary_large_image',
    },
}

export { SEO, defaultUrl }
