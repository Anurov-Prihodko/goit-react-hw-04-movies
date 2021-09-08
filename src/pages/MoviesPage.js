export default function MoviesPage() {
  return (
    <form>
      <input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movie by name"
        // value={requestName}
        // onChange={handleNameChange}
      />
      <button type="submit">
        <span>Search</span>
      </button>
    </form>
  );
}
