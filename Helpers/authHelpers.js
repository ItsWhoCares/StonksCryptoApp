import { router } from "expo-router";
import { supabase } from "./supabase";
export const handleLogin = async ({ email, pass, setIsError }) => {
  console.log(email, pass);

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password: pass,
  });
  if (error) {
    setIsError(error);
  }
  return data;
};

export const handleSignUp = async ({
  email,
  pass,
  setIsError,
  setToToast,
  setMsg,
}) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password: pass,
  });
  setToToast(true);
  setMsg("Confirmation mail sent, Please confirm email and log in");
  return;
  if (error) {
    console.log(error);
    setIsError(error);
    return;
  }

  // if (data.session == null) {
  //   if (pass.length < 6)
  //     setIsError({ message: "Password must contain atleast 6 characters" });
  // }
  console.log(data, JSON.stringify(error));
  // if (data.user != null) {
  //   setIsError({ message: "Confirm email" });
  // }
  if (data.user) {
    setToToast(true);
    setMsg("Confirmation email sent");
  }
  return data;
};
