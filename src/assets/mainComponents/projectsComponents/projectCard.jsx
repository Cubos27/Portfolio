import './projectCard.css'

function ProjectCard({ name, url, description, defaultBranch }) {
  const imageUrl = `https://raw.githubusercontent.com/Cubos27/${name}/${defaultBranch}/preview.png`;

  return (
    <div className="card">
      <a href={url} className="repo-link">
        <h3 className="repo-name">{name}</h3>
      </a>
      <div className='content'>
        <p className="repo-desc">{description}</p>
        <img src={imageUrl} alt='' className="repo-img" />
      </div>
    </div>
  )
}

export default ProjectCard
