import { Grid } from 'semantic-ui-react';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => {

  const renderCard = () => {
    return products.map((product, index) => (
      <Grid.Column key={index}>
        <ProductCard header={product.name} meta={product.price} description={product.customerName} />
      </Grid.Column>
    ));
  };

  return (
    <Grid columns={3} padded>
      {renderCard()}
    </Grid>
  );
};

export default ProductList;
