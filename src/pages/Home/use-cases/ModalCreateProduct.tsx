import { Modal } from '../../../components/Modal';
import { Select } from '../../../components/Select';
import { TextInput } from '../../../components/TextInput';
import { ProductCategory } from '../../../server/product';
import { Component } from '../../../types/Component';

interface IModalCreateProduct {
  createProductModalId: string;
  productName: string;
  productLength: string;

  missingFields: boolean;

  handleCreateProduct: (...args: any[]) => void;
  handleProductName: (...args: any[]) => void;
  handleProductLength: (...args: any[]) => void;
  handleProductCategory: (...args: any[]) => void;
}

export const ModalCreateProduct: Component<IModalCreateProduct> = (props) => {
  const {
    createProductModalId,
    productName,
    productLength,
    handleCreateProduct,
    handleProductName,
    handleProductLength,
    handleProductCategory,
    missingFields,
  } = props;

  return (
    <Modal
      id={createProductModalId}
      buttonText="Criar"
      handleClick={handleCreateProduct}
      shouldDisableButton={missingFields}
    >
      <div className="flex flex-col gap-3">
        <TextInput
          handleTextInput={handleProductName}
          placeholder="Nome"
          value={productName}
        />

        <TextInput
          handleTextInput={handleProductLength}
          placeholder="Quantidade"
          value={String(productLength)}
        />

        <Select
          handleOnChange={handleProductCategory}
          options={Object.keys(ProductCategory)}
          title="Categorias"
        />
      </div>
    </Modal>
  );
};
