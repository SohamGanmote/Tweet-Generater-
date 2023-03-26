import { useContext, useState } from "react";
import MidBox from "./MidBox";
import { userData } from "./userData";
function InputForm(props) {
  const data = useContext(userData);
  const [profileName, setProfileName] = useState({
    Name: data.userName,
    Tweet: data.userTweet,
    verified: data.isVerified,
  });
  function addtweet(e) {
    e.preventDefault();
    const tweetBoxobj = [
      e.target[0].value,
      e.target[1].value,
      e.target[2].value,
    ];
    if (
      tweetBoxobj[0] === "" ||
      tweetBoxobj[1] === "" ||
      tweetBoxobj[2] === ""
    ) {
      alert("Empty Inputs");
    } else {
      setProfileName({
        Name: tweetBoxobj[0],
        Tweet: tweetBoxobj[1],
        verified: tweetBoxobj[2],
      });
    }
  }
  return (
    <userData.Provider
      value={{
        userName: profileName.Name,
        userTweet: profileName.Tweet,
        isVerified: profileName.verified,
      }}
    >
      <form onSubmit={addtweet}>
        <input type="text" placeholder="Enter Name"></input>
        <br />
        <textarea type="text" placeholder="Enter Tweet" rows="4" cols="50" />
        <br />
        <label> Verified Account </label>
        <select>
          <option value="1"> Yes </option>
          <option value="0"> No </option>
        </select>
        <br />
        <button>Add Tweet</button>
      </form>
      <MidBox />
    </userData.Provider>
  );
}
export default InputForm;
