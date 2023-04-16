import React from "react";
import { FaFacebookF, FaGoogle, FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import {
  LoginContainer,
  LoginMain,
  LoginContent,
  SignInSection,
  SignUpSection,
  OthersLoginSection,
  SocialLoginSection,
  SocialLoginSectionHeader,
  LineBreak,
} from "./Login.styled";

export default function Home() {
  return (
    <LoginContainer>
      <LoginMain>
        <LoginContent>
          <SignInSection>
            <div className="group-name">
              <div>
                {/* <span>Group </span> name */}
              </div>
            </div>
            <div className="header-sign-in">
              <h2>Đăng nhập</h2>
            </div>

            <LineBreak />

            <SocialLoginSection>
              <div className="email">
                <span>
                  <FaRegEnvelope />
                </span>
                <input type="email" placeholder="email" />
              </div>

              <div className="password">
                <span>
                  <MdLockOutline />
                </span>
                <input type="password" placeholder="mật khẩu" />
              </div>
              <SocialLoginSectionHeader>
              Hoặc đăng nhập bằng
            </SocialLoginSectionHeader>
            <OthersLoginSection>
              <a href="#" className="facebook">
                <FaFacebookF />
              </a>

              <a href="#" className="google">
                <FaGoogle />
              </a>
            </OthersLoginSection>

              <div className="forgot-password">
                <a href="#">Forgot password?</a>
              </div>

              <Link to="/home/backofficer">
                <div className="signin-btn">
                  <div>Đăng nhập</div>
                </div>
              </Link>
            </SocialLoginSection>
          </SignInSection>
          {/* <SignUpSection>
            <h2>Hello Friend!!</h2>
            <LineBreak />
            <p>Fill up personal information and join with us.</p>
            <a href="#">Sign up</a>
          </SignUpSection> */}
        </LoginContent>
      </LoginMain>
    </LoginContainer>
  );
}
