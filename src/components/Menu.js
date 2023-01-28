// imports the React library
import React from "react";

// exports the Menu component as the default export
export default function Menu({ active, setActive, setCategory }) {
  // creates an array of links
  const links = [
    { id: 1, name: "General", value: "general" },
    { id: 2, name: "Business", value: "business" },
    { id: 3, name: "Entertainment", value: "entertainment" },
    { id: 4, name: "Health", value: "health" },
    { id: 5, name: "Science", value: "science" },
    { id: 6, name: "Sports", value: "sports" },
    { id: 7, name: "Technology", value: "technology" },
  ];

  // function that sets the active link and category when clicked
  function onClick(id, value) {
    setActive(id);
    setCategory(value);
  }
  // render the navbar with the links
  return (
    <nav className="menu">
      <ul>
        {links.map((link) => (
          <li
            key={link.id} // used by React to identify the element
            className={active === link.id ? "active" : "inactive"} // apply class "active" if the link is currently active
            onClick={() => onClick(link.id, link.value)} // call the function onClick when the link is clicked
          >
            {/* the name of the link */}

            {link.name}
          </li>
        ))}
      </ul>
    </nav>
  );
}
