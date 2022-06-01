import React from 'react';
import Logo from 'assets/svg/Logo';
import GoogleLogo from 'assets/svg/GoogleLogo';
import AppleLogoWhite from 'assets/svg/AppleLogoWhite';
import KakaoLogo from 'assets/svg/KakaoLogo';

import { Link } from 'react-router-dom';
import { auth } from 'firebaseInitialize';
import { AuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const kakao = (window as any).Kakao;

const AuthContainer = () => {
  const kakaoLogin = () => {
    kakao.Auth.login();
  };

  /**
   *
   * @param e click Event
   *
   * 소셜 로그인 버튼 클릭시 해당 로그인에 맞게 provider를 지정해주고
   * 로그인 팝업을 띄워준다.
   */
  const firebaseAuthentication = async (e: any) => {
    const {
      target: { name },
    } = e;
    let provider: AuthProvider;

    if (name === 'google') {
      provider = new GoogleAuthProvider();
    }

    try {
      await signInWithPopup(auth, provider!);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="auth">
      <section className="logo-section">
        <Logo />
      </section>

      <section className="login-btn-group social-group">
        {/* button 을 component로 바꿔도 좋을듯 */}
        <button id="kakao" className="kakao-login" onClick={kakaoLogin}>
          <KakaoLogo />
          <label htmlFor="kakao">카카오 로그인</label>
        </button>

        <button id="apple" className="apple-login" name="apple">
          <AppleLogoWhite />
          <label htmlFor="apple">애플 로그인</label>
        </button>

        <button
          id="google"
          className="google-login"
          name="google"
          onClick={firebaseAuthentication}
        >
          <GoogleLogo />
          <label htmlFor="google">구글 로그인</label>
        </button>
      </section>
      <section className="login-btn-group">
        <button className="phone-login">
          <i className="fa fa-mobile fa-2x"></i>
          휴대폰 번호 로그인
        </button>
      </section>

      <section className="footer">
        <div className="signup-box">
          아직 핏투 회원이 아니신가요?
          <b>
            <Link to="/signup"> 회원가입</Link>
          </b>
        </div>
      </section>
    </div>
  );
};

export default AuthContainer;
