import { useEffect, useState, useParams } from "react";
import axios from "axios";
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate, createSearchParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { ChakraProvider, Heading } from "@chakra-ui/react";

function Users() {
  const navigate = useNavigate();

  const [userList, setUserList] = useState([]);
  const [finalClickInfo, setFinalClickInfo] = useState(null);

  const handleOnCellClick = (params) => {
    const currentRow = params.row;
    const options = {
      pathname: "/userinfo",
      search: `?${createSearchParams(currentRow)}`,
    };
    navigate(options, { replace: true });
  };

  useEffect(() => {
    axios.get("http://localhost:8443/api/user").then((response) => {
      setUserList(response.data);
    });
  });

  const columns = [
    {
      field: "first_name",
      headerName: "first name",
      width: 100,
    },
    {
      field: "last_name",
      headerName: "last name",
    },
    {
      field: "email",
      headerName: "email",
      width: 250,
    },
    {
      field: "creation_date",
      headerName: "Creation Date",
      width: 250,
    },
  ];

  return (
    <div>
      <Sidebar />

      <div
        style={{
          Display: "flex",
          width: "61.3%",
          marginTop: "60px",
          marginLeft: "350px",
        }}
      >
        <div
          style={{
            Display: "flex",
            height: 500,
            background: "#F5F5F5",
          }}
        >
          <DataGrid
            style={{ marginTop: "30px" }}
            rows={userList}
            columns={columns}
            getRowId={(row) => row.email}
            pageSize={10}
            onCellClick={handleOnCellClick}
          />
        </div>
      </div>
    </div>
  );
}

export default Users;
