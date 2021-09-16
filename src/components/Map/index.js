import { Map as GoogleMap, GoogleApiWrapper, Marker } from 'google-maps-react';

import MapStyle from './MapStyle';

import point from '/src/img/Point.svg';

import './index.scss';

const Map = ({google}) => {

    return (
        <div className="map">
            <header>
                <h2>Магазины мерча ведьмака</h2>
            </header>
            <div className="map__content">
                <GoogleMap
                    google={google}
                    styles={MapStyle}
                    zoom={13}
                    initialCenter={{lat: 55.753764, lng: 37.622312}}
                >
                    <Marker
                        position={{lat: 55.753764, lng: 37.622312}}
                        icon={{
                            url: point,
                        }}
                    />
                    <Marker
                        position={{lat: 55.75458160926511, lng: 37.55262686933474}}
                        icon={{
                            url: point,
                        }}
                    />
                    <Marker
                        position={{lat: 55.770890277082444, lng: 37.546491987427316}}
                        icon={{
                            url: point,
                        }}
                    />
                </GoogleMap>
            </div>
        </div>
    );
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyB5mDO8PVFhFjfmhIAlobiNbMMsYlknTos',
})(Map);