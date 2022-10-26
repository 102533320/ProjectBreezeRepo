import React from "react";
import "../index.css";
import { useEffect, useState } from "react";
import Axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import "../index.css";
import Sidebar from "../components/Sidebar";

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
import { useNavigate } from "react-router-dom";
import {
  PieChart,
  Pie,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  Line,
  BarChart,
  Bar,
  FunnelChart,
  Funnel,
  LabelList,
} from "recharts";

function Dashboard() {
  const [userList, setUserList] = useState([]);
  const navigate = useNavigate();
  //const [maleCount, setMaleCount] = useState(0);
  //const [femaleCount, setFemaleCount] = useState(0);
  //const [activeCount, setActiveCount] = useState(0);
  //const [inActiveCount, setInActiveCount] = useState(0);
  const [vicCount, setVicCount] = useState(0);
  const [nswCount, setNswCount] = useState(0);
  const [waCount, setWaCount] = useState(0);
  const [saCount, setSaCount] = useState(0);
  const [qldCount, setQldCount] = useState(0);
  const [tasCount, setTasCount] = useState(0);
  const [ntCount, setNtCount] = useState(0);

  const getAllData = async () => {
    const { data: userData } = await Axios.get(
      "http://localhost:8443/api/user/"
    );
    const { data: matchDetailsData } = await Axios.get(
      "http://localhost:8443/api/match_details"
    );
    setUserList(userData);
    //setUserList(matchDetailsData);

    setVicCount(
      matchDetailsData.filter((u) => u.location.city === "VIC").length
    );
    setNswCount(
      matchDetailsData.filter((u) => u.location.city === "NSW").length
    );
    setWaCount(matchDetailsData.filter((u) => u.location.city === "WA").length);
    setSaCount(matchDetailsData.filter((u) => u.location.city === "SA").length);
    setQldCount(
      matchDetailsData.filter((u) => u.location.city === "QLD").length
    );
    setTasCount(
      matchDetailsData.filter((u) => u.location.city === "TAS").length
    );
    setNtCount(matchDetailsData.filter((u) => u.location.city === "NT").length);
    //setActiveCount(userData.filter((u) => u.active).length);
    //setInActiveCount(userData.filter((u) => !u.active).length);
  };

  useEffect(() => {
    getAllData();
  }, []);

  const getNewUsersCount = () =>
    userList.filter((u) => {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      return new Date(u.creation_date).getTime() > yesterday.getTime();
    }).length;

  const count = userList.length;
  const activeUsersCount = userList.filter((u) => u.active).length;

  console.log(count);
  console.log({ userList });

  //userList.collection("test").find({}).project({ active: 1 }).toArray();

  return (
    <div>
      <Sidebar />
      <ChakraProvider>
        <Card marginLeft="300px">
          <Heading marginBottom="20px" marginTop="15px">
            Overview
          </Heading>
          <SimpleGrid columns={[1, null, 3]} spacing={1}>
            <FlexboxEdits data={count} title="Total Users" w="225px" />
            <FlexboxEdits
              data={activeUsersCount}
              title="Active Users"
              w="225px"
            />
            <FlexboxEdits
              data={getNewUsersCount()}
              title="New Users"
              w="225px"
            />
          </SimpleGrid>
          <Grid h="450px" templateColumns="repeat(3, 1fr)" marginTop="30px">
            <GridItem
              colSpan={2}
              bg="#F5F5F5"
              w="100%"
              h="75%"
              borderRight="1px solid #DFE0EB"
            >
              <br />
              <h2 id="graphText">Number of Users Per State</h2>
              <BarChart
                width={640}
                height={280}
                data={[
                  {
                    name: "VIC",

                    Value: vicCount,
                    fill: "#a56fe3",
                  },
                  {
                    name: "NSW",

                    Value: nswCount,
                    fill: "#16a4d8",
                  },
                  {
                    name: "WA",

                    Value: waCount,
                    fill: "#60dbe8",
                  },
                  {
                    name: "SA",

                    Value: saCount,
                    fill: "#8bd346",
                  },
                  {
                    name: "QLD",

                    Value: qldCount,
                    fill: "#efdf48",
                  },
                  {
                    name: "TAS",

                    Value: tasCount,
                    fill: "#f9a52c",
                  },
                  {
                    name: "NT",

                    Value: ntCount,
                    fill: "#d64e12",
                  },
                ]}
              >
                <Bar dataKey="Value" /> <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis type="number" domain={[0, 10]} />
                <Tooltip />
              </BarChart>{" "}
            </GridItem>
            <GridItem colSpan={1} w="100%" h="100%">
              <FlexboxEditsTwo
                data={count}
                title="Total Users"
                borderBottom="1px solid #DFE0EB"
              />
              <FlexboxEditsTwo
                data={activeUsersCount}
                title="Active Users"
                borderBottom="1px solid #DFE0EB"
              />
              <FlexboxEditsTwo data={getNewUsersCount()} title="New Users" />
            </GridItem>
          </Grid>
        </Card>
      </ChakraProvider>
    </div>
  );
}

export default Dashboard;
