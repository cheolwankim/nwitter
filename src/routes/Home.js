import Nweet from "components/Nweet";
import { dbService } from "fbase";
import { useState, useEffect } from "react";

const Home = ({ userObj }) => {
  const [nweet, setNweet] = useState("");
  const [nweets, setNweets] = useState([]);

  useEffect(() => {
    dbService.collection("nweets").onSnapshot((snapshot) => {
      const nweetArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNweets(nweetArray);
    });
  }, []);

  const onSubmit = async (event) => {
    //submit할때마다 doc 생성하기
    event.preventDefault();
    await dbService.collection("nweets").add({
      //add data
      text: nweet,
      createdAt: Date.now(),
      creatorId: userObj.uid,
    });
    setNweet("");
  };
  const onChange = (event) => {
    const {
      target: { value }, //event.target.value 추출
    } = event;
    setNweet(value);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={nweet}
          onChange={onChange}
          placeholder="What's on Your Mind?"
          maxLength={120}
        />
        <input type="submit" value="Nweet" />
      </form>
      <div>
        {nweets.map((nweet) => (
            <Nweet
            key={nweet.id}
            nweetObj={nweet}
            isOwner={nweet.creatorId ===userObj.uid}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
