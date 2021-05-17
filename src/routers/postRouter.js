import express from "express";
import { 
    postController, 
    postCreateController,
    postDetailController,
    postCreatePostController, 
    postDelete, 
    updatePost, 
} from "../controllers/postController";

const postRouter = express.Router();

postRouter.get("/postList", postController);
postRouter.get("/postCreate", postCreateController);
postRouter.get("/postDetail/:id", postDetailController);
postRouter.post("/postCreate", postCreatePostController);
postRouter.post("/postDetail", updatePost);
postRouter.post("/postDelete", postDelete);

export default postRouter;