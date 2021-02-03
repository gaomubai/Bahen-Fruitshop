import React, { useState } from 'react';
import { Modal, Button } from 'antd';

import cart from '../../Assets/Images/shopping_cart.png'

const Cart = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <img src={cart} alt="" className='cart' onClick={showModal}/>
      <Modal title="Shopping Cart" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Banana * 4</p>
        <p>Apple * 4</p>
        <p>Total: $14</p>
      </Modal>
    </>
  );
};

export default Cart;