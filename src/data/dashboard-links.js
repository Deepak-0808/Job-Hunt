import { ACCOUNT_TYPE } from "../utils/constants";

export const sidebarLinks = [
  {
    id: 1,
    name: "My Profile",
    path: "/dashboard/my-profile",
    icon: "VscAccount",
  },
  {
    id: 2,
    name: "Dashboard",
    path: "/dashboard/admin",
    type: ACCOUNT_TYPE.ADMIN,
    icon: "VscDashboard",
  },
  {
    id: 3,
    name: "My Jobs",
    path: "/dashboard/my-courses",
    type: ACCOUNT_TYPE.ADMIN,
    icon: "VscVm",
  },
  {
    id: 4,
    name: "Add Job",
    path: "/dashboard/add-course",
    type: ACCOUNT_TYPE.ADMIN,
    icon: "VscAdd",
  },
  {
    id: 5,
    name: "Create Category",
    path: "/dashboard/create-category",
    type: ACCOUNT_TYPE.ADMIN,
    icon: "VscAdd",
  },
  
  // {
  //   id: 6,
  //   name: "Applied History",
  //   path: "/dashboard/applied-history",
  //   type: ACCOUNT_TYPE.USER,
  //   icon: "VscHistory",
  // },
  // {
  //   id: 7,
  //   name: "Saved Job",
  //   path: "/dashboard/saved-job",
  //   type: ACCOUNT_TYPE.USER,
  //   icon: "VscSave",
  // },
  
  
];
