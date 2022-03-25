import React from "react";
import {Tabs} from "antd";
import {Link} from "react-router-dom";
import {setCurrentPage} from "../../redux/stored_reducer";
import {useDispatch} from "react-redux";

const {TabPane} = Tabs;

const ChildTabs = ({data, activeKey}) => {
    const dispatch = useDispatch();

    const handleTab = (page) => {
        dispatch(setCurrentPage(page));
        // dispatch(addNewTab(page));
    };
    return (
        <Tabs defaultActiveKey={activeKey} style={{padding: "0 20px"}}>
            {data?.tabs?.map((item) => (
                <TabPane
                    key={item.key}
                    tab={
                        <Link to={item.path} onClick={() => handleTab(item)}>
                            {item.text}
                        </Link>
                    }
                />
            ))}
        </Tabs>
    );
};

export default ChildTabs;
