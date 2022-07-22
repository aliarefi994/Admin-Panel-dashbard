import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">"نام برند شما"</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">صفحه مدیریت</p>
          <li>
            <DashboardIcon className="icon" />
            <span>پنل ادمین</span>
          </li>
          <p className="title">لیست</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>کاربران</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>نمونه </span>
            </li>
          </Link>
          <li>
            <CreditCardIcon className="icon" />
            <span>دیگر</span>
          </li>
          <li>
            <LocalShippingIcon className="icon" />
            <span>ارسال محصولات</span>
          </li>
          <p className="title">لینک های کاربردی</p>
          <li>
            <InsertChartIcon className="icon" />
            <span>آمار</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>اعلان</span>
          </li>
          <p className="title">سرویس</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>آب و هوا</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>تست هوش</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>تنظیمات</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>پروفایل</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span>خروج از حساب</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;