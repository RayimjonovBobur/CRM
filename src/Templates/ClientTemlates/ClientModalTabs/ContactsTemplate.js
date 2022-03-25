import {
  STRING,
  PHONE,
  MAP,
  DATE,
  PICTURE_WALL,
} from "../../../components/Modal/InputTypes";
import { inputDeafultHeght } from "../../../constant/deafultStyle";

const ContactsTemplate = {
  text: "Kontaktlar",
  isOpenModal: false,

  form: [
    {
      grid: {
        columns: "repeat(18, 1fr)",
        rows: "repeat(25, 1fr)",
      },

      inputs: [
        {
          name: "client_name",
          type: STRING,
          placeholder: "Raxbar",
          gridColumn: "1 / 6",
          gridRow: "1 / 2",
          label: "Raxbar",
        },
        {
          name: "client_phone_number",
          type: PHONE,
          placeholder: "Telifon",
          gridColumn: "6 / 10",
          gridRow: "1 / 2",
          label: "Telifon 1",
        },
        {
          name: "client_phone_number_2",
          type: PHONE,
          placeholder: "Telifon",
          gridColumn: "10 / 15",
          gridRow: "1 / 2",
          label: "Telifon 2",
        },
        {
          name: "client_born_date",
          type: DATE,
          placeholder: "Tug'ilgan Sana",
          gridColumn: "15 / 19",
          gridRow: "1 / 2",
          label: "Tug'ilgan Sana",
        },
        {
          name: "operator_name",
          type: STRING,
          placeholder: "Opirator",
          gridColumn: "1 / 6",
          gridRow: "2 / 3",
          label: "Opirator",
        },
        {
          name: "operator_phone_number",
          type: PHONE,
          placeholder: "Telifon",
          gridColumn: "6 / 10",
          gridRow: "2 / 3",
          label: "Telifon 1",
        },
        {
          name: "operator_phone_number_2",
          type: PHONE,
          placeholder: "Telifon",
          gridColumn: "10 / 15",
          gridRow: "2 / 3",
          label: "Telifon 2",
        },
        {
          name: "operator_born_date",
          type: DATE,
          placeholder: "Tug'ilgan Sana",
          gridColumn: "15 / 19",
          gridRow: "2 / 3",
          label: "Tug'ilgan Sana",
        },
        {
          name: "file_1",
          type: PICTURE_WALL,
          filePath: "/clients/image",
          placeholder: "Foto",
          gridColumn: "1 / 4",
          gridRow: "3 / 25",
          height: inputDeafultHeght * 7,
          label: "Foto",
          fileName: "file",
        },
        {
          name: "file_2",
          type: PICTURE_WALL,
          placeholder: "Foto",
          gridColumn: "4 / 7",
          gridRow: "3 / 25",
          height: inputDeafultHeght * 7,
          label: " ",
          filePath: "/clients/image",
          fileName: "file",
        },
        {
          name: "file_3",
          type: PICTURE_WALL,
          placeholder: "Foto",
          gridColumn: "7 / 10",
          gridRow: "3 / 25",
          height: inputDeafultHeght * 7,
          label: " ",
          filePath: "/clients/image",
          fileName: "file",
        },
        {
          name: "longitude",
          type: MAP,
          placeholder: "Client Addres",
          gridColumn: "10 / 19",
          gridRow: "3 / 25",
          height: inputDeafultHeght * 3,
        },
      ],
    },
  ],
};

export default ContactsTemplate;
