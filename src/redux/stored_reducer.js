import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";
import axios from "../functions/axios";

import { POST } from "../functions/Methods";
export const counterSlice = createSlice({
  name: "tabs_data",
  initialState: {
    values: {},
    values2: {},
    loading: false,
    tableItem: [],
    Panes: [],
    currentPage: {},
    innerModal: "",
    filteredMainData: [],
    serachInputValue: "",
    currentLocation: [],
    currentLocationIsOpen: false,
  },
  reducers: {
    removeTab: (state, action) => {
      state.Panes.splice(action.payload, 1);
    },
    setCurrentPage: (state, { payload }) => {
      if (!payload?.sections) {
        const newCurrentPage = {
          ...state.currentPage,
          tableItem: [...state.tableItem],
          values: { ...state.values },
        };

        if (newCurrentPage?.path) {
          const find = state.Panes.find(
            (a) => a.path === state.currentPage.path
          );
          if (find) {
            state.Panes = state.Panes.map((item) =>
              item.path === state.currentPage.path ? newCurrentPage : item
            );
          } else {
            state.Panes = _.uniqBy([...state?.Panes, newCurrentPage], "path");
          }
        }

        state.values = {};
        state.tableItem = [];

        state.Panes.forEach((page) => {
          if (page.path === payload.path) {
            state.values = page.values;
            state.tableItem = page.tableItem;
          }
        });

        state.currentPage = payload;
      }
    },
    setPanes: (s, { payload }) => {
      s.Panes = payload;
    },
    clearPanes: (state) => {
      state.Panes = [];
    },
    removePositionPanes: (state, { payload }) => {
      state.Panes = state.Panes.filter((item, i) => i !== payload);
    },
    toggleModal: (state, { payload }) => {
      state.currentPage.isOpenModal = payload;
    },
    toggleInnerModal: (state) => {
      state.innerModal.isOpenModal = !state.innerModal.isOpenModal;
    },
    changeCurrentPageData: (state, { payload }) => {
      if (payload) {
        state.currentPage.data = payload;
      }
    },
    setTableItem: (state, { payload }) => {
      state.tableItem = payload;
      state.currentPage.tableItem = payload;
    },
    removeTableItem: (state, { payload }) => {
      let ids = state.tableItem.map((row) => {
        return row.id;
      });
      return POST(state.currentPage?.mainUrl + "/delete", ids);
    },
    editTableItem: (state, { payload }) => {
      const www = state.currentPage.data.find(
        (data) => data.number === state.tableItem.number
      );
      if (www) {
        state.currentPage[www.number] = www;
      }
    },
    setValues: (state, { payload }) => {
      state.values = { ...payload };
    },
    setValues2: (state, { payload }) => {
      state.values2 = payload;
    },
    startLoading: (state) => {
      state.loading = true;
    },
    stopLoading: (state) => {
      state.loading = false;
    },
    setFilteredMainData: (state, { payload }) => {
      state.filteredMainData = payload;
    },
    setSearchInputValue: (state, { payload }) => {
      state.serachInputValue = payload;
    },
    setInnerModel: (state, { payload }) => {
      state.innerModal = payload;
    },
    setOffInnerModel: (state) => {
      state.innerModal = "";
    },

    setCurrentLocation: (s, { payload }) => {
      s.currentLocation = payload;
    },
    setCurrentLocationIsOpen: (s, _) => {
      s.currentLocationIsOpen = !s.currentLocationIsOpen;
    },

    setValuesKey: (state, { payload }) => {
      state.values = { ...state.values, ...payload };
    },
    setBottomActiveKey: (state, { payload }) => {
      state.bottomActiveKey = payload;
    },
    stopLoading: (state) => {
      state.loading = false;
    },
    removeOrder_reason: (state, { payload }) => {
      state.values.order_reason = null;
    },
  },
});

export const {
  removeTab,
  toggleModal,
  setCurrentPage,
  changeCurrentPageData,
  setTableItem,
  removeTableItem,
  editTableItem,
  toggleTableType,
  clearPanes,
  stopLoading,
  startLoading,
  setSearchInputValue,
  setValues,
  setValues2,
  setInnerModel,
  toggleInnerModal,
  setFilteredMainData,
  setOffInnerModel,
  setCurrentLocation,
  setCurrentLocationIsOpen,
  setValuesKey,
  setBottomActiveKey,
  setPanes,
  removePositionPanes,
  removeOrder_reason,
} = counterSlice.actions;

export default counterSlice.reducer;
