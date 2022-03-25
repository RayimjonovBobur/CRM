import React from "react";
import { XODIMLAR_PATH } from "../../pages/pageConstants/PageRoutes";
import { SERVIS_CHILD_PAGES } from "../../pages/pageConstants/PageTypes";
import { FileBlueIcon } from "../../assets/icons/icons";
import {
  STRING,
  DATE,
  SELECT,
  TEXTAREA,
  PHONE,
  UPLOAD,
  MAP,
  PICTURE_WALL,
} from "../../components/Modal/InputTypes";
import { inputDeafultHeght } from "../../constant/deafultStyle";
import ViloyatlarTemplate from "./ViloyatlarTemplate";
import ShaharTumanTemplate from "./ShaharTumanTempilate";
import LavozimlarTemplate from "./LavozimlarTemplate";
import BigLength from "../../components/BigLength/BigLength";
import GetLocation from "../../components/Location/Location";
import ImgZoom from "../../components/image zoom/ImgZoom";
import { Base } from "../../BaseUrl";

const align = "center";
const XodimlarTemplate = {
  accessKey: 6,
  text: "Xodimlar",
  path: XODIMLAR_PATH,
  icon: "Xodimlar",
  type: SERVIS_CHILD_PAGES,
  isOpenModal: false,
  tableItem: [],
  mainUrl: "/workers",
  allData: {
    states: "/states/all",
    cities: "/cities/all",
    directions: "/directions",
  },
  modal: {
    style: {
      width: 1000,
      marginTop: "-80px",
    },
  },
  form: [
    {
      grid: {
        columns: "repeat(20, 100fr)",
        rows: "repeat(6, 1fr)",
      },
      inputs: [
        {
          name: "name",
          type: STRING,
          placeholder: "F.I.SH",
          gridColumn: "1 / 10",
          gridRow: "1 / 2",
          label: "F.I.SH",
          autoFocus: true,
        },
        {
          name: "born_date",
          type: DATE,
          placeholder: "Tug'ilgan sana",
          gridColumn: "1 / 5",
          gridRow: "2 / 3",
          label: "Tug'ilgan sana",
          height: inputDeafultHeght,
        },
        {
          label: "Lavozim",
          name: "type_id",
          type: SELECT,
          placeholder: "Lavozimi",
          gridColumn: "5 / 10",
          gridRow: "2 / 3",
          template: LavozimlarTemplate,
          options: "directions",
        },
        {
          label: "Viloyat",
          name: "state_id",
          type: SELECT,
          placeholder: "viloyat",
          gridColumn: "1 / 5",
          gridRow: "3 / 4",
          options: "states",
          template: ViloyatlarTemplate,
          filterData: "cities",
        },
        {
          label: "Shahar",
          name: "region_id",
          type: SELECT,
          placeholder: "Shahar",
          template: ShaharTumanTemplate,
          gridColumn: "5 / 10",
          options: "cities",
          gridRow: "3 / 4",
          parentSelect: "state_id",
        },
        {
          label: "Manzil",
          name: "address",
          type: STRING,
          placeholder: "Manzil",
          gridColumn: "1 / 10",
          gridRow: "4 / 5",
        },
        {
          label: "Qo'shimcha malumot",
          name: "about",
          type: TEXTAREA,
          placeholder: "Qo'shimcha malumot",
          gridColumn: "1 / 10",
          gridRow: "5 / 7",
          height: inputDeafultHeght * 1.4,
        },
        {
          label: "Telefon",
          name: "phone_number",
          type: PHONE,
          placeholder: "Telefon",
          gridColumn: "10 / 16",
          gridRow: "1 / 2",
        },
        {
          type: UPLOAD,
          name: "passport",
          filePath: "/workers/image",
          gridColumn: "10 / 13",
          gridRow: "2 / 4",
          Iconic: "UploadFilePasport",
          label: "Passport",
          openFile: true,
        },
        {
          type: UPLOAD,
          name: "family",
          filePath: "/workers/image",
          gridColumn: "13 / 16",
          gridRow: "2 / 4",
          label: "Oilasi",
          Iconic: "UploadFileOilasi",
          openFile: true,
        },
        {
          type: MAP,
          name: "longitude",
          height: "137",
          placeholder: "hozirgi turgan joyi (map quyiladi)",
          gridColumn: "10 / 16",
          gridRow: "4 / 7",
          label: "xarita",
        },
        {
          label: " ",
          name: "developer_photo",
          type: PICTURE_WALL,
          filePath: "/workers/image",
          gridColumn: "16 / 21",
          gridRow: "1 / 7",
          fileName: "developer_photo",
        },
      ],
    },
  ],
  filters: ["type_name", "region_name", "state_name"],
  columns: [
    {
      title: "№",
      dataIndex: "id",
      key: "id",
      width: "6%",
      align,
      render: (index) => index,
    },
    {
      title: "F.I.Sh",
      dataIndex: "name",
      key: "name",
      width: "40%",
      align,
    },
    {
      title: "Telefon",
      dataIndex: "phone_number",
      key: "phone_number",
      width: "20%",
      align,
    },
    {
      title: "Viloyat",
      dataIndex: "state_name",
      key: "state_name",
      width: "20%",
      align,
    },
    {
      title: "Shahar",
      dataIndex: "region_name",
      key: "region_name",
      width: "20%",
      align,
    },
    {
      title: "Manzil",
      dataIndex: "address",
      key: "address",
      width: "40%",
      render: (text) => <BigLength text={text} />,
    },
    {
      title: "Tug'ilgan sana",
      dataIndex: "created_at",
      key: "born_date",
      width: "26%",
      align,
    },
    {
      title: "Yo'nalish",
      dataIndex: "type_name",
      key: "type_name",
      width: "35%",
    },
    {
      title: "Rasmi",
      dataIndex: "developer_photo",
      key: "developer_photo",
      width: "10%",
      align,
      render: (_, record) => <ImgZoom src={record?.developer_photo} />,
    },
    {
      title: "Passport",
      dataIndex: "passport",
      key: "passport",
      width: "20%",
      align,
      render: (_, record) => <ImgZoom src={record?.passport} />,
    },
    {
      title: "Oilasi",
      dataIndex: "family",
      key: "family",
      width: "10%",
      align,
      // render: (text) => <FileBlueIcon/>,
      render: (text) => {
        return (
          <a href={Base + text} target="_blank">
            <FileBlueIcon />
          </a>
        );
      },
    },
    {
      title: "Xarita",
      dataIndex: "loc",
      key: "loc",
      width: "15%",
      align,
      render: (_, record, i) => <GetLocation record={record} />,
    },
    {
      title: "Qo'shimcha ma'lumot",
      dataIndex: "about",
      key: "about",
      width: "45%",
      align,
      render: (text) => <BigLength text={text} />,
    },
  ],
  scroll: { x: 2000, y: 500 },
};

export default XodimlarTemplate;
