import { Button } from "@components/button/Button"
import { LogOut } from "lucide-react"


export const Profile = () =>{

    return(
        <div className="grid grid-cols-profile items-center gap-3">
      <img
        src="https://github.com/warleycoutinho.png"
        className="h-10 w-10 rounded-full"
        alt=""
      />
      <div className="flex flex-col truncate">
      <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-100">
          Warley Coutinho
        </span>
        <span className="truncate text-sm text-zinc-500 dark:text-zinc-400">
          warleycoutinho@icloud.com
        </span>
      </div>
      <Button type="button" variant="ghost">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </Button>
    </div>
    )
}