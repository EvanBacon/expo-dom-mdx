"use dom";

import "@/global.css";

import Story from "@/components/story.mdx";

import CustomComponents from "@/components/mdx-components";

export default function HomeScreen({}: { dom?: import("expo/dom").DOMProps }) {
  return (
    <div className="p-2">
      <CustomComponents>
        <Story />
      </CustomComponents>
    </div>
  );
}
