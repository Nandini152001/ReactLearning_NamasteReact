import Header from "./Header";
import Body from "./Body";

const AppLayout = () => {
    return (
      <div>
        <Header />
        <Body />
        <div className="app"></div>
      </div>
    );
  };

export default AppLayout;