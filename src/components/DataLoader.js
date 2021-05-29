import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';

const DataLoader = () => {
  return (
    <Dimmer active inverted>
      <Loader size="massive">로딩중...</Loader>
    </Dimmer>
  );
};

export default DataLoader;
