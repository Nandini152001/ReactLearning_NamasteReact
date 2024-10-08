import Header from "./Header";
import Body from "./Body";

const AppLayout = () => {
  // To understand concept of Virtual DOM and React using Reconciliation Algorithm, printing this body component which is an object ultimately.
  console.log(<Body/>);  //This Object is Virtual DOM
  // READ: https://github.com/acdlite/react-fiber-architecture
  // DIFF ALGORITHM
    return (
      <div>
        <Header />
        <Body />
        <div className="app"></div>
      </div>
    );
  };

export default AppLayout;