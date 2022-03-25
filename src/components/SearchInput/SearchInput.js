import { useState, useEffect } from "react";
import { Input } from "antd";
import {
  setSearchInputValue,
  setCurrentPage,
  setFilteredMainData,
} from "../../redux/stored_reducer";
import { useDispatch, useSelector } from "react-redux";
import { Popover } from "antd";
import PaintBackground from "../PaintBackground/PaintBackground";
import moment from "moment";
// ! Template dagi dataIndex agar rasim yoki string && number dan boshqa typedagi ma'lumot bo'ladigan bolsa shu arrayni 👇
// ! ichiga qaysi dataIndex larini o'qimasligini yozib qo'yishingiz talab qiliniadi aks holda projact da hatoli yoki
// ! tushunmovchilik kuzatilishi mumkin 👨‍🏫👨‍🏫👨‍🏫

const dontFilterTamlateDataIndex = [
  "developer_photo",
  "passport",
  "family",
  "number",
  "file_1",
  "loc",
  "img",
];
// created_at
const { Search } = Input;

const SearchInput = () => {
  const [value, setValue] = useState("");
  const { currentPage } = useSelector((state) => state.tabs_reducer);
  const { mainData } = useSelector((state) => state.unsaved_reducer);
  const [keys, setKeys] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setSearchInputValue(value));
  }, [value]);

  useEffect(() => {
    setKeys(Object.keys(mainData[0] ? mainData[0] : []));
  }, [mainData]);

  useEffect(() => {
    let filter = mainData.filter((item) => {
      for (let i = 0; i < keys.length; i++) {
        if (typeof item[keys[i]] === "string") {
          if (
            item[keys[i]]
              .toString()
              .toLowerCase()
              .includes(value.toLocaleLowerCase())
          ) {
            return item;
          }
        }
      }
    });

    let newColumn = currentPage?.columns?.map((item) => {
      if (!dontFilterTamlateDataIndex.includes(item?.dataIndex)) {
        return {
          ...item,
          render: (text) => {
            let content = (
              <div style={{ width: "400px" }}>
                <PaintBackground text={`${text}`} value={`${value}`} />
              </div>
            );
            if (`${text}`.length > 59) {
              return (
                <Popover placement="leftTop" content={content}>
                  <div className="hodim-template">
                    <div className={"box-shadow"}></div>
                    <PaintBackground text={`${text}`} value={`${value}`} />
                  </div>
                </Popover>
              );
            } else {
              return (
                <div className="hodim-template">
                  <PaintBackground
                    text={`${
                      item?.dataIndex === "created_at"
                        ? moment(text).format("DD-MM-YYYY")
                        : text
                      }`}
                    // text={`${text}`}
                    value={`${value}`}
                  />
                </div>
              );
            }
          },
        };
      } else {
        return item;
      }
    });

    if (currentPage?.columns) {
      dispatch(setCurrentPage({ ...currentPage, columns: newColumn }));
    }

    dispatch(setFilteredMainData(filter));
  }, [value, mainData]);

  return (
    <Search
      placeholder="Search..."
      value={value}
      allowClear
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default SearchInput;
