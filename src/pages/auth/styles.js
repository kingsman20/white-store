import styled from "styled-components";
import { colors, gradient } from "../../styles/theme";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  font-size: 14px;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 11px;
`;

const SubText = styled.p`
  color: ${colors.primaryLight};
`;

const Wrapper = styled.div`
  padding-top: 145px;
  padding-left: 247px;
  padding-bottom: 110px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background: #fff;
`;

const StyledForm = styled.form`
  width: 365px;
  margin-top: 4.5rem;
  margin-bottom: 115px;
`;

const GradientBackground = styled.div`
  height: 100%;
  justify-self: end;

  img {
    height: 100%;
    max-width: 100%;
  }
`;

const FormGroup = styled.div`
  margin-top: 2.5rem;

  label {
    color: ${colors.primaryLight};
  }

  input {
    margin-top: 1rem;
    width: 100%;
    outline: none;
    border: none;
    border-bottom: 1px solid ${colors.lineColor};
    padding-bottom: 1rem;
    font-weight: bold;

    &::placeholder {
      font-weight: bold;
      color: ${colors.primaryLight};
    }
  }

  .icon {
    width: 18px;
    height: 18px;
    position: absolute;
    top: 15px;
    right: 0;
  }
`;

const InputWrapper = styled.div`
  position: relative;
`;

const BottomFormGroup = styled.div`
  font-weight: bold;
  margin-top: 2rem;
  align-items: center;

  .top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2.4rem;
  }

  .remember {
    margin-left: 5px;
    color: ${colors.dark};
  }

  .recover {
    a {
      text-decoration: none;
      color: ${colors.buttonColor};
    }
  }

  .bottom {
    display: flex;
    justify-content: space-between;
  }
`;

const Button = styled.div`
  display: grid;
  place-items: center;
  width: 178px;
  height: 46px;
  border-radius: 8px;
  background: ${({ type }) =>
    type === "signin" ? colors.buttonColor : gradient.bgGradient};
  color: ${({ type }) => (type === "signin" ? colors.white : colors.primary)};
  cursor: pointer;
  transition: all 300ms ease-in-out;

  &:hover {
    box-shadow: 0 3px 15px rgba(94, 129, 244, 0.1);
    transform: translateY(-2px);
  }
`;

const SocialLogin = styled.div`
  .socialIcons {
    display: flex;

    .icon {
      display: grid;
      place-items: center;
      width: 46px;
      height: 46px;
      margin-right: 6px;
      border-radius: 8px;
      border: 1px solid ${colors.iconBorderColor};
      transition: border-color 400ms ease-in-out;
      cursor: pointer;

      &:hover {
        border-color: ${colors.primary};
      }
    }

    .siginText {
      color: ${colors.primaryLight};
      margin-left: 13px;
    }
  }
`;

export {
  Container,
  StyledForm,
  FormGroup,
  Wrapper,
  SubText,
  Title,
  GradientBackground,
  InputWrapper,
  BottomFormGroup,
  Button,
  SocialLogin,
};
