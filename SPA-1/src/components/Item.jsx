//Just one project card.
function ProjectItem({ project, onDeleteProject }) {
  return (
    <div className="mb-4 flex items-start rounded-lg border-l-4 border-blue-700 bg-white p-4 shadow hover:shadow-lg">
      <div className="grow">
        <p className="font-bold">{project.title}</p>
        <p className="text-sm text-gray-600">{project.description}</p>
      </div>
      <button
        onClick={() => onDeleteProject(project.id)}
        className="rounded-full px-2 text-red-600 hover:bg-red-100"
      >
        <p>Delete</p>
      </button>
    </div>
  )
}

export default ProjectItem