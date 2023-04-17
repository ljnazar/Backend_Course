import userModel from "../models/userSchema.js";

class UserMongooseDao {

    async create(newUser) {

        const userDocument = await userModel.create(newUser);

        return userDocument;

    }

    async getUserById(id) {

        const idFound = await userModel.findOne({ _id: id }).lean();

        return idFound
    
    }

    async getUserByUsername(username) {

        const userFound = await userModel.findOne({ email: username }).lean();

        return userFound
    
    }

}

export default UserMongooseDao;