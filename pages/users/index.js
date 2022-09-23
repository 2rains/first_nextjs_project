import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout";

export default function Page() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data));
  }, []);

  console.log(users[0]);

  return (
    <Layout>
      <div>Users Page</div>
      {0 === users.length ? <div>로딩중...</div> : null}
      {/* 로딩화면! */}
      {users?.map((user) => (
        // x? -> x가 없으면 뒤에는 실행x
        <div key={user.id} className="border m-5 p-3">
          <div className="text-2xl font-bold">{user.username}</div>
          <div>{user.name}</div>
          <div className="text-gray-600">{user.email}</div>
          <a href={`https://${user.website}`}>{user.website}</a>
        </div>
      ))}
    </Layout>
  );
}
