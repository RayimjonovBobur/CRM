import _ from "lodash";
import moment from "moment";

export default (filters, columns, data) => {
  let filteredCols = [...columns];
  filters.forEach((d) => {
    filteredCols = filteredCols.map((a) => {
      if (a.dataIndex == d) {
        let filtereds = _.uniqBy(data, (e) => e[d]).map((k) => {
          if (d === "created_at") {
            return {
              text: moment(k[d]).format("DD-MM-YYYY") || "",
              value: moment(k[d]).format("DD-MM-YYYY") || "",
            };
          } else {
            return {
              text: k[d],
              value: k[d],
            };
          }
        });
        return {
          ...a,
          filters: filtereds,
          onFilter: (value, record) => `${record[d]}`.indexOf(value) === 0,
        };
      } else {
        return a;
      }
    });
  });
  return filteredCols;
};
