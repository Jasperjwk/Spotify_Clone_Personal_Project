import React from "react";
import "./SidebarOption.css";

function SidebarOption({ option = "test", Icon }) {
  return (
    <div className="sidebarOption">
      {Icon && <Icon className="sidebarOption__icon" />}
      {/* If there's icon, show h4 title, else show <p< title */}
      {Icon ? <h4>{option}</h4> : <p>{option}</p>}
    </div>
  );
}

export default SidebarOption;
