function calculate() {
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;

    // แปลงค่าเป็นตัวเลข
    var weightNum = parseFloat(weight);
    var heightNum = parseFloat(height);

    heightNum = height/100;

    // คำนวณ BMI ตามสูตร
    var bmi = weightNum / (heightNum * heightNum);

    // แสดงผลลัพธ์ใน element ที่มี id="BMI"
    document.getElementById("BMI").innerHTML = bmi.toFixed(2); // ปัดเศษทศนิยม
}