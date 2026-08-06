import { useState } from 'react'

function AddProjectForm({ onAddProject }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault() // stops the page refresh

    if (title.trim() === '') {
      return // no empty titles (Kinda validation)
    }

    onAddProject(title, description)
    setTitle('')
    setDescription('')
  }

  return (
    <div className="rounded-lg bg-white p-6 shadow-md">
      <h2 className="mb-3 text-lg font-semibold">Add Project</h2>
      <form onSubmit={handleSubmit}> {/*I've put it here and not on <button> so pressing enter also submits the form */}
        <label className="mb-1 block text-sm font-medium" htmlFor="title">
          Title
        </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mb-4 w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label className="mb-1 block text-sm font-medium" htmlFor="description">
          Description
        </label>
        <textarea
          id="description"
          rows="3"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mb-4 w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="rounded-md bg-blue-700 px-4 py-2 text-white hover:bg-blue-800"
        >
          Add
        </button>
      </form>
    </div>
  )
}

export default AddProjectForm