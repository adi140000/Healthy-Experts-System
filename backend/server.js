const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
const app = express();

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "illnesses"
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.use(cors());

app.post('/data', (req, res, next) => {
    const tempArr = [];
    con.query('SELECT name,symptom,description FROM relations JOIN symptom ON relations.id_symptom=symptom.id_symptom JOIN illness ON  relations.id_illness=illness.id_illness ', (err, result) => {
        result = JSON.parse(JSON.stringify(result));
        result.forEach((item, index, arr, current) => {
            const { name } = item;
            let choose = true;
            tempArr.forEach(el => {
                if (el.name === name) choose = false;
            })
            if (choose) {
                tempArr.push({ name, count: 0 });
            }

        })


        Object.entries(req.body).forEach(item => {
            if (item[1] && (item[1].length !== 0)) {
                item[0] = item[0].toLowerCase();
                if (item[1] instanceof Array) {
                    item[1].forEach(element => {
                        element = element.toLowerCase();
                        result.forEach(el => {
                            const { description, name } = el;
                            if (description === element) {
                                const index = tempArr.findIndex(x => x.name === name);
                                tempArr[index].count++;
                            }
                        })
                    })
                } else {
                    if (parseInt(item[1])) {

                        item[1] = parseInt(item[1]);
                    } else if (typeof item[1] === 'boolean') {
                        item[1] = 1;

                    }
                    result.forEach(el => {
                        let { name, symptom, description } = el;
                        if (parseInt(symptom)) {
                            symptom = parseInt(symptom);
                        } else {
                            symptom = symptom.toLowerCase();
                        }

                        if (symptom === item[0]) {
                            let choose = false
                            if (symptom === 'temperature' && item[1] > 38) {
                                choose = true;
                            } else if (symptom === 'pressure' && item[1] > 150) {
                                choose = true;
                            } else if (symptom === 'age') {
                                description = parseInt(description);
                                if (item[1] > description) choose = true;

                            } else if (symptom === 'sex') {
                                if (description === item[1]) choose = true;
                            } else {
                                choose = true;
                            }

                            if (choose) {
                                const index = tempArr.findIndex(x => x.name === name);
                                tempArr[index].count++;
                            }
                        }
                    })
                }
            }
        })
        const resultArr = [];
        let max = 4;
        tempArr.forEach(item => {
            const { name, count } = item;
            if (count >= max) {
                max = count;
                resultArr.push(name);
            }
        })
        res.json(resultArr);
    })

});


app.listen(3500, () => console.log('server fire'));
