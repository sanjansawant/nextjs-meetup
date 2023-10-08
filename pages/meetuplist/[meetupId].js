import MeetupDetail from "../../components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";
const dummyMeetups = [
  {
    id: 1,
    image:
      "https://e1.pxfuel.com/desktop-wallpaper/312/712/desktop-wallpaper-shahrukh-khan-best-shahrukh-khan-mobile.jpg",
    title: "srk",
    address: "random 1",
  },
  {
    id: 2,
    image:
      "https://e0.pxfuel.com/wallpapers/55/976/desktop-wallpaper-shahrukh-khan-bollywood-indian-cinema-srk.jpg",
    title: "srk 2",
    address: "random 2",
  },
];
const MeetupDetails = (props) => {
  // const { query } = useRouter();
  // console.log(query.meetupid);
  // const item = dummyMeetups[query.meetupid];

  // console.log("item is here");
  // console.log(item);
  const item = props.meetup;
  return (
    <>
      <Head>
        <title>{props.meetup.title}</title>
        <meta
          name="description"
          content={`Content displayed for ${props.meetup.title}`}
        />
      </Head>
      <MeetupDetail {...item} />
    </>
  );
};

export const getStaticPaths = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://niranjan:Stevens509097@cluster0.zd1lv6q.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const collection = db.collection("meetups");
  const meetups = await collection.find({}, { _id: 1 }).toArray();
  console.log("getStaticPaths");
  console.log(meetups);
  client.close();
  return {
    fallback: false,
    // paths: [
    //   {
    //     params: {
    //       meetupId: "0",
    //     },
    //   },
    //   {
    //     params: {
    //       meetupId: "1",
    //     },
    //   },
    // ],
    paths: meetups.map((meetup) => {
      return {
        params: { meetupId: meetup._id.toString() },
      };
    }),
  };
};

export const getStaticProps = async (context) => {
  console.log("context.params");
  console.log(context.params);
  const id = context.params.meetupId;

  const client = await MongoClient.connect(
    "mongodb+srv://niranjan:Stevens509097@cluster0.zd1lv6q.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const collection = db.collection("meetups");
  const meetups = await collection.findOne({ _id: new ObjectId(id) });
  client.close();
  console.log("getStaticProps");
  console.log(meetups);
  return {
    props: {
      meetup: {
        id: meetups._id.toString(),
        address: meetups.address,
        image: meetups.image,
        description: meetups.description,
      },
    },
  };
};

export default MeetupDetails;
