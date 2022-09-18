import React, { useState,useEffect } from "react";
import useQrReader from "react-qr-reader";
import "./style.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

export default function App() {
  const [result, setResult] = useState("No result");
  const [product,setProduct] = useState();
  
  let handleScan = data => {
    if (data) {
      setResult(data);
    }
  };

  let handleError = err => {
    // alert(err);
  };
  return (
    <div>
       <Router>
      <div>
        <Switch>
          <Route path="/:id" children={<Child />} />
        </Switch>
      </div>
    </Router>
      <useQrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: "100%" }}
        facingMode="environment"
      />
      <p>{result}</p>
    </div>
  );
}
function Child() {
  let { id } = useParams();

  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
}