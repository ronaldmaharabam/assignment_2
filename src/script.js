const container = document.getElementById('container');
var temp = {
    "Item1" : 4,
    "Item2" : 1,
    "Item3" : 2,
    "Item4" : 3,
    "Item5" : 6,
    "Item6" : 5
}
var id_val = ["nav--bar", "side--bar", "banner", "content1", "content2", "footer"];
Object.keys(temp).forEach(key=> {
    console.log("running");
    const item = document.createElement('div');
    item.setAttribute('id', id_val[temp[key] - 1]);
    item.textContent = key;
    container.appendChild(item);
});