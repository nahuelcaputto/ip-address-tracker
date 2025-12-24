export default function SearchBar() {
  return (
    <div className="absolute top-28 left-1/2 -translate-x-1/2 w-[90%] max-w-xl z-10">
      <input
        type="text"
        placeholder="Search for any IP address or domain"
        className="w-full p-4 rounded-lg shadow focus:outline-none"
      />
    </div>
  );
}
