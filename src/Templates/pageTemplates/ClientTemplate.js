import {
  CLIENTS_PATH,
  POTENSIAL_MIJOZLAR,
} from "../../pages/pageConstants/PageRoutes";
import {
  CLIENTS_PAGE,
  CLIENTS_CHILD_PAGES,
} from "../../pages/pageConstants/PageTypes";
import PotensialClientTemplate from "../ClientTemlates/PotensialClientTemplate";
import RealClientTemplate from "../ClientTemlates/RealClientTemplate";
import RejactClientTemplate from "../ClientTemlates/RejactClientTemplate";

import CommentsTemplate from "../ClientTemlates/ClientModalTabs/CommentsTabTemplate";
import ContactsTemplate from "../ClientTemlates/ClientModalTabs/ContactsTemplate";
import CommonTemplate from "../ClientTemlates/ClientModalTabs/CommonTemplate";

const ClientTemplate = {
  ...PotensialClientTemplate,
  text: "Mijozlar Ro'yxati",
  modal: {
    style: {
      width: 1200,
      marginTop: "-70px",
    },
    tabs: [CommonTemplate, ContactsTemplate, CommentsTemplate],
  },
  tabs: [PotensialClientTemplate, RealClientTemplate, RejactClientTemplate],
  style: {
    top: "75px",
  },
  childText: PotensialClientTemplate.text,
};

export default ClientTemplate;
