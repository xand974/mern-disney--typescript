import { Router, Request, Response } from "express";
import List from "../models/list";
import { checkToken, checkAdmin } from "../middlewares/verify";
const router = Router();

//ADD
router.post(
  "/add",
  [checkToken, checkAdmin],
  async (req: Request, res: Response): Promise<void> => {
    try {
      const list = new List(req.body);
      const newList = await list.save();
      res.status(200).json(newList);
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
      const updatedList = await List.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedList);
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
      await List.findByIdAndDelete(req.params.id);
      res.status(200).json("List has been deleted successfully");
    } catch (error) {
      res.status(500).json({
        message: error,
      });
    }
  }
);

//GET RANDOM LIST
router.get(
  "/random",
  checkToken,
  async (req: Request, res: Response): Promise<void> => {
    try {
      const list = await List.aggregate([{ $sample: { size: 8 } }]);
      res.status(200).json(list);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
);

//GET LISTS
router.get(
  "/all",
  [checkToken, checkAdmin],
  async (req: Request, res: Response): Promise<void> => {
    try {
      const lists = await List.find({});
      res.status(200).json(lists);
    } catch (error) {
      res.status(500).json({
        message: error,
      });
    }
  }
);

export default router;
