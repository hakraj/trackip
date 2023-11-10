import { Icon } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css"


const ViewMap = ({ geo }: { geo: number[] }) => {

  const customIcon = new Icon({
    iconUrl: require("../images/placeholder.png"),
    iconSize: [38, 38]
  })

  return (
    <div>
      <MapContainer key={`${geo[0]}-${geo[1]}`} center={[geo[0], geo[1]]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://a.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />

        <Marker position={[geo[0], geo[1]]} icon={customIcon}>
          <Popup>Here you are!</Popup>
        </Marker>
      </MapContainer>
    </div>
  )
};
export default ViewMap;
