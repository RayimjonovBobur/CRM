import React from "react";
import { HUDUD_PATH } from "../../pages/pageConstants/PageRoutes";
import { SERVIS_CHILD_PAGES } from "../../pages/pageConstants/PageTypes";
import { SELECT, STRING } from "../../components/Modal/InputTypes";
import { FieldNumberOutlined } from "@ant-design/icons";
import ViloyatlarTemplate from "./ViloyatlarTemplate";
import ShaharTumanTemplate from "./ShaharTumanTempilate";

const HududTemplate = {
  accessKey: 10,
  text: "Hudud",
  path: HUDUD_PATH,
  icon: "Hudud",
  type: SERVIS_CHILD_PAGES,
  isOpenModal: false,
  mainUrl: "/districts",
  allData: {
    states: "/states/all",
    cities: "/cities/all",
  },
  form: [
    {
      grid: {
        columns: "1fr 1fr",
      },
      inputs: [
        {
          label: "Viloyat",
          name: "state_id",
          type: SELECT,
          options: "states",
          placeholder: "Viloyat",
          gridColumn: "1 / 3",
          gridRow: "1 / 2",
          template: ViloyatlarTemplate,
          filterData: "cities",
        },
        {
          label: "Shahar/Tuman",
          placeholder: "Shahar/Tuman",
          gridColumn: "1 / 3",
          gridRow: "2 / 3",
          name: "region_id",
          type: SELECT,
          template: ShaharTumanTemplate,
          options: "cities",
          autoSelect: ["state_id"],
          parentSelect: "state_id",
        },
        {
          label: "Hudud",
          name: "name",
          type: STRING,
          placeholder: "Hudud",
          gridColumn: "1 / 3",
          gridRow: "3 / 4",
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
      title: "Nomi",
      dataIndex: "name",
      key: "Hudud nomi",
      width: "40%",
    },
    {
      title: "Shahar nomi",
      dataIndex: "region_name",
      key: "Hudud nomi",
      width: "40%",
    },
    {
      title: "Viloyat nomi",
      dataIndex: "state_name",
      key: "Viloyat nomi",
      width: "15%",
      align: "center",
    },
  ],
  data: [
    {
      number: "1",
      shahar_nomi: "Marg'ilon",
      viloyat_nomi: "Farg'ona",
      lokatsiya: "ertyui",
      key: 1,
    },
  ],
};

export default HududTemplate;
