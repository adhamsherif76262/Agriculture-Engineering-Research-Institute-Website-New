var Research_ProjectsTitle = document.getElementById("Research_Projects_Page_Title");
var Research_Projects_H1 = document.getElementById("Research_Projects_H1");
var Carousel_Section = document.getElementById("Carousel_Section");

var Carousel_Section_Ar = `
  <div class="carousel-caption">
      <h1>Carousel Caption</h1> <!-- This will be dynamically updated -->
  </div>
  <div class="carousel-container">
      <div class="carousel">
          <div class="carousel-slide slide1 active"></div>
          <div class="carousel-slide slide2"></div>
          <div class="carousel-slide slide3"></div>
          <div class="carousel-slide slide4"></div>
          <div class="carousel-slide slide5"></div>
          <div class="carousel-slide slide6"></div>
          <div class="carousel-slide slide7"></div>
          <div class="carousel-slide slide8"></div>
          <div class="carousel-slide slide9"></div>
          <div class="carousel-slide slide10"></div>
          <div class="carousel-slide slide11"></div>
          <div class="carousel-slide slide12"></div>
          <div class="carousel-slide slide13"></div>
          <div class="carousel-slide slide14"></div>
          <div class="carousel-slide slide15"></div>
          <div class="carousel-slide slide16"></div>
          <div class="carousel-slide slide17"></div>
      </div>
      <!-- Indicators -->
      <div class="indicators">
          <span class="dot active"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
      </div>
      <!-- Buttons for slide selection -->
      <div class="slide-buttons">
          <button type="button" class="slide-button" data-index="0">١</button>
          <button type="button" class="slide-button" data-index="1">٢</button>
          <button type="button" class="slide-button" data-index="2">٣</button>
          <button type="button" class="slide-button" data-index="3">٤</button>
          <button type="button" class="slide-button" data-index="4">٥</button>
          <button type="button" class="slide-button" data-index="5">٦</button>
          <button type="button" class="slide-button" data-index="6">٧</button>
          <button type="button" class="slide-button" data-index="7">٨</button>
          <button type="button" class="slide-button" data-index="8">٩</button>
          <button type="button" class="slide-button" data-index="9">١٠</button>
          <button type="button" class="slide-button" data-index="10">١١</button>
          <button type="button" class="slide-button" data-index="11">١٢</button>
          <button type="button" class="slide-button" data-index="12">١٣</button>
          <button type="button" class="slide-button" data-index="13">١٤</button>
          <button type="button" class="slide-button" data-index="14">١٥</button>
          <button type="button" class="slide-button" data-index="15">١٦</button>
          <button type="button" class="slide-button" data-index="16">١٧</button>
      </div>
  </div>
`;
var Carousel_Section_En = `
          <div class="carousel-caption">
            <h1>Carousel Caption</h1> <!-- This will be dynamically updated -->
        </div>
        <div class="carousel-container">
            <div class="carousel">
                <div class="carousel-slide slide1 active"></div>
                <div class="carousel-slide slide2"></div>
                <div class="carousel-slide slide3"></div>
                <div class="carousel-slide slide4"></div>
                <div class="carousel-slide slide5"></div>
                <div class="carousel-slide slide6"></div>
                <div class="carousel-slide slide7"></div>
                <div class="carousel-slide slide8"></div>
                <div class="carousel-slide slide9"></div>
                <div class="carousel-slide slide10"></div>
                <div class="carousel-slide slide11"></div>
                <div class="carousel-slide slide12"></div>
                <div class="carousel-slide slide13"></div>
                <div class="carousel-slide slide14"></div>
                <div class="carousel-slide slide15"></div>
                <div class="carousel-slide slide16"></div>
                <div class="carousel-slide slide17"></div>
            </div>
            <!-- Indicators -->
            <div class="indicators">
                <span class="dot active"></span>
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
            </div>
            <!-- Buttons for slide selection -->
            <div class="slide-buttons">
                <button type="button" class="slide-button" data-index="0">1</button>
                <button type="button" class="slide-button" data-index="1">2</button>
                <button type="button" class="slide-button" data-index="2">3</button>
                <button type="button" class="slide-button" data-index="3">4</button>
                <button type="button" class="slide-button" data-index="4">5</button>
                <button type="button" class="slide-button" data-index="5">6</button>
                <button type="button" class="slide-button" data-index="6">7</button>
                <button type="button" class="slide-button" data-index="7">8</button>
                <button type="button" class="slide-button" data-index="8">9</button>
                <button type="button" class="slide-button" data-index="9">10</button>
                <button type="button" class="slide-button" data-index="10">11</button>
                <button type="button" class="slide-button" data-index="11">12</button>
                <button type="button" class="slide-button" data-index="12">13</button>
                <button type="button" class="slide-button" data-index="13">14</button>
                <button type="button" class="slide-button" data-index="14">15</button>
                <button type="button" class="slide-button" data-index="15">16</button>
                <button type="button" class="slide-button" data-index="16">17</button>
            </div>
        </div>
`;
function Research_Projects_Load_Content_Ar() {
  Research_Projects_H1.textContent = "المشاريع البحثية بالمعهد";
  HomePageTitle[0].innerHTML = "مشاريع بحثية";
  Carousel_Section.innerHTML = Carousel_Section_Ar;
  Carousel_Section.style.direction = "rtl";
  const slides = document.querySelectorAll(".carousel-slide");
  const dots = document.querySelectorAll(".dot");
  const buttons = document.querySelectorAll(".slide-button");
  const caption = document.querySelector(".carousel-caption h1"); // Caption element

    const captions = [
      "تحسين نظام الميكنة الزراعية المستدامة فى محافظتى المنيا والفيوم",
      "تحسين انتاجية المياه، بتطوير ادارة الرى الحقلى بالمنيا و الفيوم",
      "التصميم والتصنيع المحلى لوحدات الرى المحورى (بيفوت)",
      "الطريقه الجديده للاستهلاك المائى والفعلى وتحديث قيم معامل المحصول فى مصر",
      "تكنولوجيا صوامع الحبوب الافقية متوسطة السعة 400-500 طن",
      " التصنيع المحلى لقطع غيار الآلات والمعدات الزراعية",
      "تصميم وتصنيع مقطورة مبتكرة لنقل حبوب القمح من أماكن الانتاج الى شون التخزين",
      "تعظيم الاستفاده من شونه بلومبرج المطوره",
      "تصميم وتصنيع مجففات للعنب تعمل بالطاقة الشمسية و الاشعة تحت الحمراء",
      "النهوض بزراعة و حصاد و تسويق النباتات الطبية و العطرية",
      "تدوير المخلفات الزراعية لمنتجات اقتصادية متنوعة",
      "مشروع تطوير نظم انتاج واستخدام الغاز الحيوى",
      "استخدام تكنولوجيا الانعكاس الطيفى كطريقة غير متلفة لقياس جودة درنات البطاطس",
      "طريقة مبتكرة للزراعة الدقيقة الكهروميكانيكية لبنجر السكر و الذرة",
      "التخزين الآمن لبعض بذور النباتات الطبية والعطرية",
      "التدابير الصحية النباتية المتكاملة والقيمة المضافة: نحو الحفاظ علي جودة ما بعد الحصاد واطالة عمر تخزين الطماطم",
      "آلة تسطير القمح علي مصاطب",
    ];

  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      dots[i].classList.remove("active");
      buttons[i].classList.remove("active");
    });

    slides[index].classList.add("active");
    dots[index].classList.add("active");
    buttons[index].classList.add("active");

    caption.textContent = captions[index]; // Update caption text
  }

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      currentSlide = index;
      showSlide(currentSlide);
    });
  });

  // Automatic slide show functionality (optional)
  // setInterval(() => {
  //   currentSlide = (currentSlide + 1) % slides.length;
  //   showSlide(currentSlide);
  // }, 10000); // Change slide every 5 seconds

  // Initial call to display the first slide
  showSlide(currentSlide);
}
function Research_Projects_Load_Content_En() {
  Research_Projects_H1.textContent = "Institute Research Projects";
  HomePageTitle[0].innerHTML = "AERI Research Projects Page";
  Carousel_Section.innerHTML = Carousel_Section_En;
  Carousel_Section.style.direction = "ltr";
  const slides = document.querySelectorAll(".carousel-slide");
  const dots = document.querySelectorAll(".dot");
  const buttons = document.querySelectorAll(".slide-button");
  const caption = document.querySelector(".carousel-caption h1"); // Caption element

  const captions = [
    "Improving the sustainable agricultural mechanization system in Minya and Fayoum governorates",
    "Improving water productivity by developing field irrigation management in Minya and Fayoum",
    "Design and Local Manufacturing of a Pivot Unit Irrigation",
    "The new method for actual water consumption and updating crop factor values in Egypt",
    "Technology of horizontal grain silos with medium capacity of (400-500) tons",
    "Local manufacturing of agricultural machinery and equipment spare parts",
    "Design and fabrication of an Innovative trailer for wheat transport from points of production to points of storage.",
    "Maximizing the benefit from the developed Bloomberg feature",
    "Design and Manufacture of Grape Dryer Suitable for Medium and Small Scale Farms",
    "Promoting the cultivation, processing, and marketing of medicinal and aromatic plants",
    "Recycling of Agricultural Waste for Various Economic Products",
    "A project to develop biogas production and use systems",
    "Using spectral reflectance technology as a non-destructive method to measure the quality of potato tubers",
    "An innovative method for electromechanical precision cultivation of sugar beets and corn",
    "Safe Storage of Some Medical and Aromatic Seeds Using Ultraviolet and Different Types of Hermetic Bags",
    "Integrated phytosanitary measures and value addition: towards maintaining postharvest quality and extending the storage life of tomato",
    "Raised bed seed drill",
  ];

  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      dots[i].classList.remove("active");
      buttons[i].classList.remove("active");
    });

    slides[index].classList.add("active");
    dots[index].classList.add("active");
    buttons[index].classList.add("active");

    caption.textContent = captions[index]; // Update caption text
  }

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      currentSlide = index;
      showSlide(currentSlide);
    });
  });

  // Automatic slide show functionality (optional)
  // setInterval(() => {
  //   currentSlide = (currentSlide + 1) % slides.length;
  //   showSlide(currentSlide);
  // }, 10000); // Change slide every 5 seconds

  // Initial call to display the first slide
  showSlide(currentSlide);
}

if (localStorage.getItem("Permenant_Language") === "English") {
  Research_Projects_Load_Content_En();
}
if (localStorage.getItem("Permenant_Language") === "عربي") {
  Research_Projects_Load_Content_Ar();
}