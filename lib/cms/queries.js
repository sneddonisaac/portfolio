import { gql } from 'graphql-request'

const getLandingPageQuery = gql`
    {
        page(where: { id: "cl5mdljqbnai50dt9arjizvf8" }) {
            id
            title
            content {
                ... on AboutMe {
                    __typename
                    id
                    title
                    paragraph
                    image {
                        height
                        width
                        url
                        alt
                        caption
                    }
                }
            }
        }
    }
`

const getCurrentWorkQuery = gql`
    query CurrentWork($slug: String!) {
        work(where: { slug: $slug }) {
            id
            title
            slug
            client
            description
            seo {
                description
                keywords
                noIndex
                title
                image {
                    url
                }
            }
            projectImage {
                height
                width
                url
                alt
                caption
            }
            projectLink
            codeLink
            projectTags
            projectType
            relatedProject {
                id
                title
                slug
                client
            }
            content {
                ... on FullPageScreenshot {
                    __typename
                    id
                    title
                    image {
                        url
                        alt
                    }
                }
                ... on SimpleHeader {
                    __typename
                    id
                    title
                    paragraph
                }
                ... on NoisyGradient5050Bordered {
                    __typename
                    id
                    NoisyBorderedHeading: heading
                    paragraph
                }
                ... on NoisyGradient5050Full {
                    __typename
                    id
                    NoisyFullHeading: heading
                    paragraph
                }
                ... on MasonryImageGrid {
                    __typename
                    id
                    title
                    images {
                        id
                        url
                        alt
                        title
                        caption
                        width
                        height
                        fileName
                    }
                }
                ... on Simple5050Header {
                    __typename
                    id
                    SimpleHeading: heading
                    paragraph
                }
                ... on TripleMobileMockup {
                    __typename
                    id
                    assets {
                        ... on ImageVideoComponent {
                            id
                            image {
                                fileName
                                alt
                                height
                                url
                                width
                            }
                            video {
                                url
                                fileName
                                id
                            }
                        }
                    }
                }
            }
        }
    }
`

const getCurrentLabQuery = gql`
    query CurrentLab($slug: String!) {
        lab(where: { slug: $slug }) {
            id
            title
            slug
            description
            seo {
                description
                keywords
                noIndex
                title
                image {
                    url
                }
            }
            projectImage {
                height
                width
                url
                alt
                caption
            }
            projectLink
            codeLink
            projectTags
            projectType
            relatedProject {
                id
                title
                slug
            }
            content {
                ... on FullPageScreenshot {
                    __typename
                    id
                    title
                    image {
                        url
                        alt
                    }
                }
                ... on SimpleHeader {
                    __typename
                    id
                    title
                    paragraph
                }
                ... on NoisyGradient5050Bordered {
                    __typename
                    id
                    NoisyBorderedHeading: heading
                    paragraph
                }
                ... on NoisyGradient5050Full {
                    __typename
                    id
                    NoisyFullHeading: heading
                    paragraph
                }
                ... on MasonryImageGrid {
                    __typename
                    id
                    title
                    images {
                        id
                        url
                        alt
                        title
                        caption
                        width
                        height
                        fileName
                    }
                }
                ... on Simple5050Header {
                    __typename
                    id
                    SimpleHeading: heading
                    paragraph
                }
                ... on TripleMobileMockup {
                    __typename
                    id
                    assets {
                        ... on ImageVideoComponent {
                            id
                            image {
                                fileName
                                alt
                                height
                                url
                                width
                            }
                            video {
                                url
                                fileName
                                id
                            }
                        }
                    }
                }
            }
        }
    }
`

const getFeaturedWorkQuery = gql`
    {
        works(where: { featured: true }) {
            id
            title
            slug
            projectTags
            description
        }
    }
`

const getAllWorksQuery = gql`
    query AllWorks {
        works(orderBy: updatedAt_DESC) {
            id
            title
            slug
            client
            description
            featured
            projectImage {
                height
                width
                url
                alt
                caption
            }
            projectLink
            codeLink
            projectTags
            projectType
        }
    }
`

const getAllLabsQuery = gql`
    query AllLabs {
        labs(orderBy: updatedAt_DESC) {
            id
            title
            slug
            description
            featured
            projectImage {
                height
                width
                url
                alt
                caption
            }
            projectLink
            codeLink
            projectTags
            projectType
        }
    }
`

export {
    getLandingPageQuery,
    getAllWorksQuery,
    getFeaturedWorkQuery,
    getCurrentWorkQuery,
    getAllLabsQuery,
    getCurrentLabQuery,
}
