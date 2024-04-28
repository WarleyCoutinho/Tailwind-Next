import { Logo } from "./Logo"
import { Cog, LifeBuoy, Search } from "lucide-react"
import { MainNavigation } from "./MainNavigation"
import { Navitem } from "./MainNavigation/Navitem"
import { UsedSpaceWidget } from "./UsedSpaceWidget"
import { Profile } from "./Profile"
import * as Input from './Input'

export const Sidebar = () => {

    return (
        <aside className=" flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
            <Logo/> 

            <Input.Root>
            <Input.Prefix>
            <Search className="h-5 w-5 text-zinc-500"/>
            </Input.Prefix>
            <Input.Control placeholder="Search"/>
            </Input.Root>
            
            <MainNavigation/>
            <div className="mt-auto flex flex-col gap-6">
                <nav className="space-y-0.5">
                    <Navitem title={"Support"} icon={LifeBuoy}/>
                    <Navitem title={"Settings"} icon={Cog}/>

                </nav>
            
                    <UsedSpaceWidget/>
                <div className="h-px bg-zinc-200"/>
                    <Profile/>
            </div>
        </aside>
    )
}