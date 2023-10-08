const MeetupDetail = (props) => {
  return (
    <>
      <h1>{props.title}</h1>
      <p>{props.address}</p>
      <img src={props.image} alt={props.title} />
    </>
  );
};

export default MeetupDetail;
