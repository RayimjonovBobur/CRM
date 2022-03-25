import React, { useState, useEffect, useRef } from "react";
import "../GlobalModal.scss";
import { Modal, Button, Form } from "antd";
import ModalInput from "../ModalInput";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleInnerModal,
  setValues2,
  setTableItem,
  setOffInnerModel,
} from "../../../redux/stored_reducer";
import { setAllData } from "../../../redux/unsaved_reducer";
import Draggable from "react-draggable";
import MacActions from "../../ToolsBar/MacActions/MacActions";
import { GET, POST } from "../../../functions/Methods";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// ❗ hard code boldi, Global modaldagi codelar takrollandi

const InnerModal = () => {
  const { values2, innerModal } = useSelector((state) => state.tabs_reducer);
  const [disabled, setDisabled] = useState(true);
  const dispatch = useDispatch();
  const draggleRef = useRef("s");
  const [bounds, setBounds] = useState({
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  });
  const [btnActive, setBtnActive] = useState(false);

  const resizeModal = () => {
    // keyinchalik kichik katta qilagian funksiya yoziladi
  };

  const handleChangeValue = (e) => {
    dispatch(setValues2({ ...values2, ...e }));
  };

  const handleCancel = (e) => {
    dispatch(setOffInnerModel());
    dispatch(toggleInnerModal(false));
    dispatch(setValues2({}));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = innerModal?.mainUrl;
    setBtnActive(true);
    POST(url, values2).then((res) => {
      if (res) {
        dispatch(setValues2({}));
        dispatch(setTableItem([]));
        GET(url).then((res) => {
          dispatch(setAllData(res.data.data));
          dispatch(setOffInnerModel(false));
          dispatch(toggleInnerModal());
          setBtnActive(false);
        });
        toast.success(res.data?.data?.name + " Muaffaqiyatlik qo'shildi");
      }
      setBtnActive(false);
    });
  };

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

  return (
    <Modal
      className="inner-modal"
      style={{ ...innerModal?.modal?.style }}
      width={innerModal?.modal?.style?.width}
      footer={null}
      title={
        <div
          style={{
            width: innerModal?.modal?.style?.width,
            cursor: "move",
          }}
          onMouseOver={() => {
            disabled && setDisabled(false);
          }}
          onMouseOut={() => setDisabled(true)}
        >
          <div className="modal-header">
            <span>{innerModal?.text}</span>
            <div className="modal-header__buttons">
              <MacActions onExit={handleCancel} onResize={resizeModal} />
            </div>
          </div>
        </div>
      }
      visible={innerModal?.isOpenModal}
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
      <Form className="modal-form">
        {innerModal?.form?.map((form) => (
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
                handleChangeValue={handleChangeValue}
                {...input}
                isInnerModal={true}
                key={input?.name}
              />
            ))}
          </div>
        ))}
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
            loading={btnActive}
          >
            Saqlash
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default InnerModal;
