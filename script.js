const appContainer = document.getElementById('container');
const mode = document.getElementById('choose-mode');
const calcConversion = document.getElementById('calc-conv');
const calcArea = document.getElementById('calc-area');
const conversionInput = document.getElementById('conv-input');
const conversionOutput = document.getElementById('conv-res');
const areaResult = document.getElementById('area-res');
const convTable = document.getElementById('conv-table');

const measures = {
    'm': {
        meters: 1,
        yards: 1.093613,
        feet: 3.28084,
        inches: 39.37008,
        centimeter: 100,
        milimeters: 1000
    },
    'yd': {
        meters: 0.9144,
        yards: 1,
        feet: 3,
        inches: 36,
        centimeter: 91.44,
        milimeters: 914.4
    },
    'ft': {
        meters: 0.3048,
        yards: 0.3333333,
        feet: 1,
        inches: 12,
        centimeter: 30.48,
        milimeters: 304.8
    },
    'in': {
        meters: 0.0254,
        yards: 0.02777778,
        feet: 0.08333333,
        inches: 1,
        centimeter: 2.54,
        milimeters: 25.4
    },
    'cm': {
        meters: 0.01,
        yards: 0.01093613,
        feet: 0.0328084,
        inches: 0.3937008,
        centimeter: 1,
        milimeters: 10
    },
    'mm': {
        meters: 0.001,
        yards: 0.001093613,
        feet: 0.00328084,
        inches: 0.03937008,
        centimeter: 0.1,
        milimeters: 1
    }
}

const inputEval = (str) => {
    const cleanStr = str.replace(/\s+/g, "");
    const unitType = cleanStr.match(/cm|mm|in|ft|yd|m/).join('');
    const numberMatch = cleanStr.match(/[\d.]+/g);
    const number = numberMatch[0];

    if (!numberMatch || !unitType) {
        conversionOutput.innerHTML = "Invalid input";
        return;
    }

    if (!measures[unitType]) {
        conversionOutput.innerHTML = "Unknown unit";
        return;
    }

    convertUnits(number, measures[unitType])

}

const convertUnits = (num, obj) => {
    const number = parseFloat(num);

    convTable.innerHTML = ``    
    for (const key in obj) {
        console.log(obj[key])
        const converted = Math.round(number * obj[key] * 100) / 100;
        convTable.innerHTML += `
        <tr>
            <th id="${key}">${key}:</th>
            <td>${converted}</td>
        </tr>`
    }
}

calcConversion.addEventListener('click', () => {
    inputEval(conversionInput.value);
})