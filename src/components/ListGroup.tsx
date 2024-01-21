import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

export default function ListGroup({ items, heading, onSelectItem }: Props) {
  //Hook: a functions that allows us to use built-in feature in react
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1 className="px-2">{heading}</h1>
      {items.length === 0 && <p>No items</p>}
      <ul className="list-group ">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
