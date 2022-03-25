import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";

const allDataMain = {
  status: [
    {
      id: 1,
      name: "Yangi dastur",
    },
    {
      id: 2,
      name: "Jarayondagi",
    },
    {
      id: 3,
      name: "O'qitilayotgan",
    },
    {
      id: 4,
      name: "Topshirilgan",
    },
    {
      id: 5,
      name: "Bekor qilingan",
    },
  ],
  client_status: [
    { id: 1, name: "Potensial mijoz" },
    { id: 2, name: "Real Mijoz" },
    { id: 3, name: "Rad etilgan mijoz" },
  ],
  order_reason: [
    {
      id: 1,
      name: "Agent orqali",
    },
    {
      id: 2,
      name: "Mijoz orqali",
    },
    {
      id: 3,
      name: "Xodimlar orqali",
    },
    {
      id: 4,
      name: "Reklama orqali ",
    },
    {
      id: 5,
      name: "Boshqa",
    },
  ],
  from_whom: [
    { id: 1, name: "bir" },
    { id: 2, name: "ikkii" },
  ],
};

export const counterSlice = createSlice({
  name: "unsaved_reducer",
  initialState: {
    allData: {
      status: [
        {
          id: 1,
          name: "Yangi dastur",
        },
        {
          id: 2,
          name: "Jarayondagi",
        },
        {
          id: 3,
          name: "O'qitilayotgan",
        },
        {
          id: 4,
          name: "Topshirilgan",
        },
        {
          id: 5,
          name: "Bekor qilingan",
        },
      ],
      client_status: [
        { id: 1, name: "Potensial mijoz" },
        { id: 2, name: "Real Mijoz" },
        { id: 3, name: "Rad etilgan mijoz" },
      ],
      order_reason_id: [
        {
          id: 1,
          name: "Agent orqali",
          url: "/workers/all",
        },
        {
          id: 2,
          name: "Mijoz orqali",
          url: "/clients/active",
        },
        {
          id: 3,
          name: "Xodimlar orqali",
          url: "/workers/all",
        },
        {
          id: 4,
          name: "Reklama orqali ",
          url: "/reklams",
        },
        {
          id: 5,
          name: "Boshqa",
          url: "",
        },
      ],
      order_reason: [],
    },
    searchInputValue: [],
    changeInputtype: true,
    filterAllData: [],
    mainData: [],
  },
  reducers: {
    setAllData: (state, { payload }) => {
      state.allData = { ...state.allData, ...payload };
      state.filterAllData = state.allData;
    },
    setData: (state, { payload }) => {
      let arrayWithKeys = [];
      payload &&
        payload?.forEach((item, key) => {
          arrayWithKeys.push({ ...item, key });
        });
      state.mainData = arrayWithKeys;
    },
    setOrderReason: (state, { payload }) => {
      state.allData.order_reason = payload;
    },
    setSearchInputValue: (state, { payload }) => {
      state.searchInputValue = payload;
    },
    toogleInputType: (state, { payload }) => {
      state.changeInputtype = payload;
    },
    setFilterData: (s, { payload }) => {
      s.filterAllData = payload;
    },
  },
});

export const {
  setAllData,
  setData,
  setOrderReason,
  setFilterData,
  setSearchInputValue,
  toogleInputType,
} = counterSlice.actions;

export default counterSlice.reducer;
