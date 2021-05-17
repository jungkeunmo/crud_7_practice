import crud1 from "../models/crud_1";

export const postController = async (req, res) => {
    try {
        const result = await crud1.find({}, {});
        res.render("post", { status: true, list: result});
    } catch (e) {
        console.log(e);
        res.render("post", { status: false, list: [] });
    };
};

export const postCreateController = (req, res) => {
    res.render("post_c");
};

export const postDetailController = async(req, res) => {
    try {
        const result = await crud1.findOne({_id: req.params.id});

        console.log(result);

        res.render("post_d", { postData: result });
    } catch (e) {
        console.log(e);
        res.render("e");
    }
};

export const postCreatePostController = async(req, res) => {
    const {
        body : {title, description},
    } = req;

    try {
        const result = await crud1.create({
            title,
            description,
        });

        postController(req, res);
    } catch (e) {
        console.log(e);
        res.render("e");
    }
};

export const updatePost = async(req, res) => {
    const {
        body: { id, title, description },
    } = req;

    try {
        const result = await crud1.updateOne(
            { _id: id },
            {
                $set: {
                    title,
                    description,
                },
            }
        );

       postController(req, res); 
    } catch (e) {
        console.log(e);
        res.render("e");
    }
};

export const postDelete = async(req, res) => {
    const {
        body: { id },
    } = req;
    try {
        const result = await crud1.deleteOne({ _id: id });

        postController(req, res);
    } catch (e) {
        console.log(e);
        res.render("e");
    }
};