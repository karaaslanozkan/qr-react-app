import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import './App.css';
import axios from "axios";
import React, { useState,useEffect } from "react";
import QrReader from "react-qr-reader";
import Param from "./Param";
function App() {
useEffect(()=>{
  axios("https://jsonplaceholder.typicode.com/users/"+mounturl)
  .then((res) => setProduct(res.data))
  .catch((e) => console.log(e))
  .finally(() => setIsLoading(false));
});

const [product, setProduct] = useState([]);
const [isLoading, setIsLoading] = useState(true);
const [result, setResult] = useState("No result");
const [mounturl, setMounturl] = useState("");
let handleScan = (data) => {
  if (data) {
    var productId=data.split("/");
  

    axios( "https://jsonplaceholder.typicode.com/users/" +productId[3])
    .then((res) => setProduct(res.data))
    .catch((e) => console.log(e))
    .finally(() => setIsLoading(false));
  }
};


  let handleError = err => {
    // alert(err);
  };
  return (
<Router>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: "100%" }}
        facingMode="environment"
      />
      <p>{result}{product.id}</p>
      <Switch>
          <Route path="/:id" children={<Param useUrl={setMounturl} />} />
        </Switch>
    </Router>
  );
}


export default App;
