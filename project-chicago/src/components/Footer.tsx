import React from "react";
import styled from "styled-components";
import mobile from "../responsive";
import {Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter} from "@material-ui/icons";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 3rem;
  align-items: center;
  ${mobile({flexDirection: "column"})}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  margin: 0 1.5rem;
  flex-direction: column;
`;

const Logo = styled.h1``;
const Desc = styled.p`
  margin: 1.2rem 0;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 2.3rem;
  height: 2.3rem;
  border-radius: 50%;
  padding: 0.2rem;
  color: white;
  background-color: #${(props: { color: string }): string => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1.2rem;
`;

const Center = styled.div`
  flex: 1;
  margin: 0 1.5rem;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 2rem;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 0.8rem;
`;

const Right = styled.div`
  flex: 1;
  margin: 0 1.5rem;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 1.2rem;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = (): React.ReactElement => {
    return <Container>
        <Left>
            <Logo>CHICAGO.</Logo>
            <Desc>Created by an integrated style office of more than 50 employees to be closer to the trends, the
                proposed collections cover all the wardrobe of the man with 4 big universes: the casual - the smart -
                the jeans - the essentials.</Desc>
            <SocialContainer>
                <SocialIcon color={"1f1f1f"}>
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color={"1f1f1f"}>
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color={"1f1f1f"}>
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color={"1f1f1f"}>
                    <Pinterest/>
                </SocialIcon>
            </SocialContainer>
        </Left>

        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>

        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <Room style={{marginRight:"0.8rem"}}/> Gujarat, India
            </ContactItem>
            <ContactItem>
                <Phone style={{marginRight:"0.8rem"}}/> +91 80085 80085
            </ContactItem>
            <ContactItem>
                <MailOutline style={{marginRight:"0.8rem"}} /> customersupport.chicago@gmail..com
            </ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
    </Container>;
}

export default Footer;