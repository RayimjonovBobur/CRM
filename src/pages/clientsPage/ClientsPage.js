import ClientPageChild from "./clientPageChild/ClientPageChild";
import { useEffect } from "react";
const ClientsPage = ({ page }) => {
  return (
    <div id="my__layout">
      <ClientPageChild activeKey={page.key} />
    </div>
  );
};

export default ClientsPage;
