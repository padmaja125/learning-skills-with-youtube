//import { Fragment } from "react";
import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup(props: Props) {
  const { items, heading, onSelectItem } = props;
  // inialize the value and keep it as place holder arr = useState(-1)
  // useState will return an array with two values as variable(selectedIndex), updater function

  const [selectedIndex, setSelectedIndex] = useState(-1);

  //const Message = {items.length === 0 ? <p> No item found </p> : null}
  // const handleClick = (event: MouseEvent) => {console.log(event)};

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p> No Item Found </p>}
      <ul className="list-group">
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

export default ListGroup;
