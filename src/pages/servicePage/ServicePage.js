import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import {addNewTab} from "../../redux/stored_reducer";
import { setCurrentPage } from "../../redux/stored_reducer";
import SearchIcon from "../../components/Tabs/SearchIcon";

const ServicePage = ({ page }) => {
  const sections = page?.sections;
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth_reducer);
  const handleTab = (section) => {
    // dispatch(addNewTab(section));
    dispatch(setCurrentPage(section));
  };
  const filterAccessKey = (array) =>
    array.filter(
      (item) =>
        user?.access.includes(100) || user?.access.includes(item.accessKey)
    );
  return (
    <div className="first-page">
      <div className="site-layout__body">
        {filterAccessKey(sections).map((section, i) => (
          <Link to={section.path} key={i}>
            <Button
              className={"site-layout__body-items"}
              onClick={() => handleTab(section)}
            >
              <div className="body-item-meaning">
                <SearchIcon icon={section?.icon} />
                <span>{section?.text}</span>
              </div>
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServicePage;
