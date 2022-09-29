import React from 'react';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { useInformer } from '../../utils';

let customDefault = L.icon({
  iconUrl: 'images/marker-icon.png',
  shadowUrl: 'images/marker-shadow.png',
});

const OpenStreetMap: React.FC = () => {
  const { company } = useInformer();

  const mapRef = React.useRef();

  return (
    <div>
      <div>
        <MapContainer
          ref={mapRef}
          center={[
            company.general_data.contact_info.address_de_facto.title !== null &&
            company.general_data.contact_info.address_de_facto.additional !==
              null &&
            company.general_data.contact_info.address_de_facto.additional
              .lat !== null
              ? company.general_data.contact_info.address_de_facto.additional
                  .lat
              : 47.00367,
            company.general_data.contact_info.address_de_facto.title !== null &&
            company.general_data.contact_info.address_de_facto.additional !==
              null &&
            company.general_data.contact_info.address_de_facto.additional
              .long !== null
              ? company.general_data.contact_info.address_de_facto.additional
                  .long
              : 28.907089,
          ]}
          zoom={13}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />

          {company.general_data.contact_info.address_de_facto.title !== null &&
            company.general_data.contact_info.address_de_facto.additional !==
              null &&
            company.general_data.contact_info.address_de_facto.additional
              .lat !== null &&
            company.general_data.contact_info.address_de_facto.title !== null &&
            company.general_data.contact_info.address_de_facto.additional !==
              null &&
            company.general_data.contact_info.address_de_facto.additional
              .long !== null && (
              <Marker
                icon={customDefault}
                position={[
                  company.general_data.contact_info.address_de_facto.additional
                    .lat,
                  company.general_data.contact_info.address_de_facto.additional
                    .long,
                ]}
              >
                <Popup>
                  {company.general_data.contact_info.address_de_facto.title
                    ? company.general_data.contact_info.address_de_facto.title
                    : ''}
                </Popup>
              </Marker>
            )}
        </MapContainer>
      </div>
    </div>
  );
};

export default OpenStreetMap;
