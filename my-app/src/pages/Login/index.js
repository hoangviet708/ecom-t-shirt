import { Header, Footer, Content } from "../../components";
import { FormLogin } from "../../components";

const LoginPage = () => {
  return (
    <div>
      <Header />
      <Content children={<FormLogin />} />
      <Footer />
    </div>
  );
};

export default LoginPage;
