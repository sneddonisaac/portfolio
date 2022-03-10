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