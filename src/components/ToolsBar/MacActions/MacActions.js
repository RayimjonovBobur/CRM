import { CloseIcon, DashIcon } from "../../../assets/icons/icons";
import {
  setCurrentPage,
  clearPanes,
  removePositionPanes,
} from "../../../redux/stored_reducer";
import { FullscreenExitOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./macActions.scss";

const MacActions = ({ onResize, onHide, onExit }) => {
  const navigate = useNavigate();
  const { currentPage, Panes } = useSelector((s) => s.tabs_reducer);
  const dispatch = useDispatch();
  
  const removeCurrentPage = (el) => {
    let position = null;
    Panes?.forEach((item, i) => {
      if (item?.text === currentPage?.text) {
        position = i;
      }
    });
    if (position === 0 && Panes?.length === 1) {
      navigate("/");
      dispatch(clearPanes());
    } else if (Panes.length - 1 > position) {
      dispatch(setCurrentPage(Panes[position + 1]));
      navigate(Panes[position + 1].path);
      handlePanes(position, el);
    } else {
      dispatch(setCurrentPage(Panes[0]));
      navigate(Panes[Panes.length - 1].path);
      handlePanes(position, el);
    }
    
  };
  function handlePanes(id, el) {
    if (el) {
      dispatch(removePositionPanes(id));
    }
  }

  function toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  const macButtons = [
    {
      icon: <DashIcon />,
      className: "green_btn",
      onClick: onHide ? onHide : () => removeCurrentPage(false),
    },
    {
      icon: <FullscreenExitOutlined />,
      className: "yellow_btn",
      onClick: onResize || toggleFullScreen,
    },
    {
      icon: <CloseIcon />,
      className: "red_btn",
      onClick: onExit ? onExit : () => removeCurrentPage(true),
    },
  ];

  return (
    <div className="toolbar__buttons">
      {macButtons.map((button, i) => (
        <button
          key={i}    
          className={"child-page__button " + button.className}
          onClick={button.onClick}
        >
          {button.icon}
        </button>
      ))}
    </div>
  );
};

export default MacActions;
