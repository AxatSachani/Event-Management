const multer = require('multer');

// file filter to allow only image files
const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
        cb(null, true);
    } else {
        cb(new Error('Only image files are allowed!'), false);
    }
};

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './media');
    },
    filename: function (req, file, cb) {
        const filename = Date.now() + '_' + file.originalname;
        cb(null, filename);
    }
});

const upload = multer({
    storage: storage,
    fileFilter: fileFilter
});

// custom error handling middleware
const multerErrorHandler = (err, req, res, next) => {
    if (err instanceof multer.MulterError || err) {
        res.status(400).send({ code: 400, success: false, error: err.message })
    } else {
        next();
    }
};

module.exports = { upload, multerErrorHandler };
