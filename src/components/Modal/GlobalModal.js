import React, { useState, useEffect, useRef } from "react";
import { Modal, Button } from "antd";
import "./GlobalModal.scss";
import ModalInput from "./ModalInput";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleModal,
  setValues,
  setTableItem,
  stopLoading,
  startLoading,
  setValues2,
} from "../../redux/stored_reducer";
import { setData, setAllData } from "../../redux/unsaved_reducer";
import ModalTabs from "./modalTabs/ModalTabs";
import Draggable from "react-draggable";
import MacActions from "../ToolsBar/MacActions/MacActions";
import { GET, POST } from "../../functions/Methods";
import {
  ProgrammsTemplateApi,
  removeApiStatusLines,
} from "../../constant/apiLine/apiLine";
import axios from "../../functions/axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GlobalModal = () => {
  const { currentPage, values, innerModal } = useSelector(
    (state) => state.tabs_reducer
  );
  const { mainUrl, key } = currentPage;
  const { user } = useSelector((s) => s.auth_reducer);
  const [update, setUpdate] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const dispatch = useDispatch();
  const draggleRef = useRef("s");
  const [bounds, setBounds] = useState({
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  });
  const [btnDisabled, setBtnDisabled] = useState(false);

  useEffect(() => {
    if (!innerModal) {
      dispatch(setValues2({}));
    }
    if (currentPage && currentPage.isOpenModal) {
      let currentData = currentPage?.allData;
      for (const url in currentData) {
        let res = axios(currentData[url]);
        res.then((res) => {
          dispatch(setAllData({ [url]: res.data.data }));
        });
      }
    }
  }, [currentPage]);

  const onStart = (event, uiData) => {
    const { clientWidth, clientHeight } = window.document.documentElement;
    const targetRect = draggleRef.current?.getBoundingClientRect();
    if (!targetRect) {
      return;
    }

    setBounds({
      left: -targetRect.left + uiData.x,
      right: clientWidth - (targetRect.right - uiData.x),
      top: -targetRect.top + uiData.y,
      bottom: clientHeight - (targetRect.bottom - uiData.y),
    });
  };

  const resizeModal = () => {
    // keyinchalik kichik katta qilagian funksiya yoziladi
  };

  const handleChangeValue = (e) => {
    if (e) {
      dispatch(setValues({ ...values, ...e }));
    }
  };

  const handleCancel = (e) => {
    dispatch(toggleModal(false));
    dispatch(setValues({}));
  };

  const currentPageSetModal = () => {
    dispatch(setValues({}));
    dispatch(toggleModal(false));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBtnDisabled(true);
    POST(
      mainUrl,
      currentPage.mainUrl === ProgrammsTemplateApi
        ? { ...values, from_whom: user.name }
        : values
    ).then((res) => {
      if (res) {
        dispatch(toggleModal(false));
        dispatch(setValues({}));
        dispatch(setTableItem([]));
        dispatch(startLoading());
        setUpdate(true);
      }
      setBtnDisabled(false);
    });
  };

  useEffect(() => {
    if (update) {
      GET(
        removeApiStatusLines.includes(mainUrl)
          ? `${mainUrl}/status/${key}`
          : mainUrl
      ).then((res) => {
        console.log(res.data.data);
        if (res) {
          dispatch(setData(res.data.data));
          dispatch(stopLoading());
          toast.success("Muaffaqiyatlik bajarildi");
        }
      });
      setUpdate(false);
    }
  }, [update]);

  return (
    <Modal
      className="global-modal"
      style={{ ...currentPage?.modal?.style }}
      footer={null}
      title={
        <div
          style={{
            // width: currentPage?.modal?.style?.width,
            cursor: "move",
          }}
          onMouseOver={() => {
            disabled && setDisabled(false);
          }}
          onMouseOut={() => setDisabled(true)}
        >
          <div className="modal-header">
            <span>{currentPage?.text}</span>
            <div className="modal-header__buttons">
              <MacActions onExit={currentPageSetModal} onResize={resizeModal} />
            </div>
          </div>
        </div>
      }
      visible={currentPage?.isOpenModal}
      closable={false}
      modalRender={(modal) => (
        <Draggable
          disabled={disabled}
          bounds={bounds}
          onStart={(event, uiData) => onStart(event, uiData)}
        >
          <div ref={draggleRef}>{modal}</div>
        </Draggable>
      )}
    >
      <form className="modal-form" onSubmit={(e) => handleSubmit(e)}>
        {currentPage?.form?.map((form) => (
          <div
            className="modal-grid__form"
            key={form?.grid}
            style={{
              gridTemplateColumns: form.grid?.columns,
              gridAutoRows: form.grid?.rows,
            }}
          >
            {form?.inputs?.map((input) => (
              <ModalInput
                {...input}
                key={input?.name}
                countInput={form?.inputs}
                handleChangeValue={handleChangeValue}
              />
            ))}
          </div>
        ))}
        <ModalTabs
          tabs={currentPage?.modal?.tabs}
          handleChangeValue={handleChangeValue}
        />
        <div className="modal-form_buttons">
          <Button
            type="submit"
            className="modal-form__button qaytish"
            onClick={(e) => handleCancel(e)}
          >
            Orqaga
          </Button>
          <Button
            type="submit"
            className="modal-form__button saqlash"
            onClick={(e) => handleSubmit(e)}
            disabled={btnDisabled}
            loading={btnDisabled}
          >
            Saqlash
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default GlobalModal;
