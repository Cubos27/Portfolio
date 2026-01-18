import '../css/skills.css'

export const Experience = () => {
  const experience = [
    { place: 'IBM', name: 'P-TECH Student', description: 'I worked as a student in IBM for 4 months, my work there was to code the frontend of some pages that they use internally at IBM' },
    { place: 'Foxconn', name: 'Técnico especialista en pruebas', description: 'I worked at Foxconn as a technitian, the duration of this work was 1 month because it was a night shift and I had to go to school' }
  ]

  return (
    <div className='exp-container'>
      <h2 className='title'>Experience</h2>
      {experience.map((job, index) => (
        <div key={index} className='expcard-container'>
          <h3 className='exp-place'>{job.place}</h3>
          <b>{job.name}</b>
          <p>{job.description}</p>
        </div>
      ))}
    </div>
  )
}
