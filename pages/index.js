import Link from "next/link";
import Head from "next/head";
const HomePage = () => {
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active react meetups!"
        />
      </Head>
      <h1>
        Welcome To homepage
        <p>
          <Link href="/new-meetup">Create a new Meetup</Link>
        </p>
        <p>
          <Link href="/meetuplist">List all meetups</Link>
        </p>
      </h1>
    </>
  );
};

export default HomePage;
