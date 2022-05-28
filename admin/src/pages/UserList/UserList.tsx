import "./userList.scss";
import { DataGrid, GridColumns } from "@mui/x-data-grid";
import { DeleteOutlined, EditOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { users } from "../../mockData";
import { useEffect } from "react";
import { UserAdminType } from "../../redux/apiCalls";

export default function UserList() {
  const [data, setData] = useState<UserAdminType[]>([]);

  useEffect(() => {
    setData(users);
  }, []);
  const HandleClick = (id: string) => {
    setData((prev) => {
      return prev.filter((m) => m._id !== id);
    });
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 200 },
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
            <Link
              to={{ pathname: `/user/${params.row.id}`, state: params.row }}
            >
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
  ] as GridColumns;
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
        getRowId={(row) => row._id}
      />
    </div>
  );
}
