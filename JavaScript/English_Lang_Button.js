function Switch_NavBar_Lang_En(){
    HomePageTitle[0].setAttribute("lang", "en");
    Ar_Nav.classList.add("D_None");
    En_Nav.classList.remove("D_None");
    En_Nav.innerHTML = En_NavTemplate;
}
function Switch_Footer_Lang_En(){
  Main_Footer[0].innerHTML = En_FooterTemplate;
}
// async function Store_Encrypted_Lang_En() {
//   const EncryptedData = await encryptData(password, "English");
//   localStorage.setItem("Permenant_Language", JSON.stringify(EncryptedData));
// }
function LangBtnEnClick() {
  console.log("onclick=LangBtnEnClick()");
  
  localStorage.setItem("Permenant_Language" , "English");
  console.log("The Language Now is :: " + localStorage.getItem("Permenant_Language"));
  // Store_Encrypted_Lang_En();
  Switch_Footer_Lang_En();
  Switch_NavBar_Lang_En();

    switch (true) {
      case location.href.includes("/Institute_Sections") ||
        location.href.includes("/institute_sections"):
        console.log("Heloo from Institute Sections ENG");
        HomePageTitle[0].innerHTML = "AERI Institute Sections Page";
        IS_Load_Content_En();
        break;
      case location.href.includes("/Patents") ||
        location.href.includes("/patents"):
        console.log("Heloo from Patents ENG");
        HomePageTitle[0].innerHTML = "AERI Technological Applications Page";
        Patents_Load_Content_En();
        break;

      case location.href.includes("/Collaborations") ||
        location.href.includes("/collaborations"):
        console.log("Heloo from contact ENG");
        Contact_Load_Content_En();
        console.log(Contact_H1);
        HomePageTitle[0].innerHTML = "AERI Collaborations Page";
        break;
      case location.href.includes("/Helping_Units") ||
        location.href.includes("/helping_units"):
        console.log("Heloo from Helping Units ENG");
        HomePageTitle[0].innerHTML = "AERI Helping Units Page";
        Helping_Units_Load_Content_En();
        break;

      case location.href.includes("/Institute_Branches") ||
        location.href.includes("/institute_branches"):
        console.log("Heloo from Institute Branches ENG");
        HomePageTitle[0].innerHTML = "AERI Institute Branches Page";
        Institute_Branches_Load_Content_En();
        break;

      case location.href.includes("/Previous_Presidents") ||
        location.href.includes("/previous_presidents"):
        console.log("Heloo from Previous Presidents ENG");
        HomePageTitle[0].innerHTML = "AERI Previous Presidents Page";
        Previous_Presidents_Load_Content_En();
        break;

      case location.href.includes("/Research_Projects") ||
        location.href.includes("/research_projects"):
        console.log("Heloo from Research Projects ENG");
        HomePageTitle[0].innerHTML = "AERI Research Projects Page";
        Research_Projects_Load_Content_En();
        break;

      case location.href.includes("/Overview") ||
        location.href.includes("/overview"):
        console.log("Heloo from Overview ENG");
        HomePageTitle[0].innerHTML = "AERI Overview Page";
        Overview_Load_Content_En();
        break;

      case location.href.includes("/Agricultural_Mechanization_OS") ||
        location.href.includes("/agricultural_mechanization_os"):
        console.log("Heloo from Agricultural_Mechanization_OS_Page ENG");
        HomePageTitle[0].innerHTML = "AERI AMOS Page";
        Agricultural_Mechanization_OS_Load_Content_En();
        break;

      case location.href.includes("/Agricultural_Power_Energy") ||
        location.href.includes("/agricultural_power_energy"):
        console.log(
          "Heloo from Agricultural_Power_Energy_Page En" +
            Agricultural_Power_Energy_Page_Title
        );
        HomePageTitle[0].innerHTML = "AERI Agricultural Power & Energy Page";
        Agricultural_Power_Energy_Load_Content_En();
        break;

      case location.href.includes("/Animal_Production_Mechanization") ||
        location.href.includes("/animal_production_mechanization"):
        console.log(
          "Heloo from Animal_Production_Mechanization En" +
            Animal_Production_Mechanization_Page_Title
        );
        HomePageTitle[0].innerHTML =
          "AERI Animal Production & Mechanization Page";
        Animal_Production_Mechanization_Load_Content_En();
        break;

      case location.href.includes("/Biological_Engineering") ||
        location.href.includes("/biological_engineering"):
        console.log(
          "Heloo from Biological_Engineering En" +
            Biological_Engineering_Page_Title
        );
        HomePageTitle[0].innerHTML = "AERI Biological Engineering";
        Biological_Engineering_Load_Content_En();
        break;

      case location.href.includes("/Handling_Processing_D") ||
        location.href.includes("/handling_processing_d"):
        console.log(
          "Heloo from Handling_Processing_D Ar" +
            Handling_Processing_D_Page_Title
        );
        HomePageTitle[0].innerHTML = "AERI Crop Handling & Processing Page";
        Handling_Processing_D_Load_Content_En();
        break;

      case location.href.includes("/Irrigation_Engineering_RD") ||
        location.href.includes("/irrigation_engineering_rd"):
        console.log(
          "Heloo from Irrigation Engineering RD En" +
            Irrigation_Engineering_RD_Page_Title
        );
        HomePageTitle[0].innerHTML =
          "AERI Irrigation Engineering Research Page";
        Irrigation_Engineering_RD_Load_Content_En();
        break;

      case location.href.includes("/Rice_Mechanization_Center") ||
        location.href.includes("/rice_mechanization_center"):
        console.log(
          "Heloo from Rice Mechanization Center En" +
            Rice_Mechanization_Center_Page_Title
        );
        HomePageTitle[0].innerHTML = "AERI Rice Mechanization Center Page";
        Rice_Mechanization_Center_Load_Content_En();
        break;

      case location.href.includes("/Testing_Reasearch_Station") ||
        location.href.includes("/testing_reasearch_station"):
        console.log(
          "Heloo from Testing Reasearch Station En" +
            Testing_Reasearch_Station_Page_Title
        );
        HomePageTitle[0].innerHTML =
          "AERI Testing & Reasearch Station For Tractor & Farm Machinery Page";
        Testing_Reasearch_Station_Load_Content_En();
        break;

      default:
        console.log("Heloo from Home ENG");
        HomePageTitle[0].innerHTML = "AERI Home Page";
        Home_Load_Content_En();
        break;
    }
}
