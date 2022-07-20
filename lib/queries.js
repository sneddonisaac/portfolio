const workFields = `
  _id,
  name,
  title,
  date,
  excerpt,
  coverImage,
  "slug": slug.current,
  "author": author->{name, picture},
`

export const indexQuery = `
*[_type == "works"] | order(date desc, _updatedAt desc) {
  ${workFields}
}`

export const workQuery = `
{
  "works": *[_type == "works" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${workFields}
  },
  "morePosts": *[_type == "works" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
    content,
    ${workFields}
  }
}`

export const workSlugsQuery = `
*[_type == "works" && defined(slug.current)][].slug.current
`

export const workBySlugQuery = `
*[_type == "works" && slug.current == $slug][0] {
  ${workFields}
}
`

import { gql } from 'graphql-request';

const getLandingPageQuery = gql`
  {
    page(where: {id: "cl5mdljqbnai50dt9arjizvf8"}) {
      id
      title
      content {
        ... on AboutMe {
          __typename
          id
          title
          paragraph
          image {
            altText
            caption
            image {
              height
              width
              url
            }
          }
        }
      }
    }
  }
`;

const getCurrentWorkQuery = gql`
  query CurrentWork($slug: String!) {
    work(where: {slug: $slug}) {
      id
      title
      slug
      description
      projectImage {
        altText
        caption
        image {
          height
          width
          url
        }
      }
      projectLink
      codeLink
      projectTags
      content {
        ... on TripleMobileMockup {
          __typename
          id
          assets {
            ... on ImageVideoComponent {
              id
              image {
                fileName
                height
                url
                width
              }
              video {
                url
                fileName
                id
              }
              isItAVideo
            }
          }
        }
        ... on Simple5050Header {
          __typename
          id
          heading
          paragraph
        }
        ... on DecreasingImageGrid {
          __typename
          id
          largeSquareImage {
            url
            id
            width
            height
            fileName
          }
          tallThinImage {
            url
            id
            width
            height
             fileName
          }
          smallSquareImage {
            url
            id
            width
            height
            fileName
          }
          thinWideImage {
            url
            id
            width
            height
            fileName
          }
        }
      }
    }
  }
`;

const getFeaturedWorkQuery = gql`
  {
    works(where: {featured: true}) {
      id
      projectTags
      description
      title
      slug
    }
  }
`;

const getAllWorksQuery = gql`
  {
    works {
      id
      title
      slug
      description
      featured
      projectImage {
        altText
        caption
        image {
          height
          width
          url
        }
      }
      projectLink
      codeLink
      projectTags
    }
  }
`;

export { getLandingPageQuery, getAllWorksQuery, getFeaturedWorkQuery, getCurrentWorkQuery };