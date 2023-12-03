import * as Icons from "react-icons/vsc"
import { useDispatch } from "react-redux"
import { NavLink, matchPath, useLocation } from "react-router-dom"
import './SidebarLink.css'
import { resetJobState } from "../../../slices/jobSlice"

export default function SidebarLink({ link, iconName }) {
  const Icon = Icons[iconName]
  const location = useLocation()
  const dispatch = useDispatch()

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname)
  }

  return (
    <NavLink
      to={link.path}
      onClick={() => dispatch(resetJobState())}
      className={`relative px-[2vw] py-[1.1vw] text-[2vw] max-text-size font-medium ${
        matchRoute(link.path)
          ? "bg-blueMain text-white"
          : "bg-opacity-0 text-black"
      } transition-all duration-200`}
    >
      <span
        className={`absolute left-0 top-0 h-full w-[0.15rem] bg-black ${
          matchRoute(link.path) ? "opacity-100" : "opacity-0"
        }`}
      ></span>
      <div className="flex items-center gap-x-2">
        {/* Icon Goes Here */}
        <Icon className="text-[2vw] max-text-size" />
        <span>{link.name}</span>
      </div>
    </NavLink>
  )
}