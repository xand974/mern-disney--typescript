import "./listsList.scss";
import { DeleteOutlined, EditOutlined } from "@material-ui/icons";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { deleteList, getLists } from "redux/apiCalls";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function ListsLists() {
  const dispatch = useDispatch();
  const { lists } = useSelector((state) => state.lists);

  useEffect(() => {
    getLists(dispatch);
  }, [dispatch]);

  const HandleClick = (id) => {
    deleteList(id, dispatch);
  };
  const columns = [
    { field: "_id", headerName: "ID", width: 100 },
    { field: "title", headerName: "Title", width: 200 },
    { field: "type", headerName: "Type", width: 130 },
    { field: "genre", headerName: "Genre", width: 160 },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productlist">
            <Link
              to={{ pathname: `/list/${params.row._id}`, state: params.row }}
            >
              <button>
                <EditOutlined className="btn__edit" />
              </button>
            </Link>
            <button
              onClick={() => {
                HandleClick(params.row._id);
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
    <div className="products">
      <div className="container__title">
        <h3>Lists</h3>
        <Link to="/newlist">
          <span>Create</span>
        </Link>
      </div>
      <DataGrid
        getRowId={(row) => row._id}
        rows={lists}
        columns={columns}
        pageSize={7}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
