import "./MidBox.css";
import { userData } from "./userData";
import React, { useContext } from "react";
import MyImage from "./footer.png";
function MidBox() {
  const data = useContext(userData);
  function randNum() {
    const num = Math.ceil(Math.random() * 898);
    return num;
  }
  let verifiedMark;
  if (data.isVerified === "1") {
    verifiedMark = (
      <img
        // src="https://png.pngitem.com/pimgs/s/454-4545381_promotion-stars-hd-png-download.png"
        src="https://www.pngitem.com/pimgs/m/3-38867_twitter-verified-badge-twitter-verified-icon-svg-hd.png"
        alt="verf"
        width="30px"
        height="30px"
      />
    );
  } else {
    verifiedMark = <></>;
  }
  let tweet = data.userTweet;
  const arr = tweet.split(" ");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].charAt(0) === "#") {
      let temp = arr[i];
      arr[i] = <span style={{ color: "#5f9df7" }}>{temp} </span>;
    } else {
      arr[i] = arr[i] + " ";
    }
  }
  return (
    <div className="TweetBox">
      <div className="profilePic-Name">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${randNum()}.png`}
          alt="pokemon"
          className="Profile-pic"
          style={{ backgroundColor: "#BCCEF8" }}
        />
        <div>
          <h2 className="Profile-name">{data.userName}</h2>
          <p className="Profile-name">
            @{data.userName.replace(" ", "_").toLowerCase()}
          </p>
        </div>
        {verifiedMark}
      </div>
      <p className="tweet">{arr}</p>
      <img
        src={MyImage}
        alt="horse"
        width="500px"
        style={{ marginLeft: "-20px" }}
      />
    </div>
  );
}
export default MidBox;
