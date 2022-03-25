import { FieldNumberOutlined } from "@ant-design/icons";
import React from "react";
import TabInput from "../../components/Modal/TabInput/TabInput";
import { STRING, UPLOAD, BUTTON } from "../../components/Modal/InputTypes";
import { v4 as uuidv4 } from "uuid";

export const ProgrammSpecifications = {
  text: "Texnik tafsiflar",
  name: "tech_doc",
  CreateObj: {
    name: "",
    comment: "",
    file: "",
  },
  scroll: { y: 130 },

  columns: [
    {
      title: <FieldNumberOutlined />,
      dataIndex: "id",
      render: (key, text, index) => ++index,
      key: "number",
      width: "5%",
      align: "center",
    },
    {
      title: "Nomi",
      dataIndex: "name",
      render: (text, record, index) => (
        <TabInput
          record={record}
          tabName={"tech_doc"}
          name={"name"}
          type={STRING}
        />
      ),
      key: "number",
      width: "30%",
      align: "center",
    },
    {
      title: "Tafsif",
      dataIndex: "comment",
      render: (text, record, index) => (
        <TabInput
          record={record}
          tabName={"tech_doc"}
          name={"comment"}
          type={STRING}
        />
      ),
      key: "number",
      width: "40%",
      align: "center",
    },
    {
      title: "Fayl",
      dataIndex: "file",
      render: (text, record, index) => (
        <TabInput
          record={record}
          tabName={"tech_doc"}
          name={"file"}
          type={UPLOAD}
          filePath={"/projects/image"}
        />
      ),
      key: "number",
      width: "15%",
      align: "center",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (text, record, index) => (
        <TabInput record={record} tabName={"tech_doc"} type={BUTTON} />
      ),
      key: "action",
      width: "10%",
      align: "center",
    },
  ],
};
