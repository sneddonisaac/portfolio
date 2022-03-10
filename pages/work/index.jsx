import { client } from '../../utils/sanity-client'
import { useState, useEffect } from 'react'
import Layout from '../../templates/Layout'
import WorkHero from '../../components/organisms/Heros/WorkHero/WorkHero'

export default function Works() {
  const [works, setWorks] = useState([])
  const [filterWork, setFilterWork] = useState([])

  useEffect(() => {
    const query = '*[_type == "works"]'

    client.fetch(query).then((data) => {
      setWorks(data)
      setFilterWork(data)
    })
  }, [])

  return (
    <Layout>
      <WorkHero data={works} />
    </Layout>
  )
}
