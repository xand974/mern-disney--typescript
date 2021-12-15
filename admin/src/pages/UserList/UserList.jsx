import "./userList.scss";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutlined, EditOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { users } from "../../mockData";
import { useEffect } from "react";

export default function UserList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(users);
  }, []);
  const HandleClick = (id) => {
    setData((prev) => {
      return prev.filter((m) => m.id !== id);
    });
  };

  const columns = [
    { field: "id", headerName: "ID", width: 200 },
    {
      field: "user",
      headerName: "User",
      width: 160,
      renderCell: (params) => {
        return (
          <div className="renderUser">
            <img src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 130 },
    {
      field: "isAdmin",
      headerName: "Admin",
      type: "boolean",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 160,
      renderCell: (params) => {
        return (
          <div className="userlist">
            <Link to={{ pathname: `/user/${params.row.id}`, user: params.row }}>
              <button>
                <EditOutlined className="btn__edit" />
              </button>
            </Link>
            <button
              onClick={() => {
                HandleClick(params.row.id);
              }}
            >
              <DeleteOutlined className="btn__delete" />
            </button>
          </div>
        );
      },
    },
  ];
  return (
    <div className="userlist">
      <div className="container__title">
        <h3>Users</h3>
        <Link to="/add">
          <span>Create</span>
        </Link>
      </div>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        getRowId={(row) => row.id}
      />
    </div>
  );
}
