import "./firstPageStyles.scss";
import SearchIcon from "../../components/Tabs/SearchIcon";
// import {Button, Group, Arrow} from 'antd'

const FirstPage = () => {

  return (
    <div className="first-page">
      <SearchIcon icon={"CompanyLogo"} />
      {/* <div className="site-layout__body">
        {Panes?.map((item, i) => <h1>{item?.text}</h1>)}
        <Button className="site-layout__body-items">
          <div className="body-item-meaning">
            <Group />
            <span>Савдо реестери</span>
          </div>
          <Arrow />
        </Button>
      </div> */}
    </div>
  );
};

export default FirstPage;
