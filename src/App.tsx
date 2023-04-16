import ListGroup from "./components/ListGroup";
// import Alert from "./components/Alert";
import { useState } from "react";
import Button from "./components/Button";
import ShowAlert from "./components/ShowAlert";

function App() {


  // return
  // return (
  //   <div className="alert alert-primary">
  //     <Alert>
  //       Hello <span>Word</span>
  //     </Alert>
  //   </div>
  // )
  // return(
  //
  // )
  const [alertVisible, setAlert] = useState(false);
  let items = [
    "New York",
    "São Paulo",
    "Hong Kong",
    "London",
    "Rio de Janeiro",
  ];

  const handleSelectedItem = (item: string) => {
    console.log(item)
  }
  return (
    <>
    
      <div>
        <ListGroup
          items={items}
          heading="Cities"
          onSelectedItem={handleSelectedItem}
        />
      </div>
      <div>
        {alertVisible && (
          <ShowAlert onClose={() => setAlert(false)}>
            Este alerta está aparecendo, para sumir com ele basta apertar no{" "}
            <strong> X </strong>ao lado
          </ShowAlert>
        )}
        <Button color="success" onClick={() => setAlert(true)}>
          My button
        </Button>
      </div>
    </>
  );
}

export default App;
