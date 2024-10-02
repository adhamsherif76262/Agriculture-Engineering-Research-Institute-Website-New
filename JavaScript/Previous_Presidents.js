var Previous_Presidents_Title = document.getElementById(
  "Previous_Presidents_Page_Title"
);
var Previous_Presidents_H1 = document.getElementById(
  "Previous_Presidents_H1"
);


var PP_TimeLine_Section = document.getElementById("PP_TimeLine_Section");

var PP_TimeLine_Section_Ar = `
  <div class="timeline">
      <div class="container left">
          <div class="Content_Ar">
              <h2>من فبراير ١٩٨٣ إلى يوليو ١٩٩٤</h2>
              <h2>الأستاذ الدكتور أحمد فريد الصهريجي</h2>
              <a rel="noopener" class="frame" href="../Images/Previous Presidents/PP_1_Final.jpeg" target="_blank"
                  style="--img: url('../../../../Downloads/PP_1_Final-removebg-preview.png');"></a>
          </div>
      </div>
      <div class="container right">
          <div class="Content_Ar">
              <h2>من ١٩٩٤ إلى يوليو ١٩٩٧</h2>
              <h2>الأستاذ الدكتور عبد الغني الجندي</h2>
              <a rel="noopener" class="frame" href="../Images/Previous Presidents/PP_2_Final.jpeg" target="_blank"
                  style="--img: url('../Images/Previous Presidents/PP_2_Final_New.png');"></a>
          </div>
      </div>
      <div class="container left">
          <div class="Content_Ar">
              <h2>من يوليو ١٩٩٧ إلى مايو ٢٠٠٥</h2>
              <h2>الأستاذ الدكتور عزمي محمود البري</h2>
              <a rel="noopener" class="frame" href="../Images/Previous Presidents/PP_3_Final.jpeg" target="_blank"
                  style="--img: url('../Images/Previous Presidents/PP_3_Final_New.png');"></a>
          </div>
      </div>
      <div class="container right">
          <div class="Content_Ar">
              <h2>من مايو ٢٠٠٥ إلى مايو ٢٠١٠</h2>
              <h2>أ.د. جمال حسن السعيد</h2>
              <a rel="noopener" class="frame" href="../Images/Previous Presidents/PP_4_Final.jpeg" target="_blank"
                  style="--img: url('../Images/Previous Presidents/PP_4_Final_New.png');"></a>
          </div>
      </div>
      <div class="container left">
          <div class="Content_Ar">
              <h2>من مايو ٢٠١٠ إلى مايو ٢٠١١</h2>
              <h2>بروفيسور دكتور حسن البنا عثمان</h2>
              <a rel="noopener" class="frame" href="../Images/Previous Presidents/PP_5_Final.jpeg" target="_blank"
                  style="--img: url('../Images/Previous Presidents/PP_5_Final_New.png');"></a>
          </div>
      </div>
      <div class="container right">
          <div class="Content_Ar">
              <h2>من مايو ٢٠١١ إلى يناير ٢٠١٩</h2>
              <h2>الأستاذ الدكتور عصام الدين واصف</h2>
              <a rel="noopener" class="frame" href="../Images/Previous Presidents/PP_6_Final.jpeg" target="_blank"
                  style="--img: url('../Images/Previous Presidents/PP_6_Final_New.png');"></a>
          </div>
      </div>
      <div class="container left">
          <div class="Content_Ar">
              <h2>من يناير ٢٠١٩ إلى أبريل ٢٠٢١</h2>
              <h2>بروفيسور دكتور محمد مصطفى الخولي</h2>
              <a rel="noopener" class="frame" href="../Images/Previous Presidents/PP_7_Final.jpeg" target="_blank"
                  style="--img: url('../Images/Previous Presidents/PP_7_Final_New.png');"></a>
          </div>
      </div>
  </div>;
`;
var PP_TimeLine_Section_En = `
  <div class="timeline">
      <div class="container left">
          <div class="Content_En">
              <h2>From February 1983 To July 1994</h2>
              <h2>Prof. Dr. Ahmed Farid El-Sahrigi</h2>
              <a rel="noopener" class="frame" href="../Images/Previous Presidents/PP_1_Final.jpeg" target="_blank"
              style="--img: url('../Images/Previous Presidents/PP_1_Final.jpeg');"></a>
          </div>
      </div>
      <div class="container right">
          <div class="Content_En">
              <h2>From 1994 To July 1997</h2>
              <h2>Prof. Dr. Abd El-Ghany El-Gendi</h2>
              <a rel="noopener" class="frame" href="../Images/Previous Presidents/PP_2_Final.jpeg" target="_blank"
              style="--img: url('../Images/Previous Presidents/PP_2_Final.jpeg');"></a>
          </div>
      </div>
      <div class="container left">
          <div class="Content_En">
              <h2>From July 1997 To May 2005</h2>
              <h2>Prof. Dr. Azmy Mahmoud El-Berri</h2>
              <a rel="noopener" class="frame" href="../Images/Previous Presidents/PP_3_Final.jpeg" target="_blank"
                  style="--img: url('../Images/Previous Presidents/PP_3_Final.jpeg');"></a>
          </div>
      </div>
      <div class="container right">
          <div class="Content_En">
              <h2>From May 2005 To May 2010</h2>
              <h2>Prof. Dr. Gamal Hassan El-Said</h2>
              <a rel="noopener" class="frame" href="../Images/Previous Presidents/PP_4_Final.jpeg" target="_blank"
                  style="--img: url('../Images/Previous Presidents/PP_4_Final.jpeg');"></a>
          </div>
      </div>
      <div class="container left">
          <div class="Content_En">
              <h2>From May 2010 To May 2011</h2>
              <h2>Prof. Dr. Hassan El-Banna Osman</h2>
              <a rel="noopener" class="frame" href="../Images/Previous Presidents/PP_5_Final.jpeg" target="_blank"
                  style="--img: url('../Images/Previous Presidents/PP_5_Final.jpeg');"></a>
          </div>
      </div>
      <div class="container right">
          <div class="Content_En">
              <h2>From May 2011 To January 2019</h2>
              <h2>Prof. Dr. Essam El-Dein Wassef</h2>
              <a rel="noopener" class="frame" href="../Images/Previous Presidents/PP_6_Final.jpeg" target="_blank"
                  style="--img: url('../Images/Previous Presidents/PP_6_Final.jpeg');"></a>
          </div>
      </div>
      <div class="container left">
          <div class="Content_En">
              <h2>From January 2019 To April 2021</h2>
              <h2>Prof. Dr. Mohamed Mostafa El-kholli</h2>
              <a rel="noopener" class="frame" href="../Images/Previous Presidents/PP_7_Final.jpeg" target="_blank"
                  style="--img: url('../Images/Previous Presidents/PP_7_Final.jpeg');"></a>
          </div>
      </div>
  </div>;
`;


function Previous_Presidents_Load_Content_Ar() {
  Previous_Presidents_H1.textContent = "المديرين السابقين للمعهد";
  Previous_Presidents_H1.style.direction = "rtl"
  HomePageTitle[0].innerHTML = "المديرين السابقين";
  PP_TimeLine_Section.innerHTML = PP_TimeLine_Section_Ar;
  const frames = document.querySelectorAll(".frame");
  const nSliceX = 8; // Number of slices in X direction
  const nSliceY = 8; // Number of slices in Y direction
  const nSlice = nSliceX * nSliceY; // Total number of slices
  frames.forEach((frame) => {
    // Create slices dynamically for each frame
    for (let i = 0; i < nSlice; i++) {
      const slice = document.createElement("div");
      slice.classList.add("slice");
      // Calculate background position for the original image
      const bgPosX = (i % nSliceX) * (100 / (nSliceX - 1)) + "%"; // Calculate x position
      const bgPosY = Math.floor(i / nSliceX) * (100 / (nSliceY - 1)) + "%"; // Calculate y position
      slice.style.backgroundPosition = `${bgPosX} ${bgPosY}`; // Set background position
      frame.appendChild(slice); // Append slice to frame
    }
    // Function to animate slices on hover
    function animateSlicesOnHover() {
      const slices = frame.querySelectorAll(".slice");
      slices.forEach((slice) => {
        slice.style.transition = "transform 0.5s ease"; // Set transition for each slice
        const translateX = Math.random() * 100 - 50 + "vw"; // New random value
        const translateY = Math.random() * 50 - 25 + "vh"; // New random value
        const rotate = Math.random() * 360 + "deg"; // New random rotation
        slice.style.transform = `translate(${translateX}, ${translateY}) rotate(${rotate})`; // Move to random position
      });
    }
    // Function to animate slices back to original positions
    function animateSlicesOnUnhover() {
      const slices = frame.querySelectorAll(".slice");
      slices.forEach((slice) => {
        slice.style.transition = "transform 0.5s ease"; // Set transition for each slice
        slice.style.transform = "translate(0, 0) rotate(0)"; // Reset to original position
      });
    }
    // Add event listeners for hover and unhover
    frame.addEventListener("mouseenter", animateSlicesOnHover); // Trigger animation on hover
    frame.addEventListener("mouseleave", animateSlicesOnUnhover); // Trigger animation on unhover
  });

}
function Previous_Presidents_Load_Content_En() {
  Previous_Presidents_H1.textContent = "Former Institute Directors";
  Previous_Presidents_H1.style.direction = "ltr"
  HomePageTitle[0].innerHTML = "AERI Previous Presidents Page";
  PP_TimeLine_Section.innerHTML = PP_TimeLine_Section_En;
  
const frames = document.querySelectorAll(".frame");
const nSliceX = 8; // Number of slices in X direction
const nSliceY = 8; // Number of slices in Y direction
const nSlice = nSliceX * nSliceY; // Total number of slices
frames.forEach((frame) => {
  // Create slices dynamically for each frame
  for (let i = 0; i < nSlice; i++) {
    const slice = document.createElement("div");
    slice.classList.add("slice");
    // Calculate background position for the original image
    const bgPosX = (i % nSliceX) * (100 / (nSliceX - 1)) + "%"; // Calculate x position
    const bgPosY = Math.floor(i / nSliceX) * (100 / (nSliceY - 1)) + "%"; // Calculate y position
    slice.style.backgroundPosition = `${bgPosX} ${bgPosY}`; // Set background position
    frame.appendChild(slice); // Append slice to frame
  }
  // Function to animate slices on hover
  function animateSlicesOnHover() {
    const slices = frame.querySelectorAll(".slice");
    slices.forEach((slice) => {
      slice.style.transition = "transform 0.5s ease"; // Set transition for each slice
      const translateX = Math.random() * 100 - 50 + "vw"; // New random value
      const translateY = Math.random() * 50 - 25 + "vh"; // New random value
      const rotate = Math.random() * 360 + "deg"; // New random rotation
      slice.style.transform = `translate(${translateX}, ${translateY}) rotate(${rotate})`; // Move to random position
    });
  }
  // Function to animate slices back to original positions
  function animateSlicesOnUnhover() {
    const slices = frame.querySelectorAll(".slice");
    slices.forEach((slice) => {
      slice.style.transition = "transform 0.5s ease"; // Set transition for each slice
      slice.style.transform = "translate(0, 0) rotate(0)"; // Reset to original position
    });
  }
  // Add event listeners for hover and unhover
  frame.addEventListener("mouseenter", animateSlicesOnHover); // Trigger animation on hover
  frame.addEventListener("mouseleave", animateSlicesOnUnhover); // Trigger animation on unhover
});

}

if (localStorage.getItem("Permenant_Language") === "English") {
  Previous_Presidents_Load_Content_En();
}
if (localStorage.getItem("Permenant_Language") === "عربي") {
  Previous_Presidents_Load_Content_Ar();
}