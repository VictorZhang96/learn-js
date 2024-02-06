window.onload = function() {
  document.getElementById('addTableBtn').addEventListener('click', addTable);
}

window.onload = function() {
  document.getElementById('addTableBtn').addEventListener('click', editTable);
}

function createTRNode(colNodes) {
  let trNode = document.createElement("tr");
  colNodes.forEach(function(colNode) {
    trNode.appendChild(colNode);
  })
  return trNode;
}

function createTDNode(childNode) {
  let tdNode = document.createElement("td");
  tdNode.classList.add('tdNode');
  tdNode.appendChild(childNode);
  return tdNode;
}

function createTxtNode(txt) {
  let txtNode = document.createTextNode(txt);
  return txtNode;
}

function removeTable() {
  const root = document.getElementById("root");
  const existingTable = root.querySelector("table");
  if (existingTable) {
    root.removeChild(existingTable);
  }
}

function editTable() {
  removeTable();

  const tableNode = document.createElement("table");
  for(let i = 0; i < 3; i++) {
    let col1 = createTDNode(createTxtNode("New Cell (" + i + ", 0)"));
    tableNode.appendChild(createTRNode([col1]));
  }
  document.getElementById("root").appendChild(tableNode);
}
