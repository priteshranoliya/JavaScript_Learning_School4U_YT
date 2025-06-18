const input = document.querySelector("#inp-name-email");
const ul = document.querySelector(".dict-list");
let dictList = [
  { name: "Alice", email: "alice456@gmail.com" },
  { name: "Ram", email: "ram2345@gmail.com" },
  { name: "Ravan", email: "ravan7869@gmail.com" },
  { name: "jaya", email: "jaya@gmail.com" },
];

function renderUsers(arr) {
  ul.innerHTML = "";
  if (arr.length === 0) {
    const li = document.createElement("li");
    li.innerHTML = `<p>No Users Available!</p>`;
    ul.append(li);
  } else {
    arr?.forEach((item, idx) => {
      const li = document.createElement("li");
      li.innerHTML = `<p>${item.name}</p><p>${item.email}</p>`;
      ul.append(li);
    });
  }
}

renderUsers(dictList);

function handleChange(e) {
  const searchTerm = e.target.value;
  const filteredData = dictList?.filter((item, idx) => {
    return (
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
  renderUsers(filteredData);
}
input.addEventListener("input", handleChange);
