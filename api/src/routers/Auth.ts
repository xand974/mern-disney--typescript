import { Request, Response } from "express";
import User from "../models/user";
import { Router } from "express";
import bcrypt from "bcrypt";
import { createAccessToken } from "../helpers/jwt";

const router = Router();

router.post("/register", async (req: Request, res: Response): Promise<void> => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(req.body.password, salt);
    const user = new User({
      ...req.body,
      password: hashPass,
    });

    const newUser = await user.save();
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json("err : " + error);
  }
});

router.post("/login", async (req: Request, res: Response): Promise<void> => {
  try {
    const { username, password } = req.body;
    const userFound = await User.findOne({ username });
    if (userFound) {
      const isMatched = await bcrypt.compare(password, userFound.password);
      if (isMatched) {
        const accessToken = createAccessToken(userFound);
        console.log(accessToken);

        res.status(200).json({ accessToken });
      } else {
        res.status(401).json("mot de passe ou identifiant incorrecte");
      }
    }
  } catch (err) {
    res.status(500).json("err" + err);
  }
});
export default router;
