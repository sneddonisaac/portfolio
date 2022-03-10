import { useEffect, useState } from 'react'
import Layout from '../templates/Layout'
import { client } from '../utils/sanity-client'

export default function Snippets() {
  const [snippets, setSnippets] = useState([])

  useEffect(() => {
    const query = '*[_type == "snippets"]'

    client.fetch(query).then((data) => {
      setSnippets(data)
    })
  }, [])
  return (
    <Layout title='Snippets'>
      {snippets?.map((item) => (
        <div>{item.title}</div>
      ))}
      <div className='h-screen' />
    </Layout>
  )
}