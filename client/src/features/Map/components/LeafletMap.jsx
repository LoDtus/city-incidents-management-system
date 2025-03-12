import React, { useState, useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapContainer, TileLayer } from "react-leaflet";
import { getTooltip } from "../common/mapUtils";
import { data, dataMarkers, dataSizes, dataColors } from '../test/geoJSONData';
import MapController from './MapController';
import ContextMenu from './ContextMenu';
import AddIncident from "./AddIncident";

// Lấy cái này làm gốc để test
// Không sử dụng leaflet.glify mà sử dụng L.circle + for + render bằng canvas
// Đặc điểm: đơn giản, dễ code, nhưng không phù hợp với việc render lớn
export default function LeafletMap() {
    const defaultCenter = dataMarkers?.[0];
    const defaultZoom = 11;

    const mapRef = useRef(null);
    const menuRef = useRef(null);

    const [ leafletControlWidth, setLeafletControlWidth ] = useState(0);
    const [ zoomLv, setZoomLv ] = useState(defaultZoom);
    const [ rightClick, setRightClick ] = useState(false);
    const [ menuPos, setMenuPos ] = useState(null);
    const [ isAddLocation, setIdAddLocation ] = useState(false);

    const [ incidentList, setIncidentList ] = useState([]);
    const [ coordinates, setCoordinates ] = useState(null);
    const [ marker, setMarker ] = useState(null);
    const [ r_Incident, setR_Incident ] = useState(0);

    const iconMarker = new L.Icon({
        iconUrl: './assets/pin.png',
        iconSize: [32, 32],
        iconAnchor: [15, 32],
        popupAnchor: [0, -32],
    });

    function handleRightClick(e) {
        e.preventDefault();
        setMenuPos({
            x: e.clientX,
            y: e.clientY,
        });
        setRightClick(true);
    }

    function addIncident() {
        console.log(r_Incident);

        // Thêm circle vào bản đồ, dành cho người dùng hiện tại, còn người dùng chỗ khác thì sẽ cập nhật qua websocket
        // const incident = L.circle(coordinates, {
        //     radius: size,
        //     color: `rgba(${color.slice(0, 3).join(",")})`, // Màu viền (tách alpha ra khỏi phần màu)
        //     weight: 0, // Độ dày viền vòng tròn (thay đổi theo ý muốn)
        //     opacity: 0, // Độ mờ của viền vòng tròn (1 là không mờ, 0 là hoàn toàn mờ)
        //     fillColor: `rgba(${color.join(",")})`, // Màu nền của vòng tròn
        //     fillOpacity: 0.4, // Độ mờ của phần nội bộ vòng tròn (1 là không mờ, 0 là hoàn toàn mờ)
        // }).addTo(mapRef.current);
    }

    function locateMe() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const latitude = position.coords.latitude;  // Vĩ độ
                    const longitude = position.coords.longitude; // Kinh độ
                    console.log(`Vị trí hiện tại: Vĩ độ: ${latitude}, Kinh độ: ${longitude}`);
                    mapRef.current.setView([latitude, longitude], 14);

                    const newMarker = L.marker([latitude, longitude], { icon: iconMarker }).addTo(mapRef.current);
                    if (marker) {
                        marker.remove();
                    }
                    setMarker(newMarker);
                },
                (error) => {
                    // handle
                    console.error("Không thể lấy vị trí của bạn", error);
                }
            );
        } else {
            // handle
            console.log("API Geolocation không được hỗ trợ trên trình duyệt này.");
        }
    }

    function backHome() {

    }
    
    useEffect(() => {
        function clickOutsideContextMenu(e) {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setRightClick(false);
                setMenuPos({
                    x: e.clientX,
                    y: e.clientY,
                });
            }
        }
        
        document.addEventListener('click', clickOutsideContextMenu);
        window.addEventListener('blur', (e) => setRightClick(false));

        return () => {
            document.removeEventListener('click', clickOutsideContextMenu);
            window.addEventListener('blur', (e) => setRightClick(false));
        };
    }, []);

    useEffect(() => {
        if (!mapRef.current) return;

        const leafletControl = document.querySelector(".leaflet-control-zoom");
        setLeafletControlWidth(leafletControl.scrollWidth);
        
        mapRef.current.on('contextmenu',
            (e) => setCoordinates({
                lat: e.latlng.lat,
                lng: e.latlng.lng,
        }));
        mapRef.current.on('zoom',
            () => setZoomLv(mapRef.current.getZoom()
        ));
        mapRef.current.on('zoomend', () => updateCircles(mapRef));
        mapRef.current.on('moveend', () => updateCircles(mapRef));

        const circles = [];
        data.forEach(({ coordinates, size, color }) => {
            const incident = L.circle(coordinates, {
                radius: size,
                color: `rgba(${color.slice(0, 3).join(",")})`, // Màu viền (tách alpha ra khỏi phần màu)
                weight: 0, // Độ dày viền vòng tròn (thay đổi theo ý muốn)
                opacity: 0, // Độ mờ của viền vòng tròn (1 là không mờ, 0 là hoàn toàn mờ)
                fillColor: `rgba(${color.join(",")})`, // Màu nền của vòng tròn
                fillOpacity: 0.4, // Độ mờ của phần nội bộ vòng tròn (1 là không mờ, 0 là hoàn toàn mờ)
            }).addTo(mapRef.current);

            incident.bindPopup(getTooltip(size));
            incident.on('click', (e) => {
                console.log("Coordinates: " + e.target.getLatLng());
                console.log("Size: " + e.target.getRadius());
                incident.openPopup();
            });
            incident.on('mouseover', () => {
                incident.setStyle({ opacity: 1, fillOpacity: 0.6 });
            });
            incident.on('mouseout', () => {
                incident.setStyle({ opacity: 0, fillOpacity: 0.4 });
            });

            circles.push(incident);
            setIncidentList((prev) => [...prev, incident]);

            // Xóa circle khỏi bản đồ, dành cho người dùng hiện tại, còn người dùng chỗ khác thì sẽ cập nhật qua websocket
            // incident.on('dbclick', () => {
            //     incident.remove(); // Xóa vòng tròn khi click
            // });
        });

        return () => {
            mapRef.current.off('contextmenu',
                (e) => setCoordinates({
                    lat: e.latlng.lat,
                    lng: e.latlng.lng,
            }));
            mapRef.current.off('zoom', () => setZoomLv(mapRef.current.getZoom()));
            mapRef.current.off('zoomend', () => updateCircles(mapRef));
            mapRef.current.off('moveend', () => updateCircles(mapRef));
            circles.forEach((circle) => mapRef.current.removeLayer(circle));
        };
    }, [mapRef.current]);

    useEffect(() => {
        // Handle data khi sử dụng websocket (khó nhất)
    }, [data]);

    useEffect(() => {
        if (!rightClick && marker) {
            marker.remove();
        }
    }, [rightClick]);

    // Fix
    useEffect(() => {
        if (isAddLocation) {
            console.log(1);
            
            document.body.style.cursor = `url('./assets/pin.png'), auto`;
        } else {
            console.log(2);
            
            document.body.style.cursor = 'pointer';
        }
    }, [isAddLocation]);

    function updateCircles(mapRef) {
        const bounds = mapRef.current.getBounds();
        // Chưa xong: dùng bounds (chứa dữ liệu phạm vi khung nhìn) để xác định những incident nào cần được get về,
        // cần được ẩn / hiện
    }

    useEffect(() => {
        // Chưa xong: fix lỗi addTo 2 lần (1 lần khi mapRef.current và lần tại đây), nghĩ ra cách để chỉ get về một số lượng incident nhất định trong phạm vi.
        // Khi kéo sang thì mới get tiếp
        // Nghĩ cách để incidentList không bị quá nhiều trong cùng một bản đồ. Sau một thời gian kéo qua lại thì incidentList sẽ có
        // càng nhiều
        if (incidentList.length > 0) {
            incidentList.forEach((incident) => {
                const size = incident.options.radius;
                if (zoomLv < 12 && size < 1000) {
                    // incident.setStyle({ opacity: 0, fillOpacity: 0 });
                    incident.remove();
                } else if (zoomLv >= 10) { // cần thêm đk để tránh addTo 2 lần
                    incident.addTo(mapRef.current);
                    incident.setStyle({ opacity: 1, fillOpacity: 0.4 });
                }
            });
        }
    }, [zoomLv, incidentList]);

    useEffect(() => {
        if (coordinates) {
            const newMarker = L.marker([coordinates.lat, coordinates.lng], { icon: iconMarker }).addTo(mapRef.current);
            if (marker) {
                marker.remove();
            }
            setMarker(newMarker);
        }
    }, [coordinates]);

    // Chuyến sang sử dụng pin marker từ png sang svg
    // Đổi cursor thành png hoặc svg khi add location
    // Filter dữ liệu khu vực tại server
    // WebSocket
    // Lazy load các circle                 
    return (
        <div className="w-[100vw] h-[100vh] absolute z-10 flex justify-center">
            <MapController
                leafletControlWidth={leafletControlWidth}
                setIdAddLocation={setIdAddLocation}
                locateMe={locateMe}
                backHome={backHome}
            />

            <div onContextMenu={(e) => handleRightClick(e)}>
                <MapContainer
                    className='h-[100vh] !cursor-default'
                    center={defaultCenter}
                    zoom={defaultZoom}
                    renderer={L.canvas()}
                    whenReady={(e) => mapRef.current = e.target}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                </MapContainer>
            </div>

            <AddIncident/>
            <ContextMenu
                menuPos={menuPos}
                menuRef={menuRef}
                rightClick={rightClick}
            />
        </div>
    );
};