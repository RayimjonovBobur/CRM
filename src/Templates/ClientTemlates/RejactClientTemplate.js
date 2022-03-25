import {INKOR_MIJOZLAR} from '../../pages/pageConstants/PageRoutes';
import {CLIENTS_CHILD_PAGES} from '../../pages/pageConstants/PageTypes';
import PotensialClientTemplate from './PotensialClientTemplate';
import { ClientTemplateApi } from "../../constant/apiLine/apiLine";
const RejactClientTemplate = {
  ...PotensialClientTemplate,
  text: "Inkor qilgan mijozlar",
  path: INKOR_MIJOZLAR,
  key: "3",
  type: CLIENTS_CHILD_PAGES,
  isOpenModal: false,
  mainUrl: ClientTemplateApi,
  // filters: [
  //   ...PotensialClientTemplate.filters
  // ],
  // columns: [
  //   ...PotensialClientTemplate.columns
  // ],
  // scroll: { x: 2200, y: 1500 },
};

export default RejactClientTemplate;
