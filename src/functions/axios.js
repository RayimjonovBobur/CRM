import axios from "axios";
import { BaseUrl } from "../BaseUrl";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const key = "error";

export default async (url, method = "GET", data = null, id = null) => {
  const token = localStorage.getItem("token");
  const path = id ? url + "/" + id : url;
  if (url) {
    try {
      return await axios({
        method: method,
        url: BaseUrl + path,
        data: data,
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
    } catch (error) {
      if (error.message.includes("400")) {
        toast.warn("Oldin bog'langan ma'lumitlarni o'chiring");
      // }
      // else if (error.message.includes("401")) {
      //   toast[key](error.response?.data?.mess  age);

      } else if (error.message.includes("422")) {
        const format = error.response.data?.errors;
        if (typeof format === "object") {
          Object.keys(format ? format : {}).forEach((item) => {
            format[item].forEach((mes) => {
              toast.error(mes);
            });
          });
        } else {
          toast.error(`${format}`);
        }
      } else if (error.message.includes("500")) {
        toast[key]("Serverda bilan ulanishda xatolik bor!");
      }
    }
  }
};
