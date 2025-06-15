import Person from "../models/person.model.js";

const PersonController = {
  createPerson: async (req, res) => {
    try {
      const person = await Person.create(req.body);
      return res.status(201).json({
        success: true,
        message: "✅ Person created successfully ✅",
        data: person,
      });
    } catch (error) {
      console.log("❌ Error creating person:", error);
      return res.status(400).json({
        success: false,
        message: "❌ Failed to create person ❌",
        error: error.message || error,
      });
    }
  },
};

export default PersonController;
