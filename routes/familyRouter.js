const express = require("express")
const router = express.Router()
const {createProfile,getProfiles,getProfile,updateProfile,deleteProfile} = require("../controllers/familyController")
const upload = require("../utils/multer")

// router.post("/profile", upload.fields( [{ name: "firstChildProfile", maxCount: 2 },{ name: "secondChildProfile", maxCount: 3 }]), createProfile)
router.post("/profile", upload.array("childrenProfile", 3), createProfile)
router.get("/allProfiles", getProfiles)
router.get("/id", getProfile)
router.update("/profile", upload.array("childrenProfile", 3), updateProfile)
router.delete("/profile/id", deleteProfile)


module.exports = router
