import { useEffect, useState } from 'react';
import { getAllProducts, removeProduct, Products } from './server';
import { uuid } from './utils/uuid';

function App() {
  const [products, setProducts] = useState<Products[]>([]);

  function handleDeleteProduct(productId: string) {
    removeProduct(productId);
  }

  useEffect(() => {
    const fetchProducts = async () => {
      await getAllProducts(setProducts);
    };

    fetchProducts();
  }, []);

  return (
    <div className="App">
      <h1 className="text-3xl text-red-500 underline">Shopping List!</h1>

      <div>
        {products.map((product) => (
          <p key={product.name}>{product.name}</p>
        ))}
      </div>

      <button onClick={() => handleDeleteProduct('-NITZLzS2t3tlyuydiQO')}>
        REMOVER
      </button>
    </div>
  );
}

export default App;
