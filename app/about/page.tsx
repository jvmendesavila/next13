import Image from "next/image";

type User = {
  bio: string;
  name: string;
  company: string;
  avatar_url: string;
};

async function getData(): Promise<User> {
  const res = await fetch("https://api.github.com/users/jvmendesavila");
  return res.json();
}

async function Page() {
  const user = await getData();
  return (
    <div>
      <h2 className="font-medium mb-8 text-xl">About user</h2>
      <div className="flex items-center">
        <Image
          width="120"
          height="120"
          alt="User avatar"
          className="rounded-full"
          src={user.avatar_url}
        />
        <div className="flex flex-col ml-4">
          <h3 className="font-medium text-lg">
            {user.name} -{" "}
            <span className="text-sky-600 text-base">{user.company}</span>
          </h3>
          <p className="text-gray-600">{user.bio}</p>
        </div>
      </div>
    </div>
  );
}

export default Page;
