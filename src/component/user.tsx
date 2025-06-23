import { IUserStore } from "@/lib/types/data";
import Link from "next/link";

type UserProps = IUserStore & {
  detailStatus?: boolean;
};

export default function User({ detailStatus = true, ...props }: UserProps) {
  
  if (!props.id) {
    return null;
  }

  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Users</h1>
        <div className="grid grid-cols-3 gap-4">
          <div key={props.id} className="border p-4 rounded-lg w-60">
            <h2 className="text-xl font-semibold">
              {props.name.firstname} {props.name.lastname}
            </h2>
            <p className="text-gray-600">Username: {props.username}</p>
            <p className="text-gray-600">{props.email}</p>
            <p className="text-gray-600 mb-4">{props.password}</p>
            {detailStatus && <Link href={`/users/${props.id}`}>details</Link>}
          </div>
        </div>
      </div>
    </div>
  );
}
