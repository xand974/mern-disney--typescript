import { DeleteOutlined, EditOutlined } from "@material-ui/icons";
import { DataGrid, GridColumns } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import "./moviesList.scss";
import { deleteMovie, fetchMovies } from "redux/apiCalls";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../hooks/selectors";
import { MovieType } from "../../../../front/src/context/movieSlice";

type GridMovieListType = {
  row: MovieType;
};

export default function Products() {
  const dispatch = useDispatch();
  const { movies } = useAppSelector((state) => state.movies);

  useEffect(() => {
    fetchMovies(dispatch);
  }, [dispatch]);

  const HandleClick = (id: string) => {
    deleteMovie(dispatch, id);
  };
  const columns = [
    { field: "_id", headerName: "ID", width: 100 },
    {
      field: "title",
      headerName: "Title",
      width: 200,
      renderCell: (params: GridMovieListType) => {
        return (
          <div className="renderProduct">
            <img src={params.row.thumbnail} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "year", headerName: "Year", width: 130 },
    { field: "desc", headerName: "Synopsis", width: 130 },
    { field: "genre", headerName: "Genre", width: 130 },
    {
      field: "ageLimit",
      headerName: "Limit",
      width: 160,
    },
    {
      field: "isSeries",
      headername: "is Serie",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 160,
      renderCell: (params: GridMovieListType) => {
        return (
          <div className="productlist">
            <Link
              to={{ pathname: `/movie/${params.row._id}`, state: params.row }}
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
  ] as GridColumns;
  return (
    <div className="products">
      <div className="container__title">
        <h3>Movies</h3>
        <Link to="/newmovie">
          <span>Create</span>
        </Link>
      </div>
      <DataGrid
        rows={movies}
        columns={columns}
        pageSize={7}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        getRowId={(row) => row._id}
      />
    </div>
  );
}
