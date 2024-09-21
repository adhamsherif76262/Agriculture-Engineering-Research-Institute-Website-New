var Institute_Branches_Title = document.getElementById("Institute_Branches_Page_Title");
var Institute_Branches_H1 = document.getElementById("Institute_Branches_H1");
var Institute_Branches_Section = document.getElementById(
  "Institute_Branches_Section"
);
var Institute_Branches_En = `
  <ol id = "OL_En">
      <li>
          <a class = "Departements_Links_En" href="./Departements/Rice_Mechanization_Center.html">Rice Mechanization Center in Mit El-Deeba Kafr El-Shiekh
            
          </a>
      </li>
      <li>
          <a class = "Departements_Links_En" href="./Departements/Testing_Reasearch_Station.html">Testing & Reasearch Station For Tractor
            & Farm Machinery In Sabhya Alexandria 
          </a>
      </li>
  </ol>
`;
var Institute_Branches_Ar = `
  <ol id = "OL_Ar">
      <li>
          <a class = "Departements_Links_Ar" href="./Departements/Rice_Mechanization_Center.html">
            مركز ميكنة الارز بميت الديبة كفر الشيخ
          </a>
      </li>
      <li>
          <a class = "Departements_Links_Ar" href="./Departements/Testing_Reasearch_Station.html">
          	محطة أبحاث و أختبار الجرارات و الالات الزراعية بالصبحية الاسكندرية
          </a>
      </li>
  </ol>
`;
function Institute_Branches_Load_Content_Ar() {
  Institute_Branches_H1.textContent = "فروع المعهد";
  Institute_Branches_H1.style.direction = "rtl";
  Institute_Branches_H1.style.fontFamily = "PT-Bold-Heading";
  HomePageTitle[0].innerHTML = "فروع المعهد";
  Institute_Branches_Section.innerHTML = Institute_Branches_Ar;
}
function Institute_Branches_Load_Content_En() {
  Institute_Branches_H1.style.direction = "ltr";
  Institute_Branches_H1.textContent = "Institute Branches";
  Institute_Branches_H1.style.fontFamily = "Arial-Black";
  HomePageTitle[0].innerHTML = "AERI Institute Branches Page";
  Institute_Branches_Section.innerHTML = Institute_Branches_En;
}

if (localStorage.getItem("Permenant_Language") === "English") {
  Institute_Branches_Load_Content_En();
}
if (localStorage.getItem("Permenant_Language") === "عربي") {
  Institute_Branches_Load_Content_Ar();
}
