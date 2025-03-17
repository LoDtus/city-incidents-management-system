import "./map.css";
import PopupFilter from "./components/PopupFilter";
import SearchBar from "./components/SearchBar";
import PopupSearch from "./components/PopupSearch";
import PopupIncidentSummary from "./components/PopupIncidentSummary";
import PopupIncidentNotification from "./components/PopupIncidentNotification";
import PopupMenuProfile from "./components/PopupMenuProfile";
import LeafletMap from "./components/LeafletMap";
import { useState } from "react";
import PopupAddIncident from "./components/PopupAddIncident";

function MapLayout() {
    const [ isPopupSearch, setIsPopupSearch ] = useState(false);

    return (
        <div className="flex justify-center">
            {/* <img className="w-[100vw] h-[100vh] fixed right-0 top-0" src="assets/exp-map.jpg" alt="" /> */}
            <LeafletMap/>
            <div className="h-[100vh] flex flex-col relative">
                <SearchBar
                    // setOpenSignUp={setOpenSignUp}
                />
                <div className="grow">
                    <PopupAddIncident/>
                    {/* <PopupIncidentNotification/> */}
                    {/* <PopupIncidentSummary/> */}
                    {/* <PopupFilter/> */}
                    {/* <PopupSearch/> */}
                    {/* <PopupMenuProfile/> */}
                </div>
            </div>
        </div>
    )
}
export default MapLayout;