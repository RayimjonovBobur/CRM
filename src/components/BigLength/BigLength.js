import {Popover} from "antd";

const BigLength = ({text}) => {
    let content = (
        <div style={{width: "400px"}}>
            <p>{text}</p>
        </div>
    );
    return (
        <Popover placement="leftTop" content={content}>
            <div className="hodim-template">
                <div className="box-shadow"/>
                {text}
            </div>
        </Popover>
    );
};

export default BigLength;
