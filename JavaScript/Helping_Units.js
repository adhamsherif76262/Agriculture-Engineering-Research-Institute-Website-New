var Helping_Units_Title = document.getElementById("Helping_Units_Page_Title");
var Helping_Units_H1 = document.getElementById("Helping_Units_H1");
var Central_Laboratory = document.getElementById("Central_Laboratory");
var National_Laboratory = document.getElementById("National_Laboratory");

var Central_Laboratory_Ar = `
  <p id="Overview_P">
      المعمل المركزي لأجهزة القياس بمعهد بحوث الهندسة الزراعية هو من أهم إنجازات المعهد، وقد تأسس بهدف دعم وتطوير
      البحث العلمي في مجال الهندسة الزراعية. المعمل يجمع جميع أجهزة القياس المتخصصة في مكان واحد لتسهيل وصول
      الباحثين إليها، مما يسهم في تعزيز جودة البحوث العلمية والتطبيقية في هذا المجال.
  </p>
  <h2>كيفية الاستفادة من الخدمات:</h2>
  <ul>
      <li class="Services_LI">
          <h3>
              ١. الاستعارة المباشرة
          </h3>
          <p>تتيح هذه الخدمة استعارة الأجهزة التي لا تتطلب خبرات فنية متقدمة في القياس. تشمل هذه الأجهزة أدوات مثل
              أجهزة قياس سرعات الدوران، سرعة الهواء، ودرجات الحرارة والرطوبة. الخدمة متاحة لجميع الباحثين من معاهد
              البحوث والجامعات المتخصصة في الهندسة الزراعية، مما يعزز من مستوى البحوث التطبيقية والقياسات الدقيقة
              وفقًا للمعايير العالمية.</p>
      </li>
      <li class="Services_LI">
          <h3>
              ٢. القياسات البحثية المتخصصة
          </h3>
          <p>تتوفر هذه الخدمة للأجهزة التي تحتاج إلى خبرات فنية وهندسية عالية لإجراء التجارب. يقوم فريق من
              المتخصصين بتنفيذ هذه القياسات التي تشمل أجهزة معقدة لقياس قدرات الآلات الزراعية، سواء كانت آلات
              معلقة، مقطورة، أو دوارة، بالإضافة إلى قياس العزوم وقوى الشد.</p>
      </li>
  </ul>
  <article>
      <h4>أنواع أجهزة القياس:</h4>
      <dl>
        <div class = "Types_Div">
          <dt>أجهزة أبحاث هندسة الأراضي والمياه :</dt>
          <dd>تشمل أدوات قياس معدلات الري، خصائص التربة، والموارد المائية.</dd>
        </div>
        <div class = "Types_Div">
          <dt>أجهزة ميكنة العمليات الزراعية:</dt>
          <dd>مختصة بقياس أداء وكفاءة الآلات المستخدمة في الزراعة الميكانيكية.</dd>
        </div>
        <div class = "Types_Div">
          <dt>أجهزة الأمن المهني: </dt>
          <dd>تُستخدم لقياس الإجهادات الواقعة على العمال أثناء تشغيل الآلات الزراعية.</dd>
        </div>
        <div class = "Types_Div">
          <dt>أجهزة التحكم البيئي وهندسة المنتجات الزراعية: </dt>
          <dd>مخصصة للتحكم في العوامل البيئية المرتبطة بالمنتجات الزراعية، مثل الرطوبة ودرجات الحرارة، والتي تؤثر
              على جودة الحصاد.
          </dd>
        </div>
      </dl>
  </article>
  <h2>فروع المعمل المركزي:</h2>
  <header role="banner" id="Central_Laboratory_Branches_Ar">
      <nav class="nav" role="navigation">
          <ul class="nav__list">
              <li>
                  <input id="group-1" type="checkbox" hidden />
                  <label for="group-1">
                      <p>المعمل الفرعي بمركز ميكنة الأرز - ميت الديبة (كفر الشيخ): </p>
                      <span class="fa fa-angle-left"></span>
                  </label>
                  <ul class="group-list_Ar">
                      <li><a href="#">يختص هذا المعمل بالأجهزة المستخدمة في عمليات ما بعد الحصاد مثل التجفيف،
                              التخزين، والتدريج. بالإضافة إلى ذلك، يحتوي المعمل على أجهزة للتحكم في الظروف
                              المناخية داخل الصوب الزراعية، بما يتماشى مع احتياجات المزارع والبحوث التي تُجرى
                              في
                              جامعات وسط الدلتا.</a></li>
                  </ul>
              </li>
              <li>
                  <input id="group-2" type="checkbox" hidden />
                  <label for="group-2">
                      <p>المعمل الفرعي بمحطة بحوث واختبار الجرارات والآلات الزراعية - الصبحية (الإسكندرية):
                      </p>
                      <span class="fa fa-angle-left"></span>
                  </label>
                  <ul class="group-list_Ar">
                      <li><a href="#">معمل متخصص في قياس أداء الجرارات والآلات الزراعية. ويحتوي على أحدث
                              المعدات
                              التي تقيس القدرات الميكانيكية المستهلكة في العمليات الزراعية، كما يوفر أجهزة
                              لقياس
                              العزوم، الشد على قضيب الجر، واستهلاك الوقود. بالإضافة إلى ذلك، يقدم المعمل
                              اختبارات
                              متخصصة في مجال الطاقة المتجددة لتطوير حلول مستدامة للقطاع الزراعي.</a></li>
                  </ul>
              </li>
          </ul>
      </nav>
  </header>
`;
var Central_Laboratory_En = `
        <p id="Overview_P">
            The Central Laboratory for Measurement Devices at the Agricultural Engineering Research Institute is one of
            the institute's most significant achievements. It was established to support and advance scientific research
            in the field of agricultural engineering. The lab brings together all specialized measurement devices in one
            place, facilitating easy access for researchers, which enhances the quality of scientific and applied
            research in this field.
        </p>
        <h2>How to Access the Services:</h2>
        <ul>
            <li class="Services_LI">
                <h3>
                    I. Direct Loan:
                </h3>
                <p>This service allows the loaning of devices that do not require advanced technical expertise in
                    measurement. These include tools such as rotational speed meters, air velocity meters, and
                    temperature and humidity gauges. The service is available to all researchers from research
                    institutes and universities specializing in agricultural engineering, contributing to higher levels
                    of applied research and precise measurements according to global standards.</p>
            </li>
            <li class="Services_LI">
                <h3>
                    II. Specialized Research Measurements:
                </h3>
                <p>This service is available for devices that require high technical and engineering expertise to
                    conduct experiments. A team of specialists carries out these measurements, which include complex
                    devices used to measure the capabilities of agricultural machinery, whether they are mounted, towed,
                    or rotating machines, in addition to measuring torque and traction forces.</p>
            </li>
        </ul>
        <article>
            <h4>Types of Measurement Devices:</h4>
            <dl>
                <div class="Types_Div">
                  <dt>Land and Water Engineering Research Devices:</dt>
                  <dd>These include tools for measuring irrigation rates, soil properties, and water resources.</dd>
                </div>

                <div class="Types_Div">
                  <dt>Agricultural Mechanization Devices:</dt>
                  <dd>These devices are specialized in measuring the performance and efficiency of machinery used in mechanical agriculture.</dd>
                </div>
                <div class="Types_Div">
                  <dt>Occupational Safety Devices:</dt>
                  <dd>These are used to measure the stresses workers are exposed to while operating agricultural machinery.</dd>
                </div>
                <div class="Types_Div">
                  <dt>Environmental Control and Agricultural <br>Product Engineering Devices:</dt>
                  <dd>These are designed to control environmental factors related to agricultural products, such as humidity and temperature, which affect harvest quality.</dd>
                </div>
            </dl>
        </article>
        <h2>Branches Of The Central Laboratory</h2>
        <header role="banner" id="Central_Laboratory_Branches_En">
            <nav class="nav" role="navigation">
                <ul class="nav__list">
                    <li>
                        <input id="group-1" type="checkbox" hidden />
                        <label for="group-1"><span class="fa fa-angle-right"></span>Laboratory Branch at the Rice
                            Mechanization Center - Mit El-Diba (Kafr El-Sheikh):</label>
                        <ul class="group-list_En">
                            <li><a href="#">Enhancing productivity and reducing waste by employing modern technologies,
                                    including innovations in harvesting machines and crop handling.</a></li>
                        </ul>
                    </li>
                    <li>
                        <input id="group-2" type="checkbox" hidden />
                        <label for="group-2"><span class="fa fa-angle-right"></span>Laboratory Branch at the Research
                            and Testing Station for Tractors and Agricultural Machinery - El-Sabehyia
                            (Alexandria):</label>
                        <ul class="group-list_En">
                            <li><a href="#">Developing specialized equipment such as palm tree climbing tools and robots
                                    to
                                    carry out agricultural tasks like planting, irrigation, and harvesting.</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
`;

var National_Laboratory_Ar = `
    <h2>المعمل القومي لاختبار مكونات شبكات الري الحقلي:</h2>
    <p id="Overview_P">
        يُعد المعمل القومي لاختبار مكونات شبكات الري الحقلي جزءاً أساسياً من قسم بحوث هندسة الري والصرف الحقلي في معهد
        بحوث الهندسة الزراعية، التابع لوزارة الزراعة واستصلاح الأراضي. يهدف المعمل إلى تقديم خدمات متكاملة تختص باختبار
        وتقييم معدات ومكونات شبكات الري وفقاً لمعايير الجودة العالمية والمحلية.
    </p>
    <h2>أهداف المعمل</h2>
    <ul>
        <li class="Services_LI">
            <p>اختبار معدات ومكونات شبكات الري الحقلي لضمان جودتها وملاءمتها للبيئات الزراعية المختلفة.</p>
        </li>
        <li class="Services_LI">
            <p>مساعدة مصممي شبكات الري في تحديد المواصفات والمكونات المثلى لأنظمة الري.</p>
        </li>
        <li class="Services_LI">
            <p>تقديم دورات تدريبية متخصصة للطلاب والخريجين لتأهيلهم لسوق العمل في مجال شبكات الري.</p>
        </li>
    </ul>

    <article>
        <h4>الاختبارات التي يجريها المعمل:</h4>
        <dl>
            <div class="Types_Div">
                <dt>الاختبارات الفيزيائية</dt>
                <dd>تشمل قياس الأبعاد، مثل القطر والسُمك، للتأكد من مطابقة المنتجات للمواصفات.</dd>
            </div>
            <div class="Types_Div">
                <dt>الاختبارات الكيميائية: </dt>
                <dd>مثل اختبار كلوريد الميثيلين والأسيتون لاختبار جودة المواد المستخدمة ومقاومتها للعوامل البيئية.</dd>
            </div>
            <div class="Types_Div">
                <dt>الاختبارات الحرارية</dt>
                <dd>مثل اختبار التمدد الحراري لتقييم مقاومة المواد للتغيرات الحرارية.</dd>
            </div>
            <div class="Types_Div">
                <dt>الاختبارات الهيدروليكية: </dt>
                <dd>تشمل اختبار الضغط وفاقد الاحتكاك، لتحديد كفاءة الشبكات تحت ظروف العمل المختلفة.</dd>
            </div>
            <div class="Types_Div">
                <dt>الاختبارات الميكانيكية:</dt>
                <dd>مثل اختبار الصدمات لتحديد قدرة تحمل المكونات للاستخدام القاسي.</dd>
            </div>
        </dl>
    </article>

    <h2>الأجهزة المستخدمة في المعمل</h2>
    <div id="Equipment_OL_Container">
        <ol class="list">
            <li class="item">
                <h5 class="headline">Ultrasonic Flow Meter: </h5>
                <span>جهاز لقياس سرعة تدفق الماء داخل الأنابيب، مما يساعد في تحديد تصرف الأنابيب ونوع السريان (رقائقي أو
                    مضطرب).</span>
            </li>
            <li class="item">
                <h5 class="headline">Burst Pressure Test Facility: </h5>
                <span>لقياس مدى تحمل الأنابيب للضغط العالي.</span>
            </li>
            <li class="item">
                <h5 class="headline">Drip Flow Rate Laboratory Test Facility: </h5>
                <span>لاختبار معدلات التدفق في أنظمة الري بالتنقيط.</span>
            </li>
            <li class="item">
                <h5 class="headline">Clogging Susceptibility for Drip Irrigation System Test Facility:</h5>
                <span>لتقييم مدى عرضة أنظمة الري بالتنقيط للانسداد.</span>
            </li>
        </ol>
    </div>
`;
var National_Laboratory_En = `
    <h2>The National Laboratory for Testing Field Irrigation Networks</h2>
    <p id="Overview_P">
        The National Laboratory for Testing Field Irrigation Networks Components is part of the Department of Irrigation
        and Drainage Engineering at the Agricultural Engineering Research Institute, under the Ministry of Agriculture
        and Land Reclamation. The laboratory provides comprehensive services for testing and evaluating irrigation
        equipment and components according to international and local quality standards.
    </p>
    <h2>Laboratory Objectives:</h2>
    <ul>
        <li class="Services_LI">
            <p>I. Testing irrigation network components to ensure their quality and suitability for various agricultural environments.</p>
        </li>
        <li class="Services_LI">
            <p>II. Assisting irrigation network designers in determining optimal specifications and components for irrigation systems.</p>
        </li>
        <li class="Services_LI">
            <p>III. Providing specialized training courses for students and graduates to prepare them for the job market in irrigation networks.</p>
        </li>
    </ul>

    <article>
        <h4>Tests Conducted by the Laboratory:</h4>
        <dl>
            <div class="Types_Div">
                <dt>Physical Tests: </dt>
                <dd>Including measurements of dimensions such as diameter and thickness to ensure compliance with
                    standards.</dd>
            </div>
            <div class="Types_Div">
                <dt>Chemical Tests: </dt>
                <dd>Such as the Methylene Chloride and Acetone tests to assess material quality and resistance to
                    environmental factors.</dd>
            </div>
            <div class="Types_Div">
                <dt>Thermal Tests: </dt>
                <dd>Including heat expansion tests to evaluate material resistance to thermal changes.</dd>
            </div>
            <div class="Types_Div">
                <dt>Hydraulic Tests</dt>
                <dd>Including pressure and friction loss tests to assess network efficiency under different operating
                    conditions.</dd>
            </div>
            <div class="Types_Div">
                <dt>Mechanical Tests: </dt>
                <dd>Including impact tests to determine the durability of components under harsh conditions.</dd>
            </div>
        </dl>
    </article>

    <h2>Equipment Used in the Laboratory:</h2>
    <div id="Equipment_OL_Container">
        <ol class="list">
            <li class="item">
                <h5 class="headline">Ultrasonic Flow Meter: </h5>
                <span>Measures the flow rate of water in pipes, helping determine pipe discharge and flow type (laminar
                    or turbulent).</span>
            </li>
            <li class="item">
                <h5 class="headline">Burst Pressure Test Facility: </h5>
                <span>Measures the ability of pipes to withstand high pressure.</span>
                
            </li>
            <li class="item">
                <h5 class="headline">Drip Flow Rate Laboratory Test Facility: </h5>
                <span>Tests the flow rates in drip irrigation systems.</span>
            </li>
            <li class="item">
                <h5 class="headline">Clogging Susceptibility for Drip Irrigation System Test Facility:</h5>
                <span>Evaluates the susceptibility of drip irrigation systems to clogging.</span>
            </li>
        </ol>
    </div>
`;
function Helping_Units_Load_Content_Ar() {
  Helping_Units_H1.textContent = "المعمل المركزي لأجهزة القياس";
  HomePageTitle[0].innerHTML = "وحدات مساعدة";
  Central_Laboratory.innerHTML = Central_Laboratory_Ar;
  Central_Laboratory.style.direction = "rtl";
  National_Laboratory.innerHTML = National_Laboratory_Ar;
  National_Laboratory.style.direction = "rtl"
}
function Helping_Units_Load_Content_En() {
  Helping_Units_H1.textContent = "Central Laboratory for Measurement Devices";
  HomePageTitle[0].innerHTML = "AERI Helping Units Page";
  Central_Laboratory.innerHTML = Central_Laboratory_En;
  Central_Laboratory.style.direction = "ltr";
  National_Laboratory.innerHTML = National_Laboratory_En;
  National_Laboratory.style.direction = "ltr"
}

if (localStorage.getItem("Permenant_Language") === "English") {
  Helping_Units_Load_Content_En();
}
if (localStorage.getItem("Permenant_Language") === "عربي") {
  Helping_Units_Load_Content_Ar();
}
