const totalCatagories = document.querySelectorAll('.item');
console.log("Number of catagories :", totalCatagories.length); 

totalCatagories.forEach(function (item) {
    return console.log("Category:", item.children[0].textContent, "Elements:", item.children[1].children.length);
}); 