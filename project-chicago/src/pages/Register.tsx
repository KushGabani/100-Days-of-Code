import React from "react";
import styled from "styled-components";
import mobile from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255, 255, 255, 0.5),
  rgba(255, 255, 255, 0.5)),
  url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 1.3rem;
  background-color: white;
  ${mobile({width: "75%"})}
`;

const LogoContainer = styled.div`
  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.p`
  font-size: 3rem;
  font-weight: bold;
`;

const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 1.2rem 0.8rem 0 0;
  padding: 0.8rem;
`;

const Agreement = styled.span`
  font-size: 0.8rem;
  margin: 1rem 0;
`;

const Button = styled.button`
  border: none;
  padding: 0.8rem 2.7rem;
  background-color: teal;
  font-size: 1.2rem;
  color: white;
  cursor: pointer;
`;

const Register = (): React.ReactElement => {
    return <Container>
        <Wrapper>
            <LogoContainer>
                <Logo>CHICAGO.</Logo>
            </LogoContainer>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="name"/>
                <Input placeholder="last name"/>
                <Input placeholder="username"/>
                <Input placeholder="email"/>
                <Input placeholder="password"/>
                <Input placeholder="confirm password"/>
                <Agreement>
                    By creating an account, I consent to the processing of my personal
                    data in accordance with the <b>PRIVACY POLICY</b>
                </Agreement>
                <Button>CREATE</Button>
            </Form>
        </Wrapper>
    </Container>
}

export default Register;