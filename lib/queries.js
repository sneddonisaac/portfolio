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
`;

const getCurrentWorkQuery = gql`
  query CurrentWork($slug: String!) {
    work(where: {slug: $slug}) {
      id
      title
      slug
      description
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
      content {
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
      title
      slug
      projectTags
      description
    }
  }
`;

const getAllWorksQuery = gql`
  query AllWorks {
    works {
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
    }
  }
`;

export { getLandingPageQuery, getAllWorksQuery, getFeaturedWorkQuery, getCurrentWorkQuery };