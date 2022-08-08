import { Header, Footer, Content } from "../../components";

const LoginPage = () => {
  return (
    <div>
      <Header />
      <Content
        children={
          <>
            <h1>LOGIN</h1>
          </>
        }
      />
      <Footer />
    </div>
  );
};

export default LoginPage;
