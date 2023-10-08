import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";
import Head from "next/head";
const NewMeetup = () => {
  const router = useRouter();
  const onAddMeetup = async (data) => {
    console.log(data);
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const res = await response.json();
    console.log(res);
    router.push("/meetuplist");
  };

  return (
    <>
      <Head>
        <title>React Meetup Form</title>
        <meta name="description" content="Adding a meetup data" />
      </Head>
      <NewMeetupForm onAddMeetup={onAddMeetup} />
    </>
  );
};

export default NewMeetup;
