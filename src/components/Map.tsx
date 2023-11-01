import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer } from "react-leaflet";


const ViewMap = () => {
  return (
    <div>
      <MapContainer center={[51.505, -0.09]} zoom={15}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  )
};

export default ViewMap;
