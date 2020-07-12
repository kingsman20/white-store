import React from "react";
import { Link } from "@reach/router";

import {
  Container,
  StyledForm,
  Wrapper,
  SubText,
  Title,
  GradientBackground,
  FormGroup,
  InputWrapper,
  BottomFormGroup,
  Button,
  SocialLogin,
} from "./styles";

const Auth = () => {
  return (
    <Container>
      <Wrapper>
        <Title>
          Welcome to our CRM. <br />
          Sign In to see latest updates.
        </Title>
        <SubText>Enter your details to proceed further</SubText>
        <StyledForm>
          <FormGroup>
            <label htmlFor="email">Email</label>
            <InputWrapper>
              <input id="email" type="text" />
              <div className="icon">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 0.9375L7.70117 1.13086L0.6875 5.70117V15.5625H15.3125V5.70117L8.29883 1.13086L8 0.9375ZM8 2.27344L13.7305 6L8 9.70898L2.26953 6L8 2.27344ZM1.8125 7.03711L7.70117 10.8516L8 11.0449L14.1875 7.03711V14.4375H1.8125V7.03711Z"
                    fill="#1C1D21"
                  />
                </svg>
              </div>
            </InputWrapper>
          </FormGroup>

          <FormGroup>
            <label htmlFor="password">Password</label>
            <InputWrapper>
              <input
                id="password"
                type="password"
                placeholder="Start typing..."
              />
              <div className="icon">
                <svg
                  width="12"
                  height="16"
                  viewBox="0 0 12 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 0.9375C5.29688 0.9375 4.64062 1.11914 4.03125 1.48242C3.43359 1.83398 2.95312 2.31445 2.58984 2.92383C2.23828 3.52148 2.0625 4.17188 2.0625 4.875V6.5625H0.375V15.5625H11.625V6.5625H9.9375V4.875C9.9375 4.17188 9.75586 3.52148 9.39258 2.92383C9.04102 2.31445 8.56055 1.83398 7.95117 1.48242C7.35352 1.11914 6.70312 0.9375 6 0.9375ZM6 2.0625C6.50391 2.0625 6.97266 2.19141 7.40625 2.44922C7.83984 2.69531 8.17969 3.03516 8.42578 3.46875C8.68359 3.90234 8.8125 4.37109 8.8125 4.875V6.5625H3.1875V4.875C3.1875 4.37109 3.31055 3.90234 3.55664 3.46875C3.81445 3.03516 4.16016 2.69531 4.59375 2.44922C5.02734 2.19141 5.49609 2.0625 6 2.0625ZM1.5 7.6875H10.5V14.4375H1.5V7.6875Z"
                    fill="#8181A5"
                  />
                </svg>
              </div>
            </InputWrapper>
          </FormGroup>

          <BottomFormGroup>
            <div class="top">
              <div>
                <input for="remember" id="remember" type="radio" />
                <label htmlFor="remember" className="remember">
                  Remember me
                </label>
              </div>
              <label className="recover">
                <Link to="/">Recover password</Link>
              </label>
            </div>

            <div class="bottom">
              <Button type="signin">Sign In</Button>
              <Button type="signup">Sign Up</Button>
            </div>
          </BottomFormGroup>
        </StyledForm>

        <SocialLogin>
          <div className="socialIcons">
            <div className="icon">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.96018 4.81188V7.18812C5.96018 7.18812 8.25006 7.18503 9.18245 7.18503C8.67754 8.72548 7.89245 9.56436 5.96018 9.56436C4.00471 9.56436 2.47849 7.96853 2.47849 6C2.47849 4.03147 4.00471 2.43564 5.96018 2.43564C6.99406 2.43564 7.66178 2.80147 8.27426 3.31135C8.76453 2.8178 8.72357 2.74747 9.9709 1.56166C8.91206 0.591446 7.50475 0 5.96018 0C2.66845 0 0 2.68628 0 6C0 9.31366 2.66845 12 5.96018 12C10.8804 12 12.083 7.68713 11.6843 4.81188H5.96018Z"
                  fill="#8181A5"
                />
              </svg>
            </div>
            <div className="icon">
              <svg
                width="7"
                height="14"
                viewBox="0 0 7 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.34375 14V6.99918H6.27628L6.53239 4.58666H4.34375L4.34703 3.37917C4.34703 2.74995 4.40682 2.41279 5.31056 2.41279H6.51871V0H4.5859C2.26429 0 1.44714 1.17033 1.44714 3.13846V4.58693H0V6.99945H1.44714V14H4.34375Z"
                  fill="#8181A5"
                />
              </svg>
            </div>
            <div className="icon">
              <svg
                width="15"
                height="12"
                viewBox="0 0 15 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.25 2.06641C13.875 2.62891 13.418 3.10937 12.8789 3.50781V3.85938C12.8789 4.79688 12.7031 5.72265 12.3516 6.63672C12 7.55079 11.502 8.39453 10.8574 9.16797C10.2129 9.94141 9.38086 10.5625 8.36133 11.0312C7.34179 11.5 6.22266 11.7344 5.00391 11.7344C3.45702 11.7344 2.03907 11.3242 0.75 10.5039C0.960939 10.5273 1.18359 10.5391 1.41797 10.5391C2.70704 10.5391 3.85546 10.1406 4.86328 9.34375C4.2539 9.34375 3.71485 9.16211 3.24609 8.79883C2.77734 8.43554 2.44922 7.97266 2.26172 7.41016C2.42578 7.45703 2.60156 7.48047 2.78906 7.48047C3.04688 7.48047 3.29297 7.44531 3.52734 7.375C2.87109 7.23437 2.33203 6.91211 1.91016 6.4082C1.48828 5.90429 1.27734 5.32422 1.27734 4.66797V4.63281C1.67578 4.84375 2.09765 4.96094 2.54297 4.98438C1.72265 4.42187 1.3125 3.64844 1.3125 2.66406C1.3125 2.17187 1.4414 1.70313 1.69922 1.25781C3.17579 3.08595 5.07421 4.05859 7.39453 4.17578C7.34766 3.96484 7.32422 3.75391 7.32422 3.54297C7.32422 2.76953 7.59375 2.11328 8.13281 1.57422C8.67188 1.03515 9.32812 0.765625 10.1016 0.765625C10.8984 0.765625 11.5664 1.05859 12.1055 1.64453C12.7383 1.52734 13.3242 1.30469 13.8633 0.976562C13.6523 1.63282 13.2539 2.13672 12.668 2.48828C13.207 2.41797 13.7344 2.27734 14.25 2.06641Z"
                  fill="#8181A5"
                />
              </svg>
            </div>

            <p className="siginText">Or sign in with</p>
          </div>
        </SocialLogin>
      </Wrapper>

      <GradientBackground>
        <img alt="gradient-background" src={require("../../images/bg.png")} />
      </GradientBackground>
    </Container>
  );
};

export default Auth;
