const { Router } = require('express');
const Lists = require('../models/Lists');
const router = Router();

router.post(
    "/save",
    async (req, res) => {
        try {
            const { name } = req.body;

            const candidate = await Lists.findOne({ name });
            if (candidate) {
               return res.status(400).json({ message: "Такой список уже существует" });
            }
            const newList = new Lists(req.body);
            await newList.save();

            res.status(201).json({ message: "Список сохранен" });
        } catch (e) {
            res.status(500).json({ message: "Что-то пошло не так, поробуйте снова" })
        }
    });

module.exports = router;