import { useEffect, useState } from "react";
import ProgrammsTemplate from "../../../Templates/pageTemplates/ProgrammesTemplate";
import Toolbar from "../../../components/ToolsBar/Toolbar/Toolbar";
import GlobalTable from "../../../components/Table/GlobalTable";
import ChildTabs from "../../../components/ChildTabs/ChildTabs";

const ProgrammesPageChild = ({ activeKey }) => {
  const [height, setHeight] = useState(0);
  useEffect(() => {
    const dad = document.getElementById("site__loyout");
    setHeight(parseInt(dad.getBoundingClientRect().height));
  }, []);
  return (
    <div>
      <Toolbar />
      <div className="my__layout_child" style={{ height: height-40+ "px" }}>
        <ChildTabs data={ProgrammsTemplate} activeKey={activeKey}></ChildTabs>
        <GlobalTable />
      </div>
    </div>
  );
};

export default ProgrammesPageChild;
