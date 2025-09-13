import Header from "./Header";
import Listedes from "./Listedesutilisateurs";
import SideBar from "./SideBar";

export default function Utilisateurs(){
return (
   <div className="flex  ">
            <div>
            <SideBar/>
            </div>
            <div className="mt-6 ml-10">
            <Header/>
            <Listedes/>
            </div>
        </div>
     )
}