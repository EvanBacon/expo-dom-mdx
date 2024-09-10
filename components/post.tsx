"use dom";

import "@/global.css";

import Story from "@/components/story.mdx";

import CustomComponents from "@/components/mdx-components";

export default function HomeScreen({}: { dom?: import("expo/dom").DOMProps }) {
  return (
    <div className="p-5 w-full">
      <CustomComponents>
        <Story />
      </CustomComponents>
    </div>
  );
}
