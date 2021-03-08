const Sequelize = require("sequelize");

module.exports = (sequelize) => {
    const Student = sequelize.define("student", {
        session: {type: Sequelize.INTEGER},
        school: {type: Sequelize.INTEGER},
        medium: {type: Sequelize.INTEGER},
        class: {type: Sequelize.INTEGER},
        section: {type: Sequelize.INTEGER},
        admission_no: {type: Sequelize.INTEGER},
        roll_no: {type: Sequelize.INTEGER},
        first_name: {type: Sequelize.STRING},
        middle_name: {type: Sequelize.STRING},
        last_name: {type: Sequelize.STRING},
        dob: {type: Sequelize.DATE},
        gender: {type: Sequelize.STRING}
    });
    return Student;
};