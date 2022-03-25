import React from "react";
import { REKLAMALAR_PATH } from "../../pages/pageConstants/PageRoutes";
import { SERVIS_CHILD_PAGES } from "../../pages/pageConstants/PageTypes";
import { STRING } from "../../components/Modal/InputTypes";
import { FieldNumberOutlined } from "@ant-design/icons";

const ReklamalarTemplate = {
  accessKey: 12,
  text: "Reklamalar",
  path: REKLAMALAR_PATH,
  icon: "Reklamalar",
  type: SERVIS_CHILD_PAGES,
  mainUrl: "/reklams",
  isOpenModal: false,
  form: [
    {
      grid: "1fr",
      inputs: [
        {
          name: "description",
          type: STRING,
          placeholder: "Reklamalar",
          label: "Reklamalar"
        },
      ],
    },
  ],
  columns: [
    {
      title: <FieldNumberOutlined />,
      dataIndex: "id",
      key: "id",
      width: "5%",
      align: "center",
      render: (text, data, i) => ++i
    },
    {
      title: "Reklama Nomi",
      dataIndex: "name",
      key: "name",
      width: "95%",
    },
  ],
};

export default ReklamalarTemplate;
