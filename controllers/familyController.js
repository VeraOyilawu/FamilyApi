const familyModel = require("../models/familyModel")
const fs = require("fs")

const createProfile = async(req, res) => {
        const {fatherName, motherName, children} = req.body
        const profile = new familyModel({
            fatherName,
            motherName,
            children,
            childrenProfile: req.files
        })

        try {
            const saveProfile = await profile.save()
            if (!saveProfile){
                res.status(404).json({
                    message: "unable to save profile"
                })
            } else {
                res.status(201).json({
                    message: "family profile created sucessfully ",
                    data: saveProfile
                })
            }
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}


const getProfiles = async(req, res) => {
    try {
        const profile = await familyModel.find()
         
        res.status(200).json({
            message: "Profiles found",
            data: profile
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}

const getProfile = async(req, res) => {
    try {
        const profile = await familyModel.findById(req.params.id)
         
        res.status(200).json({
            message: "Profile found",
            data: profile
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}

const updateProfile = async ( req, res ) => {
    const profileId = req.params.id;
    const profile = await familyModel.findById( profileId );
    try {
        const { name, course } = req.body;
        const bodyData = {
            fatherName: fatherName || profile.fatherName,
            motherName: motherName || profile.motherName,
            children: children || profile.children,
            childrenProfile: profile.childrenProfile
        }

        if ( req.files && req.files[ "profileImage" ] ) {
            const oldProfileImagePath = `upload/${ profile.profileImage }`
            if ( fs.existsSync( oldProfileImagePath ) ) {
                fs.unlinkSync(oldProfileImagePath)
            }
            bodyData.profileImage = req.files;
        }
        const newProfileImage = await studentModel.findByIdAndUpdate( profileId, bodyData, { new: true } )
            if ( newProfileImage ) {
                res.status( 200 ).json( {
                    message: "Updated successfully.",
                    data: newProfileImage
                })
            } else {
                res.status( 404 ).json( {
                    message: "Not found"
                })
            }
    } catch ( e ) {
        res.status( 500 ).json( {
            message: e.message
        })
    }
}

// remove a profile
const deleteProfile = async ( req, res ) => {
    const profileId = req.params.id;
    const profile = await studentModel.findById( profileId );
    try {
            const oldProfileImagePath = `upload/${ profile.profileImage }`
            if ( fs.existsSync( oldProfileImagePath ) ) {
                fs.unlinkSync( oldProfileImagePath )
            }
        const deletedProfile = await studentModel.findByIdAndDelete( profileId );
        if ( deletedProfile ) {
            res.status( 200 ).json( {
                message: "Deleted successfully"
            })
        } else {
            res.status( 404 ).json( {
                message: "Deleted unsuccessful"
            })
        }
    } catch ( e ) {
        res.status( 500 ).json( {
            message: e.message
        })
    }
}


module.exports = {
    createProfile,
    getProfiles,
    getProfile,
    updateProfile,
    deleteProfile
}