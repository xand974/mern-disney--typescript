import "./home.scss";
import FeaturedInfos from "components/FeaturedInfos/FeatureInfos";
import Chart from "components/Chart/Chart";
import SmWidget from "components/SmWidget/SmWidget";
import LgWidget from "components/LgWidget/LgWidget";
import { useEffect, useMemo, useState } from "react";
import { privateRequest } from "api";

export default function Home() {
  const [userStats, setUserStats] = useState([]);
  const MONTH = useMemo(
    () => [
      "Jav",
      "Feb",
      "Mar",
      "Apr",
      "Mai",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const fetchUserStats = async () => {
      try {
        const res = await privateRequest.get("/user/stats");
        const statsList = res.data.sort((a, b) => {
          return a._id - b._id;
        });
        statsList.map((item) =>
          setUserStats((prev) => {
            return [
              ...prev,
              { name: MONTH[item._id - 1], "New User": item.total },
            ];
          })
        );
      } catch (err) {
        console.log(err);
      }
    };
    fetchUserStats();
  }, [MONTH]);

  return (
    <div className="home">
      <FeaturedInfos />
      <Chart data={userStats} grid title="User Statistics" dataKey="New User" />
      <div className="widgets">
        <SmWidget />
        <LgWidget />
      </div>
    </div>
  );
}
