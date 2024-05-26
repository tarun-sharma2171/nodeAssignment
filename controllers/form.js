const Form = require("../models/form");


exports.createForm = async (req, res) => {
    try {
        const { uniqueId, name, email, phoneNumber, isGraduated } = req.body;
        const { form_title } = req.query

        const newForm = await Form.create({
            uniqueId,
            name,
            email,
            title: form_title || "User",
            phoneNumber,
            isGraduated
        });

        return res.json({ stautsCode: 201, message: 'Form created successfully', data: newForm });
    } catch (error) {
        return res.json({ statusCode: 500, message: error.message ? error.message : "Internal Server error" });
    }
};



exports.getFormsList = async (req, res) => {
    try {
        const { form_title } = req.query;
        let filter = {}
        if (form_title) {
            filter["title"] = form_title;
        }
        const forms = await Form.findAll({
            where: filter
        });
        return res.json({
            statusCode: 200,
            forms: forms
        });
    } catch (error) {
        return res.json({ statusCode: 500, message: error.message ? error.message : "Internal Server error" })
    }
}

