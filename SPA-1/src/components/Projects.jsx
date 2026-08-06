import ProjectItem from './Item.jsx'

function ProjectList({ projects, onDeleteProject }) {
  // A search with no matches.
  if (projects.length === 0) {
    return <p className="text-red-400">No projects found.</p>
  }

  return (
    <div>
      {projects.map((project) => (
        <ProjectItem key={project.id} project={project} onDeleteProject={onDeleteProject} />
      ))}
    </div>
  )
}

export default ProjectList