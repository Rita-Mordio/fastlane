import React, { useState, useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import axios from 'axios';
import _ from 'lodash';

import DataLoader from './components/DataLoader';
import ProductList from './components/ProductList';

const App = () => {
  const [resultData, setResultData] = useState([]);

  const getAPIData = () => {
    return axios
      .get('https://fe8eb658-e817-42b3-9c2b-8750cc0b33c4.mock.pstmn.io/latest/ios/products')
      .then((response) => {
        return response.data.results;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const refactorData = (data) => {
    const concatData = data.newProducts.concat(data.recommendProducts); //'newProducts' 와 'recommendProducts' 합치기
    const noDuplicationData = _.uniqBy(concatData, 'customerName'); // 중복 병원명 제거
    const sortData = _.sortBy(noDuplicationData, ['price']);
    setResultData(sortData);
  };

  useEffect(() => {
    (async () => {
      const responseResults = await getAPIData();
      refactorData(responseResults);
    })();
  }, []);

  return (
    <Container>
      {resultData.length === 0 ? <DataLoader /> : <ProductList products={resultData} />}
    </Container>
  );
};

export default App;
