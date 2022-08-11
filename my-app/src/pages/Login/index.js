import { Header, Footer, Content } from "../../components";
import "./Login.css";

const LoginPage = () => {
  return (
    <div>
      <Header />
      <Content
        children={
          <div className="login-container">
            <form id="form-login" className="form-login">
              <div className="main">
                <h2 className="title-login">Login</h2>
                <label htmlFor="username">Username</label>
                <input
                  id="username"
                  type="text"
                  placeholder="Type your username"
                />
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  placeholder="Type your username"
                />
                <a className="forgot-password" href="/">
                  Forgot password?
                </a>
                <button className="btn-login">LOGIN</button>
                <div className="login-social">
                  <p>Or Sign Up Using</p>
                  <div className="social-icon">
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-square-twitter"></i>
                    <i class="fa-brands fa-google"></i>
                  </div>
                </div>
                <p>Or Sign Up Using</p>
                <a href="/" className="sign-up">
                  SIGN UP
                </a>
              </div>
            </form>
          </div>
        }
      />
      <Footer />
    </div>
  );
};

export default LoginPage;
