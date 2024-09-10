import Post from "@/components/post";

export default function HomeScreen() {
  return (
    <Post
      dom={{
        contentInsetAdjustmentBehavior: "automatic",
        automaticallyAdjustsScrollIndicatorInsets: true,
      }}
    />
  );
}
