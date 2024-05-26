exports.validateFormData = (req, res, next) => {
    const { uniqueId, title, name, email, phoneNumber, isGraduated } = req.body;

    // Check if all required fields are present
    if (!uniqueId || !title || !name || !email || !phoneNumber || typeof isGraduated !== 'boolean') {
        return res.json({ statuCode: 400, message: 'All required fields must be provided' });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.json({ statuCode: 400, message: 'Invalid email address' });
    }

    // Validate phoneNumber format
    const phoneRegex = /^[0-9]{10}$/; // Assuming 10-digit phone numbers
    if (!phoneRegex.test(phoneNumber)) {
        return res.json({ statuCode: 400, message: 'Invalid phone number' });
    }

    // If all validations pass, move e next middleware
    next();
};
