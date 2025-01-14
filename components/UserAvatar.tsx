import clsx from "clsx";
import Image from "next/image";
import { RiUserFill } from "react-icons/ri";
import useSWR from "swr";

type User = {
  id: string;
  username: string;
  avatar?: string;
};

async function fetchUser() {
  const res = await fetch("https://api.yeecord.com/users/@me");

  return (await res.json()) as User;
}

export default function UserAvatar() {
  const { data: user, isLoading, error } = useSWR("user", fetchUser);

  if (isLoading || error != null) {
    return (
      <button
        className={clsx(
          "rounded-md px-5 py-1 font-bold break-keep",
          "text-white bg-black dark:text-black dark:bg-white"
        )}
      >
        登錄
      </button>
    );
  }

  if (user?.avatar == null) {
    return (
      <div
        className={clsx(
          "rounded-full w-7 h-7 flex flex-col justify-center items-center",
          "bg-blue-400 text-white"
        )}
      >
        <RiUserFill className="text-lg" />
      </div>
    );
  }

  return (
    <Image
      alt="avatar"
      src={`https://cdn.discordapp.com/avatars/${user?.id}/${user?.avatar}`}
      width="26"
      height="26"
      className="rounded-full"
    />
  );
}
