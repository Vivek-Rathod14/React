import React, { useState } from "react";

const MovieSearch = ({ movies }) => {
  const [query, setQuery] = useState("");

  const filtered = movies.filter((m) =>
    m.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search movie..."
        onChange={(e) => setQuery(e.target.value)}
      />

      {filtered.map((m) => (
        <p key={m.id}>{m.title}</p>
      ))}
    </div>
  );
};

export default MovieSearch;