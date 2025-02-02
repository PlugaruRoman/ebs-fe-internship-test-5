import React from 'react';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css';
import 'leaflet-defaulticon-compatibility';

import 'leaflet/dist/leaflet.css';
import Company from 'types/company';

type CompanyProps = {
  company: Company;
};

const OpenStreetMap: React.FC<CompanyProps> = ({ company }) => {
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
