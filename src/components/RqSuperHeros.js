import React from "react";
import CallApi from "../callApi";

function RqSuperHeros() {
  const { isError, isLoading, data, error, refetch } = CallApi(
    "get-super-heros",
    {
      method: "get",
      url: "http://localhost:4000/superHeros",
      params: {
        search: "key",
      },
    },
    {
      cacheTime: "10000",
      retry: 1,
      refetchOnWindowFocus: false,
      // refetchInterval:20000,
      enabled: false,
    }
  );
  console.log(isLoading);
  if (!isLoading) {
    return (
      <div>
        <button onClick={refetch}>fetch heros</button>

        {data?.data.map((hero) => {
          return <div key={hero.id}>{hero.name}</div>;
        })}
      </div>
    );
  }
  if (isError) {
    return <h1>{error}</h1>;
  }
}

export default RqSuperHeros;
