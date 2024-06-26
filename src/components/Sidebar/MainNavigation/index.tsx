import { BarChart, CheckSquare, Flag, Home, SquareStack, Users } from "lucide-react"
import { NavItem } from "./NavItem"



export const  MainNavigation = () =>{

    return(
        <nav className="space-y-0.5">
            <NavItem title="Home" icon={Home}/>
            <NavItem title="Dasboard" icon={BarChart}/>
            <NavItem title="Projects" icon={SquareStack}/>
            <NavItem title="Tasks" icon={CheckSquare}/>
            <NavItem title="Reporting" icon={Flag}/>
            <NavItem title="Users" icon={Users}/>
        </nav>
    )
}