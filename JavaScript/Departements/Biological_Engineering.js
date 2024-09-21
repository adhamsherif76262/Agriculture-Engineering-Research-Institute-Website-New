var Biological_Engineering_Page_Title = document.getElementById(
  "Biological_Engineering_Page_Title"
);
// var Biological_Engineering_H1 = document.getElementById(
//   "Biological_Engineering_H1"
// );
var Biological_Engineering_Span_1 = document.getElementById(
  "Biological_Engineering_Span_1"
);
var Biological_Engineering_Span_2 = document.getElementById(
  "Biological_Engineering_Span_2"
);

var BE_Objectives_Section_H2 = document.getElementById(
  "BE_Objectives_Section_H2"
);
var BE_Objectives_Section = document.getElementById(
  "BE_Objectives_Section"
);
var BE_Objectives_Section_Ar = `
    <ol class="alternating-colors OB_OL_AR">
        <li class="BE_Objectives_Section_LI">
            <strong>تطوير تقنيات زراعية مبتكرة ومستدامة</strong>
            <p>تعزيز الإنتاجية الزراعية وتحسين جودة المحاصيل مع تقليل استخدام الموارد الطبيعية مثل المياه والطاقة والحفاظ على البيئة.</p>
        </li>
        <li class="BE_Objectives_Section_LI">
            <strong>تحسين الكفاءة في العمليات الزراعية </strong>
            <p>استخدام التكنولوجيا الحيوية والهندسة الحيوية لتطوير معدات وأنظمة ذكية تقلل الجهد البشري وتعزز الكفاءة الإنتاجية.</p>
        </li>
        <li class="BE_Objectives_Section_LI">
            <strong>تعزيز مقاومة المحاصيل وتحسين صحة التربة </strong>
            <p>تطوير محاصيل مقاومة للآفات والأمراض والظروف المناخية الصعبة، وتطبيق تقنيات حيوية لتحسين قدرة التربة على الاحتفاظ بالموارد.</p>
        </li>
        <li class="BE_Objectives_Section_LI">
            <strong>نقل التكنولوجيا المتقدمة وتكييفها مع الظروف المحلية</strong>
            <p>تكييف التكنولوجيا المتطورة لتناسب الحيازات الزراعية المصرية وتعزيز استيعاب المزارعين لها.</p>
        </li>
        <li class="BE_Objectives_Section_LI">
            <strong>تحقيق الأمن الغذائي وتنمية المهارات البشرية</strong>
            <p>تحسين تقنيات الإنتاج لتحقيق الأمن الغذائي على المدى الطويل وتعزيز وعي المزارعين باستخدام التكنولوجيا عبر نشر نتائج البحوث.</p>
        </li>
    </ol>
`;
var BE_Objectives_Section_En = `
  <ol class="alternating-colors">
    <li class = "BE_Objectives_Section_LI" >
      <strong>Development of innovative and sustainable agricultural technologies: </strong>
      <p>Enhancing agricultural productivity and improving crop quality while minimizing the use of natural resources such as water and energy, and promoting environmental conservation.</p>
    </li>
    <li class = "BE_Objectives_Section_LI" >
      <strong>Improving efficiency in agricultural operations: </strong>
      <p>Utilizing biotechnology and bioengineering to develop intelligent equipment and systems that reduce human effort and enhance production efficiency.</p>
    </li>
    <li class = "BE_Objectives_Section_LI" >
      <strong>Enhancing crop resistance and improving soil health</strong>
      <p>Developing crops that are resistant to pests, diseases, and adverse climatic conditions, and applying biotechnological techniques to improve the soil's ability to retain resources.</p>
    </li>
    <li class = "BE_Objectives_Section_LI" >
      <strong>Adapting advanced technologies to local conditions: </strong>
      <p>Tailoring advanced technologies to fit the needs of Egyptian farms and enhancing farmers' adoption of these innovations.</p>
    </li>
    <li class = "BE_Objectives_Section_LI" >
      <strong>Achieving food security and developing human skills: </strong>
      <p>Improving production techniques to ensure long-term food security and raising farmers' awareness of technology use by disseminating research findings.</p>
    </li>
  </ol>
`;

var BE_Research_Fields_Section_H2 = document.getElementById(
  "BE_Research_Fields_Section_H2"
);
var BE_Research_Fields_Section = document.getElementById(
  "BE_Research_Fields_Section"
);
var BE_Research_Fields_Section_Ar = `

<ul id = "BE_Research_Fields_Section_UL">
  <li id = "BE_Research_Fields_Section_LI">تطبيق الذكاء الاصطناعي وتقنيات الاستشعار لتحسين الزراعة: تعزيز دقة العمليات الزراعية وإدارة المحاصيل من خلال تحليل البيانات وتقليل الفاقد.</li>
  <li id = "BE_Research_Fields_Section_LI">تطوير معدات زراعية مستدامة وذكية: تصميم معدات تعتمد على الطاقة المتجددة وتقنيات الأمان لزيادة الكفاءة وتقليل البصمة الكربونية.</li>
  <li id = "BE_Research_Fields_Section_LI">تصميم أنظمة ري ذكية وفعالة: استخدام البيانات البيئية في الوقت الفعلي لتحسين كفاءة استخدام المياه.</li>
  <li id = "BE_Research_Fields_Section_LI">تطوير روبوتات وتقنيات ما بعد الحصاد: تحسين عمليات الزراعة والحصاد وتخزين المحاصيل لضمان الجودة وزيادة عمر التخزين.</li>
  <li id = "BE_Research_Fields_Section_LI">تطبيق التكنولوجيا المتقدمة في إعادة التدوير والزراعة العمودية: تحويل المخلفات الزراعية إلى طاقة وأسمدة، وتحسين إنتاجية المحميات والمساحات الصغيرة.</li>
</ul>
`;
var BE_Research_Fields_Section_En = `
  <ul id = "BE_Research_Fields_Section_UL">
  	<li id = "BE_Research_Fields_Section_LI">Application of artificial intelligence and sensing technologies to improve agriculture: Enhancing the precision of agricultural operations and crop management through data analysis and reducing waste.</li>
  	<li id = "BE_Research_Fields_Section_LI">Development of sustainable and intelligent agricultural equipment: Designing equipment that utilizes renewable energy and safety technologies to increase efficiency and reduce carbon footprint.</li>
  	<li id = "BE_Research_Fields_Section_LI">Design of smart and efficient irrigation systems: Using real-time environmental data to optimize water use efficiency.</li>
  	<li id = "BE_Research_Fields_Section_LI">Development of robotics and post-harvest technologies: Improving farming, harvesting, and crop storage processes to ensure quality and extend storage life.</li>
  	<li id = "BE_Research_Fields_Section_LI">Application of advanced technology in recycling and vertical farming: Converting agricultural waste into energy and fertilizers, and enhancing productivity in greenhouses and small spaces.</li>
  </ul>
`;

var BE_Achieviements_Section_H2 = document.getElementById(
  "BE_Achieviements_Section_H2"
);
var BE_Achieviements_Section = document.getElementById(
  "BE_Achieviements_Section"
);
var BE_Achieviements_Section_Ar = `
<section class="XXXXX" id = "BE_Achieviements_Section_Ar">
    <div class="XXXXX__slider">
        <div class="XXXXX__slide">
            <div class="XXXXX__column">
                <a class="XXXXX__list-item">
                    <div class="XXXXX__list-icon">
                        <div class="XXXXX__svg-container">
                          <img src="../../Images/green-tick.gif" alt="">
                        </div>
                    </div>
                    <div class="XXXXX__label">
                      : تطوير آلات حصاد مبتكرة تعمل بالطاقة الشمسية<br><br> تصميم آلات لحصاد الأرز، الذرة، وفول الصويا
                      بكفاءة عالية وتقليل الاعتماد على الطاقة التقليدية
                    </div>
                </a>
                <a class="XXXXX__list-item">
                    <div class="XXXXX__list-icon">
                        <div class="XXXXX__svg-container">
                          <img src="../../Images/green-tick.gif" alt="">
                        </div>
                    </div>
                    <div class="XXXXX__label">
                      : إدارة المخلفات الزراعية وإعادة تدويرها <br><br>تطوير أنظمة لتحويل المخلفات الزراعية إلى طاقة
                      حيوية وأسمدة عضوية، مما يعزز الاستدامة
                    </div>
                </a>
                <a class="XXXXX__list-item">
                    <div class="XXXXX__list-icon">
                        <div class="XXXXX__svg-container">
                          <img src="../../Images/green-tick.gif" alt="">
                        </div>
                    </div>
                    <div class="XXXXX__label">
                      : استخدام تقنيات صديقة للبيئة في الزراعة<br><br>تطوير أنظمة زراعية مثل غرف استنبات الشعير وأنظمة
                      التبريد باستخدام الطاقة الشمسية لتقليل استهلاك الطاقة وزيادة الإنتاجية
                    </div>
                </a>
                <a class="XXXXX__list-item">
                    <div class="XXXXX__list-icon">
                        <div class="XXXXX__svg-container">
                          <img src="../../Images/green-tick.gif" alt="">
                        </div>
                    </div>
                    <div class="XXXXX__label">
                       : ابتكار تقنيات لمكافحة الآفات وتحسين جودة التصنيف <br><br>ابتكار تقنيات لمكافحة الآفات وتحسين
                       جودة التصنيف: تصميم أجهزة لمكافحة الآفات باستخدام الطاقة الشمسية وتطوير وحدات تصنيف المحاصيل
                       والأسماك بتكنولوجيا الرؤية الآلية
                    </div>
                </a>
                <a class="XXXXX__list-item">
                    <div class="XXXXX__list-icon">
                        <div class="XXXXX__svg-container">
                          <img src="../../Images/green-tick.gif" alt="">
                        </div>
                    </div>
                    <div class="XXXXX__label">
                       : تعقيم التربة باستخدام الموجات فوق الصوتية <br><br>تطوير أجهزة تعقيم للتربة المستخدمة في الزراعة
                       المائية لتحسين جودة المياه والنباتات
                    </div>
                </a>
            </div>
        </div>
    </div>
</section>
`;
var BE_Achieviements_Section_En = `
<section class="XXXXX" id = "BE_Achieviements_Section_En">
    <div class="XXXXX__slider">
        <div class="XXXXX__slide">
            <div class="XXXXX__column">
                <a class="XXXXX__list-item">
                    <div class="XXXXX__list-icon">
                        <div class="XXXXX__svg-container">
                          <img src="../../Images/green-tick.gif" alt="">
                        </div>
                    </div>
                    <div class="XXXXX__label">
                        Development of innovative solar-powered harvesting machines: <br><br>Designing machines for
                        efficiently harvesting rice, corn, and soybeans, reducing dependence on conventional energy
                        sources.
                    </div>
                </a>
                <a class="XXXXX__list-item">
                    <div class="XXXXX__list-icon">
                        <div class="XXXXX__svg-container">
                          <img src="../../Images/green-tick.gif" alt="">
                        </div>
                    </div>
                    <div class="XXXXX__label">
                        Agricultural waste management and recycling: <br><br>Developing systems to convert agricultural waste
                        into bioenergy and organic fertilizers, promoting sustainability.
                    </div>
                </a>
                <a class="XXXXX__list-item">
                    <div class="XXXXX__list-icon">
                        <div class="XXXXX__svg-container">
                          <img src="../../Images/green-tick.gif" alt="">
                        </div>
                    </div>
                    <div class="XXXXX__label">
                        Use of eco-friendly technologies in agriculture: <br><br>Developing agricultural systems such as
                        barley sprouting chambers and solar-powered cooling systems to reduce energy consumption and
                        boost productivity.
                    </div>
                </a>
                <a class="XXXXX__list-item">
                    <div class="XXXXX__list-icon">
                        <div class="XXXXX__svg-container">
                          <img src="../../Images/green-tick.gif" alt="">
                        </div>
                    </div>
                    <div class="XXXXX__label">
                        Innovation in pest control and crop sorting technologies: <br><br>Designing solar-powered pest
                        control devices and developing automated systems for sorting crops and fish using machine vision
                        technology.
                    </div>
                </a>
                <a class="XXXXX__list-item">
                    <div class="XXXXX__list-icon">
                        <div class="XXXXX__svg-container">
                          <img src="../../Images/green-tick.gif" alt="">
                        </div>
                    </div>
                    <div class="XXXXX__label">
                        Soil sterilization using ultrasound technology: <br><br>Developing ultrasound-based soil
                        sterilization devices for hydroponic farming to improve water and plant quality.
                    </div>
                </a>
            </div>
        </div>
    </div>
</section>
`;
function Biological_Engineering_Load_Content_Ar() {
    Biological_Engineering_Span_1.textContent = "نظم الهندسة";
    Biological_Engineering_Span_2.textContent = "الحيوية الزراعية";
    HomePageTitle[0].innerHTML = "نظم الهندسة الحيوية الزراعية";
    BE_Objectives_Section_H2.innerHTML = "الأهداف الرئيسية للقسم ";
    BE_Objectives_Section.innerHTML = BE_Objectives_Section_Ar;
    BE_Objectives_Section.style.direction = "rtl"
    BE_Research_Fields_Section_H2.innerHTML = "المجالات البحثية للقسم";
    BE_Research_Fields_Section.innerHTML = BE_Research_Fields_Section_Ar;
    BE_Research_Fields_Section.style.direction = "rtl";
    BE_Achieviements_Section_H2.innerHTML = "انجازات القسم";
    BE_Achieviements_Section.innerHTML = BE_Achieviements_Section_Ar;
  }
  function Biological_Engineering_Load_Content_En() {
    Biological_Engineering_Span_1.textContent = "Biological";
    Biological_Engineering_Span_2.textContent = "Engineering";
    HomePageTitle[0].innerHTML = "AERI Biological Engineering Page";
    BE_Objectives_Section.innerHTML = BE_Objectives_Section_En;
    BE_Objectives_Section.style.direction = "ltr"
    BE_Research_Fields_Section_H2.innerHTML = "Department Research Fields";
    BE_Research_Fields_Section.innerHTML = BE_Research_Fields_Section_En;
    BE_Research_Fields_Section.style.direction = "ltr";
    BE_Achieviements_Section.innerHTML = BE_Achieviements_Section_En;
    BE_Achieviements_Section.style.direction = "ltr";
}

if (localStorage.getItem("Permenant_Language") === "English") {
  Biological_Engineering_Load_Content_En();
}
if (localStorage.getItem("Permenant_Language") === "عربي") {
  Biological_Engineering_Load_Content_Ar();
}
