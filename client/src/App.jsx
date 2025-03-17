import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavigationBar from './features/navigationBar/NavigationBar';
import LayoutMap from './features/map/LayoutMap';
import LayoutAccess from './features/access/LayoutAccess';
import LayoutChat from './features/chat/LayoutChat';
import LayoutStatistic from './features/statistic/LayoutStatistic';
import LayoutArticle from './features/article/LayoutArticle';
import LayoutSaved from './features/saved/LayoutSaved';
import LayoutReport from './features/report/LayoutReport';
import LayoutTrash from './features/trash/LayoutTrash';
import LayoutSetting from './features/setting/LayoutSetting';

import SignUp from './features/access/components/SignUp';
import SignIn from './features/access/components/SignIn';
import ForgotPassword from './features/access/components/ForgotPassword';

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
                <Route path="/statistic"
                    element={<LayoutStatistic/>}
                />
                <Route path="/chat"
                    element={<LayoutChat/>}
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