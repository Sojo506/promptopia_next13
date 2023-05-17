import { connectToDB } from "@utils/db";
import Prompt from "@models/prompt";

export const GET = async (res, { params }) => {
  console.log("🚀 ~ file: route.js:5 ~ GET ~ params:", params)
  try {
    await connectToDB();

    const prompts = await Prompt.find({
      creator: params.id,
    }).populate("creator");
    console.log("🚀 ~ file: route.js:12 ~ GET ~ prompts:", prompts)

    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};
