const multer = require("multer")

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './upload')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith("image")) {
        cb(null, true)
    } else {
        cb (new Error("image not supported"))
    }
}

const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    fileSize: {
        limits: 1024 * 1024 * 10
    }
})

module.exports = upload