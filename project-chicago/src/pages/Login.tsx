import styled from "styled-components";
import mobile from "../responsive";
import React from "react";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 2rem 5rem;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.p`
  font-size: 3rem;
  font-weight: bold;
`;


const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 300;
  margin: 1rem 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 0.8rem 0;
  padding: 0.8rem;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 1rem 1.2rem;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin: 1rem 0;
`;

const Link = styled.a`
  margin: 0.2rem 0;
  font-size: 0.9rem;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = ():React.ReactElement => {
    return (
        <Container>
            <Wrapper>
                <LogoContainer>
                    <Logo>CHICAGO.</Logo>
                </LogoContainer>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="username" />
                    <Input placeholder="password" />
                    <Button>LOGIN</Button>
                    <Link>Forgot your password?</Link>
                    <Link>CREATE A NEW ACCOUNT</Link>
                </Form>
            </Wrapper>
        </Container>
    );
};

export default Login;