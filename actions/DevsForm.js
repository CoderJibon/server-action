"use server";

import { ImageUpload } from "@/utils/imageUpload.js";
import Devs from "@/models/Devs.js";
import { mongoDBConnection } from "@/config/mongoDBConnect.js";
import { revalidatePath } from "next/cache.js";

export const createForm = async (formData) => {
  await mongoDBConnection();
  const name = formData.get("name");
  const email = formData.get("email");
  const cell = formData.get("cell");
  const location = formData.get("location");

  const fileData = await ImageUpload(formData.get("photo"));

  await Devs.create({
    name,
    email,
    cell,
    location,
    photo: fileData.secure_url,
  });
  revalidatePath("/");
};
export const getAllData = async () => {
  await mongoDBConnection();

  const data = await Devs.find();
  return data;
};
export const deleteData = async (id) => {
  await mongoDBConnection();

  console.log(id);

  const data = await Devs.findByIdAndDelete({ _id: id });
  revalidatePath("/");
};
