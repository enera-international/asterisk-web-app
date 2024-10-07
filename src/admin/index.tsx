import { Admin } from "@react-admin/ra-enterprise";
//import jsonServerProvider from "ra-data-json-server";
//import { webSocketDataProvider } from "../dataProvider.js";
//import { authProvider } from "./authProvider.js";
import { UserCreate, UserEdit, UserList, UserShow } from "../users.js";
import { useReactAdminRpcDataProvider } from "../shared/hooks/useReactAdminRpcDataProvider.js";
import { CallList, CallEdit, CallCreate, CallShow } from "../CallSessions.js";
import { ContextList, ContextEdit, ContextCreate, ContextShow } from "../Contexts.js";
import { DialPlanList, DialPlanEdit, DialPlanCreate, DialPlanShow } from "../DialPlans.js";
import { TrunkList, TrunkEdit, TrunkCreate, TrunkShow } from "../Trunks.js";
import { MyLayout } from "../layout/MyLayout.js";
import { myDarkTheme, myLightTheme } from "../shared/layout/MyTheme.js";

import GroupIcon from '@mui/icons-material/Group';
import SettingsInputAntennaIcon from '@mui/icons-material/SettingsInputAntenna';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import SettingsPhoneIcon from '@mui/icons-material/SettingsPhone';
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';
import Dashboard from "../Dashboard.js";
import { Resource } from "react-admin";

//const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
//const dataProvider = webSocketDataProvider
//const apiUrl = '/api/v2'
const apiUrl = (import.meta.env.VITE_PROJECT_API_URL !== undefined) ? import.meta.env.VITE_PROJECT_API_URL : 'http://localhost:3001'
const App = () => {
  const dataProvider = useReactAdminRpcDataProvider({ url: apiUrl, path: import.meta.env.VITE_PROJECT_SOCKETIO_PATH })
  return (
    <Admin 
      dashboard={Dashboard} 
      dataProvider={dataProvider} 
      lightTheme={myLightTheme}
      darkTheme={myDarkTheme}
      layout={MyLayout}>
      <Resource
            name="users"
            list={UserList}
            edit={UserEdit}
            create={UserCreate}
            show={UserShow}
            icon={GroupIcon}
        />
        <Resource
            name="trunks"
            list={TrunkList}
            edit={TrunkEdit}
            create={TrunkCreate}
            show={TrunkShow}
            icon={SettingsInputAntennaIcon}
        />
        <Resource
            name="calls"
            list={CallList}
            edit={CallEdit}
            create={CallCreate}
            show={CallShow}
            icon={PhoneInTalkIcon}
        />
        <Resource
            name="dialplans"
            list={DialPlanList}
            edit={DialPlanEdit}
            create={DialPlanCreate}
            show={DialPlanShow}
            icon={SettingsPhoneIcon}
        />
        <Resource
            name="contexts"
            list={ContextList}
            edit={ContextEdit}
            create={ContextCreate}
            show={ContextShow}
            icon={SwitchAccountIcon}
        />
    </Admin>
  );
};

export default App;