import "./programmesPage.scss";
import { Layout } from "antd";
import ProgrammesPageChild from "./programmesPageChild/ProgrammesPageChild";

const ProgrammesPage = ({ page }) => {
  return (
    <div className="">
      <Layout>
        <ProgrammesPageChild activeKey={page.key} />
      </Layout>
    </div>
  );
};

export default ProgrammesPage;
