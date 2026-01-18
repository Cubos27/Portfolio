import { useEffect, useState } from 'react'
import './mainPage.css'

export const Projects = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/Cubos27/repos?sort=updated&direction=desc`
        )

        if (!response.ok) throw new Error('Could not fetch repos')

        const data = await response.json()
        setProjects(data)
        setLoading(false)
      } catch (error) {

      }


    }
  }, [])


  return (
    <div className='container'>
      <h2>My Projects</h2>
    </div>
  )
}
