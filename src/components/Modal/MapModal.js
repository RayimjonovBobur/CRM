import { inputDeafultHeght } from "../../constant/deafultStyle";
import React, { Component } from "react";
import { YMaps, Map, FullscreenControl, Placemark } from "react-yandex-maps";

export default class MapModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // coords: this?.props?.geo?.length == 2 ? this?.props?.value : [],
            coords: this?.props?.geo ? this.props.geo : [],
            mapState: {
                center: this?.props?.geo ? this.props.geo : [40.382352644806545, 71.77953969910632],
                zoom: 6,
            },
        };
    }


    onMapClick = (e) => {
        this.setState({ coords: e.get("coords") });
        this.props.handleChangeValue({
            latitude: this.state.coords[0],
            longitude: this.state.coords[1],
        });

    };

    render() {
        return (
            <YMaps onChange={() => this.onMapClick}>
                <Map
                    modules={["Placemark", "geocode", "geoObject.addon.balloon"]}
                    onClick={this.onMapClick}
                    state={this.state.mapState}
                    name={this.props.name}
                    style={{
                        gridColumn: this.props.gridColumn,
                        gridRow: this.props.gridRow,
                        height: this.props.height
                            ? this.props.height + "px"
                            : inputDeafultHeght + "px",
                        borderRadius: "7px",
                        marginTop: "22px"
                    }}
                >
                    {this.state.coords ? (
                        <Placemark geometry={this.state.coords} />
                    ) : null}
                    <FullscreenControl />
                </Map>
            </YMaps>
        );
    }
}
