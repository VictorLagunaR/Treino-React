import { useState } from "react";

interface Props{
    items: string[];
    heading: string;
    onSelectedItem: (item: string) => void;
}

function ListGroup({items, heading, onSelectedItem}:Props) {


  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const messageNotFound = () => {
    return items.length === 0 && <p>No item found</p>;
  };

  return (
    <>
      <h1>{heading}</h1>
      {messageNotFound()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => { 
                setSelectedIndex(index)
                onSelectedItem(item)
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
