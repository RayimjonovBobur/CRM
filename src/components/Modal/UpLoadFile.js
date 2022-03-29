import { Upload, Popover } from "antd";
import React from "react";
import "./GlobalModal.scss";
import { inputDeafultHeght } from "../../constant/deafultStyle";
import { DeleteIcon } from "../../assets/icons/icons";
import { BaseUrl, Base } from "../../BaseUrl";
import { DELETE } from "../../functions/Methods";
import { LoadingOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { setValues } from "../../redux/stored_reducer";
import SearchIcon from "../Tabs/SearchIcon";

function beforeUpload(file) {
  const isJpgOrPng =
    file.type === "application/pdf" ||
    file.type === "application/msword" ||
    file.type ===
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
    file.type === "image/jpeg" ||
    file.type === "image/png";

  if (!isJpgOrPng) {
    toast.error("Bunday fayl turi qabul qilinmaydi!");
  }
  return isJpgOrPng;
}
const token = localStorage.getItem("token");

class UploadFile extends React.Component {
  state = {
    loading: false,
    fileName: "",
    headers: {
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Origin": "*",
    },
  };
  handleChange = (info) => {
    if (info.file.status === "uploading") {
      return this.setState({ loading: true });
    }
    if (info.file.status === "done" && info.file?.response) {
      toast.success("File saqlandi");
      this.setState({
        loading: false,
        fileName: info.file.name,
        fileList: info,
      });
      this.props.onChange({
        [this.props.name]: `${info?.file?.response}`,
      });
      this.props.setUrl(`${Base}${info?.file?.response}`);
    }
  };

  handleDelete = (info) => {
    const { dispatch, values } = this.props;

    DELETE(this.props.filePath + "/delete", {
      type: this.props?.name,
      filename: this.state?.imageUrl,
    })
      .then((res) => {
        toast.success("Fayl o'chirildi!");
        dispatch(setValues({ ...values, [this?.props?.name]: null }));
        setTimeout(() => {
          this.setState({
            imageUrl: "",
            loading: false,
          });
        }, 0);
      })
      .catch((err) => {
        toast.warn("Xatolik, fayl o'chmadi!");
        setTimeout(() => {
          this.setState({
            imageUrl: "",
            loading: false,
          });
        }, 0);
      });
  };

  render() {
    const { loading } = this.state;
    const {
      gridColumn,
      gridRow,
      imageUrl,
      height,
      label,
      name,
      placeholder,
      filePath,
      openFile,
    } = this?.props;

    const showFileStatus = (bool) => {
      if (loading) {
        return <LoadingOutlined />;
      } else if (!imageUrl) {
        // bu birinchi modal ochilgandagi holat
        if (!bool) {
          return (
            <div>
              <SearchIcon icon={"UploadFileOilasi"} />
            </div>
          );
        } else {
          return (
            <div>
              <SearchIcon icon={"Checked"} />
            </div>
          );
        }
      } else if (imageUrl) {
        // bu file saqlangandagi holat
        return (
          <div>
            <button
              type="button"
              className="delete-file-btn"
              onClick={this.handleDelete}
            >
              <DeleteIcon />
            </button>
            <div className="file-uploader-name">
              <Popover
                placement="rightBottom"
                content={
                  <div className="file-uploader-span">
                    {this.state.fileName}
                  </div>
                }
              >
                <span>{this.state.fileName}</span>
              </Popover>
            </div>
          </div>
        );
      }
    };

    const customStyles = {
      fileIconStyle: {
        position: "relative",
        // backgroundColor: "red",
        top: "-23px",
        left: "0px",
        width: "100%",
        height: "100%",
        paddingTop: "10px",
        color: "blue",
      },
      labelStyle: {
        gridColumn,
        gridRow,
        height: height ? height + "px" : inputDeafultHeght + "px",
        width: "100% !important",
        textAlign: "center",
        cursor: "pointer",
      },
    };

    return (
      <label
        className="file-uploader-label"
        htmlFor={"file-uploder" + name}
        style={customStyles.labelStyle}
      >
        <p>{label}</p>
        <Upload
          action={BaseUrl + filePath}
          onChange={this.handleChange}
          headers={this.state.headers}
          beforeUpload={beforeUpload}
          placeholder={placeholder}
          showUploadList={false}
          id={"file-uploder" + name}
          name={name}
          maxCount={1}
          alt="file"
          type="file"
        >
          {" "}
        </Upload>
        <div style={openFile && customStyles.fileIconStyle}>
          {showFileStatus(this.state.fileList ? true : false)}
        </div>
      </label>
    );
  }
}

export default UploadFile;
