import { useState } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { Base } from "../../BaseUrl";
import { Skeleton} from "antd";

const ImgZoom = ({ src }) => {
  const [time, setTime] = useState(true);

  const start = (e) => {
    setTimeout(() => {
      setTime(false);
      e.style.width = "30px"
      e.style.height = "30px"
    }, 1000);
  };
  return (
    <div>
      <Zoom zoomMargin={10}>
        <source media="(max-width: 800px)" srcSet={Base+ src} />
        <picture>
          <img
            alt=" "
            src={Base+ src}
            style={{ objectFit: "contain", width: "0px", height: "0px" }}
            onLoad={(e) => start(e.target)}
          />
        </picture>
        {time && (
          <Skeleton.Avatar
            className="img__skelaton"
            active={true}
            size={"small"}
            shape={"default"}
            width={"100px"}
          />
        )}
      </Zoom>
    </div>
  );
};

export default ImgZoom;
