import { STRING, UPLOAD, BUTTON } from "./../../components/Modal/InputTypes";
import { FieldNumberOutlined } from "@ant-design/icons";
import React from "react";
import TabInput from "../../components/Modal/TabInput/TabInput";
import { v4 as uuidv4 } from "uuid";

export const ProgrammFilesList = {
  text: "Fayllar ro’yxati",
  name: "file_doc",
  CreateObj: {
    comment: "",
    file1: "",
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
      title: "Tafsif",
      dataIndex: "comment",
      key: "number",
      render: (text, record, index) => (
        <TabInput
          record={record}
          tabName={"file_doc"}
          name={"comment"}
          type={STRING}
        />
      ),
      width: "70%",
      align: "center",
    },
    {
      title: "Fayl",
      dataIndex: "file1",
      render: (text, record, index) => (
        <TabInput
          record={record}
          tabName={"file_doc"}
          name={"file1"}
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
        <TabInput record={record} tabName={"file_doc"} type={BUTTON} />
      ),
      key: "action",
      width: "10%",
      align: "center",
    },
  ],
};
