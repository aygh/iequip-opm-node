const db = require('../../config/db')
const router = require('express').Router()
const bodyParser = require('body-parser')
bodyParser.urlencoded({
    extended: false
})
const jsonParser = bodyParser.json()
//列表查询
router.get('/product/v1/products', async (req, res) => {
    const {
        pdBlngSbj,
        pdTp,
        pdNm,
        avlSt,
        pageIndex,
        pageSize
    } = req.query
    if (!pageIndex || !pageSize) return res.status(400).send()
    try {
        let total
        const count = await db.query('select count(1) from ieqp_portal_product')
        total = count[0]['count(1)']
        const sql = `select * from ieqp_portal_product where 1=1 
        ${pdBlngSbj ? 'and PD_BLNG_SBJ=' + pdBlngSbj : ''}
        ${pdTp ? 'and PD_TP=' + pdTp : ''}
        ${pdNm ? 'and PD_NM like "%' + pdNm + '%"': ''}
        ${avlSt ? 'and AVL_ST=' + avlSt : ''}
        limit ${(pageIndex - 1) * pageSize } , ${pageSize}`
        const data = await db.query(sql)
        res.send({
            status: 200,
            data: {
                total: Number(total),
                startRow: Number(pageIndex),
                list: data.map(item => {
                    const obj = {}
                    for (let k in item) {
                        obj[formatKey(k)] = item[k]
                    }
                    return obj
                })
            }
        })
    } catch (error) {
        res.status(500).send(error)
    }

})

//详情查询
router.get('/product/v1/products/:pdId', async (req, res) => {
    const {
        pdId
    } = req.params
    if (!pdId) return res.status(400).send()
    try {
        const sql = `select * from ieqp_portal_product where PD_ID = ${pdId}`
        const data = await db.query(sql)
        res.send({
            sysTxStatus: '00',
            data: data.map(item => {
                const obj = {}
                for (let k in item) {
                    obj[formatKey(k)] = item[k]
                }
                return obj
            })[0]
        })
    } catch (error) {
        res.status(500).send({
            sysTxStatus: error
        })
    }
})


//新增
router.post('/product/v1/product', jsonParser, async (req, res) => {
    try {
        const {
            pdNm,
            pdBlngSbj,
            pdTp,
            pdDispNo,
            pdBrf,
            pdLogoSrc,
            pdUrl,
            avlSt
        } = req.body

        if (await isRepeat(pdNm)) return res.send({
            sysTxStatus: '01',
            sysRespDesc: '名称重复'
        })
        const idArr = await db.query('select PD_ID from ieqp_portal_product order by PD_ID DESC  limit 1')
        const id = Number(idArr[0]['PD_ID']) + 1
        const sql = `
        INSERT INTO ieqp_portal_product VALUES ('${id}', '', 
            '${pdBlngSbj || ''}', 
            '${pdTp || 'TP005'}',   
            '${pdNm || ''}', 
            '${pdBrf || ''}', 
            '${pdLogoSrc || ''}', 
            '${pdUrl || ''}', 
            '${pdDispNo || ''}', 
            '1', 
            '${avlSt || ''}', 
            '${filterTime(new Date())}'
        )
        `
        const result = await db.query(sql)
        if (result.affectedRows !== 1) return res.status(500).send()
        res.send({
            sysTxStatus: '00'
        })
    } catch (error) {
        res.status(500).send(error)
    }
})

//删除
router.delete('/product/v1/products/:pdId/:authAhrId', async (req, res) => {
    try {
        const {
            pdId,
            authAhrId
        } = req.params
        if (!pdId || !authAhrId) return res.status(400).send()
        const sql = `delete from ieqp_portal_product where PD_ID = '${pdId}' and AUTH_AHR_ID = '${authAhrId}'`
        const result = await db.query(sql)
        if (result.affectedRows !== 1) return res.status(500).send()
        res.send({
            sysTxStatus: '00'
        })
    } catch (error) {

    }
})

//修改
router.patch('/product/v1/products/:pdId', jsonParser, async (req, res) => {
    try {
        const {
            pdId
        } = req.params
        const {
            authAhrId,
            avlSt,
            isDel,
            pdBlngSbj,
            pdBrf,
            pdDispNo,
            pdLogoSrc,
            pdNm,
            pdTp,
            pdUrl
        } = req.body
        if (!pdId) return res.status(400).send()
        if (await isRepeat(pdNm, pdId)) return res.send({
            sysTxStatus: '01',
            sysRespDesc: '名称重复'
        })
        const sql = `update ieqp_portal_product set 
            ${pdNm? 'PD_NM = "' + pdNm + '",' : ''}
            ${authAhrId? 'AUTH_AHR_ID ="' + authAhrId + '",' : ''}
            ${avlSt? 'AVL_ST ="' + avlSt + '",' : ''}
            ${isDel? 'IS_DEL ="' + isDel + '",' : ''}
            ${pdBlngSbj? 'PD_BLNG_SBJ ="' + pdBlngSbj + '",' : ''}
            ${pdBrf? 'PD_BRF ="' + pdBrf + '",' : ''}
            ${pdDispNo? 'PD_DISP_NO ="' + pdDispNo + '",' : ''}
            ${pdLogoSrc? 'PD_LOGO_SRC ="' + pdLogoSrc + '",' : ''}
            ${pdTp? 'PD_TP ="' + pdTp + '",' : ''}
            ${pdUrl? 'PD_URL ="' + pdUrl + '",' : ''}
            MOD_TM = '${filterTime(new Date())}'
            where PD_ID = ${pdId}`
        const result = await db.query(sql)
        if (result['affectedRows'] !== 1) return res.send({
            sysTxStatus: '01',
            sysRespDesc: '修改失败'
        })
        res.send({
            sysTxStatus: '00',
            sysRespDesc: '修改成功'
        })
    } catch (error) {
        res.status(500).send()
    }
})

function formatKey(key) {
    const arr = key.toLowerCase().split('')
    let i = -2
    arr.forEach((item, index, arr) => {
        if (item === '_') {
            i = index
        }
        if (index === i + 1) {
            arr[index] = item.toUpperCase()
        }
    })
    const newKey = arr.join('').replace(/\_/g, '')
    return newKey
}

function filterTime(t) {
    let yyyy = new Date(t).getFullYear()
    let MM = new Date(t).getMonth()
    let dd = new Date(t).getDate()
    let HH = new Date(t).getHours()
    let mm = new Date(t).getMinutes()
    let ss = new Date(t).getSeconds()
    if (MM == 0) {
        yyyy -= 1
        MM = 12
    } else {
        MM += 1
    }
    dd = dd < 10 ? '0' + dd : dd
    mm = mm < 10 ? '0' + mm : mm
    ss = ss < 10 ? '0' + ss : ss
    return `${yyyy}-${MM}-${dd} ${HH}:${mm}:${ss}`
}

var isRepeat = async (name, pdId) => {
    const result = await db.query(`select * from ieqp_portal_product where PD_NM = '${name}'
    ${pdId ? 'and PD_ID != ' + pdId : ''}`)
    if (result[0]) return true
    return false
}

module.exports = router