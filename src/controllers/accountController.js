const Account = require('../models/accountModel');

const createAccount = async (req, res) => {
    try {
        const account = new Account({
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            name: req.body.name,
            decentralization: req.body.decentralization,
            image: req.file.filename,
        });
        const accountData = await account.save();

        res.status(200).send({ success: true, msg: 'Account Data', data: accountData });
    } catch (error) {
        res.status(400).send({ success: false, msg: error.message });
    }
};

const getAccounts = async (req, res) => {
    try {
        const accounts = await Account.find({});
        res.status(200).send({ success: true, msg: 'Account Data', data: accounts });
    } catch (error) {
        res.status(400).send({ success: false, msg: error.message });
    }
};

const getAccountById = async (req, res) => {
    const id = req.params.id;
    try {
        const account = await Account.findById({ _id: id });
        res.status(200).send({ success: true, msg: 'Account Data', data: account });
    } catch (error) {
        res.status(400).send({ success: false, msg: error.message });
    }
};

const deleteAccount = async (req, res) => {
    try {
        const id = req.params.id;

        await Account.deleteOne({ _id: id });
        res.status(200).send({ success: true, msg: 'Xoá Account thành công' });
    } catch (error) {
        res.status(400).send({ success: false, msg: error.message });
    }
};

const updateAccount = async (req, res) => {
    try {
        if (req.file !== undefined) {
            var id = req.body.id;
            var username = req.body.username;
            var password = req.body.password;
            var email = req.body.email;
            var name = req.body.name;
            var filename = req.file.filename;
            var decentralization = req.body.decentralization;

            await Account.findByIdAndUpdate(
                { _id: id },
                {
                    $set: {
                        username: username,
                        password: password,
                        email: email,
                        name: name,
                        image: filename,
                        decentralization: decentralization,
                    },
                },
            );
            res.status(200).send({ success: true, msg: 'Đổi mật khẩu thành công' });
        } else {
            var id = req.body.id;
            var username = req.body.username;
            var password = req.body.password;
            var email = req.body.email;
            var name = req.body.name;
            var decentralization = req.body.decentralization;

            await Account.findByIdAndUpdate(
                { _id: id },
                {
                    $set: {
                        username: username,
                        password: password,
                        email: email,
                        name: name,
                        image: filename,
                        decentralization: decentralization,
                    },
                },
            );
            res.status(200).send({ success: true, msg: 'Đổi mật khẩu thành công' });
        }
    } catch (error) {
        res.status(400).send({ success: false, msg: error.message });
    }
};

module.exports = {
    createAccount,
    getAccounts,
    getAccountById,
    deleteAccount,
    updateAccount,
};
