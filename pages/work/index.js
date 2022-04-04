import { client } from '../../utils/sanity-client'
import { useState, useEffect } from 'react'
import Layout from '../../templates/Layout'
import WorkHero from '../../components/organisms/Heros/WorkHero'
import WorksGrid from '../../components/organisms/Grids/WorksGrid'
import Loading from '../../components/atoms/Loading'

export default function Works() {
  const [works, setWorks] = useState([])
  const [filterWork, setFilterWork] = useState([])
  const [loading, setLoading] = useState(false)
  const [progressValue, setProgressValue] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setProgressValue(progressValue + 1)
    }, 10)
  }, [progressValue])

  useEffect(() => {
    try {
      setTimeout(() => {
        setLoading(true)
      }, 1000)

      const query = '*[_type == "works"]'

      client.fetch(query).then((data) => {
        setWorks(data)
        setFilterWork(data)
      })
    } catch (error) {
      setLoading(false)
      alert(error.message)
    }
  }, [])

  return (
    <>
      {loading ? (
        <>
          <Layout title="Work">
            <WorkHero />
            <WorksGrid data={works} />
          </Layout>
        </>
      ) : (
        <Loading value={progressValue} />
      )}
    </>
  )
}
