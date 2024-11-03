import AddIncident from "./components/AddIncident";
import PopupFilter from "./components/PopupFilter";
import MapController from "./components/MapController";
import SearchBar from "./components/SearchBar";
import PopupSearch from "./components/PopupSearch";
import PopupIncidentSummary from "./components/PopupIncidentSummary";
import PopupIncidentNotification from "./components/PopupIncidentNotification";
import PopupMenuProfile from "./components/PopupMenuProfile";

function MapLayout() {
    return (
        <div className="">
            {/* <div className="bg-black w-[100vw] h-[100vh] absolute z-10"></div> */}
            <img src="./assets/exp-map.jpg" alt="" className="bg-black w-[100vw] h-[100vh] absolute z-10"></img>
            <div className="h-[100vh] flex flex-col relative">
                <SearchBar
                    // setOpenSignUp={setOpenSignUp}
                />
                <div className="grow">
                    <PopupIncidentNotification/>
                    <PopupIncidentSummary/>
                    {/* <PopupFilter/> */}
                    {/* <PopupSearch/> */}
                    {/* <PopupMenuProfile/> */}
                </div>
                <div className="w-full flex my-2">
                    <div className="basis-[30%] ml-2"></div>
                    <AddIncident/>
                    <MapController/>
                </div>
            </div>
        </div>
    )
}
export default MapLayout;