var Overview_Title = document.getElementById("Overview_Page_Title");
var Overview_H1 = document.getElementById("Overview_H1");
var Carousel_Section = document.getElementById("Carousel_Section");
var Misson_Vision_Section = document.getElementById("Misson_Vision_Section");
var Activities_Section = document.getElementById("Activities_Section");

var Carousel_Section_Ar = `
  <main class="carousel-container">
    <div class="carousel">
      <div class="item active">
        <img src="../Images/Organizational_Structure_Ar-removebg-preview.png" alt="Image 1" />
      </div>
      <div class="item">
        <img src="../Images/Staff_Ar.jpg" alt="Image 2" />
      </div>
      <div class="item">
        <img src="../Images/Supporting_Ar.jpg" alt="Image 3" />
      </div>
    </div>
    <button class="btn prev">Prev</button>
    <button class="btn next">Next</button>
    <div class="dots"></div>
  </main>
`;
var Carousel_Section_En = `
  <main class="carousel-container">
    <div class="carousel">
      <div class="item active">
        <img src="../Images/Organizational_Structure_En__1_-removebg-preview.png" alt="Image 1" />
      </div>
      <div class="item">
        <img src="../Images/Staff_En.jpg" alt="Image 2" />
      </div>
      <div class="item">
        <img src="../Images/Supporting_En.jpg" alt="Image 3" />
      </div>
    </div>
    <button class="btn prev">Prev</button>
    <button class="btn next">Next</button>
    <div class="dots"></div>
  </main>
`;

var Misson_Vision_Section_Ar = `
  <div class = "Mission_Vision_Image_Container">
    <img src="../Images/Missionvisionvalues_Ar .jpg" alt="Missionvisionvalues_Ar">
  </div>
    `;
var Misson_Vision_Section_En = `
  <div class = "Mission_Vision_Image_Container">
    <img src="../Images/Missionvisionvalues_En .jpg" alt="Missionvisionvalues_En">
  </div>

`;

var Activities_Section_Ar = `
<div class="container">
  <h2 class="center">أنشطة المعهد</h2>
  
  <article class="episode">
    <div class="episode__number episode__number_Ar"  >١.</div>
    <div class="episode__content">
      <div class="story">
      <p>	إدخال أحدث نظم الهندسة الحيوية والزراعية للسوق المصري عبر مراحل علمية دقيقة تشمل اختيار المنظومة ثم تجربتها وتقييمها وتطويرها إذا لزم الأمر ثم نشرها.</p>
      </div>
    </div>
  </article>

  <article class="episode">
    <div class="episode__number episode__number_Ar"  >٢.</div>
    <div class="episode__content">
      <div class="story">
      <p>	إجراء البحوث المتطورة في كافة أنظمة الهندسية الحيوية والزراعية بغرض استنباط حزم تكنولوجية جديدة تساهم في تقدم قطاع الزراعة بمصر.</p>
      </div>
    </div>
  </article>

  <article class="episode">
    <div class="episode__number episode__number_Ar"  >٣.</div>
    <div class="episode__content">
      <div class="story">
      <p>	تعظيم ميكنة تدوير المخلفات واستخدامها في إنتاج الأسمدة العضوية والأعلاف غير التقليدية للمحافظة على البيئة مع تطوير الآت التقليب وترطيب صفوف تصنيع السماد الحيوى.</p>
      </div>
    </div>
  </article>

  <article class="episode">
    <div class="episode__number episode__number_Ar"  >٤.</div>
    <div class="episode__content">
      <div class="story">
      <p>	ميكنة تداول المحاصيل الرئيسية لتقليل الفاقد في الانتاج الزراعي.</p>
      </div>
    </div>
  </article>

  <article class="episode">
    <div class="episode__number episode__number_Ar"  >٥.</div>
    <div class="episode__content">
      <div class="story">
      <p>	توفير وسائل الأمن والأمان في استخدام الآلات الزراعية.</p>
      </div>
    </div>
  </article>

  <article class="episode">
    <div class="episode__number episode__number_Ar"  >٦.</div>
    <div class="episode__content">
      <div class="story">
      <p>	التدريب المتخصص في تشغيل وصيانة معدات ميكنة المحاصيل الحقلية والبستانية وهندسة الري الحقلي.</p>
      </div>
    </div>
  </article>

  <article class="episode">
    <div class="episode__number episode__number_Ar"  >٧.</div>
    <div class="episode__content">
      <div class="story">
      <p>	الاهتمام بإجراء اختبارات الجودة للمنتج في مجال معدات الميكنة الزراعية والري الحقلي. </p>
      </div>
    </div>
  </article>

  <article class="episode">
    <div class="episode__number episode__number_Ar"  >٨.</div>
    <div class="episode__content">
      <div class="story">
      <p>	تكنولوجيا الليزر</p>
      </div>
    </div>
  </article>

  <article class="episode">
    <div class="episode__number episode__number_Ar"  >٩.</div>
    <div class="episode__content">
      <div class="story">
      <p>	تصميم النماذج الأولية لالات الحصاد ، الات الحصاد والدراس الجامعة (كومباين).</p>
      </div>
    </div>
  </article>

  <article class="episode">
    <div class="episode__number episode__number_Ar"  >١٠</div>
    <div class="episode__content">
      <div class="story">
      <p>	العمل على انتاج وحدات لانتاج الغاز الحيوى من المخلفات الزراعية.</p>
      </div>
    </div>
  </article>

  <article class="episode">
    <div class="episode__number episode__number_Ar"  >١١</div>
    <div class="episode__content">
      <div class="story">
      <p>	التوسع في استخدام تكنولوجيا صوامع الحبوب.</p>
      </div>
    </div>
  </article>

  <article class="episode">
    <div class="episode__number episode__number_Ar"  >١٢</div>
    <div class="episode__content episode__content_Last">
      <div class="story">
      <p>اجراء بحوث هندسة الرى والصرف وتشمل:</p>
        <ul id = "UL_Ar">
          <li>وضع المعايير القياسية الثابتة لتشغيل نظم الرى المختلفة ، بهدف تقليل تكلفة ضخ المياه سواء من الترع أو الآبار، وكذا تقليل تكاليف إنشاء شبكات الرى الحديث .</li>
          <li>تحديد أنسب الأساليب العلمية لوضع المعايير الهندسية الأساسية لتصنيع بعض مكونات نظم الرى الحديثة التى تلائم الظروف المحلية بهدف تشجيع تصنيع النماذج المطورة محليا .</li>
          <li>الوصول إلى أنسب التصميمات التشغيلية والهيدروليكية لشبكات الرى الحديث ، وتحديد الطاقة اللازمة لتشغيلها بهدف توزيع المياه على أساس سليم وأقتصادى لتقليل تكلفة الضخ وكذا التخفيف من أعباء شبكات الصرف الزراعى .</li>
          <li>الوصول إلى أنسب الطرق لإضافة الأسمدة الكيماوية والمبيدات خلال أنظمة الرى المختلفة، زيادة الإستفادة ، توفير الطاقة المستخدمة فى عملية التوزيع والوصول إلى توصيات فنية عن معدلات وأسلوب الإضافة مع مياه الرى.</li>
          <li>تعظيم الإستفادة من تطبيقات تسوية الأراضى بالليزر ، وذلك لتأثيرها الكبير على ترشيد إستهلاك المياه.</li>
          <li>التوصل إلى أنسب تصميم هندسى لأنظمة الرى المطـــــورة ( الأنابيب المبوبه ) وإستحداث وسائل جديدة لإضافة الأسمدة ، والمبيدات لمقاومة الآفات من خلال نظم الرى الحديثة خاصة فى الأراضى القديمة.</li>
          <li>التقييم الهندسى والفنى لوسائل إضافة المياه خلال شبكات الرى الحديثة فى الاراضى القديمة والحديثة وكذلك وضع المعايير الهندسية والقياسية العلمية.</li>
        </ul>
        </div>
    </d>
  </article>
</div>
`;
var Activities_Section_En = `
<div class="container">
  <h2 class="center">Institute Activities</h2>
  
  <article class="episode">
    <div class="episode__number episode__number_En"  >01</div>
    <div class="episode__content">
      <div class="story">
      <p class = "En_P">Introducing the latest bioengineering and agricultural systems to the Egyptian market through precise scientific stages that include selecting the system, testing, evaluating, and developing it if necessary, and then disseminating it.</p>
      </div>
    </div>
  </article>

  <article class="episode">
    <div class="episode__number episode__number_En"  >02</div>
    <div class="episode__content">
      <div class="story">
      <p class = "En_P">Conducting advanced research in all bioengineering and agricultural systems to develop new technological packages that contribute to the advancement of the agricultural sector in Egypt.</p>
      </div>
    </div>
  </article>

  <article class="episode">
    <div class="episode__number episode__number_En"  >03</div>
    <div class="episode__content">
      <div class="story">
      <p class = "En_P">Maximizing the mechanization of waste recycling and its use in producing organic fertilizers and unconventional fodder to preserve the environment, along with developing machines for turning and moistening compost rows.</p>
      </div>
    </div>
  </article>

  <article class="episode">
    <div class="episode__number episode__number_En"  >04</div>
    <div class="episode__content">
      <div class="story">
      <p class = "En_P">Mechanizing the handling of main crops to reduce losses in agricultural production.</p>
      </div>
    </div>
  </article>

  <article class="episode">
    <div class="episode__number episode__number_En"  >05</div>
    <div class="episode__content">
      <div class="story">
      <p class = "En_P">Ensuring safety and security measures in the use of agricultural machinery.</p>
      </div>
    </div>
  </article>

  <article class="episode">
    <div class="episode__number episode__number_En"  >06</div>
    <div class="episode__content">
      <div class="story">
      <p class = "En_P">Specialized training in the operation and maintenance of machinery for field and horticultural crop mechanization and field irrigation engineering.</p>
      </div>
    </div>
  </article>

  <article class="episode">
    <div class="episode__number episode__number_En"  >07</div>
    <div class="episode__content">
      <div class="story">
      <p class = "En_P">Focusing on conducting quality tests for products in the field of agricultural mechanization and field irrigation equipment.</p>
      </div>
    </div>
  </article>

  <article class="episode">
    <div class="episode__number episode__number_En"  >08</div>
    <div class="episode__content">
      <div class="story">
      <p class = "En_P">Laser technology.</p>
      </div>
    </div>
  </article>

  <article class="episode">
    <div class="episode__number episode__number_En"  >09</div>
    <div class="episode__content">
      <div class="story">
      <p class = "En_P">Designing prototypes for harvesting machines and combine harvesters.</p>
      </div>
    </div>
  </article>

  <article class="episode">
    <div class="episode__number episode__number_En"  >10</div>
    <div class="episode__content">
      <div class="story">
      <p class = "En_P">Working on producing units for biogas production from agricultural waste.</p>
      </div>
    </div>
  </article>

  <article class="episode">
    <div class="episode__number episode__number_En"  >11</div>
    <div class="episode__content">
      <div class="story">
      <p class = "En_P">Expanding the use of grain silo technology.</p>
      </div>
    </div>
  </article>

  <article class="episode">
    <div class="episode__number episode__number_En"  >12</div>
    <div class="episode__content episode__content_Last">
      <div class="story">
        <p class = "En_P">Conducting research in irrigation & drainage engineering, including:</p>
        <ul>
          <li class = "En_LI">Setting standard criteria for the operation of different irrigation systems to reduce water pumping costs, whether from canals or wells, and to lower the costs of modern irrigation network installation.</li>
          <li class = "En_LI">Identifying the most appropriate scientific methods for setting basic engineering standards for manufacturing components of modern irrigation systems that suit local conditions to encourage the local manufacturing of improved models.</li>
          <li class = "En_LI">Achieving the most suitable operational and hydraulic designs for modern irrigation networks and determining the required energy to operate them, aiming for an efficient and economical water distribution to reduce pumping costs and ease the burden on agricultural drainage networks.</li>
          <li class = "En_LI">Identifying the best methods for adding fertilizers and pesticides through different irrigation systems, maximizing their effectiveness, saving energy in the distribution process, and providing technical recommendations on the rates and methods of application with irrigation water.</li>
          <li class = "En_LI">Maximizing the benefits of laser land leveling applications due to their significant impact on water conservation.</li>
          <li class = "En_LI">Developing the most suitable engineering design for improved irrigation systems (gated pipes) and creating new methods for adding fertilizers and pesticides to combat pests through modern irrigation systems, especially in old lands.</li>
          <li class = "En_LI">Engineering and technical evaluation of water application methods through modern irrigation networks in old and new lands, as well as setting scientific engineering and standard criteria.</li>
        </ul>
        </div>
    </div>
  </article>
</div>
`;
document.addEventListener("DOMContentLoaded", function () {
  let carousel = document.querySelector(".carousel");
  let items = carousel.querySelectorAll(".item");
  let dotsContainer = document.querySelector(".dots");

  // Insert dots into the DOM
  items.forEach((_, index) => {
    let dot = document.createElement("span");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");
    dot.dataset.index = index;
    dotsContainer.appendChild(dot);
  });

  let dots = document.querySelectorAll(".dot");

  // Function to show a specific item
  function showItem(index) {
    items.forEach((item, idx) => {
      item.classList.remove("active");
      dots[idx].classList.remove("active");
      if (idx === index) {
        item.classList.add("active");
        dots[idx].classList.add("active");
      }
    });
  }

  // Event listeners for buttons
  document.querySelector(".prev").addEventListener("click", () => {
    let index = [...items].findIndex((item) =>
      item.classList.contains("active")
    );
    showItem((index - 1 + items.length) % items.length);
  });

  document.querySelector(".next").addEventListener("click", () => {
    let index = [...items].findIndex((item) =>
      item.classList.contains("active")
    );
    showItem((index + 1) % items.length);
  });

  // Event listeners for dots
  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      let index = parseInt(dot.dataset.index);
      showItem(index);
    });
  });
});

function Overview_Load_Content_Ar() {
  Overview_H1.textContent = "نبذة عن المعهد";
  HomePageTitle[0].innerHTML = "نبذة";
  Carousel_Section.innerHTML = Carousel_Section_Ar;
  Misson_Vision_Section.innerHTML = Misson_Vision_Section_Ar;
  Activities_Section.innerHTML = Activities_Section_Ar;
  Activities_Section.style.direction = "rtl"
}
function Overview_Load_Content_En() {
  Overview_H1.textContent = "An Overview";
  HomePageTitle[0].innerHTML = "AERI Overview Page";
  Carousel_Section.innerHTML = Carousel_Section_En;
  Misson_Vision_Section.innerHTML = Misson_Vision_Section_En;
  Activities_Section.innerHTML = Activities_Section_En;
  Activities_Section.style.direction = "ltr"
}

if (localStorage.getItem("Permenant_Language") === "English") {
  Overview_Load_Content_En();
}
if (localStorage.getItem("Permenant_Language") === "عربي") {
  Overview_Load_Content_Ar();
}
