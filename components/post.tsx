"use dom";

import "@/global.css";

import Story from "@/components/story.mdx";

import { getCustomComponents } from "@/components/mdx-components";

export default function HomeScreen({}: { dom?: import("expo/dom").DOMProps }) {
  return (
    <div className="p-5 w-full">
      <Story components={getCustomComponents()} />
    </div>
  );
}
