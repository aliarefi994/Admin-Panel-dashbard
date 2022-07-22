import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">درآمد</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={65} text={"65%"} strokeWidth={5} />
        </div>
        <p className="title">کل فروش امروز</p>
        <p className="amount">93.2kR </p>
        <p className="desc">
          امکان دسترسی به آخرین تراکنش امان پذیر است.
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">هدف</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize="small"/>
              <div className="resultAmount">12.4kR</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle"> هفته گذشته</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">12.4kR</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">ماه گذشته</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">12.4kR</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;