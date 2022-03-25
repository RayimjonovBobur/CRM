import { Table } from "antd";
import { useEffect, useState } from "react";
import "./GlobalTable.scss";
import { useSelector, useDispatch } from "react-redux";
import FilterColumns from "../../constant/FilterColumns";
import { setTableItem, setValues, toggleModal } from "../../redux/stored_reducer";

const GlobalTable = () => {
  const [newColumns, setNewColumns] = useState([]);
  const { loading } = useSelector((s) => s.tabs_reducer)

  const {
    // loading,
    filteredMainData,
    serachInputValue,
    currentPage,
  } = useSelector((state) => state?.tabs_reducer);

  const { mainData } = useSelector((state) => state?.unsaved_reducer)
  const dispatch = useDispatch();
  const { filters, columns, tableItem } = currentPage;

  useEffect(() => {
    filterAdd();
  }, [currentPage, mainData]);

  const rowSelection = {
    selectedRowKeys: tableItem?.map((row) => row.key),
    onChange: (selectedRowKeys, selectedRows) => {
      dispatch(setTableItem(selectedRows));
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === "Disabled User",
      name: record.name,
    }),
  };

  function filterAdd() {
    let filteredColumns = [];
    if (filters) {
      filteredColumns = FilterColumns(filters, columns, mainData);
    } else {
      filteredColumns = columns;
    }
    setNewColumns(filteredColumns);
  }

  const onClickRow = record => {
    return {
      onClick: () => {
        dispatch(setTableItem([record]));
      },
      onDoubleClick: () => {
        if (tableItem.length > 0 && tableItem.length < 2) {
          dispatch(setValues({ ...tableItem[0] }));
        }
        dispatch(toggleModal(tableItem));
      }
    };
  };

  return (
    <Table
      bordered
      loading={loading}
      columns={newColumns}
      className="main-table"
      dataSource={serachInputValue ? filteredMainData : mainData}
      size={"small"}
      scroll={currentPage?.scroll ? { ...currentPage?.scroll } : { y: 380 }}
      pagination={{ position: ["bottomCenter"] }}
      rowSelection={{
        type: "checkbox",
        ...rowSelection,
      }}
      onRow={onClickRow}
    />
  );
};

export default GlobalTable;
