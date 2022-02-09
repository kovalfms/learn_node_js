import User from "../models/User.js";

class UserController {
    async create(req, res) {
        try {
            const{name, password, avatar} = req.body
            const user = await User.create({name, password, avatar})
            res.json(user)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {
            const users = await User.find()
            return res.json(users)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getOne(req, res) {
        try {
            const {id} = req.params
            if(!id){
                res.status(400).json({message: 'User not found'})
            }
            const user = await User.findById(id);
            return res.json(user)
        } catch (e) {
            res.status(500).json(e)
        }

    }
    async update(req, res) {
        try {
            const user = req.body;
            if(!user._id){
                res.status(400).json({message: 'User not found'})
            }
            const updateUser = await User.findByIdAndUpdate(user._id, user, {new: true})
            return res.json(updateUser);
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async delete(req, res) {
        try {
            const {id} = req.params
            if(!id){
                res.status(400).json({message: 'User not found'})
            }
            const user = await User.findByIdAndDelete(id);
            return res.json(user)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new UserController()