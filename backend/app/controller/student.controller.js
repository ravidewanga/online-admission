const db = require("../model");
const Student = db.students;
const Op = db.Sequelize.Op;

// Create and Save a new Student
exports.createData = (req, res) => {
    console.log(req.body);
    return ;
    // Validate request
    if (!req.body.session) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        
        return;
    }

    // Create a Student
    const student = {
        session: req.body.session,
        school: req.body.school,
        medium: req.body.medium,
        class: req.body.class,
        section: req.body.section,
        admission_no: req.body.admission_no,
        roll_no: req.body.roll_no,
        first_name: req.body.first_name,
        middle_name: req.body.middle_name,
        last_name: req.body.last_name,
        dob: req.body.dob,
        gender: req.body.gender
        //published: req.body.published ? req.body.published : false
    };

    // Save Student in the database
    Student.create(student)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tutorial."
            });
        });
};