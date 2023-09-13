import React from "react";

const MenuListItem = (props) => {
  const onitemClick = () => {
    props.setCurrentMood(props.mood);
  };
  return (
    <li>
      <button onClick={onitemClick} className="btn-item">
        기분이 : {props.mood}
      </button>
    </li>
  );
};

export default MenuListItem;
