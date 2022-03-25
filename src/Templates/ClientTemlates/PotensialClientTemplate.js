import React from "react";
import { FieldNumberOutlined } from "@ant-design/icons";
import { POTENSIAL_MIJOZLAR } from "../../pages/pageConstants/PageRoutes";
import { CLIENTS_CHILD_PAGES } from "../../pages/pageConstants/PageTypes";
import BigLength from "../../components/BigLength/BigLength";
import { ClientTemplateApi } from "../../constant/apiLine/apiLine";
import CommonTemplate from "./ClientModalTabs/CommonTemplate";
import ContactsTemplate from "./ClientModalTabs/ContactsTemplate";
import CommentsTemplate from "./ClientModalTabs/CommentsTabTemplate";
import ImgZoom from "../../components/image zoom/ImgZoom";
import GetLocation from "../../components/Location/Location";
import { Base } from "../../BaseUrl";
const PotensialClientTemplate = {
  text: "Potensial mijozlar",
  accessKey: 2,
  key: "1",
  icon: "ProfileIcon",
  path: POTENSIAL_MIJOZLAR,
  type: CLIENTS_CHILD_PAGES,
  isOpenModal: false,
  mainUrl: ClientTemplateApi,
  allData: {
    workers: "/workers/all",
    states: "/states/all",
    cities: "/cities/all",
    activity_types: "/activity-types",
    hudud: "/districts/all",
    category_name: "/categories",
  },
  modal: {
    style: {
      width: 1200,
      marginTop: "-70px",
    },
    tabs: [CommonTemplate, ContactsTemplate, CommentsTemplate],
  },
  filters: ["state_name", "region_name", "category_id", "activity_type_name"],
  columns: [
    {
      title: <FieldNumberOutlined />,
      dataIndex: "id",
      key: "number",
      width: "15%",
      align: "center",
      render: (text, _, i) => ++i,
    },

    {
      title: "F.I.O",
      dataIndex: "client_name",
      key: "client_name",
      width: "80%",
      align: "center",
    },

    {
      title: "Korxona nomi",
      dataIndex: "enterprise_name",
      key: "enterprise_name",
      width: "50%",
      align: "center",
    },

    {
      title: "Telefon",
      dataIndex: "operator_phone_number",
      key: "operator_phone_number",
      width: "50%",
      align: "center",
    },

    {
      title: "Izox",
      dataIndex: "general_info",
      key: "general_info",
      width: "60%",
      align: "center",
      render: (text) => <BigLength text={text} />,
    },

    {
      title: "Rasm",
      dataIndex: "img",
      key: "i",
      width: "40%",
      render: (text, record) => (
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            position: "relative",
          }}
        >
          <ImgZoom src={record?.file_1} />
          <ImgZoom src={record?.file_2} />
          <ImgZoom src={record?.file_3} />
        </div>
      ),
      align: "center",
    },
    {
      title: "Location",
      dataIndex: "loc",
      key: "loc",
      width: "25%",
      align: "center",
      render: (_, record, i) => <GetLocation record={record} />,
    },
    {
      title: "Yo’nalishi",
      dataIndex: "category_name",
      key: "category_id",
      width: "40%",
      align: "center",
    },
    {
      title: "Viloyat",
      dataIndex: "state_name",
      key: "state_name",
      width: 100,
      align: "center",
    },
    {
      title: "Shahar/Tuman",
      dataIndex: "region_name",
      key: "region_name",
      width: "50%",
      align: "center",
    },
    {
      title: "Xudud",
      dataIndex: "address_name",
      key: "address_name",
      width: "40%",
      align: "center",
    },
    {
      title: "Manzil",
      dataIndex: "home_address",
      key: "home_address",
      width: "50%",
      align: "center",
      render: (text) => <BigLength text={text} />,
    },
    {
      title: "Faoliyat",
      dataIndex: "activity_type_name",
      key: "activity_type_name",
      width: "40%",
      align: "center",
    },
    {
      title: "Qo’shilgan Vaqti",
      dataIndex: "created_at",
      key: "created_at",
      width: "40%",
      align: "center",
    },
  ],
  scroll: { x: 2500, y: 400 },
};

export default PotensialClientTemplate;
