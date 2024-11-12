import axios from "axios";

export const ImageUpload = async (file) => {
  const form_data = new FormData();
  form_data.append("file", file);
  form_data.append("upload_preset", "serveraction");
  const res = await axios.post(
    `https://api.cloudinary.com/v1_1/dj8foozva/image/upload`,
    form_data
  );
  return res.data;
};
