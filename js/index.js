var SiteNameInput = document.getElementById("SiteNameInput");
var SiteUrlInput = document.getElementById("SiteUrlInput");


var favoriteSites = JSON.parse(localStorage.getItem("webSites")) ?? [] ;
console.log(favoriteSites);
displayBookmarks()


function addWebsite() {


  var visitedSites = {
    name: SiteNameInput.value,
    url: SiteUrlInput.value,
  };
  favoriteSites.push(visitedSites);
//   console.log(visitedSites);

    anyChange()
    clearForm();
   
  }

  function displayBookmarks(){
    var contentSites =""
  for (let i = 0; i < favoriteSites.length; i++) {
    contentSites +=  `
    
    <tr>
        <td>${i}</td>
        <td>${favoriteSites[i].name}</td>
        <td>${favoriteSites[i].url }</td>
        <td><a><button onclick="visitSite(${i})" class="btn btn-success">visit</button></a></td>
        <td><button onclick="deleteBookMark(${i})" class="btn btn-danger">Delete</button></td>
    </tr>
    `;
    document.getElementById("tableBody").innerHTML = contentSites
  }

  }

  function clearForm() {
    SiteNameInput.value="";
    SiteUrlInput.value=""; 
  }

  function anyChange() {
    localStorage.setItem("webSites",JSON.stringify(favoriteSites))
  displayBookmarks();

  }


function deleteBookMark(index) {
    favoriteSites.splice(index,1)
    anyChange()
}



// function visitSite(${i}) {

//     "<a></a>"
// }