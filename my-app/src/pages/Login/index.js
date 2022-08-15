import { Header, Footer, Content } from "../../components";
import { FormLogin } from "../../components";

const LoginPage = () => {
  //Handle form login để khi submit sẽ lấy username và password
  //không chấp nhận khoảng trắng trong input
  //Chỉ khi có username và password mới có thể submit, default button Login là disable
  //Log username và password khi đã pass validate và submit thành công

  return (
    <div>
      <Header />
      <Content children={<FormLogin />} />
      <Footer />
    </div>
  );
};

export default LoginPage;
