import React, { useMemo } from "react";
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
import { useStateContext } from "../../context/StateContext";
import {
  useDeleteProductFromCartMutation,
  useGetCartQuery,
} from "../../redux/productsRTK/productsRTK";

export default function Cart() {
  const { isCartModalOpen, setIsCartModalOpen } = useStateContext();

  const { data: cart } = useGetCartQuery();

  const [deleteProduct, _] = useDeleteProductFromCartMutation();

  const handleBackdrop = (e) => {
    if (e.currentTarget === e.target) {
      setIsCartModalOpen(!isCartModalOpen);
    }
  };

  return (
    <Backdrop onClick={handleBackdrop}>
      <Modal>
        <CloseButton>
          <AiOutlineClose
            onClick={() => setIsCartModalOpen(!isCartModalOpen)}
          />
        </CloseButton>

        <ModalContent>
          <Title>Cart</Title>
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <CartList>
              {cart.map(({ uid, images, price, title }) => {
                const productId = cart?.find((item) => item.uid === uid);
                return (
                  <CartItem key={uid}>
                    <Wrapper>
                      <ProductImage src={images[0]} alt={title} />
                      <CounterWrapper>
                        <Button>-</Button>
                        {/* <ProductQuantity>{quantity}</ProductQuantity> */}
                        <Button>+</Button>
                      </CounterWrapper>
                      <PriceWrapper>
                        {/* <ProductPrice>${price * quantity}</ProductPrice> */}
                        <ProductPricePerItem>
                          ${price} / per item
                        </ProductPricePerItem>
                      </PriceWrapper>
                    </Wrapper>
                    <RemoveButton onClick={() => deleteProduct(productId)}>
                      <TbTrashXFilled />
                    </RemoveButton>
                  </CartItem>
                );
              })}
            </CartList>
          )}

          {cart.length !== 0 && (
            <Summary>
              <TotalPriceWrapper>
                <Text>Total:</Text>
                {/* <TotalPrice>${totalPrice}</TotalPrice> */}
              </TotalPriceWrapper>
              <MakeOrderButton>Make order</MakeOrderButton>
            </Summary>
          )}
        </ModalContent>
      </Modal>
    </Backdrop>
  );
}
