// const express =require('express');
// const Blog = require('../models/blog')
// const router = express.Router();
// const multer = require('multer');
// const { blog_create} = require('../controllers/blogControllers')
// const  cloudinary = require('cloudinary').v2;
// const { CloudinaryStorage } = require("multer-storage-cloudinary");
// cloudinary.config({
// 	cloud_name: "dqsikylv8",
// 	api_key: "262879178336549",
// 	api_secret: "6ddDMaTCWlNMi-Lj8aPRstCslBE"
// 	});
//   const storage = new CloudinaryStorage({
//     cloudinary: cloudinary,
//     params: {
//       folder: "DEV",
//     },
//   });
// const upload = multer({ storage: storage });

// router.post("/", upload.single("image"),blog_create);

// module.exports =router;

const express = require('express');
const Blog = require('../models/blog');
const router = express.Router();
const multer = require('multer');
const { blog_create,blog_detail } = require('../controllers/blogControllers');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

// Configure Cloudinary with API credentials
cloudinary.config({
  cloud_name: 'dqsikylv8',
  api_key: '262879178336549',
  api_secret: '6ddDMaTCWlNMi-Lj8aPRstCslBE'
});

// Configure Multer to use Cloudinary as the storage engine
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'DEV',
  },
});

const upload = multer({ storage: storage });

// Define the route for creating a new blog post
router.post('/', upload.single('image'), blog_create);
router.get('/',blog_detail)

module.exports = router;

