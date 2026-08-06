import { useState } from 'react'
import AddProjectForm from './components/Form.jsx'
import SearchBar from './components/SearchBar.jsx'
import ProjectList from './components/Projects.jsx'

function App() {
  const [projects, setProjects] = useState([])

  const [searchTerm, setSearchTerm] = useState('')

  const handleAddProject = (title, description) => {
    const newProject = {
      id: crypto.randomUUID(), // generates a unique id for the new project
      title: title,
      description: description,
    }
    setProjects([...projects, newProject])
  }

  const handleDeleteProject = (id) => {
    setProjects(projects.filter((project) => project.id !== id)) //Keep all projects except the one with the matching id
  }

  // only keep projects whose title matches the search box
  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) //To ignore capitalization, I've used toLowerCase().
  )

  return (
    <div className="min-h-screen bg-gray-900">
      <main className="mx-auto max-w-xl p-5">
        <h1 className="mb-8 pt-6 text-center text-2xl font-bold text-white">
          David's Project Showcase SPA 
        </h1>
        <div className="flex items-center justify-center">
        <span className="block w-40 h-1 bg-blue-600 mt-2 mb-10 rounded-full"></span>
        </div>
        <div className="mb-5">
          <AddProjectForm onAddProject={handleAddProject} />
        </div>

        <div className="mb-5">
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        </div>
        <div className="mb-5 flex items-center gap-2">
          <h2 className="text-lg font-semibold text-gray-100">My Projects</h2>
          <span className="rounded-full bg-blue-600 px-2  text-sm text-white">
            {filteredProjects.length}
          </span>
        </div>

        <ProjectList projects={filteredProjects} onDeleteProject={handleDeleteProject} />
      </main>
    </div>
  )
}

export default App
