import Movie from "../models/movie";
import { Router } from "express";
import { Request, Response } from "express";
import { checkToken, checkAdmin } from "../middlewares/verify";
const router = Router();

//ADD
router.post(
  "/add",
  [checkToken, checkAdmin],
  async (req: Request, res: Response): Promise<void> => {
    try {
      const movie = new Movie(req.body);
      const newMovie = await movie.save();
      res.status(200).json(newMovie);
    } catch (error) {
      res.status(500).json({
        message: error,
      });
    }
  }
);
//UPDATE
router.put(
  "/:id",
  [checkToken, checkAdmin],
  async (req: Request, res: Response): Promise<void> => {
    try {
      const updatedMovie = await Movie.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedMovie);
    } catch (error) {
      res.status(500).json({
        message: error,
      });
    }
  }
);

//DELETE
router.delete(
  "/:id",
  [checkToken, checkAdmin],
  async (req: Request, res: Response): Promise<void> => {
    try {
      await Movie.findByIdAndDelete(req.params.id);
      res.status(200).json("movie or serie has been deleted successfully");
    } catch (error) {
      res.status(500).json({
        message: error,
      });
    }
  }
);

//GET RANDOM MOVIE OR SERIE
router.get(
  "/random",
  checkToken,
  async (req: Request, res: Response): Promise<void> => {
    let movie;
    const type = req.query.type;
    try {
      if (type === "series") {
        movie = await Movie.aggregate([
          { $match: { isSeries: true } },
          { $sample: { size: 1 } },
        ]);
      } else {
        movie = await Movie.aggregate([
          { $match: { isSeries: false } },
          { $sample: { size: 1 } },
        ]);
      }
      res.status(200).json(movie);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
);

//GET MOVIES
router.get(
  "/all",
  [checkToken, checkAdmin],
  async (req: Request, res: Response): Promise<void> => {
    try {
      const movies = await Movie.find({});
      res.status(200).json(movies);
    } catch (error) {
      res.status(500).json({
        message: error,
      });
    }
  }
);

//GET ONE
router.get(
  "/one/:id",
  checkToken,
  async (req: Request, res: Response): Promise<void> => {
    try {
      const movie = await Movie.findById(req.params.id);
      res.status(200).json(movie);
    } catch (error) {
      res.status(500).json({
        message: error,
      });
    }
  }
);

router.get("/search", checkToken, async (req: Request, res: Response) => {
  try {
    const search__query: string = req.body.search__query;
    const movie = await Movie.find({ $text: { $search: search__query } });
    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
});

//get 4 random movies
router.get(
  "/slider",
  checkToken,
  async (req: Request, res: Response): Promise<void> => {
    try {
      const movies = await Movie.aggregate([{ $sample: { size: 4 } }]);
      res.status(200).json(movies);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
);

router.get("/cat", checkToken, async (req: Request, res: Response) => {
  try {
    const catQuery = req.query.cat__query;
    const movies = await Movie.find({ category: catQuery });
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

export default router;
