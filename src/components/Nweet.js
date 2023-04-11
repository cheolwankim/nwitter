const Nweet = ({ nweetObj, isOwner }) => (
  <div>
    <h4>{nweetObj.text}</h4>
    {isOwner && ( //owner일때 볼수있게
      <>
        <button>Delete Nweet</button>
        <button>Edit Nweet</button>
      </>
    )}
  </div>
);
export default Nweet;
