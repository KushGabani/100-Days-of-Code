import React, { useState } from "react";
import styled from "styled-components";
import mobile from "../responsive";

const Container = styled.div`
  flex: 1;
  margin: 5px;
  height: 70vh;
  position: relative;
  background-color: #2c2c2c;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${(props: { hover: boolean }): number => (props.hover ? 0.7 : 1.0)};
  transition: 0.2s opacity ease-out;
  ${mobile({ height: "20vh" })}
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: ${(props: { toDisplay: boolean }): string =>
    props.toDisplay ? "flex" : "none"};
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;

const Button = styled.button`
  border: none;
  padding: 0.7rem 1.5rem;
  border-radius: 4px;
  background-color: white;
  color: #2c2c2c;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
`;

type itemType = {
  id: number;
  title: string;
  img: string;
};

const CategoryItem = (props: { item: itemType }): React.ReactElement => {
  const [hover, onHover] = useState(false);

  const hovered = () => {
    onHover(!hover);
  };

  return (
    <Container onMouseOver={() => hovered()} onMouseOut={() => hovered()}>
      <Image src={props.item.img} hover={hover} />
      <Info toDisplay={hover}>
        <Title>{props.item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
