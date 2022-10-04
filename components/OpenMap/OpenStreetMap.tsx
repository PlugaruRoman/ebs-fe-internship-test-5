import React from 'react';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import { useInformer } from 'utils/index';

import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css';
import 'leaflet-defaulticon-compatibility';

import 'leaflet/dist/leaflet.css';

const OpenStreetMap: React.FC = () => {
  const { company } = useInformer();

  const mapRef = React.useRef();
  React.useEffect(() => {});
  return (
    <div>
      <div>
        <MapContainer
          ref={mapRef}
          center={[
            company.general_data.contact_info.address_de_facto.additional !==
              null &&
              company.general_data.contact_info.address_de_facto.additional
                .lat !== null &&
              company.general_data.contact_info.address_de_facto.additional.lat,

            company.general_data.contact_info.address_de_facto.additional !==
              null &&
              company.general_data.contact_info.address_de_facto.additional
                .long !== null &&
              company.general_data.contact_info.address_de_facto.additional
                .long,
          ]}
          zoom={13}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />

          {company.general_data.contact_info.address_de_facto.additional &&
            company.general_data.contact_info.address_de_facto.additional.lat &&
            company.general_data.contact_info.address_de_facto.additional &&
            company.general_data.contact_info.address_de_facto.additional
              .long && (
              <Marker
                position={[
                  company.general_data.contact_info.address_de_facto.additional
                    .lat,
                  company.general_data.contact_info.address_de_facto.additional
                    .long,
                ]}
              >
                <Popup>
                  {company.general_data.contact_info.address_de_facto.title}
                </Popup>
              </Marker>
            )}
        </MapContainer>
      </div>
    </div>
  );
};

export default OpenStreetMap;
