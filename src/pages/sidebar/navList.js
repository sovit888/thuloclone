import { HomeOutlined, SettingsOutlined } from "@material-ui/icons";

import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import StorageIcon from "@material-ui/icons/Storage";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import GroupIcon from "@material-ui/icons/Group";
import HouseIcon from "@material-ui/icons/House";
import ReportIcon from "@material-ui/icons/Report";
const navList = [
  { label: "Sales", icon: <HouseIcon /> },
  { label: "Purchases", icon: <SettingsOutlined /> },
  { label: "Report", icon: <ReportIcon /> },
  { label: "History", icon: <HomeOutlined /> },
  { label: "User", icon: <GroupIcon /> },
  { label: "Business", icon: <BusinessCenterIcon /> },
  { label: "Fiscal Year", icon: <HomeOutlined /> },
  { label: "Backup ", icon: <StorageIcon /> },
  { label: "Guide", icon: <PlayCircleFilledIcon /> },
];
export default navList;
