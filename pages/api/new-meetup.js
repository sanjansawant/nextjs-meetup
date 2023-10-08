// /api/meetup

import { MongoClient } from "mongodb";
const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    const { title, image, address, description } = data;
    const client = await MongoClient.connect(
      "mongodb+srv://niranjan:Stevens509097@cluster0.zd1lv6q.mongodb.net/meetups?retryWrites=true&w=majority"
    );

    const db = client.db();
    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);
    console.log(result);
    setTimeout(() => {
      client.close();
    }, 1500);
    res.status(201).json({ message: "meetup inserted" });
  }
};

export default handler;
