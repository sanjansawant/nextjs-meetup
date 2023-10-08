import Link from "next/link";
import MeetupList from "../../components/meetups/MeetupList";
import Head from "next/head";
import { MongoClient } from "mongodb";
// const dummyMeetups = [
//   {
//     id: 0,
//     image:
//       "https://e1.pxfuel.com/desktop-wallpaper/312/712/desktop-wallpaper-shahrukh-khan-best-shahrukh-khan-mobile.jpg",
//     title: "srk",
//     address: "random 1",
//   },
//   {
//     id: 1,
//     image:
//       "https://e0.pxfuel.com/wallpapers/55/976/desktop-wallpaper-shahrukh-khan-bollywood-indian-cinema-srk.jpg",
//     title: "srk 2",
//     address: "random 2",
//   },
// ];
const MeetupDetails = (props) => {
  // const [loadedMeetups, setLoadedMeetups] = useState([]);

  // useEffect(() => {
  //   setLoadedMeetups(dummyMeetups);
  // }, []);

  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active react meetups!"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
      <Link href="..">Go back</Link>
    </>
  );
};

export const getStaticProps = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://niranjan:Stevens509097@cluster0.zd1lv6q.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const collection = db.collection("meetups");
  const meetups = await collection.find().toArray();
  client.close();
  return {
    props: {
      meetups: meetups.map((meetup) => {
        return {
          title: meetup.title,
          address: meetup.address,
          id: meetup._id.toString(),
          image: meetup.image,
        };
      }),
    },
    revalidate: 10,
  };
};

export default MeetupDetails;
