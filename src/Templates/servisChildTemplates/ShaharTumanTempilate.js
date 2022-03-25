import React from "react";
import { SHAHAR_TUMAN_PATH } from "../../pages/pageConstants/PageRoutes";
import { SERVIS_CHILD_PAGES } from "../../pages/pageConstants/PageTypes";
import { STRING, SELECT } from "../../components/Modal/InputTypes";
import { FieldNumberOutlined } from "@ant-design/icons";
import ViloyatlarTemplate from "./ViloyatlarTemplate";

const ShaharTumanTemplate = {
  accessKey: 9,
  text: "Shahar Tuman",
  path: SHAHAR_TUMAN_PATH,
  icon: "City",
  type: SERVIS_CHILD_PAGES,
  mainUrl: "/cities",
  allData: {
    states: "/states/all",
  },
  isOpenModal: false,
  form: [
    {
      grid: "1fr",
      inputs: [
        {
          name: "name",
          type: STRING,
          placeholder: "Shahar/Tuman",
          gridColumn: "1 / 2",
          gridRow: "2 / 3",
          label: "Shahar/Tuman",
        },
        {
          name: "state_id",
          type: SELECT,
          placeholder: "Viloyat",
          gridColumn: "1 / 2",
          gridRow: "1 / 2",
          label: "Viloyat",
          options: "states",
          template: ViloyatlarTemplate,
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
    },
    {
      title: "Shahar nomi",
      dataIndex: "name",
      key: "Shahar",
      width: "47%",
    },
    {
      title: "Viloyat nomi",
      dataIndex: "state_name",
      key: "/states/",
      width: "47%",
    },
  ],
  data: [
    {
      number: "1",
      shahar: "Marg'ilon",
      viloyat: "Farg'ona",
      key: 1,
    },
  ],
};

export default ShaharTumanTemplate;
