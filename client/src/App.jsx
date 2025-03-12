import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavigationBar from './features/NavigationBar/NavigationBar'
import LayoutMap from './features/Map/LayoutMap'
import LayoutAccess from './features/Access/LayoutAccess'
import LayoutOverview from './features/Overview/LayoutOverview'
import LayoutChat from './features/Chat/LayoutChat'
import LayoutStatistic from './features/Statistic/LayoutStatistic'
import LayoutArticle from './features/Article/LayoutArticle'
import LayoutSaved from './features/Saved/LayoutSaved'
import LayoutReport from './features/Report/LayoutReport'
import LayoutTrash from './features/Trash/LayoutTrash'
import LayoutSetting from './features/Setting/LayoutSetting'

import SignUp from './features/Access/components/SignUp'
import SignIn from './features/Access/components/SignIn'
import ForgotPassword from './features/Access/components/ForgotPassword'

export default function App() {
    return (
        <div className="App flex">
            <NavigationBar/>
            <Routes>
                <Route path="/access" element={<LayoutAccess/>}>
                    <Route path="signIn"
                        element={<SignIn/>}
                    />
                    <Route path="signUp"
                        element={<SignUp/>}
                    />
                    <Route path="forgotPassword"
                        element={<ForgotPassword/>}
                    />
                </Route>

                <Route path="/"
                    element={<LayoutMap/>}
                />
                <Route path="/weather"
                    element={<LayoutMap/>}
                />
                <Route path="/overview"
                    element={<LayoutOverview/>}
                />
                <Route path="/chat"
                    element={<LayoutChat/>}
                />
                <Route path="/statistic"
                    element={<LayoutStatistic/>}
                />
                <Route path="/article"
                    element={<LayoutArticle/>}
                />
                <Route path="/saved"
                    element={<LayoutSaved/>}
                />
                <Route path="/report"
                    element={<LayoutReport/>}
                />
                <Route path="/trash"
                    element={<LayoutTrash/>}
                />
                <Route path="/setting"
                    element={<LayoutSetting/>}
                />
            </Routes>
        </div>
    );
};