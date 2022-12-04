import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAvatar } from './hooks/useAvatar';
import {
  getAllProducts,
  removeProduct,
  createProduct,
  Product,
  updateProduct,
} from './server';

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate();
  const { hasAvatar } = useAvatar();

  if (!hasAvatar) {
    return navigate('/choose-avatar');
  }

  useEffect(() => {
    const fetchProducts = async () => {
      await getAllProducts(setProducts);
    };

    fetchProducts();
  }, []);

  function handleDeleteProduct(productId: string) {
    removeProduct(productId);
  }

  function handleCreateProduct(product: Product) {
    createProduct(product);
  }

  function handleUpdateProduct(product: Product) {
    updateProduct(product);
  }

  return (
    <div className="App">
      <header></header>
    </div>
  );
}

export default App;
