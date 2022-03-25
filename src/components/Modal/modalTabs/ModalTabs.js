import React from "react";
import { Tabs } from "antd";
import ModalInput from "../ModalInput";
import InnerTable from "../../Table/innerTable/InnerTable";
import "./ModalTabs.scss";

const ModalTabs = ({ tabs, i, handleChangeValue }) => {
  return (
    <Tabs defaultActiveKey={[0]}>
      {tabs?.map((tab, i) => (
        <Tabs.TabPane tab={tab.text} key={i}>
          {tab.form?.map((forma, i) => (
            <div
              className="modal-grid__form"
              key={forma?.grid}
              style={{
                gridTemplateColumns: forma.grid?.columns,
                gridAutoRows: forma.grid?.rows,
              }}
            >
              {forma?.inputs?.map((input) => (
                <ModalInput
                  {...input}
                  key={input?.name}
                  handleChangeValue={handleChangeValue}
                />
              ))}
            </div>
          ))}
          {tab?.columns && <InnerTable innerTable={tab} />}
        </Tabs.TabPane>
      ))}
    </Tabs>
  );
};

export default ModalTabs;
