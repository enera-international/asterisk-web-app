import { Admin, Resource } from "react-admin";
//import jsonServerProvider from "ra-data-json-server";
import { MyLayout } from "./MyLayout.js";
import { webSocketDataProvider } from "../dataProvider.js";
import { UserCreate, UserEdit, UserList, UserShow } from "../users.js";

//const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
const dataProvider = webSocketDataProvider

const App = () => (
  <Admin dataProvider={dataProvider}  layout={MyLayout}>
    <Resource name="users" list={UserList} create={UserCreate} edit={UserEdit} show={UserShow}/>
  </Admin>
);

export default App;