import {
  STRING,
  SELECT,
  SEARCH_SELECT,
} from "../../../components/Modal/InputTypes";
import YunalishlarTemplate from "../../../Templates/servisChildTemplates/YunalishlarTemplate";
import ViloyatlarTemplate from "../../../Templates/servisChildTemplates/ViloyatlarTemplate";
import ShaharTumanTemplate from "../../servisChildTemplates/ShaharTumanTempilate";
import FaolyatTurlaiTemplate from "../../servisChildTemplates/FaolyatTurlariTemplate";
import HududTemplate from "../../servisChildTemplates/HududTemplate";

const CommonTabTemplate = {
  text: "Umumiy",
  isOpenModal: false,
  allData: {
    workers: "/workers/all",
    reklams: "/reklams/all",
},
  form: [
    {
      grid: {
        columns: "repeat(8, 1fr)",
        rows: "repeat(5, 1fr)",
      },

      inputs: [
        {
          label: "Korxona nomi",
          name: "enterprise_name",
          type: STRING,
          placeholder: "Korxona nomi",
          gridColumn: "1 / 6",
          gridRow: "1 / 2",
          autoFocus: true,
        },
        {
          name: "client_status",
          type: SELECT,
          placeholder: "xolati",
          label: "Xolati",
          gridColumn: "6 / 9",
          gridRow: "1 / 2",
          options: "client_status",
        },
        {
          name: "category_id",
          type: SELECT,
          label: "Yunalish turi",
          placeholder: "Yo'nalishlar turi",
          template: YunalishlarTemplate,
          options: "category_name",
          gridColumn: "1 / 3",
          gridRow: "2 / 3",
        },
        {
          name: "activity_type_id",
          type: SELECT,
          placeholder: "Faoliyat turi",
          label: "Faoliyat turi",
          gridColumn: "3 / 6",
          gridRow: "2 / 3",
          options: "activity_types",
          template: FaolyatTurlaiTemplate,
        },
        {
          name: "state_id",
          type: SELECT,
          placeholder: "viloyat",
          label: "Viloyat",
          gridColumn: "6 / 9",
          gridRow: "2 / 3",
          options: "states",
          template: ViloyatlarTemplate,
          filterData: "cities",
        },
        {
          name: "region_id",
          type: SELECT,
          label: "Shahar/Tuman",
          placeholder: "Shahar/Tuman",

          gridColumn: "1 / 3",
          gridRow: "3 / 4",
          label: "Shahar",
          options: "cities",
          template: ShaharTumanTemplate,
          filterData: "hudud",
          parentSelect: "state_id",
        },

        {
          name: "address_id",
          type: SELECT,
          placeholder: "xudud",
          template: HududTemplate,
          options: "hudud",
          label: "Xudud",
          gridColumn: "3 / 6",
          gridRow: "3 / 4",
          parentSelect: "region_id",
        },

        {
          name: "order_reason_id",
          type: SELECT,
          placeholder: "Kelish turi",
          gridColumn: "6 / 9",
          gridRow: "3 / 4",
          label: "Kelish turi",
          options: "order_reason_id",
        },
        {
          name: "home_address",
          type: STRING,
          placeholder: "Manzil",
          gridColumn: "1 / 6",
          gridRow: "4 / 5",
          label: "Manzil",
        },
        {
          name: "order_reason",
          type: SEARCH_SELECT,
          placeholder: "Kim tomondan",
          label: "Kim tomondan",
          gridColumn: "6 / 9",
          gridRow: "4 / 5",
          options: "order_reason",
        },
      ],
    },
  ],
};

export default CommonTabTemplate;
