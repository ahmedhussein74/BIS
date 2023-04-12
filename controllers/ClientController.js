const fs = require("fs");
const path = require("path");
const { upload } = require("../index");
const Client = require("../models/ClientModel");

const getClients = async (req, res) => {
  try {
    const clients = await Client.find(req.query);
    res.json(clients);
  } catch (error) {
    console.log(error);
  }
};

const addClient =
  (upload.single("logo"),
  async (req, res) => {
    try {
      const client = new Client({
        name: req.body.name,
        logo: {
          data: fs.readFileSync(
            path.join(__dirname, "../upload/" + req.file.filename)
          ),
          contentType: "image/" + req.file.filename.split(".").pop(),
        },
      });
      const newClient = await client.save();
      res.json(newClient);
    } catch (error) {
      console.log(error);
    }
  });

const updateClient =
  (upload.single("logo"),
  async (req, res) => {
    try {
      const UpdatedClient = await Client.findByIdAndUpdate(
        req.params.id,
        {
          name: req.body.name,
          logo: {
            data: fs.readFileSync(
              path.join(__dirname, "../upload/" + req.file.filename)
            ),
            contentType: "image/" + req.file.filename.split(".").pop(),
          },
        },
        {
          new: true,
        }
      );
      res.json(UpdatedClient);
    } catch (error) {
      console.log(error);
    }
  });

const deleteClient = async (req, res) => {
  try {
    const DeletedClient = await Client.findByIdAndDelete(req.params.id);
    res.json(DeletedClient);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getClients, addClient, updateClient, deleteClient };
