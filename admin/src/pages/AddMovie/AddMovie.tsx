import { ChangeEvent, useState } from "react";
import "./addMovie.scss";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useHistory } from "react-router";
import { storage } from "firebase";
import { CreateMovie } from "redux/apiCalls";
import { useDispatch } from "react-redux";
import { MovieType } from "../../../../front/src/context/movieSlice";

type FileType = {
  file: any;
  label: string;
};

export default function AddMovie() {
  const [movie, setMovie] = useState({} as MovieType);
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [bigPicture, setBigPicture] = useState<File | null>(null);
  const [trailer, setTrailer] = useState<File | null>(null);
  const [video, setVideo] = useState<File | null>(null);
  const [uploaded, setUploaded] = useState(0);
  const history = useHistory();
  const dispatch = useDispatch();

  const HandleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setMovie((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const upload = (items: FileType[]) => {
    items.forEach((item) => {
      const fileName = Date.now() + "_" + item.file.name;
      const storageRef = ref(storage, `/items/${fileName}`);
      const uploadTask = uploadBytesResumable(storageRef, item.file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("upload is " + progress + "% done.");
        },
        (err) => {
          console.log(err);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setMovie((prev) => {
              return { ...prev, [item.label]: url };
            });
            setUploaded((prev) => prev + 1);
          });
        }
      );
    });
  };
  const handleUpload = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    upload([
      { file: thumbnail, label: "thumbnail" },
      { file: trailer, label: "trailer" },
      { file: video, label: "videoURL" },
      { file: bigPicture, label: "bigPicture" },
    ]);
  };
  const HandleClick = () => {
    CreateMovie(dispatch, movie, history);
  };

  return (
    <div className="add">
      <h3 className="title">New Movie</h3>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="data">
          <label htmlFor="thumbnail">Thumbnail</label>
          <input
            type="file"
            name="thumbnail"
            id="thumbnail"
            onChange={(e) => {
              if (e.target.files) setThumbnail(e.target.files[0]);
            }}
          />
        </div>
        <div className="data">
          <label htmlFor="bigPicture">Big Picture</label>
          <input
            type="file"
            name="bigPicture"
            id="bigPicture"
            onChange={(e) => {
              if (e.target.files) setBigPicture(e.target.files[0]);
            }}
          />
        </div>
        <div className="data">
          <label htmlFor="trailer">Trailer</label>
          <input
            type="file"
            name="trailer"
            id="trailer"
            onChange={(e) => {
              if (e.target.files) setTrailer(e.target.files[0]);
            }}
          />
        </div>
        <div className="data">
          <label htmlFor="videoURL">Video</label>
          <input
            type="file"
            name="videoURL"
            id="videoURL"
            onChange={(e) => {
              if (e.target.files) setVideo(e.target.files[0]);
            }}
          />
        </div>
        <div className="data">
          <label htmlFor="title">Title</label>
          <input
            onChange={HandleChange}
            placeholder="john wick"
            type="text"
            id="title"
            name="title"
          />
        </div>
        <div className="data">
          <label htmlFor="desc">Synopsis</label>
          <input
            onChange={HandleChange}
            placeholder="desc"
            type="text"
            name="desc"
            id="desc"
          />
        </div>
        <div className="data">
          <label htmlFor="duration">Duration</label>
          <input
            onChange={HandleChange}
            placeholder="205 min"
            name="duration"
            value={movie.duration}
            type="text"
            id="duration"
          />
        </div>
        <div className="data">
          <label htmlFor="ageLimit">Age Limit</label>
          <input
            onChange={HandleChange}
            placeholder="12"
            type="text"
            name="ageLimit"
            value={movie.ageLimit}
            id="ageLimit"
          />
        </div>
        <div className="data">
          <label htmlFor="year">Year</label>
          <input
            onChange={HandleChange}
            placeholder="1956"
            type="text"
            value={movie.year}
            name="year"
            id="year"
          />
        </div>
        <div className="data">
          <label htmlFor="genre">Genre</label>
          <select name="genre" onChange={HandleChange} id="genre">
            <option value="">Selectionner un genre</option>
            <option value="Horror">Horror</option>
            <option value="fantasy">Fantasy</option>
            <option value="Suspense">Suspense</option>
            <option value="Comedy">Comedy</option>
            <option value="Adventure">Adventure</option>
          </select>
        </div>
        <div className="data">
          <label htmlFor="cat">Genre</label>
          <select name="category" onChange={HandleChange} id="cat">
            <option value="">Selectionner une catégorie</option>
            <option value="disney">Disney</option>
            <option value="pixar">Pixar</option>
            <option value="marvel">Marvel</option>
            <option value="ng">National Geographic</option>
            <option value="starwars">Star Wars</option>
            <option value="star">Star</option>
          </select>
        </div>
        <div className="data">
          <label>Is Series</label>
          <select onChange={HandleChange} name="isSeries" id="isSeries">
            <option value=""></option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="data">
          {uploaded === 4 ? (
            <button onClick={HandleClick}>Create</button>
          ) : (
            <button onClick={handleUpload}>Upload</button>
          )}
        </div>
        <button onClick={HandleClick}>Create</button>
      </form>
    </div>
  );
}
