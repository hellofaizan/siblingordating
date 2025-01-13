import ProfileCard from "@/components/card";
import data from "../../data/profile.json";

export default function Home() {
  return (
    <div className="flex items-center pt-[80px] pb-8 px-2 w-full justify-center ">
      <div className="max-w-[38rem] w-full h-full flex">
        <ProfileCard data={data} />
      </div>
    </div>
  );
}
