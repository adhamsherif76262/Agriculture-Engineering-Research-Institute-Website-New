// setTimeout(()=>{
    var titleHome = document.getElementById("Title_Home");
    var homeH1 = document.getElementById("Home_H1");
    var Overview_H2 = document.getElementById("Overview_H2");
    var Overview_Section = document.getElementById("Overview_Section");
    var Current_President_H2 = document.getElementById("Current_President_H2");
    var Video_Section = document.getElementById("Video_Section");
    var Objectives_Section = document.getElementById("Objectives_Section");
    var Current_President_Section = document.getElementById(
      "Current_President_Section"
    );
    var First_P = document.getElementById("First_P");
    var Second_P = document.getElementById("Second_P");

    var Objectives_Section_Ar = `
        <div class="wrapper">
        <h1>الأهداف الرئيسة للمعهد</h1>
        <ul>
            <li class = "Objectives_LI" >القيام بالبحوث والدراسات التطبيقية اللازمة لميكنة العمليات الزراعية المختلفة للمحاصيل الحقلية والبستانية وعمليات الإنتاج الحيواني لزيادة الإنتاج وخفض التكاليف وربط ذلك بحجم العمالة الزراعية .</li>
            <li class = "Objectives_LI" >القيام بالبحوث التطبيقية للإستفادة من الطاقة الجديدة والمتجددة في الإستخدامات المزرعية لترشيد إستخدام الطاقة .</li>
            <li class = "Objectives_LI" >القيام بالبحوث والدراسات التطبيقية اللازمة لرفع كفاءة إدارة الري الحقلي بهدف ترشيد إستخدام المياه والأسمدة وحماية البيئة .</li>
            <li class = "Objectives_LI" >تعظيم الاستفادة من البحوث التطبيقية فى مجال الهندسة الزراعية ونظم الهندسة الحيوية.</li>
            <li class = "Objectives_LI" >تصميم وتطوير وتعديل الآلات الزراعية لرفع كفاءتها بما يناسب ظروفنا المحلية مع تصنيع النماذج الأولية لها بالتعاون مع القطاع الخاص لتعميق تنشيط التصنيع المحلي للمعدات الاستثمارية بديلاً للواردات.</li>
            <li class = "Objectives_LI" >تطبيق ميكنة الإستفادة من المنتجات الثانوية الزراعية . تنمية المهارات  والقدرات البشرية لأعضاء هيئة البحوث ومعاونيهم .</li>
            <li class = "Objectives_LI" >تنمية مهارات وقدرات العاملين في البحث العلمي ومساعديهم.</li>
            <li class = "Objectives_LI" >العمل على أن يكون المعهد مركزا متميزا إقليميا، ودوليا فى مجال الهندسة الزراعية ونظم الهندسة الحيوية.</li>
        </ul>
      </div>
`;
    var Objectives_Section_En = `
  <div class="wrapper">
	<h1>Institute Main Objectives</h1>
	<ul>
		<li class = "Objectives_LI" >Conduct applied research and studies necessary for the mechanization of various agricultural operations for field and horticultural crops, as well as animal production processes, to increase production, reduce costs, and align with the available agricultural workforce.</li>
		<li class = "Objectives_LI" >Conduct applied research to benefit from new and renewable energy in agricultural applications to optimize energy use.</li>
		<li class = "Objectives_LI" >Conduct applied research and studies to improve field irrigation management efficiency, aiming to optimize water and fertilizer usage while protecting the environment.</li>
		<li class = "Objectives_LI" >Maximize the benefits of applied research in the field of agricultural engineering and bioengineering systems.</li>
		<li class = "Objectives_LI" >Design, develop, and modify agricultural machinery to improve its efficiency to suit local conditions, and manufacture prototypes in cooperation with the private sector to promote and deepen local production of investment equipment as an alternative to imports.</li>
		<li class = "Objectives_LI" >Implement the mechanization of utilizing agricultural by-products.</li>
		<li class = "Objectives_LI" >Develop the skills and capabilities of research staff and their assistants.</li>
		<li class = "Objectives_LI" >Work towards making the institute a distinguished regional and international center in the field of agricultural engineering and bioengineering systems.</li>
	</ul>
</div>
`;

    var Current_President_Section_Ar = `
      <section id="Current_President_Section_Ar">
        <ul class="tilesWrap">
            <li>
                <h2>١</h2>
                <h3>تصميم وتطوير المعدات الزراعية:</h3>
                <p>
                    الهندسة الزراعية تُساهم في تصميم وبناء وتطوير الآلات والمعدات المستخدمة في الزراعة مثل الجرارات
                    والحصادات وأنظمة الري، مما يسهم في تقليل الجهد البشري وزيادة كفاءة الإنتاج
                </p>
            </li>
            <li>
                <h2>٢</h2>
                <h3>تطوير أنظمة الري  : </h3>
                <p>
                    الهندسة الزراعية تركز على تطوير وتصميم أنظمة ري فعّالة ومستدامة تساعد في تحسين استخدام المياه وتقليل
                    الفاقد، مما يعزز الإنتاجية ويقلل من تكاليف الزراعة.
                </p>
            </li>
            <li>
                <h2>٣</h2>
                <h3>إدارة الموارد الطبيعية : </h3>
                <p>
                    من خلال الهندسة الزراعية، يتم الحفاظ على التربة والمياه عبر تطوير تقنيات مكافحة التآكل وتحسين جودة
                    التربة، مما يساعد في الحفاظ على الموارد الطبيعية الأساسية.
                </p>
            </li>
            <li>
                <h2>٤</h2>
                <h3>تطبيق التكنولوجيا الحديثة: </h3>
                <p>
                    الهندسة الزراعية تستفيد من تقنيات متقدمة مثل الاستشعار عن بعد والطائرات بدون طيار ونظم المعلومات
                    الجغرافية (GIS) لتحسين مراقبة المحاصيل وتقييم الظروف البيئية بدقة.
                </p>
            </li>
            <li>
                <h2>٥</h2>
                <h3> تحسين كفاءة الإنتاج : </h3>
                <p>
                    تساعد الهندسة الزراعية على تحسين عمليات الإنتاج من خلال الأتمتة والتحكم في المناخ داخل البيوت
                    البلاستيكية والدفيئات، مما يزيد من الإنتاجية ويقلل من التكاليف.
                </p>
            </li>
            <li>
                <h2>٦</h2>
                <h3>تطوير المنشآت الزراعية : </h3>
                <p>
                    الهندسة الزراعية تساهم في تصميم وتطوير الهياكل المستخدمة في الزراعة، مثل البيوت البلاستيكية، مرافق
                    التخزين، والمختبرات البحثية، مما يدعم العمليات الزراعية ويعزز من إنتاجيتها.
                </p>
            </li>
        </ul>
    </section>
`;
    var Current_President_Section_En = `
      <section id="Current_President_Section_En">
        <ul class="tilesWrap">
            <li>
                <h2>01</h2>
                <h3>Design and Development of Agricultural Equipment</h3>
                <p>
                    Agricultural engineering contributes to the design, construction, and development of machinery and
                    equipment used in agriculture, such as tractors, harvesters, and irrigation systems, which help
                    reduce human effort and increase production efficiency.
                </p>
            </li>
            <li>
                <h2>02</h2>
                <h3>Irrigation System Development</h3>
                <p>
                    Agricultural engineering focuses on developing and designing efficient and sustainable irrigation
                    systems that improve water use and minimize waste, thereby enhancing productivity and reducing
                    agricultural costs.
                </p>
            </li>
            <li>
                <h2>03</h2>
                <h3>Natural Resource Management</h3>
                <p>
                    Through agricultural engineering, soil and water conservation is achieved by developing erosion
                    control techniques and improving soil quality, which helps maintain essential natural resources.
                </p>
            </li>
            <li>
                <h2>04</h2>
                <h3>Application of Modern Technology</h3>
                <p>
                    Agricultural engineering leverages advanced technologies such as remote sensing, drones, and
                    geographic information systems (GIS) to improve crop monitoring and accurately assess environmental
                    conditions.
                </p>
            </li>
            <li>
                <h2>05</h2>
                <h3>Enhancing Production Efficiency</h3>
                <p>
                    Agricultural engineering improves production processes through automation and climate control within
                    greenhouses, leading to increased productivity and reduced costs.
                </p>
            </li>
            <li>
                <h2>06</h2>
                <h3>Development of Agricultural Facilities</h3>
                <p>
                    Agricultural engineering contributes to the design and development of structures used in
                    agriculture, such as greenhouses, storage facilities, and research laboratories, supporting and
                    enhancing agricultural operations.
                </p>
            </li>
        </ul>
    </section>
`;

    function Home_Load_Content_Ar() {
      Overview_H2.innerHTML = `نبذة تاريخية عن نشأة المعهد  :`;
      Overview_H2.style.direction = "rtl";
      Overview_Section.innerHTML = `في عام 1977 وبناء على القرار الوزاري رقم 323 أنشىء معهد الميكنة الزراعية وتولى مهمة نشر الميكنة الزراعية في مصر، ثم تغير الاسم ليصبح معهد بحوث الزراعة الآلية لمواكبة التطور المحلى والعالمى للبحوث والتطبقات فى مجال الزراعة الآلية وذلك في عام 1982. ثم بعد ذلك بحوالي عشر سنوات اي في عام 1992ونظرا للتغير التكنولوجي السريع ازدادت أنشطة وبحوث والتزامات المعهد لتشمل جميع فروع الهندسة الزراعية من ميكنة ورى وطاقة فتم تغيير اسمه ليصبح معهد بحوث الهندسة الزراعية .`;
      Overview_Section.style.direction = "rtl";
      homeH1.textContent = "كلمة مدير المعهد";
      homeH1.style.direction = "rtl";
      Current_President_H2.textContent =
        "مدير المعهد الأستاذ الدكتور :  حازم مهاود";
      Current_President_H2.style.direction = "rtl";
      First_P.innerHTML =
        "تلعب الهندسة الزراعية دورًا حيويًا في تحسين وتطوير الإنتاج الزراعي من خلال تطبيق مبادئ الهندسة والتكنولوجيا في مختلف المجالات الزراعية. <br> وتتمثل مساهمات الهندسة الزراعية في ما يلي  :";
      First_P.style.direction = "rtl";
      Second_P.textContent =
        "باختصار، الهندسة الزراعية تسهم بفاعلية في تعزيز الزراعة المستدامة وزيادة كفاءة وإنتاجية العمليات الزراعية من خلال الابتكار والتكنولوجيا المتقدمة.";
      Second_P.style.direction = "rtl";
      HomePageTitle[0].innerHTML = "الرئيسية";
      Objectives_Section.innerHTML = Objectives_Section_Ar;
      Objectives_Section.style.direction = "rtl";
      Current_President_Section.innerHTML = Current_President_Section_Ar;
    }
    function Home_Load_Content_En() {
      Overview_H2.innerHTML = `Historical Overview of the Institute  :`;
      Overview_H2.style.direction = "ltr";
      Overview_Section.innerHTML = `In 1977, based on Ministerial Decree No. 323, the Agricultural Mechanization Institute was established, tasked with promoting agricultural mechanization in Egypt. The name was later changed to the Agricultural Mechanization Research Institute to align with local and global advancements in research and applications in the field of agricultural mechanization, which took place in 1982. About ten years later, in 1992, due to rapid technological changes, the institute's activities, research, and responsibilities expanded to include all branches of agricultural engineering, including mechanization, irrigation, and energy. Consequently, its name was changed to the Agricultural Engineering Research Institute.`;
      Overview_Section.style.direction = "ltr";
      homeH1.textContent = "Director's speech";
      homeH1.style.direction = "ltr";
      Current_President_H2.textContent =
        "Institute Director : Prof. Dr. Hazem Mehawed";
      Current_President_H2.style.direction = "ltr";
      First_P.innerHTML = `Agricultural engineering plays a crucial role in enhancing and advancing agricultural production by applying engineering and technology principles across various agricultural sectors. <br> The contributions of agricultural engineering include the following :`;
      First_P.style.direction = "ltr";
      Second_P.textContent =
        "In summary, agricultural engineering actively contributes to promoting sustainable agriculture and increasing the efficiency and productivity of agricultural operations through innovation and advanced technology.";
      Second_P.style.direction = "ltr";
      HomePageTitle[0].innerHTML = "AERI Home Page";
      Objectives_Section.innerHTML = Objectives_Section_En;
      Objectives_Section.style.direction = "ltr";
      Current_President_Section.innerHTML = Current_President_Section_En;
    }

    if (localStorage.getItem("Permenant_Language") === "English") {
      Home_Load_Content_En();
    }
    if (localStorage.getItem("Permenant_Language") === "عربي") {
      Home_Load_Content_Ar();
    }

// },[500])