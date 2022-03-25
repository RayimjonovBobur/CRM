import { REAL_MIJOZLAR } from "../../pages/pageConstants/PageRoutes";
import { CLIENTS_CHILD_PAGES } from "../../pages/pageConstants/PageTypes";
import PotensialClientTemplate from "./PotensialClientTemplate";
import { ClientTemplateApi } from "../../constant/apiLine/apiLine";
const RealClientTemplate = {
  ...PotensialClientTemplate,
  text: "Real mijozlar",
  path: REAL_MIJOZLAR,
  allData: {
    states: "/states/all",
    cities: "/cities/all",
    activity_types: "/activity-types",
    hudud: "/districts/all",
    category_name: "/categories",
  },
  key: "2",
  type: CLIENTS_CHILD_PAGES,

  isOpenModal: false,

  mainUrl: ClientTemplateApi,
};

export default RealClientTemplate;
