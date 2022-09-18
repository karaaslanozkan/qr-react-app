import React, { useState, useEffect } from 'react';
import QrReader from 'react-qr-reader';
import './style.css';
import axios from 'axios';
function Test() {
    const [result, setResult] = useState(
        'https://jsonplaceholder.typicode.com/users/3'
      );
      const [product, setProduct] = useState([]);
      const [isLoading, setIsLoading] = useState(true);
      let handleScan = (data) => {
        if (data) {
          axios(data)
          .then((res) => setProduct(res.data))
          .catch((e) => console.log(e))
          .finally(() => setIsLoading(false));
        }
      };
    
      let handleError = (err) => {
        // alert(err);
      };
  return (
    <div>
    <QrReader
      delay={300}
      onError={handleError}
      onScan={handleScan}
      style={{ width: '100%' }}
      facingMode="environment"
    />
    <p>
      {isLoading && <div>Yükleniyor</div>}
      Ürünün Fiyatı : {product.id}
    </p>
</div>
  )
}

export default Test
