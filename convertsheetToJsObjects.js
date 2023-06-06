const XLSX = require('xlsx');

/**
 map of the sheet key and actual key
    "اسم البرنامج": "name",
    "مدة البرنامج": "duration",
    "طريقة الحضور": "attendance",
    "وصف واضح للبرنامج يعكس طبيعته و العائد المرجو من حضوره":description,
    "المستوي الوظيفي المستهدف": "level",
    "الكفاءات الوظيفية التي يغطيها البرنامج": "job_category",
    "Pillar": "course_category",
    "Group" : "group",
    "Unit": "unit",
    "link": "link"
 */

const keyMap = {
    "اسم البرنامج": "name",
    "مدة البرنامج": "duration",
    "طريقة الحضور": "attendance",
    "وصف واضح للبرنامج يعكس طبيعته و العائد المرجو من حضوره": "description",
    "المستوي الوظيفي المستهدف ": "level",
    "ملاحظات": "notes",
    "الكفاءات الوظيفية التي يغطيها البرنامج ": "job_category",
    "الكفاءات الوظيفية التي يغطيها البرنامج": "job_category",
    "Pillar ": "course_category",
    "Group": "group",
    "Unit": "unit",
    "link ": "link",
    "link": "link"

}

/**
 *   {
    "name": "Trade Finance \n",
    "duration": "3 Hours",
    "attendance": "فصول - تعلم عن بعد",
    "description": "التعريف بنشاط تمويل التجارة الدولية و الاعتمادات المستندية وخطابات الضمان ",
    "level": "مصرفي ب",
    "undefined": "السنة الأولى ",
    "job_category": "التفكير بصورة تجارية",
    "course_category": "المهارات السلوكية والإدارية",
    "group": "قطاع الرقابه الداخليه",
    "unit": "قطاع الرقابه الداخليه",
    "link": "https://erpprodapp.nbe.ahly.bank:443/OA_HTML/RF.jsp?function_id=22702&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=5CFw--tRJEZSjpnYxxkFXg..&params=1AN-n2Yyda-qWUIsS9rdbOj1LEkqFrkIqBVgewKY.SFOpz74Zp-8WibSthQ280tD2l.2fb8swesWQ.WTNl38nw"
  },
 */
// console.log(keyMap["اسم البرنامج"]);
// Function to convert Excel sheet to an array of objects
function convertSheetToObjects(sheet) {
  const data = XLSX.utils.sheet_to_json(sheet);
  const result = [];

  data.forEach((row) => {
    const obj = {};

    Object.keys(row).forEach((key) => {
        // key = keyMap[key];
        // console.log(keyMap[key]);
      obj[keyMap[key]] = row[key];
    });

    result.push(obj);
  });

  return result;
}

// Function to read Excel file and convert to an array of objects
function convertXLSXToJSObject(filePath) {
  const workbook = XLSX.readFile(filePath);
  const firstSheetName = workbook.SheetNames[0];
  const firstSheet = workbook.Sheets[firstSheetName];

  const jsObject = convertSheetToObjects(firstSheet);
  return jsObject;
}

// Usage example
const filePath = process.argv[2];
console.log("generating objects from : " + filePath + " ..." + "\n");
const result = convertXLSXToJSObject(filePath);

// trm the data
result.forEach((obj) => {
    if (obj.name) {
        obj.name = obj.name.trim();
    }
    if (obj.duration) {
        obj.duration = obj.duration.trim();
    }
    if (obj.attendance) {
        obj.attendance = obj.attendance.trim();
    }
    if (obj.description) {
        obj.description = obj.description.trim();
    }
    if (obj.level) {
        obj.level = obj.level.trim();
    }
    if (obj.notes) {
        obj.notes = obj.notes.trim();
    }
    if (obj.job_category) {
        obj.job_category = obj.job_category.trim();
    }
    if (obj.course_category) {
        obj.course_category = obj.course_category.trim();
    }
    if (obj.group) {
        obj.group = obj.group.trim();
    }
    if (obj.unit) {
        obj.unit = obj.unit.trim();
    }
    if (obj.link) {
        obj.link = obj.link.trim();
    }

});

//write the result to a js file and export make eveyu key:value on a new line and every objects startes with new line
const fs = require('fs');
let js = JSON.stringify(result, null, 2);
fs.writeFileSync('result.js', 'export const result = ' + js);


// select objects that have course_category = "الحوكمة والرقابة"
const Government = result.filter((obj) => obj.course_category === "الحوكمة والرقابة");
// select objects that have course_category = "المهارات السلوكية والإدارية"
const Behavior = result.filter((obj) => obj.course_category === "المهارات السلوكية والإدارية");
// select objects that have course_category = "مستقبل الاعمال"
const Future = result.filter((obj) => obj.course_category === "مستقبل الاعمال");
// select objects that have course_category = "المهارات الفنية"
const Skills = result.filter((obj) => obj.course_category === "المهارات الفنية");
// select objects that have course_category = "الوعي التكنولوجي"
const Technology = result.filter((obj) => obj.course_category === "الوعي التكنولوجي");

js = JSON.stringify(Government, null, 2); 
fs.writeFileSync('src/pages/TrainingPlan/Government.js', 'export const Government = ' + js);

js = JSON.stringify(Behavior, null, 2); 
fs.writeFileSync('src/pages/TrainingPlan/Behavior.js', 'export const Behavior = ' + js);

js = JSON.stringify(Future, null, 2); 
fs.writeFileSync('src/pages/TrainingPlan/Future.js', 'export const Future = ' + js);

js = JSON.stringify(Technology, null, 2); 
fs.writeFileSync('src/pages/TrainingPlan/Technology.js', 'export const Technology = ' + js);

js = JSON.stringify(Skills, null, 2); 
fs.writeFileSync('src/pages/TrainingPlan/Skills.js', 'export const Skills = ' + js);


// get all  unique levels  in the result array strore them in an array and write them to a js file
const levels = [...new Set(result.map((obj) => obj.level))];
let js1 = JSON.stringify(levels, null, 2);

// get all groups in the result array strore them in an array and write them to a js file
const groups = [...new Set(result.map((obj) => obj.group))];
let js2 = JSON.stringify(groups, null, 2);

// get all units in the result array strore them in an array and write them to a js file
const units = [...new Set(result.map((obj) => obj.unit))];
let js3 = JSON.stringify(units, null, 2);


// for  each grruop in groups sellect its objects and the extract the unique units of the group makee map with key the group and value array of unique units and write it to a js file
const groupUnitsMap = {};
groups.forEach((group) => {
    const groupObjects = result.filter((obj) => obj.group === group);
    const groupUnits = [...new Set(groupObjects.map((obj) => obj.unit))];
    groupUnitsMap[group] = groupUnits;
});

let js4 = JSON.stringify(groupUnitsMap, null, 2);

fs.writeFileSync('src/pages/Registr/selectors.js', 'export const levels = ' + js1 + '\n' + 'export const groups = ' + js2 + '\n' + 'export const units = ' + js3 + '\n' + 'export const departments = ' + js4);

// fs.writeFileSync('sheets/selectors.js', 'export const levels = ' + js);
// fs.writeFileSync('sheets/groups.js', 'export const groups = ' + js);
// fs.writeFileSync('sheets/units.js', 'export const units = ' + js);


// console.log(Government.length);
// console.log(Behavior.length);
// console.log(Future.length);
// console.log(Skills.length);
// console.log(Technology.length);
// sum all 
// const sum = Government.length + Behavior.length + Future.length + Skills.length + Technology.length;
// console.log(sum);
// console.log(result.length);
