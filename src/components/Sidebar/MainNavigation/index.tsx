import { BarChart, CheckSquare, Flag, Home, SquareStack, Users } from "lucide-react"
import { Navitem } from "./Navitem"


export const  MainNavigation = () =>{

    return(
        <nav className="space-y-0.5">
            <Navitem title="Home" icon={Home}/>
            <Navitem title="Dasboard" icon={BarChart}/>
            <Navitem title="Projects" icon={SquareStack}/>
            <Navitem title="Tasks" icon={CheckSquare}/>
            <Navitem title="Reporting" icon={Flag}/>
            <Navitem title="Users" icon={Users}/>
        </nav>
    )
}