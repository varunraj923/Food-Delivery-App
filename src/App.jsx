import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import appStore from "./utils/appStore";
import {Provider} from "react-redux"
import Footer from "./Footer";





function App(){
  return(

    <Provider store={appStore}>
   
        <>
 <Navbar></Navbar>
 <Outlet/>
 <Footer></Footer>

 
     </>

     </Provider>

   

  );
}






export default App;


