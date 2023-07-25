import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import {
  Backdrop,
  ModalContent,
  Modal,
  CloseButton,
  CartItem,
  CartList,
  Title,
  ProductName,
  Wrapper,
  ProductPrice,
  ProductQuantity,
  TotalPrice,
  TotalPriceWrapper,
  Text,
} from "./cart.styled";

export default function Cart({ handleToggleModal, cart }) {
  const handleCloseOnBackdrop = (e) => {
    if (e.currentTarget === e.target) {
      handleToggleModal();
    }
  };

  const totalPrice = cart.reduce(
    (sum, { price, quantity }) => (sum += price * quantity),
    0
  );
  return (
    <Backdrop onClick={handleCloseOnBackdrop}>
      <Modal>
        <CloseButton onClick={handleToggleModal}>
          <AiOutlineClose />
        </CloseButton>

        <ModalContent>
          <Title>Cart</Title>

          {cart.length ? (
            <CartList>
              {cart?.map(({ id, image, price, quantity }) => (
                <CartItem key={id}>
                  <ProductName>{image}</ProductName>
                  <Wrapper>
                    <ProductQuantity>{quantity}</ProductQuantity>X
                    <ProductPrice>${price}</ProductPrice>
                  </Wrapper>
                  <button>Remove</button>
                </CartItem>
              ))}
            </CartList>
          ) : (
            <p>Your cart is empty</p>
          )}

          <TotalPriceWrapper>
            <Text>Total:</Text>
            <TotalPrice>${totalPrice}</TotalPrice>
          </TotalPriceWrapper>
        </ModalContent>
      </Modal>
    </Backdrop>
  );
}
