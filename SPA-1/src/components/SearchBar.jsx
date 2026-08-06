function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <input
      type="text"
      placeholder="Search Projects"
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
      className="w-full rounded-md border border-gray-300 bg-white p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  )
}

export default SearchBar