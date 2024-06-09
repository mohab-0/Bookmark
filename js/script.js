var siteName = document.getElementById("bookmarkName");
var siteURL = document.getElementById("bookmarkURL");
var tableContent = document.getElementById("tableContent");
var bookmarks = [];
if (localStorage.getItem("bookmarks") != null) {
    bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    display(bookmarks);
}

// Submit function
function addSite() {
    var add = {
        site: siteName.value,
        link: siteURL.value
    }
    bookmarks.push(add)
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks))
    display(bookmarks)
    clearInput()
    console.log(bookmarks);
}

// display function
function display(list) {
    var dataList = ``;
    for (var i = 0; i < list.length; i++) {
        dataList += `<tr>
                    <td>${i + 1}</td>
                    <td>${list[i].site}</td>
                    <td><a class="btn btn-primary" href="${list[i].link}" target="_blank"><i class="fa-solid fa-eye pe-2"></i>Visit</a></td>
                    <td><button onclick="deleteSite(${i})" class="btn btn-danger"><i class=" pe-2 fa-solid fa-trash-can"></i>Delete</button></td>
                </tr>`
    }
    document.getElementById("tableContent").innerHTML = dataList;
}

// Clear input function
function clearInput() {
    siteName.value = "";
    siteURL.value = "";
}

// Delete button function
function deleteSite(index) {
    bookmarks.splice(index, 1)
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks))
    display(bookmarks)
}