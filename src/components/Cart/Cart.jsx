import React, { useContext, useMemo } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { TbTrashXFilled } from "react-icons/tb";
import {
  Backdrop,
  ModalContent,
  Modal,
  CloseButton,
  CartItem,
  CartList,
  Title,
  ProductImage,
  ProductPrice,
  PriceWrapper,
  CounterWrapper,
  ProductQuantity,
  Button,
  TotalPrice,
  TotalPriceWrapper,
  Text,
  Wrapper,
  RemoveButton,
  ProductPricePerItem,
  Summary,
  MakeOrderButton,
} from "./cart.styled";
import { Context } from "../../contex/stateContext";

export default function Cart() {
  const { handleCartModal, cart, setCart } = useContext(Context);

  const handleBackdrop = (e) => {
    if (e.currentTarget === e.target) {
      handleCartModal();
    }
  };

  const totalPrice = useMemo(
    () =>
      cart.reduce((total, { price, quantity }) => total + price * quantity, 0),
    [cart]
  );

  const handleIncrementProduct = (productId) => {
    const updatedCart = cart.map((item) => {
      if (item.id === productId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const handleDecrementProduct = (productId) => {
    const product = cart.find((product) => product.id === productId);

    if (product.quantity <= 1) {
      removeFromCart(productId);
      return;
    }

    const updatedCart = cart.map((item) => {
      if (product.id === item.id) {
        return { ...item, quantity: (item.quantity -= 1) };
      }
      return item;
    });

    setCart(updatedCart);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
  };

  return (
    <Backdrop onClick={handleBackdrop}>
      <Modal>
        <CloseButton>
          <AiOutlineClose onClick={handleCartModal} />
        </CloseButton>

        <ModalContent>
          <Title>Cart</Title>
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <CartList>
              {cart.map(({ id, images, price, quantity, title }) => (
                <CartItem key={id}>
                  <Wrapper>
                    <ProductImage src={images[0]} alt={title} />
                    <CounterWrapper>
                      <Button onClick={() => handleDecrementProduct(id)}>
                        -
                      </Button>
                      <ProductQuantity>{quantity}</ProductQuantity>
                      <Button onClick={() => handleIncrementProduct(id)}>
                        +
                      </Button>
                    </CounterWrapper>
                    <PriceWrapper>
                      <ProductPrice>${price * quantity}</ProductPrice>
                      <ProductPricePerItem>
                        ${price} / per item
                      </ProductPricePerItem>
                    </PriceWrapper>
                  </Wrapper>
                  <RemoveButton onClick={() => removeFromCart(id)}>
                    <TbTrashXFilled />
                  </RemoveButton>
                </CartItem>
              ))}
            </CartList>
          )}

          {cart.length !== 0 && (
            <Summary>
              <TotalPriceWrapper>
                <Text>Total:</Text>
                <TotalPrice>${totalPrice}</TotalPrice>
              </TotalPriceWrapper>
              <MakeOrderButton>Make order</MakeOrderButton>
            </Summary>
          )}
        </ModalContent>
      </Modal>
    </Backdrop>
  );
}
