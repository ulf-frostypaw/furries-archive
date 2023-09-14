import 'leaflet/dist/leaflet.css';
import {
	MapContainer,
	Marker,
	Popup,
	TileLayer,
	useMap,
    useMapEvents
} from 'react-leaflet';
//import L from 'leaflet';
import 'leaflet.markercluster';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import { LeafletMouseEvent } from 'leaflet'; 
import Layout from '../components/Layout'
import { Link } from 'react-router-dom';


const handleMapClick = (e: LeafletMouseEvent) => {
    const { lat, lng } = e.latlng;
    console.log(`Latitud: ${lat}, Longitud: ${lng}`);
};

  function ClickHandler({ onClick }: { onClick: (e: LeafletMouseEvent) => void }) {
    const map = useMapEvents({
      click(e: LeafletMouseEvent) {
        onClick(e);
      },
    });
  
    return null;
}

const Map = () => {
  const markersData = [
    { id: 1, lat: 52.505, lng: -0.09, name: 'Marker 1' },
    { id: 2, lat: 14.51, lng: -0.1, name: 'Marker 2' },
    { id: 3, lat: 48.515, lng: -0.11, name: 'Marker 3' },
    // Agrega más coordenadas de marcadores aquí
  ];
    return(
        <Layout title="Mapa">
                <MapContainer center={[21.2709003, -100.7189763]} zoom={5} scrollWheelZoom={true} style={{ height: "calc(100vh - 65px)" }}>
                    <TileLayer
                        attribution={'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}
                        url={"https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"}
                    />
                    {markersData.map((marker) => (
                      <Marker
                        key={marker.id}
                        position={[marker.lat, marker.lng]}
                      >
                        <Popup>
                          <div className="popup-content">
                              <img src="https://placehold.co/100x100" alt="" />
                              <Link to="/user/ulf">{marker.name}</Link>
                          </div>
                        </Popup>
                      </Marker>
                    ))}
                    <ClickHandler onClick={handleMapClick} />
                </MapContainer>
        </Layout>
    )
}
export default Map