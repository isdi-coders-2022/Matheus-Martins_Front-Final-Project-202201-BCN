import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../redux/reducers";
import toast from "react-hot-toast";
import styled from "styled-components";
import Header from "../../components/header/Header";
import LoginForm from "../../components/loginForm/LoginForm";

const LoginPage = () => {
  const user = useSelector((state: RootState) => state.users);
  const navigate = useNavigate();

  useEffect(() => {
    if (user.loggedIn) {
      toast("Welcome", {
        icon: "🤗",
      });

      setTimeout(() => {
        navigate("/");
      }, 250);
    }
  }, [navigate, user.loggedIn]);

  return (
    <>
      <Wrapper className="container">
        <Header title={"Login"} />
        <SectionContainer className="container__section">
          <figure className="container__image">
            <img
              src="https://images.unsplash.com/photo-1635921152718-06a19ec70a6c"
              alt="boardgame"
            />
          </figure>
          <LoginForm />
        </SectionContainer>
      </Wrapper>
    </>
  );
};

export default LoginPage;

const Wrapper = styled.section`
  min-height: 100vh;

  .container__image {
    margin: 0;
  }

  .matches__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .container__image {
    display: flex;
    @media screen and (min-device-width: 320px) and (max-width: 768px) {
      display: none;
    }

    @media screen and (min-device-width: 769px) and (max-width: 1000px) {
      display: none;
    }
  }
`;

const SectionContainer = styled.section`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 100vw;
  max-width: 100vw;

  img {
    height: 100%;
    width: 38rem;
    object-fit: cover;
    border-radius: 10px;
    flex-grow: 2;
  }
`;
