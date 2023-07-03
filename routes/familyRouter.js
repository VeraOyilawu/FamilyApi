const express = require("express")
const router = express.Router()
const {createProfile,getProfiles,getProfile,updateProfile,deleteProfile} = require("../controllers/familyController")
const upload = require("../utils/multer")


router.post("/profile", upload.array("childrenProfile", 3), createProfile)
router.get("/allProfiles", getProfiles)
router.get("/:id", getProfile)
router.put("/:id", upload.array("childrenProfile", 3), updateProfile)
router.delete("/:id", deleteProfile)


module.exports = router
