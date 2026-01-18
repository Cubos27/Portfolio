import { useEffect, useState } from 'react'
import './mainPage.css'
import ProjectCard from './projectsComponents/projectCard'

export const Projects = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

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
      } catch (e) {
        setError(e)
        setLoading(false)
      }
    }

    fetchRepos()
  }, [])

  return (
    <div className='container repos-container'>
      <h2 className='title'>Projects on GitHub</h2>
      <div className='cards-container'>
        {projects.map((repo) => (
          <ProjectCard key={repo.id} name={repo.name} url={repo.html_url} description={repo.description} defaultBranch={repo.default_branch} />
        ))}
      </div>

      {error && <div className='error-text'>Error: {error}</div>}
      {loading && <div className='loading-text'>Loading projects...</div>}
    </div>
  )
}
