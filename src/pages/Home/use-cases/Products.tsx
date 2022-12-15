import { ProductCard } from '../../../components/Card';
import { Product } from '../../../server/product';
import { Component } from '../../../types/Component';

interface IProducts {
  products: Product[];
  handleUpdateLessLengthProduct: (product: Product) => void;
  handleUpdateMoreLengthProduct: (product: Product) => void;
}

export const Products: Component<IProducts> = (props) => {
  const {
    products,
    handleUpdateLessLengthProduct,
    handleUpdateMoreLengthProduct,
  } = props;

  return (
    <div className="flex flex-col gap-4">
      {products.map((product) => (
        <ProductCard
          category={product.category}
          length={product.length}
          name={product.name}
          src={product.createdBySrc}
          key={product.id}
          handleClickFirstButton={() => handleUpdateLessLengthProduct(product)}
          handleClickSecondButton={() => handleUpdateMoreLengthProduct(product)}
        />
      ))}
    </div>
  );
};
