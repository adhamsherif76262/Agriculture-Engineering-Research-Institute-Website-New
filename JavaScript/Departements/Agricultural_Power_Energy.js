var Agricultural_Power_Energy_Page_Title = document.getElementById(
  "Agricultural_Power_Energy_Page_Title"
);
var Agricultural_Power_Energy_H1 = document.getElementById(
  "Agricultural_Power_Energy_H1"
);
var Agricultural_Power_Energy_H2 = document.getElementById(
  "Agricultural_Power_Energy_H2"
);
var Research_Fields_Section = document.getElementById(
  "Research_Fields_Section"
);
var Objectives_Section = document.getElementById("Objectives_Section");
var Achievements_Section = document.getElementById("Achievements_Section");

var Research_Fields_Section_Ar = `
  <div class="carousel">
      <div class="carousel__body">
          <div class="carousel__prev"><i class="fa fa-angle-left"></i></div>
          <div class="carousel__next"><i class="fa fa-angle-right"></i></div>
          <div class="carousel__slider">
              <div class="carousel__slider__item">
                  <div class="item__3d-frame">
                      <div class="item__3d-frame__box item__3d-frame__box--front">
                          <h1>تطوير أنظمة الطاقة المتجددة في الزراعة من خلال تحسين استخدام الطاقة الشمسية وطاقة
                              الرياح وتطبيق تقنيات التخزين المتقدمة</h1>
                      </div>
                      <div class="item__3d-frame__box item__3d-frame__box--left"></div>
                      <div class="item__3d-frame__box item__3d-frame__box--right"> </div>
                  </div>
              </div>
              <div class="carousel__slider__item">
                  <div class="item__3d-frame">
                      <div class="item__3d-frame__box item__3d-frame__box--front">
                          <h1>دراسة وتحليل التفاعل بين المعدات الزراعية والتربة باستخدام تقنيات الاستشعار
                              الحديثة ونماذج المحاكاة الرقمية لتحسين كفاءة العمليات الزراعية</h1>
                      </div>
                      <div class="item__3d-frame__box item__3d-frame__box--left"></div>
                      <div class="item__3d-frame__box item__3d-frame__box--right"> </div>
                  </div>
              </div>
              <div class="carousel__slider__item">
                  <div class="item__3d-frame">
                      <div class="item__3d-frame__box item__3d-frame__box--front">
                          <h1>البحث في استخدام الطاقة الحيوية من خلال تطوير عمليات إنتاج الغاز الحيوي
                              والبيوديزل من المخلفات وتحسين كفاءة إنتاجها</h1>
                      </div>
                      <div class="item__3d-frame__box item__3d-frame__box--left"></div>
                      <div class="item__3d-frame__box item__3d-frame__box--right"> </div>
                  </div>
              </div>
              <div class="carousel__slider__item">
                  <div class="item__3d-frame">
                      <div class="item__3d-frame__box item__3d-frame__box--front">
                          <h1>استخدام التقنيات الحديثة مثل الذكاء الاصطناعي وإنترنت الأشياء لرفع كفاءة أنظمة
                              التحكم في الآلات الزراعية وتوفير استهلاك الطاقة</h1>
                      </div>
                      <div class="item__3d-frame__box item__3d-frame__box--left"></div>
                      <div class="item__3d-frame__box item__3d-frame__box--right"> </div>
                  </div>
              </div>
              <div class="carousel__slider__item">
                  <div class="item__3d-frame">
                      <div class="item__3d-frame__box item__3d-frame__box--front">
                          <h1>تحسين طرق تخزين الطاقة الشمسية وتطبيقها في الزراعة من خلال تصميم أنظمة تخزين
                              حرارية وكهربائية متطورة لتجفيف المحاصيل وتوليد الطاقة للمعدات</h1>
                      </div>
                      <div class="item__3d-frame__box item__3d-frame__box--left"></div>
                      <div class="item__3d-frame__box item__3d-frame__box--right"> </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
`;
var Research_Fields_Section_En = `
  <div class="carousel">
      <div class="carousel__body">
          <div class="carousel__prev"><i class="fa fa-angle-left"></i></div>
          <div class="carousel__next"><i class="fa fa-angle-right"></i></div>
          <div class="carousel__slider">
              <div class="carousel__slider__item">
                  <div class="item__3d-frame">
                      <div class="item__3d-frame__box item__3d-frame__box--front">
                          <h1>I. Developing renewable energy systems in agriculture, focusing on enhancing the use
                              of solar and wind energy, and applying advanced storage technologies.</h1>
                      </div>
                      <div class="item__3d-frame__box item__3d-frame__box--left"></div>
                      <div class="item__3d-frame__box item__3d-frame__box--right"> </div>
                  </div>
              </div>
              <div class="carousel__slider__item">
                  <div class="item__3d-frame">
                      <div class="item__3d-frame__box item__3d-frame__box--front">
                          <h1>II. Studying and analyzing the interaction between agricultural machinery and soil
                              using modern sensor technologies and digital simulation models to improve the
                              efficiency of agricultural operations.</h1>
                      </div>
                      <div class="item__3d-frame__box item__3d-frame__box--left"></div>
                      <div class="item__3d-frame__box item__3d-frame__box--right"> </div>
                  </div>
              </div>
              <div class="carousel__slider__item">
                  <div class="item__3d-frame">
                      <div class="item__3d-frame__box item__3d-frame__box--front">
                          <h1>III. Researching bioenergy use by developing processes for biogas and biodiesel
                              production from waste and improving production efficiency.</h1>
                      </div>
                      <div class="item__3d-frame__box item__3d-frame__box--left"></div>
                      <div class="item__3d-frame__box item__3d-frame__box--right"> </div>
                  </div>
              </div>
              <div class="carousel__slider__item">
                  <div class="item__3d-frame">
                      <div class="item__3d-frame__box item__3d-frame__box--front">
                          <h1>IV. Utilizing modern technologies such as artificial intelligence and the Internet of
                              Things to enhance control systems for agricultural machinery and optimize energy
                              consumption.</h1>
                      </div>
                      <div class="item__3d-frame__box item__3d-frame__box--left"></div>
                      <div class="item__3d-frame__box item__3d-frame__box--right"> </div>
                  </div>
              </div>
              <div class="carousel__slider__item">
                  <div class="item__3d-frame">
                      <div class="item__3d-frame__box item__3d-frame__box--front">
                          <h1>V. Improving solar energy storage methods and applications in agriculture by
                              designing advanced thermal and electrical storage systems for crop drying and energy
                              generation for machinery.</h1>
                      </div>
                      <div class="item__3d-frame__box item__3d-frame__box--left"></div>
                      <div class="item__3d-frame__box item__3d-frame__box--right"> </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
`;

var Objectives_Section_Ar = `
  <div class="Objectives_carousel">
      <div class="Objectives_carousel__scene">
          <ol class="Objectives_carousel__list">
              <li class="Objectives_carousel__cell">
                  <span class="song__year">.١</span>
                  <span class="song__title">تعظيم استخدام مصادر الطاقة المتجددة في التطبيقات الزراعية مثل
                      الطاقة الشمسية وطاقة الرياح، لتحقيق التنمية المستدامة وتقليل الاعتماد على مصادر الطاقة
                      التقليدية.</span>
              </li>
              <li class="Objectives_carousel__cell">
                  <span class="song__year">.٢</span>
                  <span class="song__title">تحسين كفاءة المعدات والآلات الزراعية باستخدام التقنيات الحديثة مثل
                      الذكاء الاصطناعي والتحكم الآلي لزيادة الإنتاجية وتقليل استهلاك الطاقة.</span>
              </li>
              <li class="Objectives_carousel__cell">
                  <span class="song__year">.٣</span>
                  <span class="song__title">تطوير أنظمة إنتاج الوقود الحيوي من المخلفات الزراعية والحيوانية بما
                      يشمل الغاز الحيوي والبيوديزل، للمساهمة في إنتاج طاقة نظيفة ومستدامة.</span></li>
              <li class="Objectives_carousel__cell">
                  <span class="song__year">.٤</span>
                  <span class="song__title">إجراء البحوث التطبيقية لتطوير حلول ميكانيكية وهندسية مبتكرة لتحسين
                      أداء الآلات الزراعية وتقليل استهلاك الطاقة في العمليات الزراعية المختلفة.</span>
              </li>
              <li class="Objectives_carousel__cell">
                  <span class="song__year">.٥</span>
                  <span class="song__title">التعاون مع القطاعين الخاص والعام لتطبيق الأبحاث وتطوير تقنيات جديدة
                      تسهم في دعم الاقتصاد الزراعي وحماية البيئة.</span>
              </li>
              <li class="Objectives_carousel__cell">
                  <span class="song__year">.١</span>
                  <span class="song__title">تعظيم استخدام مصادر الطاقة المتجددة في التطبيقات الزراعية مثل
                      الطاقة الشمسية وطاقة الرياح، لتحقيق التنمية المستدامة وتقليل الاعتماد على مصادر الطاقة
                      التقليدية.</span>
              </li>
              <li class="Objectives_carousel__cell">
                  <span class="song__year">.٢</span>
                  <span class="song__title">تحسين كفاءة المعدات والآلات الزراعية باستخدام التقنيات الحديثة مثل
                      الذكاء الاصطناعي والتحكم الآلي لزيادة الإنتاجية وتقليل استهلاك الطاقة.</span>
              </li>
              <li class="Objectives_carousel__cell">
                  <span class="song__year">.٣</span>
                  <span class="song__title">تطوير أنظمة إنتاج الوقود الحيوي من المخلفات الزراعية والحيوانية بما
                      يشمل الغاز الحيوي والبيوديزل، للمساهمة في إنتاج طاقة نظيفة ومستدامة.</span></li>
              <li class="Objectives_carousel__cell">
                  <span class="song__year">.٤</span>
                  <span class="song__title">إجراء البحوث التطبيقية لتطوير حلول ميكانيكية وهندسية مبتكرة لتحسين
                      أداء الآلات الزراعية وتقليل استهلاك الطاقة في العمليات الزراعية المختلفة.</span>
              </li>
              <li class="Objectives_carousel__cell">
                  <span class="song__year">.٥</span>
                  <span class="song__title">التعاون مع القطاعين الخاص والعام لتطبيق الأبحاث وتطوير تقنيات جديدة
                      تسهم في دعم الاقتصاد الزراعي وحماية البيئة.</span>
              </li>
              <li class="Objectives_carousel__cell">
                  <span class="song__year">.١</span>
                  <span class="song__title">تعظيم استخدام مصادر الطاقة المتجددة في التطبيقات الزراعية مثل
                      الطاقة الشمسية وطاقة الرياح، لتحقيق التنمية المستدامة وتقليل الاعتماد على مصادر الطاقة
                      التقليدية.</span>
              </li>
              <li class="Objectives_carousel__cell">
                  <span class="song__year">.٢</span>
                  <span class="song__title">تحسين كفاءة المعدات والآلات الزراعية باستخدام التقنيات الحديثة مثل
                      الذكاء الاصطناعي والتحكم الآلي لزيادة الإنتاجية وتقليل استهلاك الطاقة.</span>
              </li>
              <li class="Objectives_carousel__cell">
                  <span class="song__year">.٣</span>
                  <span class="song__title">تطوير أنظمة إنتاج الوقود الحيوي من المخلفات الزراعية والحيوانية بما
                      يشمل الغاز الحيوي والبيوديزل، للمساهمة في إنتاج طاقة نظيفة ومستدامة.</span></li>
              <li class="Objectives_carousel__cell">
                  <span class="song__year">.٤</span>
                  <span class="song__title">إجراء البحوث التطبيقية لتطوير حلول ميكانيكية وهندسية مبتكرة لتحسين
                      أداء الآلات الزراعية وتقليل استهلاك الطاقة في العمليات الزراعية المختلفة.</span>
              </li>
              <li class="Objectives_carousel__cell">
                  <span class="song__year">.٥</span>
                  <span class="song__title">التعاون مع القطاعين الخاص والعام لتطبيق الأبحاث وتطوير تقنيات جديدة
                      تسهم في دعم الاقتصاد الزراعي وحماية البيئة.</span>
              </li>
              <li class="Objectives_carousel__cell">
                  <span class="song__year">.١</span>
                  <span class="song__title">تعظيم استخدام مصادر الطاقة المتجددة في التطبيقات الزراعية مثل
                      الطاقة الشمسية وطاقة الرياح، لتحقيق التنمية المستدامة وتقليل الاعتماد على مصادر الطاقة
                      التقليدية.</span>
              </li>
              <li class="Objectives_carousel__cell">
                  <span class="song__year">.٢</span>
                  <span class="song__title">تحسين كفاءة المعدات والآلات الزراعية باستخدام التقنيات الحديثة مثل
                      الذكاء الاصطناعي والتحكم الآلي لزيادة الإنتاجية وتقليل استهلاك الطاقة.</span>
              </li>
              <li class="Objectives_carousel__cell">
                  <span class="song__year">.٣</span>
                  <span class="song__title">تطوير أنظمة إنتاج الوقود الحيوي من المخلفات الزراعية والحيوانية بما
                      يشمل الغاز الحيوي والبيوديزل، للمساهمة في إنتاج طاقة نظيفة ومستدامة.</span></li>
              <li class="Objectives_carousel__cell">
                  <span class="song__year">.٤</span>
                  <span class="song__title">إجراء البحوث التطبيقية لتطوير حلول ميكانيكية وهندسية مبتكرة لتحسين
                      أداء الآلات الزراعية وتقليل استهلاك الطاقة في العمليات الزراعية المختلفة.</span>
              </li>
              <li class="Objectives_carousel__cell">
                  <span class="song__year">.٥</span>
                  <span class="song__title">التعاون مع القطاعين الخاص والعام لتطبيق الأبحاث وتطوير تقنيات جديدة
                      تسهم في دعم الاقتصاد الزراعي وحماية البيئة.</span>
              </li>
          </ol>
      </div>
      <div class="Objectives_carousel__controls">
          <button type="button" class="previous-button">&#x1F446;&#x1F3FB;</button>
          <button type="button" class="next-button">&#x1F447;&#x1F3FB;</button>
      </div>
  </div>
`;
var Objectives_Section_En = `
  <div class="Objectives_carousel">
    <div class="Objectives_carousel__scene">
        <ol class="Objectives_carousel__list">
            <li class="Objectives_carousel__cell">
                <span class="song__year">I.</span>
                <span class="song__title">Maximizing the use of renewable energy sources in agricultural
                    applications such as solar and wind energy to achieve sustainable development and reduce
                    reliance on conventional energy sources.</span>
            </li>
            <li class="Objectives_carousel__cell">
                <span class="song__year">II.</span>
                <span class="song__title">Enhancing the efficiency of agricultural machinery and equipment by
                    utilizing modern technologies such as artificial intelligence and automated control systems
                    to increase productivity and reduce energy consumption.</span>
            </li>
            <li class="Objectives_carousel__cell">
                <span class="song__year">III.</span>
                <span class="song__title">Developing biofuel production systems from agricultural and animal
                    waste, including biogas and biodiesel, to contribute to the production of clean and
                    sustainable energy.</span></li>
            <li class="Objectives_carousel__cell">
                <span class="song__year">IV.</span>
                <span class="song__title">Conducting applied research to develop innovative mechanical and
                    engineering solutions that improve the performance of agricultural machinery and reduce
                    energy consumption in various agricultural operations.</span>
            </li>
            <li class="Objectives_carousel__cell">
                <span class="song__year">V.</span>
                <span class="song__title">Collaborating with both the private and public sectors to implement
                    research findings and develop new technologies that support the agricultural economy and
                    protect the environment.</span>
            </li>
            <li class="Objectives_carousel__cell">
                <span class="song__year">I.</span>
                <span class="song__title">Maximizing the use of renewable energy sources in agricultural
                    applications such as solar and wind energy to achieve sustainable development and reduce
                    reliance on conventional energy sources.</span>
            </li>
            <li class="Objectives_carousel__cell">
                <span class="song__year">II.</span>
                <span class="song__title">Enhancing the efficiency of agricultural machinery and equipment by
                    utilizing modern technologies such as artificial intelligence and automated control systems
                    to increase productivity and reduce energy consumption.</span>
            </li>
            <li class="Objectives_carousel__cell">
                <span class="song__year">III.</span>
                <span class="song__title">Developing biofuel production systems from agricultural and animal
                    waste, including biogas and biodiesel, to contribute to the production of clean and
                    sustainable energy.</span></li>
            <li class="Objectives_carousel__cell">
                <span class="song__year">IV.</span>
                <span class="song__title">Conducting applied research to develop innovative mechanical and
                    engineering solutions that improve the performance of agricultural machinery and reduce
                    energy consumption in various agricultural operations.</span>
            </li>
            <li class="Objectives_carousel__cell">
                <span class="song__year">V.</span>
                <span class="song__title">Collaborating with both the private and public sectors to implement
                    research findings and develop new technologies that support the agricultural economy and
                    protect the environment.</span>
            </li>
            <li class="Objectives_carousel__cell">
                <span class="song__year">I.</span>
                <span class="song__title">Maximizing the use of renewable energy sources in agricultural
                    applications such as solar and wind energy to achieve sustainable development and reduce
                    reliance on conventional energy sources.</span>
            </li>
            <li class="Objectives_carousel__cell">
                <span class="song__year">II.</span>
                <span class="song__title">Enhancing the efficiency of agricultural machinery and equipment by
                    utilizing modern technologies such as artificial intelligence and automated control systems
                    to increase productivity and reduce energy consumption.</span>
            </li>
            <li class="Objectives_carousel__cell">
                <span class="song__year">III.</span>
                <span class="song__title">Developing biofuel production systems from agricultural and animal
                    waste, including biogas and biodiesel, to contribute to the production of clean and
                    sustainable energy.</span></li>
            <li class="Objectives_carousel__cell">
                <span class="song__year">IV.</span>
                <span class="song__title">Conducting applied research to develop innovative mechanical and
                    engineering solutions that improve the performance of agricultural machinery and reduce
                    energy consumption in various agricultural operations.</span>
            </li>
            <li class="Objectives_carousel__cell">
                <span class="song__year">V.</span>
                <span class="song__title">Collaborating with both the private and public sectors to implement
                    research findings and develop new technologies that support the agricultural economy and
                    protect the environment.</span>
            </li>
            <li class="Objectives_carousel__cell">
                <span class="song__year">I.</span>
                <span class="song__title">Maximizing the use of renewable energy sources in agricultural
                    applications such as solar and wind energy to achieve sustainable development and reduce
                    reliance on conventional energy sources.</span>
            </li>
            <li class="Objectives_carousel__cell">
                <span class="song__year">II.</span>
                <span class="song__title">Enhancing the efficiency of agricultural machinery and equipment by
                    utilizing modern technologies such as artificial intelligence and automated control systems
                    to increase productivity and reduce energy consumption.</span>
            </li>
            <li class="Objectives_carousel__cell">
                <span class="song__year">III.</span>
                <span class="song__title">Developing biofuel production systems from agricultural and animal
                    waste, including biogas and biodiesel, to contribute to the production of clean and
                    sustainable energy.</span></li>
            <li class="Objectives_carousel__cell">
                <span class="song__year">IV.</span>
                <span class="song__title">Conducting applied research to develop innovative mechanical and
                    engineering solutions that improve the performance of agricultural machinery and reduce
                    energy consumption in various agricultural operations.</span>
            </li>
            <li class="Objectives_carousel__cell">
                <span class="song__year">V.</span>
                <span class="song__title">Collaborating with both the private and public sectors to implement
                    research findings and develop new technologies that support the agricultural economy and
                    protect the environment.</span>
            </li>
        </ol>
    </div>
    <div class="Objectives_carousel__controls">
        <button type="button" class="previous-button">&#x1F446;&#x1F3FB;</button>
        <button type="button" class="next-button">&#x1F447;&#x1F3FB;</button>
    </div>
  </div>
`;


var Achievements_Section_Ar = `
  <header class="Achieviements_header">
        <h1 class="Achieviements_header__title">إنجازات المعهد</h1>
        <p class="Achieviements_header__subtitle">انقر لقلب البطاقة واستكشاف المحتوى!</p>
    </header>
        
    <div class="container">
        <div class="card">
            <div class="card__inner">
                <div class="card__front">
                  <img src="../../Images/Trophy_3.png" alt="Achievements Icon" class="icon">
                </div>
                <div class="card__back">
                    <p class="paragraph">تطوير أنظمة الطاقة الشمسية لتجفيف المحاصيل وتطبيق أنظمة تخزين متقدمة لتوفير الطاقة للأغراض الزراعية المختلفة مثل الري والتدفئة.</p>
                </div>
            </div>
        </div>

        <div class="button-container">
            <button type="button" id="prevBtn" class="Achieviements_next_button">الإنجاز السابق</button>
            <button type="button" id="nextBtn" class="Achieviements_next_button">الإنجاز التالي</button>
            <button type="button" id="muteBtn" class="Achieviements_next_button">كتم الصوت</button>
        </div>
    </div>
`;
var Achievements_Section_En = `
  <header class="Achieviements_header">
        <h1 class="Achieviements_header__title">Achieviements Audio Card</h1>
        <p class="Achieviements_header__subtitle">Click to flip and explore the content!</p>
    </header>
        
    <div class="container">
        <div class="card">
            <div class="card__inner">
                <div class="card__front">
                  <img src="../../Images/Trophy_3.png" alt="Achievements Icon" class="icon">
                </div>
                <div class="card__back">
                    <p class="paragraph">Developing solar energy systems for crop drying and applying advanced storage systems to provide energy for various agricultural purposes such as irrigation and heating.</p>
                </div>
            </div>
        </div>

        <div class="button-container">
            <button type="button" id="prevBtn" class="Achieviements_next_button">Previous Paragraph</button>
            <button type="button" id="nextBtn" class="Achieviements_next_button">Next Paragraph</button>
            <button type="button" id="muteBtn" class="Achieviements_next_button">Mute</button>
        </div>
    </div>
`;
    
  function Carousel_Section_Builer() {
    "use strict";

    var carousel = document.getElementsByClassName("carousel")[0],
      slider = carousel.getElementsByClassName("carousel__slider")[0],
      items = carousel.getElementsByClassName("carousel__slider__item"),
      prevBtn = carousel.getElementsByClassName("carousel__prev")[0],
      nextBtn = carousel.getElementsByClassName("carousel__next")[0];

    var width,
      height,
      totalWidth,
      margin = 20,
      currIndex = 0,
      interval,
      intervalTime = 4000;

    function init() {
      resize();
      move(Math.floor(items.length / 2));
      bindEvents();

      timer();
    }

    function resize() {
      (width = Math.max(window.innerWidth * 0.25, 275)),
        (height = window.innerHeight * 0.5),
        (totalWidth = width * items.length);

      slider.style.width = totalWidth + "px";

      for (var i = 0; i < items.length; i++) {
        let item = items[i];
        item.style.width = width - margin * 2 + "px";
        item.style.height = height + "px";
      }
    }

    function move(index) {
      if (index < 1) index = items.length;
      if (index > items.length) index = 1;
      currIndex = index;

      for (var i = 0; i < items.length; i++) {
        let item = items[i],
          box = item.getElementsByClassName("item__3d-frame")[0];
        if (i == index - 1) {
          item.classList.add("carousel__slider__item--active");
          box.style.transform = "perspective(1200px)";
        } else {
          item.classList.remove("carousel__slider__item--active");
          box.style.transform =
            "perspective(1200px) rotateY(" +
            (i < index - 1 ? 40 : -40) +
            "deg)";
        }
      }

      slider.style.transform =
        "translate3d(" +
        (index * -width + width / 2 + window.innerWidth / 2) +
        "px, 0, 0)";
    }

    function timer() {
      clearInterval(interval);
      interval = setInterval(() => {
        move(++currIndex);
      }, intervalTime);
    }

    function prev() {
      move(--currIndex);
      timer();
    }

    function next() {
      move(++currIndex);
      timer();
    }

    function bindEvents() {
      window.onresize = resize;
      prevBtn.addEventListener("click", () => {
        prev();
      });
      nextBtn.addEventListener("click", () => {
        next();
      });
    }

    init();
  };

  function Objectives_Carousel_Builder(){
    const carousel = document.querySelector(".Objectives_carousel__list");
    const cells = carousel.querySelectorAll(".Objectives_carousel__cell");

    const cellWidth = carousel.offsetWidth;
    const cellHeight = carousel.offsetHeight;
    const cellSize = cellHeight;
    const cellCount = 20;
    var radius;
    if(window.innerWidth > 1400){

      radius = Math.round(cellSize / 1.5 / Math.tan(Math.PI / cellCount));
    }
    else{

      radius = Math.round(cellSize / 0.8 / Math.tan(Math.PI / cellCount));
    }
    const theta = 360 / cellCount;

    var selectedIndex = 0;

    function rotateCarousel() {
      const angle = theta * selectedIndex * -1;
      carousel.style.transform =
        "translateZ(" + -radius + "px) " + "rotateX(" + -angle + "deg)";

      const cellIndex =
        selectedIndex < 0
          ? cellCount - ((selectedIndex * -1) % cellCount)
          : selectedIndex % cellCount;

      const cells = document.querySelectorAll(".carousel__cell");
      cells.forEach((cell, index) => {
        if (cellIndex === index) {
          if (!cell.classList.contains("selected"))
            cell.classList.add("selected");
        } else {
          if (cell.classList.contains("selected")) {
            cell.classList.remove("selected");
          }
        }
      });
    }

    function selectPrev() {
      selectedIndex--;
      rotateCarousel();
    }

    function selectNext() {
      selectedIndex++;
      rotateCarousel();
    }

    var prevButton = document.querySelector(".previous-button");
    prevButton.addEventListener("click", selectPrev);

    var nextButton = document.querySelector(".next-button");
    nextButton.addEventListener("click", selectNext);

    function initCarousel() {
      for (let i = 0; i < cells.length; i++) {
        const cell = cells[i];
        const cellAngle = theta * i;
        cell.style.transform =
          "rotateX(" + -cellAngle + "deg) translateZ(" + radius + "px)";
      }

      rotateCarousel();
    }

    initCarousel();

  }

function Agricultural_Power_Energy_Load_Content_Ar() {
  Agricultural_Power_Energy_H1.textContent = "الأهداف الرئيسية للقسم";
  HomePageTitle[0].innerHTML = "القوى والطاقة";
  Agricultural_Power_Energy_H2.textContent = "المجالات البحثية للقسم";
  Research_Fields_Section.innerHTML = Research_Fields_Section_Ar;
  Carousel_Section_Builer();
  Objectives_Section.innerHTML = Objectives_Section_Ar;
  Objectives_Carousel_Builder();
  Achievements_Section.innerHTML = Achievements_Section_Ar;
  Achievements_Section.style.direction = "rtl";
  const paragraphs = [
    "تطوير أنظمة الطاقة الشمسية لتجفيف المحاصيل وتطبيق أنظمة تخزين متقدمة لتوفير الطاقة للأغراض الزراعية المختلفة مثل الري والتدفئة.",
    "تصميم وتطوير أنظمة إنتاج الوقود الحيوي من المخلفات الزراعية والحيوانية مع تحسين كفاءة إنتاج الغاز الحيوي وزيادة نقاء الميثان.",
    "استخدام تقنيات الذكاء الاصطناعي في تحسين كفاءة المعدات الزراعية من خلال تطوير أنظمة مراقبة وتحكم ذكية تساعد في تقليل استهلاك الطاقة وزيادة الإنتاجية.",
    "تطوير مضخات ري تعمل بالطاقة الشمسية وتقييم أدائها في الحقول الزراعية لتحسين كفاءة استخدام الطاقة في الري.",
    "تطبيق أنظمة المراقبة عن بعد باستخدام تقنيات إنترنت الأشياء في مراقبة أداء الآلات الزراعية وتحليل استهلاك الطاقة في الوقت الحقيقي.",
  ];
  // Define audio files
  const audioNext = new Audio("../../Audios/old-radio-button-click-97549.mp3");
  const audioPrev = new Audio("../../Audios/click_effect-86995.mp3");
  const audioFlip = new Audio("../../Audios/pick-92276.mp3");
  const audioMute = new Audio("../../Audios/menu-button-89141.mp3"); // New audio for mute/unmute action

  let currentAudio = null; // Variable to track currently playing audio
  let isMuted = false; // Variable to track mute state

  let currentParagraph = 0;

  const cardInner = document.querySelector(".card__inner");
  const cardBack = document.querySelector(".card__back .paragraph");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");
  const muteBtn = document.getElementById("muteBtn"); // Mute button

  // Update the paragraph displayed on the card
  function updateParagraph() {
    cardBack.textContent = paragraphs[currentParagraph];
    cardInner.classList.add("is-flipped"); // Ensure card flips to show the new paragraph
  }

  // Function to play audio
  function playAudio(audio) {
    // Pause the currently playing audio if it exists and is not muted
    if (currentAudio && !isMuted) {
      currentAudio.pause();
      currentAudio.currentTime = 0; // Reset time to start
    }

    // Set the new audio to the currently playing audio and play it if not muted
    currentAudio = audio;
    if (!isMuted) {
      currentAudio.play();
    }
  }

  // Change paragraph and flip the card when 'Next' is clicked
  nextBtn.addEventListener("click", () => {
    currentParagraph = (currentParagraph + 1) % paragraphs.length;
    updateParagraph();
    playAudio(audioNext); // Play next audio
  });

  // Change paragraph and flip the card when 'Previous' is clicked
  prevBtn.addEventListener("click", () => {
    currentParagraph =
      (currentParagraph - 1 + paragraphs.length) % paragraphs.length; // Handle wrap-around
    updateParagraph();
    playAudio(audioPrev); // Play previous audio
  });

  // Flip the card when clicked
  cardInner.addEventListener("click", () => {
    cardInner.classList.toggle("is-flipped");
    // Play flip audio only when the card is flipped by the user
    if (cardInner.classList.contains("is-flipped")) {
      playAudio(audioFlip); // Play flip audio
    }
  });

  muteBtn.addEventListener("click", () => {
    isMuted = !isMuted; // Toggle mute state
    if (isMuted) {
      muteBtn.textContent = "إلغاء كتم الصوت"; // Update button text to indicate mute
      // Pause current audio if it exists
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0; // Reset time to start
      }
    } else {
      muteBtn.textContent = "كتم الصوت"; // Update button text to indicate unmute
    }
    playAudio(audioMute); // Play mute/unmute audio
  });
}
function Agricultural_Power_Energy_Load_Content_En() {
  Agricultural_Power_Energy_H1.textContent = "Department Main Objectives";
  HomePageTitle[0].innerHTML = "AERI APE Page";
  Agricultural_Power_Energy_H2.textContent = "Department Research Fields"
  Research_Fields_Section.innerHTML = Research_Fields_Section_En;
  Carousel_Section_Builer();
  Objectives_Section.innerHTML = Objectives_Section_En;
  Objectives_Carousel_Builder();
  Achievements_Section.innerHTML =Achievements_Section_En;
  Achievements_Section.style.direction = "ltr";

   const paragraphs = [
     "Developing solar energy systems for crop drying and applying advanced storage systems to provide energy for various agricultural purposes such as irrigation and heating.",
     "Designing and developing biofuel production systems from agricultural and animal waste, improving the efficiency of biogas production, and increasing methane purity.",
     "Utilizing artificial intelligence technologies to improve agricultural machinery efficiency by developing smart monitoring and control systems that help reduce energy consumption and increase productivity.",
     "Developing solar-powered irrigation pumps and evaluating their performance in agricultural fields to enhance energy efficiency in irrigation.",
     "Implementing remote monitoring systems using Internet of Things (IoT) technologies to monitor the performance of agricultural machinery and analyze real-time energy consumption.",
   ];

   // Define audio files
   const audioNext = new Audio("../../Audios/old-radio-button-click-97549.mp3");
   const audioPrev = new Audio("../../Audios/click_effect-86995.mp3");
   const audioFlip = new Audio("../../Audios/pick-92276.mp3");
   const audioMute = new Audio("../../Audios/menu-button-89141.mp3"); // New audio for mute/unmute action

   let currentAudio = null; // Variable to track currently playing audio
   let isMuted = false; // Variable to track mute state

   let currentParagraph = 0;

   const cardInner = document.querySelector(".card__inner");
   const cardBack = document.querySelector(".card__back .paragraph");
   const nextBtn = document.getElementById("nextBtn");
   const prevBtn = document.getElementById("prevBtn");
   const muteBtn = document.getElementById("muteBtn"); // Mute button

   // Update the paragraph displayed on the card
   function updateParagraph() {
     cardBack.textContent = paragraphs[currentParagraph];
     cardInner.classList.add("is-flipped"); // Ensure card flips to show the new paragraph
   }

   // Function to play audio
   function playAudio(audio) {
     // Pause the currently playing audio if it exists and is not muted
     if (currentAudio && !isMuted) {
       currentAudio.pause();
       currentAudio.currentTime = 0; // Reset time to start
     }

     // Set the new audio to the currently playing audio and play it if not muted
     currentAudio = audio;
     if (!isMuted) {
       currentAudio.play();
     }
   }

   // Change paragraph and flip the card when 'Next' is clicked
   nextBtn.addEventListener("click", () => {
     currentParagraph = (currentParagraph + 1) % paragraphs.length;
     updateParagraph();
     playAudio(audioNext); // Play next audio
   });

   // Change paragraph and flip the card when 'Previous' is clicked
   prevBtn.addEventListener("click", () => {
     currentParagraph =
       (currentParagraph - 1 + paragraphs.length) % paragraphs.length; // Handle wrap-around
     updateParagraph();
     playAudio(audioPrev); // Play previous audio
   });

   // Flip the card when clicked
   cardInner.addEventListener("click", () => {
     cardInner.classList.toggle("is-flipped");
     // Play flip audio only when the card is flipped by the user
     if (cardInner.classList.contains("is-flipped")) {
       playAudio(audioFlip); // Play flip audio
     }
   });

   muteBtn.addEventListener("click", () => {
     isMuted = !isMuted; // Toggle mute state
     if (isMuted) {
       muteBtn.textContent = "Unmute"; // Update button text to indicate mute
       // Pause current audio if it exists
       if (currentAudio) {
         currentAudio.pause();
         currentAudio.currentTime = 0; // Reset time to start
       }
     } else {
       muteBtn.textContent = "Mute"; // Update button text to indicate unmute
     }
     playAudio(audioMute); // Play mute/unmute audio
   });

}

if (localStorage.getItem("Permenant_Language") === "English") {

  Agricultural_Power_Energy_Load_Content_En();

}
if (localStorage.getItem("Permenant_Language") === "عربي") {

  Agricultural_Power_Energy_Load_Content_Ar();

}
Objectives_Carousel_Builder();

