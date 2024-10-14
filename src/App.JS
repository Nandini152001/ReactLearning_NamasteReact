import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const AppLayout = () => {
    // To understand concept of Virtual DOM and React using Reconciliation Algorithm, printing this body component which is an object ultimately.
    // console.log(<Body/>);  //This Object is Virtual DOM
    // READ: https://github.com/acdlite/react-fiber-architecture
    // DIFF ALGORITHM
      return (
        <div className="app">
          <Header />
          <Body />
        </div>
      );
    };
  
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
