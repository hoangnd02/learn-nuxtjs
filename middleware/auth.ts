import { Context } from "@nuxt/types";
import store from "@/controllers/store";

export default async function (context: Context) {
  if (!store.value.first_time) return;

  console.log("lay me")
  store.value.first_time = false;
  console.log(store.value.first_time)
  try {
  await context.$axios.$get("http://localhost:3000/api/v2/resource/users/me")
    
  } catch (error) {
    return error;
  }
}
