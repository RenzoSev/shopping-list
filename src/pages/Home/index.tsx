import { useEffect, useId, useState } from 'react';
import { useAvatar } from '../../hooks/useAvatar';
import { useWillMountRedirect } from '../../hooks/useWillMountRedirect';
import {
  getAllProducts,
  Product,
  removeProduct,
  updateProduct,
  createProduct,
} from '../../server/product';
import { Component } from '../../types/Component';
import { createBaseProduct } from '../../utils/create';
import { getProductToBeCreated } from '../../utils/getters';
import {
  updateLessLengthProduct,
  updateMoreLengthProduct,
} from '../../utils/update';
import { HeaderWithCreateButton } from './use-cases/HeaderWithCreateButton';
import { ModalCreateProduct } from './use-cases/ModalCreateProduct';
import { Products } from './use-cases/Products';

export const Home: Component = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const [productName, setProductName] = useState('');
  const [productLength, setProductLength] = useState('');
  const [productCategory, setProductCategory] = useState('');

  const { hasAvatar, avatar } = useAvatar();

  const createProductModalId = useId();

  const productToBeCreated = getProductToBeCreated(
    productCategory,
    productLength,
    productName
  );

  function resetStates() {
    setProductName('');
    setProductLength('');
    setProductCategory('');
  }

  function handleProductName(e: React.ChangeEvent<HTMLInputElement>) {
    setProductName(e.target.value);
  }

  function handleProductLength(e: React.ChangeEvent<HTMLInputElement>) {
    setProductLength(e.target.value);
  }

  function handleProductCategory(e: React.ChangeEvent<HTMLInputElement>) {
    setProductCategory(e.target.value);
  }

  function handleDeleteProduct(productId: string) {
    removeProduct(productId);

    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );
  }

  function handleCreateProduct() {
    if (productName) {
      return;
    }

    if (productLength) {
      return;
    }

    if (productCategory) {
      return;
    }

    createProduct(createBaseProduct(productToBeCreated, avatar));
    resetStates();
  }

  function handleUpdateLessLengthProduct(product: Product) {
    if (product.length === 1) {
      handleDeleteProduct(product.id);
      return;
    }

    updateProduct(updateLessLengthProduct(product));
  }

  function handleUpdateMoreLengthProduct(product: Product) {
    updateProduct(updateMoreLengthProduct(product));
  }

  useWillMountRedirect({ url: '/choose-avatar', condition: !hasAvatar });

  useEffect(() => {
    if (!hasAvatar) {
      return;
    }

    const fetchProducts = async () => {
      await getAllProducts(setProducts);
    };

    fetchProducts();
  }, []);

  return (
    <div className="App flex flex-col px-6 pb-6">
      <section className="flex flex-col gap-10">
        <HeaderWithCreateButton
          avatar={avatar}
          buttonCreateText={'Criar item'}
          createProductModalId={createProductModalId}
        />

        <Products
          products={products}
          handleUpdateMoreLengthProduct={handleUpdateMoreLengthProduct}
          handleUpdateLessLengthProduct={handleUpdateLessLengthProduct}
        />

        <ModalCreateProduct
          createProductModalId={createProductModalId}
          handleCreateProduct={handleCreateProduct}
          handleProductCategory={handleProductCategory}
          handleProductLength={handleProductLength}
          handleProductName={handleProductName}
          productLength={productLength}
          productName={productLength}
        />
      </section>
    </div>
  );
};
