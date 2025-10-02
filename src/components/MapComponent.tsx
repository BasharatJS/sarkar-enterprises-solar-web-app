'use client'

import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'

// Fix for default markers in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
})

// Custom icon for the marker
const customIcon = new L.Icon({
  iconUrl:
    'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/map-marker-512.png',
  iconRetinaUrl:
    'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/map-marker-512.png',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
  shadowUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  shadowSize: [41, 41],
  shadowAnchor: [13, 41],
})

const MapComponent: React.FC = () => {
  // Coordinates for Lengtisinga bazar Near Auto stand, Bongaigaon ASSAM
  const position: [number, number] = [26.4819, 90.5449] // Approximate coordinates for Bongaigaon

  return (
    <MapContainer
      center={position}
      zoom={10}
      scrollWheelZoom={true}
      style={{ height: '500px', width: '100%' }}
      className="z-0"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={customIcon}>
        <Popup>
          <div className="text-center p-2">
            <h3 className="font-bold text-lg text-green-600 mb-2">
              Sarkar Enterprises
            </h3>
            <p className="text-sm text-gray-700 mb-1">
              Lengtisinga bazar Near Auto stand
            </p>
            <p className="text-sm text-gray-700 mb-1">
              Bongaigaon, ASSAM - 783384
            </p>
            <div className="mt-3 space-y-1">
              <p className="text-xs text-gray-600">📞 +91 86383 60212</p>
              <p className="text-xs text-gray-600">📞 +91 78969 42368</p>
              <p className="text-xs text-gray-600">✉️ asjansexport@gmail.com</p>
            </div>
            <div className="mt-3 text-xs text-gray-600">
              <p>Mon-Sat: 9:00 AM - 6:00 PM</p>
              <p>Sunday: 10:00 AM - 4:00 PM</p>
            </div>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default MapComponent
