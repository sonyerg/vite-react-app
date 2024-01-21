import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

// import ListGroup from "./components/ListGroup";
export default function App() {
  // const items = ["Auckland", "Christchurch", "Dunedin", "Queenstown"];
  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  const [showAlert, setShowAlert] = useState(false);

  const handleButtonClick = () => {
    setShowAlert(true);
  };

  const handleAlertClose = () => {
    setShowAlert(false);
  };

  return (
    <div>
      {/* <ListGroup
        items={items}
        heading={"Cities"}
        onSelectItem={handleSelectItem}
      /> */}
      {showAlert && (
        <Alert onClose={handleAlertClose}>
          Hello <span className="text-bold">World</span>
        </Alert>
      )}
      <Button color="danger" onClick={handleButtonClick}>
        My button
      </Button>
    </div>
  );
}
