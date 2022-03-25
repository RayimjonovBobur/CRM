import { FieldNumberOutlined } from "@ant-design/icons";
import { YANGI_DASTURLAR } from "../../pages/pageConstants/PageRoutes";
import { PROGRAMMERS_CHILD_PAGES } from "../../pages/pageConstants/PageTypes";
import { ProgrammSpecifications } from "../programmsModalTabTemplates/ProgrammSpecifications";
import { ProgrammPerformers } from "../programmsModalTabTemplates/ProgrammPerformers";
import { ProgrammFilesList } from "../programmsModalTabTemplates/ProgrammFilesList";
import BigLength from "../../components/BigLength/BigLength";
import { ProgrammsTemplateApi } from "../../constant/apiLine/apiLine";
import { STRING, DATE, SELECT } from "../../components/Modal/InputTypes";
import XodimlarTemplate from "../servisChildTemplates/XodimlarTemplate";

export const NewProgrammsTemplate = {
  text: "Yangi dasturlar",
  accessKey: 3,
  path: YANGI_DASTURLAR,
  type: PROGRAMMERS_CHILD_PAGES,
  key: "1",
  allData: {
    workers: "/workers/all",
    clients: "/clients/active",
  },
  modal: {
    style: {
      width: 1100,
      height: 100,
      marginTop: "-70px",
    },
    tabs: [ProgrammSpecifications, ProgrammPerformers, ProgrammFilesList],
  },
  form: [
    {
      grid: {
        columns: "repeat(1, 8fr)",
        rows: "repeat(1, 8fr)",
      },
      inputs: [
        {
          name: "client_id",
          type: SELECT,
          placeholder: "Mijoz",
          gridColumn: "1 / 5",
          gridRow: "1 / 2",
          label: "Mijoz",
          options: "clients",
        },
        {
          name: "start_date",
          type: DATE,
          placeholder: "Buyurtma sana:",
          gridColumn: "5 / 7",
          gridRow: "1 / 2",
          label: "Buyurtma sana",
        },

        {
          name: "finish_date",
          type: DATE,
          placeholder: "Topshirilgan sana:",
          gridColumn: "7 / 9",
          gridRow: "1 / 2",
          label: "Topshiriligan sana",
        },
        {
          name: "name",
          type: STRING,
          placeholder: "Dastur",
          gridColumn: "1 / 5",
          gridRow: "2 / 3",
          label: "Dastur",
        },
        {
          name: "developer_id",
          type: SELECT,
          placeholder: "Qabul qilgan xodim:",
          gridColumn: "5 / 7",
          gridRow: "2 / 3",
          label: "Qabul qilgan xodim",
          options: "workers",
          template: XodimlarTemplate,
        },
        {
          name: "status_id",
          type: SELECT,
          placeholder: "Xolati:",
          gridColumn: "7 / 9",
          gridRow: "2 / 3",
          label: "xolati",
          options: "status",
        },
        {
          name: "general_info",
          type: STRING,
          placeholder: "Umumiy tafsiflar",
          gridColumn: "1 / 9",
          gridRow: "3 / 4",
          label: "Umumiy tafsiflar",
        },
      ],
      innerTable: [],
    },
  ],
  isOpenModal: false,
  mainUrl: ProgrammsTemplateApi,
  filters: ["developer_name"],
  columns: [
    {
      title: <FieldNumberOutlined />,
      dataIndex: "id",
      key: "id",
      width: "10%",
      align: "center",
    },
    {
      title: "Mijoz F.I.O",
      dataIndex: "client_name",
      key: "client_name",
      width: "40%",
      align: "center",
    },
    {
      title: "Dastur nomi",
      dataIndex: "name",
      key: "name",
      width: "30%",
      align: "center",
    },
    {
      title: "Izoh",
      dataIndex: "general_info",
      key: "general_info",
      width: "50%",
      align: "center",
      render: (text) => <BigLength text={text} />,
    },
    {
      title: "Ish olingan vaqti",
      dataIndex: "created_at",
      key: "start_date",
      width: "30%",
      align: "center",
    },
    {
      title: "Ish topshirish vaqti",
      dataIndex: "created_at",
      key: "finish_date",
      width: "40%",
      align: "center",
    },
    {
      title: "Kim orqali",
      dataIndex: "from_whom",
      key: "from_whom",
      width: "30%",
      align: "center",
    },
    {
      title: "Hodim",
      dataIndex: "developer_name",
      key: "developer_name",
      width: "30%",
      align: "center",
    },
  ],
};
