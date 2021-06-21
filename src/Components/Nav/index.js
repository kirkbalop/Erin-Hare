import React from "react";

function Nav(props) {
  const { currentTab, setCurrentTab } = props;
  return (
    <nav>
      <ul className="flex-row mobile-view">
        <li className={currentTab === "home" ? "mx-2 navActive" : "mx-2"}>
          <span onClick={() => setCurrentTab("home")}>Home</span>
        </li>
        <li className={currentTab === "services" ? "mx-2 navActive" : "mx-2"}>
          <span onClick={() => setCurrentTab("services")}>Services</span>
        </li>
        <li className={currentTab === "product" ? "mx-2 navActive" : "mx-2"}>
          <span onClick={() => setCurrentTab("product")}>Product</span>
        </li>
        <li className={currentTab === "contact" ? "mx-2 navActive" : "mx-2"}>
          <span onClick={() => setCurrentTab("contact")}>Contact</span>
        </li>
      </ul>
    </nav>
  );
}
