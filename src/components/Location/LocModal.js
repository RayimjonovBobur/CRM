import { useState, useEffect } from "react";
import { Modal } from "antd";
import { useSelector, useDispatch } from "react-redux";
import {
  setCurrentLocationIsOpen,
} from "../../redux/stored_reducer";

import { YMaps, Map, Placemark } from "react-yandex-maps";
const LocModal = () => {
  const { currentLocationIsOpen, currentLocation } = useSelector(
    (s) => s.tabs_reducer
  );
  const [loc, setLoc] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    setLoc(currentLocation);
  }, [currentLocation]);
  return (
    <Modal
      visible={currentLocationIsOpen}
      onOk={() => dispatch(setCurrentLocationIsOpen())}
      onCancel={() => dispatch(setCurrentLocationIsOpen())}
      className={'location'}
    >
      <div style={{backgroundColor: '#fff', width: '1000px', height: '501px'}}>
        <YMaps>
          <Map
            modules={["Placemark", "geocode", "geoObject.addon.balloon"]}
            state={{
              center: loc,
              zoom: 15,
            }}
            style={{
              width: "100%",
              height: "500px",
            }}
          >
            {loc ? <Placemark geometry={loc} /> : null}
            {/* <FullscreenControl /> */}
          </Map>
        </YMaps>
      </div>
    </Modal>
  );
};

export default LocModal;
