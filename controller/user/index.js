const db = require('../../config/db')
const router = require('express').Router()
const bodyParser = require('body-parser')
bodyParser.urlencoded({
    extended: false
})
const jsonParser = bodyParser.json()
router.post('/login', jsonParser, async (req, res) => {
    const {
        username,
        password
    } = req.query
    if(!username || !password) return res.status(400).send()
    const sql = `select * from ieqp_user where username = '${username}' and password = '${password}'`
    try {
        const data = await db.query(sql)
        const row = data[0]
        if(!row) return res.send({
            status: '01',
            statusTxt: '用户名或密码错误'
        })
        res.send({
            status: 'success',
            _login_info: {
                roleList: [{rlId: row.ROLELIST}],
                userId: row.MODEL_ID,
                usrNm: row.USERNAME
            }
        })
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router