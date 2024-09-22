const multer = require("multer");
const fs = require("fs");

const setPath = (path) => {
  return (req, res, next) => {
    req.uplaodDir = path;
  };
};

const myStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const path = "./public/uploads/images" + req.uplaodDir;
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path);
    }
    cb(null, path);
  },

  
});

const uploader = multer({
  storage: myStorage,
});

module.exports = { uploader, setPath };
