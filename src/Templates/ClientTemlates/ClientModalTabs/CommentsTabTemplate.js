import {
  STRING,
  UPLOAD,
  SELECT,
  DATE,
  BUTTON,
} from "../../../components/Modal/InputTypes";
import { FieldNumberOutlined } from "@ant-design/icons";
import TabInput from "../../../components/Modal/TabInput/TabInput";

const CommetsTabTemplate = {
  text: "Izohlar",
  name: "general_document",
  CreateObj: {
    name: "",
    comment: "",
    file: "",
  },
  scroll: { y: 130 },

  form: [
    {
      grid: {
        columns: "repeat(1, 1fr)",
        rows: "repeat(1, 1fr)",
      },
    },
  ],
  columns: [
    {
      title: <FieldNumberOutlined />,
      dataIndex: "number",
      render: (key, text, index) => ++index,
      key: "number",
      width: "5%",
      align: "center",
    },
    {
      title: "Izox",
      dataIndex: "general_info",
      render: (text, record) => (
        <TabInput
          record={record}
          tabName={"general_document"}
          name={"comment"}
          type={STRING}
        />
      ),
      key: "general_info",
      width: "40%",
      align: "center",
    },
    {
      title: "Fayl",
      dataIndex: "file",
      render: (text, record) => (
        <TabInput
          record={record}
          tabName={"general_document"}
          name={"file"}
          type={UPLOAD}
          filePath={"/projects/image"}
        />
      ),
      key: "file",
      width: "15%",
      align: "center",
    },
    {
      title: "Xodim",
      dataIndex: "worker",
      render: (text, record, index) => (
        <TabInput
          record={record}
          tabName={"general_document"}
          name={"worker"}
          options={"workers"}
          type={SELECT}
        />
      ),
      key: "xodim",
      width: "25%",
      align: "center",
    },
    {
      title: "Vaqti",
      dataIndex: "vaqti",
      render: (text, record, index) => (
        <TabInput
          record={record}
          tabName={"general_document"}
          name={"vaqti"}
          type={DATE}
        />
      ),
      key: "vaqti",
      width: "15%",
      align: "center",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (text, record, index) => (
        <TabInput record={record} tabName={"general_document"} type={BUTTON} />
      ),
      key: "action",
      width: "10%",
      align: "center",
    },
  ],
};

export default CommetsTabTemplate;
