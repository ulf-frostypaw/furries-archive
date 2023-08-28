import 'leaflet/dist/leaflet.css';
import {
	MapContainer,
	TileLayer,
	useMap
} from 'react-leaflet';
//import L from 'leaflet';
import 'leaflet.markercluster';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import Layout from '../components/Layout'
import { Suspense } from 'react';
import Loading from '../components/Loading'
const Map = () => {
    return(
        <Layout title="Mapa">
            <Suspense fallback={<Loading/>}>
                <MapContainer center={[21.2709003, -100.7189763]} zoom={5} scrollWheelZoom={true} style={{ height: "calc(100vh - 65px)" }}>
                    <TileLayer
                        attribution={'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}
                        url={"https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"}
                    />
                </MapContainer>
            </Suspense>
        </Layout>
    )
}
export default Map