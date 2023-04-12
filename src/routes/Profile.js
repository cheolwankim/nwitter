import { authService, dbService } from "fbase";
import { useEffect } from "react";

const Profile = ({ userObj }) => {
  const onLogOutClick = () => {
    authService.signOut();
  };

  const getMyNweets = async () => {
    const nweets = await dbService
      .collection("nweets")
      .where("creatorId", "==", userObj.uid)
      .orderBy("createAt")
      .get();
    //where - 필터링함
    console.log(nweets.docs.map((doc) => doc.data()));

    // firestore noSQL 기반이라 에러나올떄 있음
  };

  useEffect(() => {
    //Nweet function 호출
    getMyNweets();
  });
  return (
    <>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  );
};

export default Profile;
