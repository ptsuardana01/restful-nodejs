import Notif from "../models/Notif.js";

export const getNotifs = async (req, res) => {
    try {
        const notifs = await Notif.find();
        res.json(notifs);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getNotifsById = async (req, res) => {
    const checkId = await Notif.findById(req.params.id)
    if(!checkId) return res.status(404).json({message:"Data not found :("})
    try {
        const notif = await Notif.findById(req.params.id);
        res.json(notif);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const createNotif = async (req, res) => {
    const notif = new Notif(req.body);
    try {
        const creatednotif = await notif.save();
        res.status(201).json(creatednotif);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const updateNotif = async (req, res) => {
    const checkId = await Notif.findById(req.params.id)
    if(!checkId) return res.status(404).json({message:"Data not found :("})
    try {
        const updatednotif = await Notif.updateOne({_id: req.params.id}, {$set: req.body});
        res.status(200).json(updatednotif);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deleteNotif = async (req, res) => {
    const checkId = await Notif.findById(req.params.id)
    if(!checkId) return res.status(404).json({message:"Data not found :("})
    try {
        const deletednotif = await Notif.deleteOne({_id: req.params.id});
        res.status(200).json(deletednotif);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}