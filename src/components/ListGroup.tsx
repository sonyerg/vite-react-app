import { MouseEvent } from "react";

export default function Lis() {
  const items = ["Auckland", "Christchurch", "Dunedin", "Queenstown"];
  //event handler
  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No items</p>}
      <ul className="list-group ">
        {items.map((item) => (
          <li
            className="list-group-item active"
            key={item}
            onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
