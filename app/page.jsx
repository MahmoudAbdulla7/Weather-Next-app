"use client"
import Image from "next/image";
import Weather from "./weather/page";
import { Provider } from "react-redux";
import store from "./redux/store/store";

export default function Home() {
  return (
    <Provider store={store}>
      <Weather />
    </Provider>
  );
}
