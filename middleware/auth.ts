import { Context } from "@nuxt/types";
import store from "@/controllers/store";

export default async function (context: Context) {
  if (store.value.user !== "") return;

  console.log("lay me")
  console.log(store.value.user)
  try {
  await context.$axios.$get("http://localhost:3000/api/v2/resource/users/me")
    
  } catch (error) {
    return error;
  }
}
