window.onload = function(){
  search = window.location.search.substring(1)
  searchValues = search.split("&")
  project = {}
  searchValues.forEach((value) => {
    if(value.startsWith("project=")){
      projectName = value.substring(8)
    }
  })
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', 'files/projects.json', true);
  xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
          // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
          projects = JSON.parse(xobj.responseText);
          project = projects[projectName];
          console.log(project)
          titleHeader = document.getElementById("project-title");
          titleHeader.innerHTML = project["title"];
          projectDescription = document.getElementById("project-description");
          projectDescription.innerHTML = project["description"];
          projectCategory = document.getElementById("project-category");
          projectCategory.innerHTML = project["category"];
          projectDate = document.getElementById("project-date");
          projectDate.innerHTML = project["date"];
          projectImage1 = document.getElementById("project-image-1");
          projectImage1.src = project["image1"];
          projectImage2 = document.getElementById("project-image-2");
          projectImage2.src = project["image2"];
        }
  };
  xobj.send(null);
}
