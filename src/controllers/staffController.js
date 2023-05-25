const Staff = require('../models/staffModel');

const createStaff = async (req, res) => {
    try {
        const staff = new Staff({
            name: req.body.name,
            address: req.body.address,
            image: req.file.filename,
            phone: req.body.phone,
            position: req.body.position,
        });
        const staffData = await staff.save();

        res.status(200).send({ success: true, msg: 'Staff Data', data: staffData });
    } catch (error) {
        res.status(400).send({ success: false, msg: error.message });
    }
};

const getStaffs = async (req, res) => {
    try {
        const staffs = await Staff.find({});
        res.status(200).send({ success: true, msg: 'Staff Data', data: staffs });
    } catch (error) {
        res.status(400).send({ success: false, msg: error.message });
    }
};

const deleteStaff = async (req, res) => {
    try {
        const id = req.params.id;

        await Staff.deleteOne({ _id: id });
        res.status(200).send({ success: true, msg: 'Xoá nhân viên thành công' });
    } catch (error) {
        res.status(400).send({ success: false, msg: error.message });
    }
};

const updateStaff = async (req, res) => {
    try {
        if (req.file !== undefined) {
            var id = req.body.id;
            var name = req.body.name;
            var address = req.body.address;
            var filename = req.file.filename;
            var phone = req.body.phone;
            var position = req.body.position;

            await Staff.findByIdAndUpdate(
                { _id: id },
                { $set: { name: name, address: address, image: filename, phone: phone, position: position } },
            );
            res.status(200).send({ success: true, msg: 'Cập nhật nhân viên thành công' });
        } else {
            var id = req.body.id;
            var name = req.body.name;
            var address = req.body.address;
            var phone = req.body.phone;
            var position = req.body.position;

            await Staff.findByIdAndUpdate(
                { _id: id },
                { $set: { name: name, address: address, phone: phone, position: position } },
            );
            res.status(200).send({ success: true, msg: 'Cập nhật nhân viên thành công' });
        }
    } catch (error) {
        res.status(400).send({ success: false, msg: error.message });
    }
};

module.exports = {
    createStaff,
    getStaffs,
    deleteStaff,
    updateStaff,
};
