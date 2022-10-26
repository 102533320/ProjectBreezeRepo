import React from "react";
import "../index.css";
import { useEffect, useState } from "react";
import Axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import "../index.css";

import {
  ChakraProvider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";

import Card from "../components/Card.js";
import MyChart from "../components/MyChart";
import { FlexboxEdits } from "../components/FlexboxEdits";
import { FlexboxEditsTwo } from "../components/FlexboxEditsTwo";
import {
  LineChart,
  CartesianGrid,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
  FunnelChart,
  Funnel,
  LabelList,
  RadialBar,
  RadialBarChart,
} from "recharts";
import Sidebar from "../components/Sidebar";
import { PieChart, Pie, Legend } from "recharts";

function Dashboard() {
  const [userList, setUserList] = useState([]);
  const [maleCount, setMaleCount] = useState(0);
  const [femaleCount, setFemaleCount] = useState(0);
  const [otherCount, setOtherCount] = useState(0);

  const [introvertCount, setIntrovertCount] = useState(0);
  const [extrovertCount, setExtrovertCount] = useState(0);

  const [maleFPrefCount, setMaleFPrefCount] = useState(0);
  const [maleMPrefCount, setMaleMPrefCount] = useState(0);
  const [femaleMPrefCount, setFemaleMPrefCount] = useState(0);
  const [femaleFPrefCount, setFemaleFPrefCount] = useState(0);

  const [youngerPrefCount, setYoungerPrefCount] = useState(0);
  const [youngPrefCount, setYoungPrefCount] = useState(0);
  const [oldPrefCount, setOldPrefCount] = useState(0);
  const [olderPrefCount, setOlderPrefCount] = useState(0);
  const [oldestPrefCount, setOldestPrefCount] = useState(0);
  const [gpPrefCount, setGpPrefCount] = useState(0);

  const [shoppingCount, setShoppingCount] = useState(0);
  const [photoCount, setPhotoCount] = useState(0);
  const [cookingCount, setCookingCount] = useState(0);
  const [yogaCount, setYogaCount] = useState(0);
  const [karaokeCount, setKaraokeCount] = useState(0);
  const [runningCount, setRunningCount] = useState(0);
  const [swimCount, setSwimCount] = useState(0);
  const [tennisCount, setTennisCount] = useState(0);
  const [artCount, setArtCount] = useState(0);
  const [musicCount, setMusicCount] = useState(0);
  const [gamesCount, setGamesCount] = useState(0);

  const getAllData = async () => {
    const { data: userData } = await Axios.get(
      "http://localhost:8443/api/user"
    );
    const { data: matchDetailsData } = await Axios.get(
      "http://localhost:8443/api/match_details"
    );
    setUserList(matchDetailsData);
    //setUserList(userData);

    setMaleCount(matchDetailsData.filter((u) => u.gender === "male").length);
    setFemaleCount(
      matchDetailsData.filter((u) => u.gender === "female").length
    );
    setOtherCount(matchDetailsData.filter((u) => u.gender === "other").length);
    setIntrovertCount(
      matchDetailsData.filter((u) => u.personality === "introvert").length
    );
    setExtrovertCount(
      matchDetailsData.filter((u) => u.personality === "extrovert").length
    );
    setMaleFPrefCount(
      matchDetailsData.filter(
        (u) => u.gender === "male" && u.preference === "female"
      ).length
    );

    setMaleMPrefCount(
      matchDetailsData.filter(
        (u) => u.gender === "male" && u.preference === "male"
      ).length
    );
    setFemaleMPrefCount(
      matchDetailsData.filter(
        (u) => u.gender === "female" && u.preference === "male"
      ).length
    );
    setFemaleFPrefCount(
      matchDetailsData.filter(
        (u) => u.gender === "female" && u.preference === "female"
      ).length
    );

    setYoungerPrefCount(
      matchDetailsData.filter(
        (u) =>
          u.age_preference.from === 18 ||
          u.age_preference.from === 19 ||
          u.age_preference.from === 20 ||
          u.age_preference.from === 21 ||
          u.age_preference.from === 22 ||
          u.age_preference.from === 23 ||
          u.age_preference.to === 24
      ).length
    );

    setYoungPrefCount(
      matchDetailsData.filter(
        (u) =>
          u.age_preference.from === 25 ||
          u.age_preference.from === 26 ||
          u.age_preference.from === 27 ||
          u.age_preference.from === 28 ||
          u.age_preference.to === 29
      ).length
    );

    setOldPrefCount(
      matchDetailsData.filter(
        (u) =>
          u.age_preference.from === 30 ||
          u.age_preference.from === 31 ||
          u.age_preference.from === 32 ||
          u.age_preference.from === 33 ||
          u.age_preference.to === 34
      ).length
    );

    setOlderPrefCount(
      matchDetailsData.filter(
        (u) =>
          u.age_preference.from === 35 ||
          u.age_preference.from === 36 ||
          u.age_preference.from === 37 ||
          u.age_preference.from === 38 ||
          u.age_preference.to === 39
      ).length
    );

    setOldestPrefCount(
      matchDetailsData.filter(
        (u) =>
          u.age_preference.from === 40 ||
          u.age_preference.from === 41 ||
          u.age_preference.from === 42 ||
          u.age_preference.from === 43 ||
          u.age_preference.from === 44 ||
          u.age_preference.from === 45 ||
          u.age_preference.from === 46 ||
          u.age_preference.from === 47 ||
          u.age_preference.from === 48 ||
          u.age_preference.to === 49
      ).length
    );

    setGpPrefCount(
      matchDetailsData.filter(
        (u) =>
          u.age_preference.from === 50 ||
          u.age_preference.from === 51 ||
          u.age_preference.from === 52 ||
          u.age_preference.from === 53 ||
          u.age_preference.from === 54 ||
          u.age_preference.from === 55 ||
          u.age_preference.from === 56 ||
          u.age_preference.from === 57 ||
          u.age_preference.from === 58 ||
          u.age_preference.from === 59 ||
          u.age_preference.to === 60
      ).length
    );

    setShoppingCount(
      matchDetailsData.filter((u) =>
        u.interests.find((interest) => interest === "Shopping")
      ).length
    );

    setPhotoCount(
      matchDetailsData.filter((u) =>
        u.interests.find((interest) => interest === "Photography")
      ).length
    );

    setCookingCount(
      matchDetailsData.filter((u) =>
        u.interests.find((interest) => interest === "Cooking")
      ).length
    );

    setYogaCount(
      matchDetailsData.filter((u) =>
        u.interests.find((interest) => interest === "Yoga")
      ).length
    );

    setKaraokeCount(
      matchDetailsData.filter((u) =>
        u.interests.find((interest) => interest === "Karaoke")
      ).length
    );

    setRunningCount(
      matchDetailsData.filter((u) =>
        u.interests.find((interest) => interest === "Running")
      ).length
    );

    setSwimCount(
      matchDetailsData.filter((u) =>
        u.interests.find((interest) => interest === "Swimming")
      ).length
    );

    setTennisCount(
      matchDetailsData.filter((u) =>
        u.interests.find((interest) => interest === "Tennis")
      ).length
    );

    setArtCount(
      matchDetailsData.filter((u) =>
        u.interests.find((interest) => interest === "Art")
      ).length
    );

    setMusicCount(
      matchDetailsData.filter((u) =>
        u.interests.find((interest) => interest === "Music")
      ).length
    );

    setGamesCount(
      matchDetailsData.filter((u) =>
        u.interests.find((interest) => interest === "Video Games")
      ).length
    );
  };

  useEffect(() => {
    getAllData();
  }, []);

  const count = userList.length;
  console.log(count);

  return (
    <div>
      <Sidebar />
      <ChakraProvider>
        <Card marginLeft="280px">
          <Heading marginBottom="20px" marginTop="15px">
            Analytics
          </Heading>

          <SimpleGrid columns={[1, 2]} spacing={440}>
            <FlexboxEdits h="360px" w="740px">
              <h2 id="graphText">Gender Preferences of Male/Female Users</h2>
              <BarChart
                width={550}
                height={300}
                data={[
                  {
                    name: "M to F ",
                    extraName: "Male prefer Female",
                    Value: maleFPrefCount,
                    fill: "#00b159",
                  },
                  {
                    name: "M to M",
                    extraName: "Male prefer Male",
                    Value: maleMPrefCount,
                    fill: "#9fdf81",
                  },
                  {
                    name: "F to M",
                    extraName: "Female prefer Male",
                    Value: femaleMPrefCount,
                    fill: "#2aabd4",
                  },
                  {
                    name: "F to F",
                    extraName: "Female prefer Female",
                    Value: femaleFPrefCount,
                    fill: "#3b7dd8",
                  },
                ]}
              >
                <Bar dataKey="Value" /> <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis type="number" domain={[0, 10]} />
                <Tooltip />
              </BarChart>{" "}
            </FlexboxEdits>
            <FlexboxEdits w="250px">
              <h2 id="graphText">User Interests (Hover)</h2>
              <FunnelChart
                width={250}
                height={250}
                margin={{ top: -25, left: 20, right: 15, bottom: 40 }}
              >
                <Tooltip />
                <Funnel
                  dataKey="value"
                  data={[
                    {
                      name: "Karaoke",
                      value: karaokeCount,
                      fill: "#FF007F",
                    },
                    {
                      name: "Tennis",
                      value: tennisCount,
                      fill: "#f978aa",
                    },
                    {
                      name: "Yoga",
                      value: yogaCount,
                      fill: "#aa46be",
                    },
                    {
                      name: "Cooking",
                      value: cookingCount,
                      fill: "#28b4c8",
                    },
                    {
                      name: "Shopping",
                      value: shoppingCount,
                      fill: "#2d73f5",
                    },
                    {
                      name: "Running",
                      value: runningCount,
                      fill: "#1b4887",
                    },
                    {
                      name: "Swimming",
                      value: swimCount,
                      fill: "#22924f",
                    },
                    {
                      name: "Art",
                      value: artCount,
                      fill: "#78d237 ",
                    },

                    {
                      name: "Music",
                      value: musicCount,
                      fill: "#F7AD19",
                    },
                    {
                      name: "Photography",
                      value: photoCount,
                      fill: "#FF983B",
                    },
                    {
                      name: "Gaming",
                      value: gamesCount,
                      fill: "#ec4c28",
                    },
                  ]}
                  isAnimationActive
                >
                  <LabelList
                    position="right"
                    fill="#000"
                    stroke="none"
                    dataKey="name"
                  />
                </Funnel>
              </FunnelChart>
            </FlexboxEdits>
          </SimpleGrid>

          <SimpleGrid
            columns={[1, null, 3]}
            spacing={260}
            marginTop="10px"
            marginBottom="30px"
          >
            <FlexboxEdits h="273px" w="430px">
              <h2 id="graphText">User Age Groups</h2>
              <RadialBarChart
                width={450}
                height={280}
                innerRadius="10%"
                outerRadius="80%"
                data={[
                  {
                    name: "18 to 24",
                    Value: youngerPrefCount,
                    fill: "#ee4035",
                  },
                  {
                    name: "25 to 29",
                    Value: youngPrefCount,
                    fill: "#f37736",
                  },
                  {
                    name: "30 to 34",
                    Value: oldPrefCount,
                    fill: " #ffcc5c",
                  },
                  {
                    name: "35 to 39",
                    Value: olderPrefCount,
                    fill: "#7bc043",
                  },
                  {
                    name: "40 to 49",
                    Value: oldestPrefCount,
                    fill: "#6497b1",
                  },
                  {
                    name: "50 +",
                    Value: gpPrefCount,
                    fill: "#0392cf",
                  },
                ]}
                startAngle={180}
                endAngle={0}
              >
                <RadialBar
                  minAngle={15}
                  label={{ fill: "#666", position: "insideStart" }}
                  background
                  clockWise={true}
                  dataKey="Value"
                />
                <Legend
                  iconSize={10}
                  width={120}
                  height={240}
                  layout="vertical"
                  verticalAlign="middle"
                  align="left"
                />
                <Tooltip />
              </RadialBarChart>
            </FlexboxEdits>
            <FlexboxEdits w="270px">
              <h2 id="graphText">Gender of Users</h2>
              <PieChart width={225} height={185}>
                <Legend
                  wrapperStyle={{ top: 15, left: -35 }}
                  layout="vertical"
                  verticalAlign="left"
                  align="left"
                />
                <Pie
                  data={[
                    {
                      name: "Male",
                      Value: maleCount,
                      fill: "#63ace5",
                    },
                    {
                      name: "Female",
                      Value: femaleCount,
                      fill: "#ff77aa",
                    },
                    {
                      name: "Other",
                      Value: otherCount,
                      fill: "#536872",
                    },
                  ]}
                  dataKey="Value"
                  nameKey="name"
                  cx="20%"
                  cy="55%"
                  outerRadius={50}
                  label
                />{" "}
                <Tooltip />
              </PieChart>{" "}
            </FlexboxEdits>
            <FlexboxEdits w="280px" marginLeft="-160px">
              <h2 id="graphText">User Personality</h2>
              <PieChart width={225} height={185}>
                <Legend
                  wrapperStyle={{ top: 15, left: -35 }}
                  layout="vertical"
                  verticalAlign="left"
                  align="left"
                />
                <Pie
                  data={[
                    {
                      name: "Introvert",
                      Value: introvertCount,
                      fill: "#3c2f2f",
                    },
                    {
                      name: "Extrovert",
                      Value: extrovertCount,
                      fill: "#be9b7b",
                    },
                  ]}
                  dataKey="Value"
                  nameKey="name"
                  cx="20%"
                  cy="55%"
                  outerRadius={50}
                  label
                />{" "}
                <Tooltip />
              </PieChart>{" "}
            </FlexboxEdits>
          </SimpleGrid>
        </Card>
      </ChakraProvider>
    </div>
  );
}

export default Dashboard;
