const Data = require("../model/data.model")
const crypto = require("crypto-js")

const postData = async (req, res) => {
    try {
        const insertedData = await Data.findOneAndUpdate(
            {
                userId: crypto.SHA256(req.body.email).toString(),
            },
            {
                userId: crypto.SHA256(req.body.email).toString(),
                name: req.body.name,
                age: req.body.age,
                ReportYear: req.body.ReportYear,
                SerumIron: req.body.SerumIron,
                SerumFerritin: req.body.SerumFerritin,
                SerumZn: req.body.SerumZn,
                TSH: req.body.TSH,
                AbnormalHairShaft: req.body.AbnormalHairShaft,
                Dandruff: req.body.Dandruff,
                Hairfall: req.body.Hairfall
            },
            {
                upsert: true,
                new: true
            }
        )
        res.json({ status: 200, data: insertedData, message: "Updated Successfully" })
    }
    catch (e) {
        res.json({ status: 400, message: "Unexpected Error" })
    }
}
module.exports = { postData }