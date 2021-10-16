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
                {/*
                i picked up the pieces you were in
                left everything else, held them together
                glued them back in
                Though the corners hurt me,
                the reflections amused me.
                will i able to to see you
                in the dark when ONLY the lights are down low?
                tell me, we could be the light and everything else

                i could see it all coming back
                the echos from the past
                now i got no one but myself to blame
                do i still think i'm in love with you?
                yes I DO. Oh, I still do
                but it's just the memories and what it meant
                to feel at home, laying by the white sheets
                we chose to woke besides each other, you were my
                new pillowohohohohuuuuuuuu. a new pillow

                you ask me now, again
                for the hundredth time
                "will i get a new sheet?
                can you promise this'll not be just another braided bath mat
                or a shower curtain"
                it won't be like everyone else
                but it'll be homeeeeeeeee,
                just make tomorrow better than today
                not for us but you

                could you see it coming back?
                the waves to the shore
                now you got everywhere to surf
                do you still think you could wait for the sunrise?
                yes you do. oh, you still do.
                but it's just the moon pulling closer
                to feel at home, lying at the shore
                we chose to woke besides each other, you were my
                new pillow. oh my new pillow.

                wake up now, i have another place to go.

            */}
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