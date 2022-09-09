const Object = require("../models/objectModel");
const fs = require("fs");

exports.createObject = async (req, res, next) => {
  try {
    const object = req.body;

    const objectCreated = await Object.create({
      imageUrl: `${req.protocol}://${req.get("host")}/images/${
        req.file.filename
      }`,
      ...object,
    });

    objectCreated.save();
    res.status(201).json({ message: "Your object has been created !" });
  } catch (error) {
    res.status(400).json({ error });
  }
};

exports.modifyObject = async (req, res, next) => {
  try {
    const objectToUpdate = await Object.findOne({ _id: req.params.id });

    if (req.file) {
      const newObject = req.body;
      if (newObject.imageUrl !== objectToUpdate) {
        const filename = objectToUpdate.imageUrl.split("/images/")[1];
        fs.unlink(`images/${filename}`, async () => {
          await Object.updateOne(
            { _id: req.params.id },

            {
              imageUrl: `${req.protocol}://${req.get("host")}/images/${
                req.file.filename
              }`,
              ...newObject,
            }
          );
          res.status(201).json({ message: "Your object has been updated ! " });
        });
      }
    } else {
      console.log("no image");
      const newObject = req.body;
      await Object.updateOne(
        { _id: req.params.id },

        {
          ...newObject,
        }
      );
      res.status(201).json({ message: "Your object has been updated ! " });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
};

exports.deleteObject = async (req, res, next) => {
  try {
    const objectToDelete = await Object.findOne({ _id: req.params.id });

    const filename = objectToDelete.imageUrl.split("/images/")[1];
    fs.unlink(`images/${filename}`, () => {
      Object.deleteOne({ _id: req.params.id })
        .then(() => {
          res.status(200).json({ message: "Your object has been deleted !" });
        })
        .catch((error) => {
          res.status(400).json({ error });
        });
    });
  } catch (error) {
    res.status(400).json({ error });
  }
};

exports.getOneObject = async (req, res, next) => {
  try {
    await Object.findOne({ _id: req.params.id })
      .then((object) => res.status(200).json(object))
      .catch((error) => res.status(400).json({ error }));
  } catch (error) {
    res.status(400).json({ error });
  }
};

exports.getAllObjects = async (req, res, next) => {
  try {
    await Object.find()
      .then((objects) => res.status(200).json(objects))
      .catch((error) => res.status(400).json({ error }));
  } catch (error) {
    res.status(400).json({ error });
  }
};
