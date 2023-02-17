



tableData();
let id = "";
let update;

function task() {
  document.getElementById("nameErr").innerHTML = "";
  let name = document.getElementById("input").value;
  if (name == "") {
    document.getElementById("nameErr").innerHTML = "Enter Task";
  } else {
    if (id == "") {
      let arr = JSON.parse(localStorage.getItem("crud"));
      console.log(arr);

      if (arr == null) {
        arr = [name];
        localStorage.setItem("crud", JSON.stringify(arr));
      } else {
        arr.push(name);
        localStorage.setItem("crud", JSON.stringify(arr));
      }
      document.getElementById("input").value = "";
    } else {
      let arr = localStorageData();
      arr[update] = name;
      localStorage.setItem("crud", JSON.stringify(arr));
      document.getElementById("btn").innerText = "Add";
      document.getElementById("nameErr").innerHTML = "Task Updated..."
      id = "";
    }
  }
  tableData();
}

function tableData() {
  let arr = localStorageData();
  if (arr != null) {
    let box = "";
    let sno = 1;
    for (let key in arr) {
      box =
        box +
        `<tr><td>${sno}</td><td>${arr[key]}</td><td><a href=javascript:void(0) onclick="deleteData(${key})" id="link" class="btnLink">Delete</a> <a href=javascript:void(0) onclick="EditData(${key})"  class="btnLink">Edit</a></td>
              </tr>`;
      sno++;
    }
    document.getElementById("box").innerHTML = box;
  }
}
function deleteData(rid) {
  let arr = localStorageData();
  arr.splice(rid, 1);
  localStorage.setItem("crud", JSON.stringify(arr));
  tableData();
}

const EditData = (i) => {
  id = " i";
  update = i;
  let arr = localStorageData();
  document.getElementById("input").value = arr[i];
  document.getElementById("btn").innerText = "Edit";
};

function localStorageData() {
  let arr = JSON.parse(localStorage.getItem("crud"));
  return arr;
}
