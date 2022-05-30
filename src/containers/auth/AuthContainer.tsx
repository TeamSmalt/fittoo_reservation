import React from 'react';

import Logo from 'assets/svg/Logo';
import GoogleLogo from 'assets/svg/GoogleLogo';
import AppleLogoWhite from 'assets/svg/AppleLogoWhite';
import KakaoLogo from 'assets/svg/KakaoLogo';
import { Link } from 'react-router-dom';

const AuthContainer = () => {
  return (
    <div className="auth">
      <section className="logo-section">
        <Logo />
      </section>

      <section className="login-btn-group">
        {/* button 을 component로 바꿔도 좋을듯 */}
        <button className="kakao-login">
          <KakaoLogo />
          카카오 로그인
        </button>

        <button className="apple-login">
          <AppleLogoWhite />
          애플 로그인
        </button>

        <button className="google-login">
          <GoogleLogo />
          구글 로그인
        </button>

        <button className="phone-login">휴대폰 번호 로그인</button>
      </section>

      <section className="footer">
        <div className="signup-box">
          아직 핏투 회원이 아니신가요?
          <b>
            <Link to="/signup"> 회원가입</Link>
          </b>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </section>
    </div>
  );
};

export default AuthContainer;
