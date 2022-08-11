import { Header, Footer, Content } from "../../components";

const SearchPage = () => {
  return (
    <div>
      <Header />
      <Content
        children={
          <div>
            <h1>SearchPage</h1>
          </div>
        }
      />
      <Footer />
    </div>
  );
};

export default SearchPage;
