import express from 'express';

const userRoutes = express.Router();

userRoutes.post("", (req, res) => {
  res.send(req.body);
});

export default userRoutes;