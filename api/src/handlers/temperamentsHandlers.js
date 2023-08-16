const { uploadTemperamentsToDbController, getAllTemperamentsController } = require("../controllers/temperamentsControllers")

const getTemperamentsHandler = async (req, res) => {
    try {
        await uploadTemperamentsToDbController()
        const response = await getAllTemperamentsController()

        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = { getTemperamentsHandler }