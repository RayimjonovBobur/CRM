import React from "react";
import { Upload, Modal, Popover } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { inputDeafultHeght } from "../../../constant/deafultStyle";
import { DELETE } from "../../../functions/Methods";
import { BaseUrl } from "../../../BaseUrl";
import { setValues } from "../../../redux/stored_reducer";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

const token = localStorage.getItem("token");

export class PicturesWall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      previewVisible: false,
      previewImage: "",
      previewTitle: "",
      fileList: this.props.fileList,
      headers: {
        "Authorization": `Bearer ${token}`,
        "Access-Control-Allow-Origin": "*",
      },
    };
  }

  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true,
      previewTitle:
        file.name || file.url.substring(file.url.lastIndexOf("/") + 1),
    });
  };

  handleDelete = (e) => {
    const { dispatch, values } = this?.props;
    DELETE(this.props.filePath + "/delete", {
      type: this.props.name,
      filename: e.response,
    })
      .then((res) => {
        if (res) {
          dispatch(setValues({ ...values, [this?.props?.name]: null }));
          toast.success("Rasm o'chirildi!");
        }
      })
      .catch((err) => {
        toast.warn("Xatolik, fayl o'chmadi!");
      });
  };

  handleChange = (e) => {
    this.props.handleChangeValue(
      e.file.response && { [this?.props?.name]: `${e.file.response}` }
    );
    this.props.setFileList(e.fileList);
  };

  render() {
    const { previewVisible, previewImage, previewTitle } = this.state;
    const { filePath, fileList } = this.props;
    const uploadButton = (
      <div>
        <div>
          <PlusOutlined />
        </div>
        Upload
      </div>
    );


    const customStyles = {
      imageUploader: {
        gridColumn: this.props.gridColumn,
        gridRow: this.props.gridRow,
        height: this.props?.height
          ? this.props?.height + "px"
          : inputDeafultHeght + "px",
        width: "100% !important",
        border: "1px solid #D9D9D9",
      },
    };

    return (
      <>
        <div
          className="file-uploader-label"
          htmlFor="file-uploder"
          style={customStyles.imageUploader}
        >
          <Upload
            action={BaseUrl + filePath}
            headers={this.state.headers}
            listType="picture-card"
            fileList={fileList}
            name={this.props.fileName}
            onPreview={this.handlePreview}
            onRemove={this.handleDelete}
            onChange={this.handleChange}
          >
            {fileList.length >= 1 ? null : uploadButton}
          </Upload>
          {/* <div className="file-uploader-name">
            <Popover
              placement="rightBottom"
              content={
                <div
                  style={{ width: "100px !important", wordBreak: "break" }}
                  className="file-uploader-span"
                >
                  {fileList[0]?.name}
                </div>
              }
            >
              <span>{fileList[0]?.name}</span>
            </Popover>
          </div> */}
          <Modal
            visible={previewVisible}
            title={previewTitle}
            footer={null}
            onCancel={this.handleCancel}
            className="previewModal"
          >
            <img className="modalImg" alt="example" src={previewImage} />
          </Modal>
        </div>
      </>
    );
  }
}
