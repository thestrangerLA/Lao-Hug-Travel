
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const termsAndConditions = {
  en: {
    title: 'Details and Conditions',
    conditions_tab: 'Conditions',
    inclusions_tab: 'Included',
    exclusions_tab: 'Not Included',
    conditions: [
      'The company reserves the right to change the program, prioritizing the customer\'s benefit.',
      'The company is not responsible for denial of entry if you are outside the agreement.',
      'This tour package price does not include tips for the guide and driver.'
    ],
    inclusions: [
      'Accommodation as specified in the itinerary.',
      'Transportation as per the itinerary (including high-speed train tickets where mentioned).',
      'Meals as specified in the meal plan.',
      'Entrance fees to attractions mentioned in the itinerary.',
      'Local tour guide.'
    ],
    exclusions: [
      'International and domestic airfare not mentioned in the program.',
      'Visa fees (if applicable).',
      'Personal expenses such as laundry, telephone calls, and mini-bar.',
      'Tips for tour guide and driver.',
      'Optional tours or activities not mentioned in the itinerary.'
    ]
  },
  th: {
    title: 'รายละเอียดและเงื่อนไข',
    conditions_tab: 'เงื่อนไข',
    inclusions_tab: 'รวม',
    exclusions_tab: 'ไม่รวม',
    conditions: [
      'บริษัทขอสงวนสิทธิ์ในการเปลี่ยนแปลงโปรแกรม แต่จะคำนึงถึงผลประโยชน์ของลูกค้าเป็นหลัก',
      'บริษัทจะไม่รับผิดชอบต่อการถูกปฏิเสธเข้าเมืองหากท่านอยู่นอกเหนือข้อตกลง',
      'ราคาโปรแกรมทัวร์นี้ไม่รวมค่าทิปไกด์และคนขับรถ'
    ],
    inclusions: [
      'ที่พักตามที่ระบุในโปรแกรม',
      'การเดินทางตามโปรแกรม (รวมตั๋วรถไฟความเร็วสูงตามที่ระบุ)',
      'อาหารตามที่ระบุในแผนอาหาร',
      'ค่าเข้าชมสถานที่ตามที่ระบุในโปรแกรม',
      'ไกด์ท้องถิ่น'
    ],
    exclusions: [
      'ค่าตั๋วเครื่องบินระหว่างประเทศและภายในประเทศที่ไม่ได้ระบุในโปรแกรม',
      'ค่าวีซ่า (ถ้ามี)',
      'ค่าใช้จ่ายส่วนตัว เช่น ค่าซักรีด ค่าโทรศัพท์ และมินิบาร์',
      'ค่าทิปสำหรับไกด์และคนขับรถ',
      'ทัวร์หรือกิจกรรมเสริมที่ไม่ได้ระบุในโปรแกรม'
    ]
  },
  ar: {
    title: 'التفاصيل والشروط',
    conditions_tab: 'الشروط',
    inclusions_tab: 'مشمول',
    exclusions_tab: 'غير مشمول',
    conditions: [
      'تحتفظ الشركة بالحق في تغيير البرنامج، مع إعطاء الأولوية لمصلحة العميل.',
      'الشركة ليست مسؤولة عن رفض الدخول إذا كنت خارج الاتفاقية.',
      'سعر باقة الجولة هذا لا يشمل الإكراميات للمرشد والسائق.'
    ],
    inclusions: [
      'الإقامة كما هو محدد في خط سير الرحلة.',
      'النقل حسب خط سير الرحلة (بما في ذلك تذاكر القطار فائق السرعة عند ذكرها).',
      'الوجبات كما هو محدد في خطة الوجبات.',
      'رسوم الدخول إلى مناطق الجذب المذكورة في خط سير الرحلة.',
      'مرشد سياحي محلي.'
    ],
    exclusions: [
      'تذاكر الطيران الدولية والداخلية غير المذكورة في البرنامج.',
      'رسوم التأشيرة (إن وجدت).',
      'المصاريف الشخصية مثل الغسيل والمكالمات الهاتفية والميني بار.',
      'الإكراميات للمرشد السياحي والسائق.',
      'الجولات أو الأنشطة الاختيارية غير المذكورة في خط سير الرحلة.'
    ]
  },
  cn: {
    title: '详细信息和条件',
    conditions_tab: '条件',
    inclusions_tab: '包含',
    exclusions_tab: '不包含',
    conditions: [
      '公司保留更改计划的权利，但会优先考虑客户的利益。',
      '如果您超出协议范围，公司对拒绝入境概不负责。',
      '此旅游套餐价格不包括导游和司机的消费。'
    ],
    inclusions: [
      '行程中指定的住宿。',
      '行程中安排的交通（包括提到的高铁票）。',
      '膳食计划中指定的餐点。',
      '行程中提到的景点的门票。',
      '当地导游。'
    ],
    exclusions: [
      '计划中未提及的国际和国内机票。',
      '签证费（如果适用）。',
      '洗衣、电话和迷你吧等个人开支。',
      '导游和司机的消费。',
      '行程中未提及的可选旅游或活动。'
    ]
  }
};


export const allPackagesData = [
  {
    id: '1',
    tourCode: 'LHT VTE-VV',
    priceThb: '6,500',
    priceUsd: '195',
    images: {
      th: PlaceHolderImages.find((p) => p.id === 'vientiane-tour-th'),
      en: PlaceHolderImages.find((p) => p.id === 'vientiane-tour-en'),
    },
    category: 'laos',
    meals: [
      { day: 1, breakfast: false, lunch: true, dinner: true },
      { day: 2, breakfast: true, lunch: true, dinner: true },
      { day: 3, breakfast: true, lunch: false, dinner: false },
    ],
    translations: {
      en: { 
        title: 'Vientiane-VangVieng', 
        days: '3 Days 2 Nights', 
        description: 'Explore the charming capital of Vientiane, visit sacred temples, and discover the stunning natural beauty of Vang Vieng with its limestone karsts and river activities.',
        itinerary: [
          {
            day: 'Day 1',
            title: 'Arrival in Vientiane',
            activities: [
              'Pick up at the border, airport, or train station - our team will be waiting for you upon arrival for a convenient and quick start to your trip.',
              'Presidential Palace - admire the elegant French colonial architecture and take photos of the city\'s important landmark.',
              'Jamia Mosque - experience one of the oldest mosques and learn about the history of the Muslim community in Vientiane.',
              'Pha That Luang - the golden stupa, a national symbol of Laos.',
              'Mekong Riverside Night Market - a market full of color, local culture, food, and handicrafts, perfect for an evening stroll and shopping.'
            ]
          },
          {
            day: 'Day 2',
            title: 'Nampien Yorla Pa (Vang Vieng)',
            activities: [
                'Travel to Vang Vieng by high-speed train, enjoying scenic views along the way.',
                'Check-in at Nampien Yorla Pa Resort and enjoy the stunning mountain views.',
                'Explore the famous Blue Lagoon and take a refreshing dip in its turquoise waters.',
                'Visit Tham Phu Kham Cave, known for its reclining Buddha statue inside.',
                'Enjoy relaxing time at the resort or explore Vang Vieng town.'
            ]
          },
          {
            day: 'Day 3',
            title: 'Return Trip',
            activities: [
              'Enjoy breakfast at the resort.',
              'Free time for souvenir shopping or exploring Vang Vieng further.',
              'Travel back to Vientiane for your departure.'
            ]
          }
        ]
      },
      th: { 
        title: 'เวียงจันทน์-วังเวียง', 
        days: '3 วัน 2 คืน', 
        description: 'สำรวจเมืองหลวงที่มีเสน่ห์อย่างเวียงจันทน์ เยี่ยมชมวัดศักดิ์สิทธิ์ และค้นพบความงามทางธรรมชาติอันน่าทึ่งของวังเวียงด้วยภูเขาหินปูนและกิจกรรมทางแม่น้ำ',
        itinerary: [
          {
            day: 'วันที่ 1',
            title: 'เดินทางถึงเวียงจันทน์',
            activities: [
              'รับที่ด่าน, สนามบิน หรือสถานีรถไฟ - ทีมงานจะรอรับคุณเมื่อเดินทางมาถึง เพื่อความสะดวกและรวดเร็วในการเริ่มต้นทริป',
              'ทำเนียบประธานาธิบดี - ชมสถาปัตยกรรมสไตล์ฝรั่งเศสอันสง่างาม และถ่ายภาพแลนด์มาร์กสำคัญของเมือง',
              'มัสยิดจามิอะ - สัมผัสหนึ่งในมัสยิดที่เก่าแก่ที่สุด และเรียนรู้ประวัติชุมชนมุสลิมในเวียงจันทน์',
              'พระธาตุหลวง - พระธาตุทองคู่บ้านคู่เมืองลาว',
              'ตลาดกลางคืนริมแม่น้ำโขง - ตลาดที่เต็มไปด้วยสีสัน วัฒนธรรมท้องถิ่น อาหารและสินค้าหัตถกรรม เหมาะสำหรับเดินเล่นและช้อปปิ้งตอนเย็น'
            ]
          },
          {
            day: 'วันที่ 2',
            title: 'น้ำเพียง ยอละปา (วังเวียง)',
            activities: [
                'เดินทางสู่วังเวียงโดยรถไฟความเร็วสูง ชมวิวทิวทัศน์ที่สวยงามตลอดทาง',
                'เช็คอินที่รีสอร์ท น้ำเพียง ยอละปา และเพลิดเพลินกับทิวทัศน์ภูเขาที่สวยงาม',
                'สำรวจบลูลากูนที่มีชื่อเสียงและแช่ตัวในน้ำสีฟ้าครามเพื่อความสดชื่น',
                'เยี่ยมชมถ้ำภูคำ ซึ่งเป็นที่รู้จักจากพระพุทธรูปปางไสยาสน์ที่อยู่ภายใน',
                'เพลิดเพลินกับเวลาพักผ่อนที่รีสอร์ทหรือสำรวจเมืองวังเวียง'
            ]
          },
          {
            day: 'วันที่ 3',
            title: 'เดินทางกลับ',
            activities: [
                'รับประทานอาหารเช้าที่รีสอร์ท',
                'เวลาอิสระสำหรับซื้อของที่ระลึกหรือสำรวจวังเวียงเพิ่มเติม',
                'เดินทางกลับเวียงจันทน์เพื่อเดินทางกลับ'
            ]
          }
        ]
      },
      ar: { 
        title: 'فيينتيان-فANG VIENG', 
        days: '3 أيام 2 ليالي', 
        description: 'استكشف العاصمة الساحرة فيينتيان ، وقم بزيارة المعابد المقدسة ، واكتشف الجمال الطبيعي المذهل لفانغ فينغ بتكويناتها الكارستية وأنشطتها النهرية.',
        itinerary: [
          {
              day: 'اليوم 1',
              title: 'الوصول إلى فيينتيان',
              activities: [
                  'الاستقبال عند الحدود أو المطار أو محطة القطار - سيكون فريقنا في انتظارك عند وصولك لبدء رحلتك بسهولة وسرعة.',
                  'القصر الرئاسي - استمتع بالهندسة المعمارية الفرنسية الاستعمارية الأنيقة والتقط صوراً للمعالم الهامة في المدينة.',
                  'مسجد جامع - قم بزيارة أحد أقدم المساجد وتعرف على تاريخ المجتمع المسلم في فيينتيان.',
                  'فا ذات لوانغ - المعبد الذهبي الذي يعد رمزًا وطنيًا للاوس.',
                  'السوق الليلي على ضفاف نهر الميكونغ - سوق مليء بالألوان والثقافة المحلية والطعام والمشغولات اليدوية، وهو مثالي للتنزه والتسوق في المساء.'
              ]
          },
          {
              day: 'اليوم 2',
              title: 'نامبين يورلا با (فانغ فيينغ)',
              activities: [
                  'السفر إلى فانغ فيينغ بالقطار فائق السرعة، والاستمتاع بالمناظر الخلابة على طول الطريق.',
                  'تسجيل الدخول في منتجع نامبين يورلا با والاستمتاع بالمناظر الجبلية الخلابة.',
                  'استكشاف البحيرة الزرقاء الشهيرة والاستمتاع بالسباحة المنعشة في مياهها الفيروزية.',
                  'زيارة كهف ثام فو خام المعروف بتمثال بوذا المتكئ بداخله.',
                  'استمتع بوقت من الاسترخاء في المنتجع أو استكشف مدينة فانغ فيينغ.'
              ]
          },
          {
              day: 'اليوم 3',
              title: 'رحلة العودة',
              activities: [
                  'تناول الإفطار في المنتجع.',
                  'وقت حر لشراء الهدايا التذكارية أو استكشاف فانغ فيينغ أكثر.',
                  'العودة إلى فيينتيان للمغادرة.'
              ]
          }
        ]
      },
      cn: { 
        title: '万象-万荣', 
        days: '3天2夜', 
        description: '探索迷人的首都万象，参观神圣的寺庙，发现万荣令人惊叹的自然美景，包括其石灰岩喀斯特地貌和河流活动。',
        itinerary: [
          {
            day: '第一天',
            title: '抵达万象',
            activities: [
              '在边境、机场或火车站接您 - 我们的团队将在您抵达时等候，为您提供方便快捷的旅行开端。',
              '总统府 - 欣赏典雅的法国殖民时期建筑，并拍摄城市重要地标的照片。',
              '贾米亚清真寺 - 体验最古老的清真寺之一，了解万象穆斯林社区的历史。',
              '塔銮 - 金色佛塔，老挝的国家象征。',
              '湄公河畔夜市 - 一个充满色彩、当地文化、美食和手工艺品的市场，非常适合晚上散步和购物。'
            ]
          },
          {
            day: '第二天',
            title: '南宾约拉巴 (万荣)',
            activities: [
                '乘坐高速列车前往万荣，沿途欣赏美丽的风景。',
                '入住南宾约拉巴度假村，欣赏壮丽的山景。',
                '探索著名的蓝色泻湖，在其碧绿的海水中畅游一番。',
                '参观坦普坎溶洞，以其内部的卧佛像而闻名。',
                '在度假村享受轻松的时光或探索万荣镇。'
            ]
          },
          {
            day: '第三天',
            title: '返程',
            activities: [
              '在度假村享用早餐。',
              '自由活动时间，购买纪念品或进一步探索万荣。',
              '返回万象，准备离开。'
            ]
          }
        ]
      },
    },
  },
  {
    id: '2',
    tourCode: 'LHT VTE-LPB',
    priceThb: '11,000',
    priceUsd: '320',
    images: {
      th: PlaceHolderImages.find((p) => p.id === 'vientiane-luang-prabang-tour-th'),
      en: PlaceHolderImages.find((p) => p.id === 'vientiane-luang-prabang-tour-en'),
    },
    category: 'laos',
    meals: [
        { day: 1, breakfast: false, lunch: true, dinner: true },
        { day: 2, breakfast: true, lunch: true, dinner: true },
        { day: 3, breakfast: true, lunch: true, dinner: true },
        { day: 4, breakfast: true, lunch: false, dinner: false },
    ],
    translations: {
      en: { 
        title: 'Vientiane-Luang Prabang', 
        days: '4 Days 3 Nights', 
        description: 'Journey from the capital to the UNESCO World Heritage city of Luang Prabang. Discover ancient temples, witness the morning alms-giving ceremony, and explore the beautiful Kuang Si Waterfalls.',
        itinerary: [
          {
            day: 'Day 1',
            title: 'Arrival in Vientiane',
            activities: [
              'Arrival in Vientiane, transfer to hotel for check-in.',
              'Visit Wat Si Saket, with its thousands of miniature Buddha statues.',
              'Explore Wat Phra Keo, which formerly housed the Emerald Buddha.',
              'See the Presidential Palace and Patuxai (Victory Gate).',
              'End the day at Pha That Luang, the national symbol of Laos.'
            ]
          },
          {
            day: 'Day 2',
            title: 'Travel to Luang Prabang',
            activities: [
              'Morning departure from Vientiane to Luang Prabang via high-speed train.',
              'Upon arrival in Luang Prabang, transfer to your hotel.',
              'Climb Mount Phousi for a panoramic sunset view of the city and Mekong River.',
              'Explore the vibrant Luang Prabang Night Market.'
            ]
          },
          {
            day: 'Day 3',
            title: 'Luang Prabang & Kuang Si Falls',
            activities: [
              'Witness the sacred morning alms-giving ceremony (Tak Bat).',
              'Visit the Royal Palace Museum and Wat Xieng Thong temple.',
              'Journey to the stunning Kuang Si Waterfalls, with time for swimming.',
              'Visit the Bear Rescue Centre located at the entrance of the falls.'
            ]
          },
          {
            day: 'Day 4',
            title: 'Departure',
            activities: [
              'Enjoy a final Lao breakfast.',
              'Free time for last-minute shopping or sightseeing.',
              'Transfer to Luang Prabang International Airport for your departure.'
            ]
          }
        ]
      },
      th: { 
        title: 'เวียงจันทน์-หลวงพระบาง', 
        days: '4 วัน 3 คืน', 
        description: 'เดินทางจากเมืองหลวงสู่เมืองมรดกโลกหลวงพระบาง ค้นพบวัดโบราณ ชมพิธีตักบาตรตอนเช้า และสำรวจน้ำตกกวางสีที่สวยงาม',
        itinerary: [
          {
            day: 'วันที่ 1',
            title: 'เดินทางถึงเวียงจันทน์',
            activities: [
              'เดินทางถึงเวียงจันทน์, เดินทางเข้าที่พัก',
              'เยี่ยมชมวัดสีสะเกด ที่มีพระพุทธรูปขนาดเล็กนับพันองค์',
              'สำรวจหอพระแก้ว ซึ่งเคยเป็นที่ประดิษฐานพระแก้วมรกต',
              'ชมทำเนียบประธานาธิบดีและประตูชัย',
              'ปิดท้ายวันที่พระธาตุหลวง สัญลักษณ์ของประเทศลาว'
            ]
          },
          {
            day: 'วันที่ 2',
            title: 'เดินทางสู่หลวงพระบาง',
            activities: [
              'เดินทางจากเวียงจันทน์สู่หลวงพระบางในตอนเช้าโดยรถไฟความเร็วสูง',
              'เมื่อถึงหลวงพระบาง เดินทางเข้าที่พัก',
              'ขึ้นพระธาตุพูสีเพื่อชมวิวพระอาทิตย์ตกของเมืองและแม่น้ำโขง',
              'สำรวจตลาดมืดหลวงพระบางที่มีชีวิตชีวา'
            ]
          },
          {
            day: 'วันที่ 3',
            title: 'หลวงพระบางและน้ำตกกวางสี',
            activities: [
              'ร่วมพิธีตักบาตรข้าวเหนียวในตอนเช้า',
              'เยี่ยมชมพิพิธภัณฑ์พระราชวังและวัดเชียงทอง',
              'เดินทางสู่น้ำตกกวางสีที่สวยงาม มีเวลาสำหรับเล่นน้ำ',
              'เยี่ยมชมศูนย์อนุรักษ์หมีที่ตั้งอยู่ทางเข้าน้ำตก'
            ]
          },
          {
            day: 'วันที่ 4',
            title: 'เดินทางกลับ',
            activities: [
              'เพลิดเพลินกับอาหารเช้าแบบลาวเป็นมื้อสุดท้าย',
              'เวลาอิสระสำหรับการช้อปปิ้งหรือเที่ยวชมสถานที่ในนาทีสุดท้าย',
              'เดินทางไปยังสนามบินนานาชาติหลวงพระบางเพื่อเดินทางกลับ'
            ]
          }
        ]
      },
      ar: { 
        title: 'فيينتيان-لوانغ برابانغ', 
        days: '4 أيام 3 ليالي', 
        description: 'رحلة من العاصمة إلى مدينة لوانغ برابانغ المدرجة على قائمة اليونسكو للتراث العالمي. اكتشف المعابد القديمة ، وشاهد طقوس تقديم الصدقات الصباحية ، واستكشف شلالات كوانغ سي الجميلة.',
        itinerary: [
          {
            day: 'اليوم 1',
            title: 'الوصول إلى فيينتيان',
            activities: [
              'الوصول إلى فيينتيان، ثم الانتقال إلى الفندق لتسجيل الدخول.',
              'زيارة معبد وات سي ساكيت، الذي يضم آلاف تماثيل بوذا المصغرة.',
              'استكشاف معبد وات فرا كيو، الذي كان يضم في السابق بوذا الزمردي.',
              'رؤية القصر الرئاسي وباتوكساي (بوابة النصر).',
              'إنهاء اليوم في فا ذات لوانغ، الرمز الوطني للاوس.'
            ]
          },
          {
            day: 'اليوم 2',
            title: 'السفر إلى لوانغ برابانغ',
            activities: [
              'المغادرة صباحًا من فيينتيان إلى لوانغ برابانغ عبر القطار فائق السرعة.',
              'عند الوصول إلى لوانغ برابانغ، الانتقال إلى فندقك.',
              'صعود جبل فوسي للاستمتاع بمنظر بانورامي لغروب الشمس على المدينة ونهر الميكونغ.',
              'استكشاف سوق لوانغ برابانغ الليلي النابض بالحياة.'
            ]
          },
          {
            day: 'اليوم 3',
            title: 'لوانغ برابانغ وشلالات كوانغ سي',
            activities: [
              'مشاهدة طقوس تقديم الصدقات الصباحية المقدسة (تاك بات).',
              'زيارة متحف القصر الملكي ومعبد وات شينغ ثونغ.',
              'رحلة إلى شلالات كوانغ سي المذهلة، مع وقت للسباحة.',
              'زيارة مركز إنقاذ الدببة الموجود عند مدخل الشلالات.'
            ]
          },
          {
            day: 'اليوم 4',
            title: 'المغادرة',
            activities: [
              'استمتع بوجبة إفطار لاوسية أخيرة.',
              'وقت حر للتسوق في اللحظة الأخيرة أو مشاهدة المعالم السياحية.',
              'الانتقال إلى مطار لوانغ برابانغ الدولي للمغادرة.'
            ]
          }
        ]
      },
      cn: { 
        title: '万象-琅勃拉邦', 
        days: '4天3夜', 
        description: '从首都到联合国教科文组织世界遗产城市琅勃拉邦的旅程。发现古老的寺庙，观看早晨的布施仪式，探索美丽的关西瀑布。',
        itinerary: [
          {
            day: '第一天',
            title: '抵达万象',
            activities: [
              '抵达万象，送往酒店办理入住。',
              '参观西萨格寺，那里有数以千计的微型佛像。',
              '探索玉佛寺，该寺曾供奉玉佛。',
              '参观总统府和凯旋门。',
              '在老挝的国家象征塔銮结束一天的行程。'
            ]
          },
          {
            day: '第二天',
            title: '前往琅勃拉邦',
            activities: [
              '早上乘坐高速列车从万象出发前往琅勃拉邦。',
              '抵达琅勃拉邦后，送往您的酒店。',
              '攀登普西山，欣赏城市和湄公河的全景日落。',
              '探索充满活力的琅勃拉邦夜市。'
            ]
          },
          {
            day: '第三天',
            title: '琅勃拉邦和关西瀑布',
            activities: [
              '观看神圣的早晨布施仪式（Tak Bat）。',
              '参观皇宫博物馆和香通寺。',
              '前往美丽的关西瀑布，并有时间游泳。',
              '参观位于瀑布入口处的熊救援中心。'
            ]
          },
          {
            day: '第四天',
            title: '离开',
            activities: [
              '享用最后一顿老挝早餐。',
              '自由活动时间，可进行最后的购物或观光。',
              '送往琅勃拉邦国际机场，准备离开。'
            ]
          }
        ]
      },
    },
  },
  {
    id: '3',
    tourCode: 'LHT VTE-MF-VV',
    priceThb: '9,500',
    priceUsd: '265',
    images: {
      th: PlaceHolderImages.find((p) => p.id === 'vang-vieng-tour-th'),
      en: PlaceHolderImages.find((p) => p.id === 'vang-vieng-tour-en'),
    },
    category: 'laos',
    meals: [
      { day: 1, breakfast: false, lunch: true, dinner: true },
      { day: 2, breakfast: true, lunch: true, dinner: true },
      { day: 3, breakfast: true, lunch: true, dinner: true },
      { day: 4, breakfast: true, lunch: false, dinner: false },
    ],
    translations: {
      en: { 
        title: 'Vientiane-MuangFueang-VangVieng', 
        days: '4 Days 3 Nights', 
        description: 'An off-the-beaten-path adventure! Discover the serene landscapes of Muang Fueang, a hidden gem, before heading to the adventure hub of Vang Vieng.',
        itinerary: [
          {
            day: 'Day 1',
            title: 'Vientiane to Muang Fueang',
            activities: [
              'Pick up from Vientiane and travel to Muang Fueang, a tranquil town surrounded by nature.',
              'Check into your accommodation and enjoy the peaceful atmosphere.',
              'Take a boat trip on the Nam Lik Reservoir to admire the stunning scenery.',
              'Enjoy a local Halal dinner by the river.'
            ]
          },
          {
            day: 'Day 2',
            title: 'Muang Fueang to Vang Vieng',
            activities: [
              'After breakfast, travel from Muang Fueang to Vang Vieng.',
              'Check into your hotel in Vang Vieng.',
              'Explore the town and its surroundings.',
              'Visit Tham Chang Cave, which offers great views of the valley.'
            ]
          },
          {
            day: 'Day 3',
            title: 'Vang Vieng Activities',
            activities: [
              'Explore the famous Blue Lagoon (Lagoon 1) for a swim.',
              'Challenge yourself with a climb up to Phu Kham Cave.',
              'In the afternoon, enjoy kayaking or tubing down the Nam Song River.',
              'Watch the sunset over the limestone karsts.'
            ]
          },
          {
            day: 'Day 4',
            title: 'Return to Vientiane',
            activities: [
              'Enjoy breakfast and some free time in the morning.',
              'Travel back to Vientiane.',
              'Transfer to the airport or your hotel in Vientiane for departure.'
            ]
          }
        ]
      },
      th: { 
        title: 'เวียงจันทน์-เมืองเฟือง-วังเวียง', 
        days: '4 วัน 3 คืน', 
        description: 'การผจญภัยนอกเส้นทาง! ค้นพบภูมิประเทศอันเงียบสงบของเมืองเฟือง อัญมณีที่ซ่อนอยู่ ก่อนมุ่งหน้าสู่ศูนย์กลางการผจญภัยของวังเวียง',
        itinerary: [
          {
            day: 'วันที่ 1',
            title: 'เวียงจันทน์สู่เมืองเฟือง',
            activities: [
              'รับจากเวียงจันทน์และเดินทางไปยังเมืองเฟือง เมืองอันเงียบสงบที่รายล้อมไปด้วยธรรมชาติ',
              'เข้าที่พักและเพลิดเพลินกับบรรยากาศอันเงียบสงบ',
              'ล่องเรือในอ่างเก็บน้ำน้ำลิกเพื่อชมทิวทัศน์อันน่าทึ่ง',
              'เพลิดเพลินกับอาหารเย็นฮาลาลท้องถิ่นริมแม่น้ำ'
            ]
          },
          {
            day: 'วันที่ 2',
            title: 'เมืองเฟืองสู่วังเวียง',
            activities: [
              'หลังอาหารเช้า เดินทางจากเมืองเฟืองไปยังวังเวียง',
              'เข้าที่พักในวังเวียง',
              'สำรวจเมืองและบริเวณโดยรอบ',
              'เยี่ยมชมถ้ำจัง ซึ่งมองเห็นทิวทัศน์ที่สวยงามของหุบเขา'
            ]
          },
          {
            day: 'วันที่ 3',
            title: 'กิจกรรมในวังเวียง',
            activities: [
              'สำรวจบลูลากูนที่มีชื่อเสียง (ลากูน 1) เพื่อเล่นน้ำ',
              'ท้าทายตัวเองด้วยการปีนขึ้นไปบนถ้ำภูคำ',
              'ในช่วงบ่าย สนุกกับการพายเรือคายัคหรือล่องห่วงยางไปตามแม่น้ำซอง',
              'ชมพระอาทิตย์ตกเหนือภูเขาหินปูน'
            ]
          },
          {
            day: 'วันที่ 4',
            title: 'เดินทางกลับเวียงจันทน์',
            activities: [
              'รับประทานอาหารเช้าและมีเวลาว่างในตอนเช้า',
              'เดินทางกลับเวียงจันทน์',
              'เดินทางต่อไปยังสนามบินหรือโรงแรมของคุณในเวียงจันทน์เพื่อเดินทางกลับ'
            ]
          }
        ]
      },
      ar: { 
        title: 'فيينتيان-موانغ فونغ-فANG VIENG', 
        days: '4 أيام 3 ليالي', 
        description: 'مغامرة خارج المسار المألوف! اكتشف المناظر الطبيعية الهادئة في موانغ فونغ ، وهي جوهرة مخفية ، قبل التوجه إلى مركز المغامرات في فانغ فينغ.',
        itinerary: [
          {
            day: 'اليوم 1',
            title: 'من فيينتيان إلى موانغ فيونغ',
            activities: [
              'الانطلاق من فيينتيان والسفر إلى موانغ فيونغ، وهي بلدة هادئة محاطة بالطبيعة.',
              'تسجيل الدخول في مكان إقامتك والاستمتاع بالجو الهادئ.',
              'القيام برحلة بالقارب في خزان نام ليك للاستمتاع بالمناظر الخلابة.',
              'الاستمتاع بعشاء حلال محلي على ضفاف النهر.'
            ]
          },
          {
            day: 'اليوم 2',
            title: 'من موانغ فيونغ إلى فانغ فيينغ',
            activities: [
              'بعد الإفطار، السفر من موانغ فيونغ إلى فانغ فيينغ.',
              'تسجيل الدخول في فندقك في فانغ فيينغ.',
              'استكشاف المدينة والمناطق المحيطة بها.',
              'زيارة كهف ثام تشانغ، الذي يوفر إطلالات رائعة على الوادي.'
            ]
          },
          {
            day: 'اليوم 3',
            title: 'أنشطة في فانغ فيينغ',
            activities: [
              'استكشاف البحيرة الزرقاء الشهيرة (البحيرة 1) للسباحة.',
              'تحدي نفسك بتسلق كهف فو خام.',
              'في فترة ما بعد الظهر، استمتع بالتجديف بالكاياك أو ركوب الأنابيب في نهر نام سونغ.',
              'مشاهدة غروب الشمس فوق التكوينات الكارستية الجيرية.'
            ]
          },
          {
            day: 'اليوم 4',
            title: 'العودة إلى فيينتيان',
            activities: [
              'تناول الإفطار وبعض وقت الفراغ في الصباح.',
              'العودة إلى فيينتيان.',
              'الانتقال إلى المطار أو فندقك في فيينتيان للمغادرة.'
            ]
          }
        ]
      },
      cn: { 
        title: '万象-孟蓬-万荣', 
        days: '4天3夜', 
        description: '一次另辟蹊径的冒险！在前往万荣这个冒险中心之前，探索孟蓬宁静的风景，那是一颗隐藏的宝石。',
        itinerary: [
          {
            day: '第一天',
            title: '万象到孟蓬',
            activities: [
              '从万象接您，前往被大自然环绕的宁静小镇孟蓬。',
              '入住您的住处，享受宁静的氛围。',
              '在南利克水库乘船游览，欣赏迷人的风景。',
              '在河边享用当地的清真晚餐。'
            ]
          },
          {
            day: '第二天',
            title: '孟蓬到万荣',
            activities: [
              '早餐后，从孟蓬前往万荣。',
              '入住您在万荣的酒店。',
              '探索小镇及其周边地区。',
              '参观坦江溶洞，那里可以欣赏到山谷的美景。'
            ]
          },
          {
            day: '第三天',
            title: '万荣活动',
            activities: [
              '探索著名的蓝色泻湖（1号泻湖）游泳。',
              '挑战自己，爬上普坎溶洞。',
              '下午，享受在南松河上划皮划艇或漂流。',
              '观看石灰岩喀斯特地貌上的日落。'
            ]
          },
          {
            day: '第四天',
            title: '返回万象',
            activities: [
              '享用早餐，早上有一些自由活动时间。',
              '返回万象。',
              '送往机场或您在万象的酒店离开。'
            ]
          }
        ]
      },
    },
  },
  {
    id: '4',
    tourCode: 'LHT VTE-MF-VV-LPB',
    priceThb: '12,500',
    priceUsd: '360',
    images: {
      th: PlaceHolderImages.find((p) => p.id === 'laos-multi-dest-tour-th'),
      en: PlaceHolderImages.find((p) => p.id === 'laos-multi-dest-tour-en'),
    },
    category: 'laos',
    meals: [
        { day: 1, breakfast: false, lunch: true, dinner: true },
        { day: 2, breakfast: true, lunch: true, dinner: true },
        { day: 3, breakfast: true, lunch: true, dinner: true },
        { day: 4, breakfast: true, lunch: true, dinner: true },
        { day: 5, breakfast: true, lunch: false, dinner: false },
    ],
    translations: {
      en: {
        title: 'Vientiane-MuangFueang-VangVieng-Luang Prabang',
        days: '5 Days 4 Nights',
        description: 'The ultimate Laos exploration. This tour combines the highlights of Vientiane, the tranquility of Muang Fueang, the adventures of Vang Vieng, and the cultural heart of Luang Prabang.',
        itinerary: [
          {
            day: 'Day 1',
            title: 'Arrival in Vientiane &amp; Transfer to Muang Fueang',
            activities: [
              'Arrive in Vientiane, meet our guide and travel to Muang Fueang.',
              'Check into your serene riverside accommodation.',
              'Relax and enjoy the peaceful surroundings of this hidden gem.'
            ]
          },
          {
            day: 'Day 2',
            title: 'Muang Fueang to Vang Vieng',
            activities: [
              'Enjoy a local breakfast.',
              'Travel through scenic roads to the adventure town of Vang Vieng.',
              'Check into your hotel and have lunch.',
              'Afternoon exploration of Vang Vieng town and the Nam Song riverside.'
            ]
          },
          {
            day: 'Day 3',
            title: 'Vang Vieng to Luang Prabang',
            activities: [
              'Morning visit to the Blue Lagoon for a refreshing swim.',
              'Travel from Vang Vieng to Luang Prabang by high-speed train.',
              'Arrive in the UNESCO World Heritage city and check into your hotel.',
              'Evening at leisure, perhaps exploring the night market.'
            ]
          },
          {
            day: 'Day 4',
            title: 'Luang Prabang City &amp; Kuang Si Falls',
            activities: [
              'Morning alms giving ceremony (optional).',
              'Visit Wat Xieng Thong, the city\'s most magnificent temple.',
              'Explore the Royal Palace Museum.',
              'Afternoon trip to the beautiful, multi-tiered Kuang Si Waterfalls.'
            ]
          },
          {
            day: 'Day 5',
            title: 'Departure from Luang Prabang',
            activities: [
              'Breakfast at the hotel.',
              'Free time for last-minute souvenir shopping.',
              'Transfer to Luang Prabang International Airport for your departure.'
            ]
          }
        ]
      },
      th: {
        title: 'เวียงจันทน์-เมืองเฟือง-วังเวียง-หลวงพระบาง',
        days: '5 วัน 4 คืน',
        description: 'สุดยอดการสำรวจลาว ทัวร์นี้รวมไฮไลท์ของเวียงจันทน์ ความเงียบสงบของเมืองเฟือง การผจญภัยของวังเวียง และหัวใจทางวัฒนธรรมของหลวงพระบาง',
        itinerary: [
          {
            day: 'วันที่ 1',
            title: 'ถึงเวียงจันทน์และเดินทางสู่เมืองเฟือง',
            activities: [
              'เดินทางถึงเวียงจันทน์ พบกับไกด์ของเราและเดินทางไปยังเมืองเฟือง',
              'เข้าที่พักริมแม่น้ำอันเงียบสงบของคุณ',
              'พักผ่อนและเพลิดเพลินกับสภาพแวดล้อมที่เงียบสงบของอัญมณีที่ซ่อนอยู่นี้'
            ]
          },
          {
            day: 'วันที่ 2',
            title: 'เมืองเฟืองสู่วังเวียง',
            activities: [
              'เพลิดเพลินกับอาหารเช้าแบบท้องถิ่น',
              'เดินทางผ่านถนนที่สวยงามไปยังเมืองแห่งการผจญภัยวังเวียง',
              'เข้าที่พักและรับประทานอาหารกลางวัน',
              'ช่วงบ่ายสำรวจเมืองวังเวียงและริมแม่น้ำซอง'
            ]
          },
          {
            day: 'วันที่ 3',
            title: 'วังเวียงสู่หลวงพระบาง',
            activities: [
              'ช่วงเช้าเยี่ยมชมบลูลากูนเพื่อว่ายน้ำให้สดชื่น',
              'เดินทางจากวังเวียงไปยังหลวงพระบางโดยรถไฟความเร็วสูง',
              'เดินทางถึงเมืองมรดกโลกและเข้าที่พักของคุณ',
              'ช่วงเย็นพักผ่อนตามอัธยาศัย อาจจะไปเดินเล่นตลาดมืด'
            ]
          },
          {
            day: 'วันที่ 4',
            title: 'เมืองหลวงพระบางและน้ำตกกวางสี',
            activities: [
              'พิธีตักบาตรข้าวเหนียวในตอนเช้า (ตามความสมัครใจ)',
              'เยี่ยมชมวัดเชียงทอง วัดที่งดงามที่สุดของเมือง',
              'สำรวจพิพิธภัณฑ์พระราชวัง',
              'ช่วงบ่ายเดินทางไปยังน้ำตกกวางสีที่สวยงามหลายชั้น'
            ]
          },
          {
            day: 'วันที่ 5',
            title: 'เดินทางออกจากหลวงพระบาง',
            activities: [
              'รับประทานอาหารเช้าที่โรงแรม',
              'เวลาว่างสำหรับซื้อของที่ระลึกในนาทีสุดท้าย',
              'เดินทางไปยังสนามบินนานาชาติหลวงพระบางเพื่อเดินทางกลับ'
            ]
          }
        ]
      },
      ar: {
        title: 'فيينتيان-موانغ فونغ-فANG VIENG-لوانغ برابانغ',
        days: '5 أيام 4 ليالي',
        description: 'الاستكشاف النهائي للاوس. تجمع هذه الجولة بين أبرز معالم فيينتيان وهدوء موانغ فونغ ومغامرات فانغ فينغ والقلب الثقافي لوانغ برابانغ.',
        itinerary: [
          {
            day: 'اليوم 1',
            title: 'الوصول إلى فيينتيان والانتقال إلى موانغ فيونغ',
            activities: [
              'الوصول إلى فيينتيان، مقابلة مرشدنا والسفر إلى موانغ فيونغ.',
              'تسجيل الدخول في مكان إقامتك الهادئ على ضفاف النهر.',
              'الاسترخاء والاستمتاع بالمناطق المحيطة الهادئة لهذه الجوهرة المخفية.'
            ]
          },
          {
            day: 'اليوم 2',
            title: 'من موانغ فيونغ إلى فانغ فيينغ',
            activities: [
              'الاستمتاع بوجبة إفطار محلية.',
              'السفر عبر طرق ذات مناظر خلابة إلى مدينة المغامرات فانغ فيينغ.',
              'تسجيل الدخول في فندقك وتناول الغداء.',
              'استكشاف بعد الظهر لمدينة فانغ فيينغ وضفاف نهر نام سونغ.'
            ]
          },
          {
            day: 'اليوم 3',
            title: 'من فانغ فيينغ إلى لوانغ برابانغ',
            activities: [
              'زيارة صباحية إلى البحيرة الزرقاء للسباحة المنعشة.',
              'السفر من فانغ فيينغ إلى لوانغ برابانغ بالقطار فائق السرعة.',
              'الوصول إلى مدينة التراث العالمي لليونسكو وتسجيل الدخول في فندقك.',
              'وقت حر في المساء، ربما لاستكشاف السوق الليلي.'
            ]
          },
          {
            day: 'اليوم 4',
            title: 'مدينة لوانغ برابانغ وشلالات كوانغ سي',
            activities: [
              'حضور طقوس تقديم الصدقات الصباحية (اختياري).',
              'زيارة معبد وات شينغ ثونغ، أروع معبد في المدينة.',
              'استكشاف متحف القصر الملكي.',
              'رحلة بعد الظهر إلى شلالات كوانغ سي الجميلة متعددة المستويات.'
            ]
          },
          {
            day: 'اليوم 5',
            title: 'المغادرة من لوانغ برابانغ',
            activities: [
              'تناول الإفطار في الفندق.',
              'وقت حر للتسوق وشراء الهدايا التذكارية في اللحظة الأخيرة.',
              'الانتقال إلى مطار لوانغ برابانغ الدولي للمغادرة.'
            ]
          }
        ]
      },
      cn: {
        title: '万象-孟蓬-万荣-琅勃拉邦',
        days: '5天4夜',
        description: '终极老挝探索之旅。此行程结合了万象的亮点、孟蓬的宁静、万荣的冒险以及琅勃拉邦的文化中心。',
        itinerary: [
          {
            day: '第一天',
            title: '抵达万象并前往孟蓬',
            activities: [
              '抵达万象，与我们的导游会面并前往孟蓬。',
              '入住您宁静的河滨住宿。',
              '放松身心，享受这个隐藏宝石的宁静环境。'
            ]
          },
          {
            day: '第二天',
            title: '孟蓬到万荣',
            activities: [
              '享用当地早餐。',
              '沿着风景优美的道路前往冒险小镇万荣。',
              '入住酒店并享用午餐。',
              '下午探索万荣镇和南松河畔。'
            ]
          },
          {
            day: '第三天',
            title: '万荣到琅勃拉邦',
            activities: [
              '早上参观蓝色泻湖，享受清凉的游泳。',
              '乘坐高速列车从万荣前往琅勃拉邦。',
              '抵达联合国教科文组织世界遗产城市并入住酒店。',
              '晚上自由活动，或许可以逛逛夜市。'
            ]
          },
          {
            day: '第四天',
            title: '琅勃拉邦市和关西瀑布',
            activities: [
              '早晨布施仪式（可选）。',
              '参观香通寺，该市最宏伟的寺庙。',
              '探索皇宫博物馆。',
              '下午前往美丽的、多层次的关西瀑布。'
            ]
          },
          {
            day: '第五天',
            title: '从琅勃拉邦出发',
            activities: [
              '在酒店享用早餐。',
              '自由活动时间，可进行最后的纪念品购物。',
              '送往琅勃拉邦国际机场，准备离开。'
            ]
          }
        ]
      },
    },
  },
  {
    id: '5',
    tourCode: 'LHT VTE-MF-VV-LPB-XSBN',
    priceThb: '30,000',
    priceUsd: '920',
    images: {
      th: PlaceHolderImages.find((p) => p.id === 'laos-china-tour-th'),
      en: PlaceHolderImages.find((p) => p.id === 'laos-china-tour-en'),
    },
    category: 'laos-china',
    meals: [],
    translations: {
      en: {
        title:
          'Vientiane-MuangFueang-VangVieng-Luang Prabang-Xishuangbanna (China)',
        days: '7 Days 6 Nights',
        description: 'A cross-border journey from the heart of Laos to the vibrant culture of Xishuangbanna in China. Experience diverse landscapes, cultures, and cuisines.',
        itinerary: []
      },
      th: {
        title:
          'เวียงจันทน์-เมืองเฟือง-วังเวียง-หลวงพระบาง-12ปันนา (ประเทศจีน)',
        days: '7 วัน 6 คืน',
        description: 'การเดินทางข้ามพรมแดนจากใจกลางประเทศลาวสู่วัฒนธรรมที่มีชีวิตชีวาของสิบสองปันนาในประเทศจีน สัมผัสกับภูมิประเทศ วัฒนธรรม และอาหารที่หลากหลาย',
        itinerary: []
      },
      ar: {
        title:
          'فيينتيان-موانغ فونغ-فانغ فينغ-لوانغ برابانغ-سيشوانغبانا (الصين)',
        days: '7 أيام 6 ليالي',
        description: 'رحلة عبر الحدود من قلب لاوس إلى ثقافة شيشوانغبانا النابضة بالحياة في الصين. جرب المناظر الطبيعية والثقافات والمأكولات المتنوعة.',
        itinerary: []
      },
      cn: {
        title:
          '万象-孟蓬-万荣-琅勃拉邦-西双版纳（中国）',
        days: '7天6夜',
        description: '从老挝心脏地带到中国西双版纳充满活力的文化的跨境之旅。体验多样的风景、文化和美食。',
        itinerary: []
      },
    },
  },
  {
    id: '6',
    tourCode: 'LHT KM-DL-LJ-SGL',
    priceThb: '38,000',
    priceUsd: '1,250',
    images: {
      th: PlaceHolderImages.find((p) => p.id === 'yunnan-tour-th'),
      en: PlaceHolderImages.find((p) => p.id === 'yunnan-tour-en'),
    },
    category: 'china',
    meals: [],
    translations: {
      en: { 
        title: 'Kunming-Dali-Lijiang-Shangrila (China)', 
        days: '7 Days 6 Nights', 
        description: 'Explore the wonders of Yunnan province. From the "Spring City" of Kunming to the ancient towns of Dali and Lijiang, and the mystical paradise of Shangri-La.',
        itinerary: []
      },
      th: {
        title: 'คุณหมิง-ต้าหลี-หลีเจียง-แชงกรีลา (ประเทศจีน)',
        days: '7 วัน 6 คืน',
        description: 'สำรวจความมหัศจรรย์ของมณฑลยูนนาน จาก "เมืองแห่งฤดูใบไม้ผลิ" คุนหมิงสู่เมืองโบราณต้าหลี่และลี่เจียง และสวรรค์อันลึกลับของแชงกรี-ลา',
        itinerary: []
      },
      ar: {
        title: 'كونمينغ-دالي-ليجيانغ-شانغريلا (الصين)',
        days: '7 أيام 6 ليالي',
        description: 'استكشف عجائب مقاطعة يوننان. من "مدينة الربيع" كونمينغ إلى مدن دالي وليجيانغ القديمة ، وجنة شانغريلا الغامضة.',
        itinerary: []
      },
      cn: { 
        title: '昆明-大理-丽江-香格里拉（中国）', 
        days: '7天6夜', 
        description: '探索云南省的奇观。从“春城”昆明到大理和丽江的古镇，再到神秘的天堂香格里拉。',
        itinerary: []
      },
    },
  },
  {
    id: '7',
    tourCode: 'LHT KM-CQ',
    priceThb: '40,000',
    priceUsd: '1,333',
    images: {
      th: PlaceHolderImages.find((p) => p.id === 'kunming-chongqing-tour-th'),
      en: PlaceHolderImages.find((p) => p.id === 'kunming-chongqing-tour-en'),
    },
    category: 'china',
    meals: [],
    translations: {
      en: { 
        title: 'Kunming-Chongqing (China)', 
        days: '7 Days 6 Nights', 
        description: 'A tale of two cities. Discover the cultural heritage of Kunming and the futuristic, bustling metropolis of Chongqing, famous for its spicy hotpot and unique cityscape.',
        itinerary: []
      },
      th: { 
        title: 'คุณหมิง-ฉงชิ่ง (ประเทศจีน)', 
        days: '7 วัน 6 คืน', 
        description: 'เรื่องราวของสองเมือง ค้นพบมรดกทางวัฒนธรรมของคุนหมิงและมหานครที่คึกคักและล้ำสมัยของฉงชิ่ง ซึ่งมีชื่อเสียงด้านหม้อไฟรสเผ็ดและทิวทัศน์เมืองที่ไม่เหมือนใคร',
        itinerary: [] 
      },
      ar: { 
        title: 'كونمينغ-تشونغتشينغ (الصين)', 
        days: '7 أيام 6 ليالي', 
        description: 'حكاية مدينتين. اكتشف التراث الثقافي لكونمينغ وحاضرة تشونغتشينغ الصاخبة والمستقبلية ، المشهورة بالقدر الساخن الحار ومناظرها الحضرية الفريدة.',
        itinerary: []
      },
      cn: { 
        title: '昆明-重庆（中国）', 
        days: '7天6夜', 
        description: '两个城市的故事。探索昆明的文化遗产和未来主义、繁华的重庆大都市，以其辛辣的火锅和独特的城市景观而闻名。',
        itinerary: []
      },
    },
  },
  {
    id: '8',
    tourCode: 'KM-BJ-TJ',
    priceThb: '49,000',
    priceUsd: '1,600',
    images: {
      th: PlaceHolderImages.find((p) => p.id === 'kunming-beijing-tianjin-tour-th'),
      en: PlaceHolderImages.find((p) => p.id === 'kunming-beijing-tianjin-tour-en'),
    },
    category: 'china',
    meals: [],
    translations: {
      en: { 
        title: 'Kunming-Beijing-Tianjin (China)', 
        days: '7 Days 6 Nights', 
        description: "Journey through China's history and modernity. Explore the imperial wonders of Beijing, including the Great Wall and Forbidden City, and visit the port city of Tianjin.",
        itinerary: []
      },
      th: { 
        title: 'คุณหมิง-ปักกิ่ง-เทียนจิน (ประเทศจีน)', 
        days: '7 วัน 6 คืน', 
        description: 'เดินทางผ่านประวัติศาสตร์และความทันสมัยของจีน สำรวจความมหัศจรรย์ของจักรวรรดิปักกิ่ง รวมถึงกำแพงเมืองจีนและพระราชวังต้องห้าม และเยี่ยมชมเมืองท่าเทียนจิน',
        itinerary: []
      },
      ar: { 
        title: 'كونمينغ-بكين-تيانجين (الصين)', 
        days: '7 أيام 6 ليالي', 
        description: 'رحلة عبر تاريخ الصين وحداثتها. استكشف عجائب بكين الإمبراطورية ، بما في ذلك سور الصين العظيم والمدينة المحرمة ، وقم بزيارة مدينة تيانجين الساحلية.',
        itinerary: []
      },
      cn: { 
        title: '昆明-北京-天津（中国）', 
        days: '7天6夜', 
        description: '穿越中国的历史与现代。探索北京的帝国奇观，包括长城和紫禁城，并参观港口城市天津。',
        itinerary: []
      },
    },
  },
  {
    id: '9',
    tourCode: 'LHT KM-DL-LJ',
    priceThb: '30000',
    priceUsd: '999',
    images: {
      th: PlaceHolderImages.find((p) => p.id === 'kunming-dali-lijiang-5d4n-th'),
      en: PlaceHolderImages.find((p) => p.id === 'kunming-dali-lijiang-5d4n-en'),
    },
    category: 'china',
    meals: [],
    translations: {
      en: { 
        title: 'Kunming-Dali-Lijiang', 
        days: '5 Days 4 Nights', 
        description: 'Discover the classic triangle of Yunnan, from the ancient city of Dali to the charming canals of Lijiang, all starting from the Spring City, Kunming.',
        itinerary: []
      },
      th: { 
        title: 'คุณหมิง-ต้าหลี-หลีเจียง', 
        days: '5 วัน 4 คืน', 
        description: 'ค้นพบสามเหลี่ยมคลาสสิกของยูนนาน จากเมืองโบราณต้าหลี่สู่คลองที่มีเสน่ห์ของลี่เจียง ทั้งหมดเริ่มต้นจากเมืองแห่งฤดูใบไม้ผลิ คุนหมิง',
        itinerary: []
      },
      ar: { 
        title: 'كونمينغ-دالي-ليجيانغ', 
        days: '5 أيام 4 ليالي', 
        description: 'اكتشف المثلث الكلاسيكي في يونان، من مدينة دالي القديمة إلى قنوات ليجيانغ الساحرة، وكلها تبدأ من مدينة الربيع، كونمينغ.',
        itinerary: []
      },
      cn: { 
        title: '昆明-大理-丽江', 
        days: '5天4夜', 
        description: '探索云南的经典三角，从大理古城到丽江迷人的运河，一切都从春城昆明开始。',
        itinerary: []
      },
    },
  },
  {
    id: '10',
    tourCode: 'LHT KM-CQ',
    priceThb: '33000',
    priceUsd: '1100',
    images: {
      th: PlaceHolderImages.find((p) => p.id === 'kunming-chongqing-5d4n-th'),
      en: PlaceHolderImages.find((p) => p.id === 'kunming-chongqing-5d4n-en'),
    },
    category: 'china',
    meals: [],
    translations: {
      en: { 
        title: 'Kunming-Chongqing', 
        days: '5 Days 4 Nights', 
        description: 'Experience two of China\'s most dynamic cities. Start in the relaxed atmosphere of Kunming and dive into the vibrant, futuristic metropolis of Chongqing.',
        itinerary: []
      },
      th: { 
        title: 'คุณหมิง-ฉงชิ่ง', 
        days: '5 วัน 4 คืน', 
        description: 'สัมผัสประสบการณ์สองเมืองที่มีพลวัตที่สุดของจีน เริ่มต้นในบรรยากาศสบายๆ ของคุนหมิง และดำดิ่งสู่มหานครที่มีชีวิตชีวาและล้ำสมัยของฉงชิ่ง',
        itinerary: []
      },
      ar: { 
        title: 'كونمينغ-تشونغتشينغ', 
        days: '5 أيام 4 ليالي', 
        description: 'جرب اثنتين من أكثر مدن الصين ديناميكية. ابدأ في جو كونمينغ المريح وانغمس في مدينة تشونغتشينغ النابضة بالحياة والمستقبلية.',
        itinerary: []
      },
      cn: { 
        title: '昆明-重庆', 
        days: '5天4夜', 
        description: '体验中国最具活力的两座城市。从昆明轻松的氛围开始，潜入充满活力、未来主义的重庆大都市。',
        itinerary: []
      },
    },
  },
  {
    id: '11',
    tourCode: 'LHT KM-BJ-TJ',
    priceThb: '37000',
    priceUsd: '1200',
    images: {
      th: PlaceHolderImages.find((p) => p.id === 'kunming-beijing-tianjin-5d4n-th'),
      en: PlaceHolderImages.find((p) => p.id === 'kunming-beijing-tianjin-5d4n-en'),
    },
    category: 'china',
    meals: [],
    translations: {
      en: { 
        title: 'Kunming-Beijing-Tianjin', 
        days: '5 Days 4 Nights', 
        description: 'A whirlwind tour of China\'s imperial past and present, starting from Kunming. Explore the historic landmarks of Beijing and the colonial architecture of Tianjin.',
        itinerary: []
      },
      th: { 
        title: 'คุณหมิง-ปักกิ่ง-เทียนจิน', 
        days: '5 วัน 4 คืน', 
        description: 'ทัวร์ชมอดีตและปัจจุบันของจักรวรรดิจีนอย่างรวดเร็ว เริ่มต้นจากคุนหมิง สำรวจสถานที่สำคัญทางประวัติศาสตร์ของปักกิ่งและสถาปัตยกรรมโคโลเนียลของเทียนจิน',
        itinerary: []
      },
      ar: { 
        title: 'كونمينغ-بكين-تيانجين', 
        days: '5 أيام 4 ليالي', 
        description: 'جولة سريعة في ماضي الصين الإمبراطوري وحاضرها، بدءًا من كونمينغ. استكشف المعالم التاريخية في بكين والهندسة المعمارية الاستعمارية في تيانجين.',
        itinerary: []
      },
      cn: { 
        title: '昆明-北京-天津', 
        days: '5天4夜', 
        description: '从昆明出发，快速游览中国帝国历史和现状。探索北京的历史地标和天津的殖民建筑。',
        itinerary: []
      },
    },
  },
];

export const packagesContentData = {
    en: {
        pageTitle: 'All Packages',
        laosHeader: 'Laos Tours',
        chinaHeader: 'China Tours',
        tourCode: 'Tour Code',
        days: 'Duration',
        perPerson: '/ pax',
        noLaosPackages: 'There are no Laos packages available at this time.',
        noChinaPackages: 'There are no China packages available at this time.',
    },
    th: {
        pageTitle: 'แพ็คเกจทั้งหมด',
        laosHeader: 'ทัวร์ประเทศลาว',
        chinaHeader: 'ทัวร์ประเทศจีน',
        tourCode: 'รหัสทัวร์',
        days: 'ระยะเวลา',
        perPerson: '/ ท่าน',
        noLaosPackages: 'ไม่มีแพ็คเกจทัวร์ประเทศลาวในขณะนี้',
        noChinaPackages: 'ไม่มีแพ็คเกจทัวร์ประเทศจีนในขณะนี้',
    },
    ar: {
        pageTitle: 'كل الباقات',
        laosHeader: 'جولات لاوس',
        chinaHeader: 'جولات الصين',
        tourCode: 'رمز الجولة',
        days: 'المدة',
        perPerson: '/ شخص',
        noLaosPackages: 'لا توجد باقات لاوس متاحة في هذا الوقت.',
        noChinaPackages: 'لا توجد باقات صينية متاحة في هذا الوقت.',
    },
    cn: {
        pageTitle: '所有套餐',
        laosHeader: '老挝之旅',
        chinaHeader: '中国之旅',
        tourCode: '旅游代码',
        days: '持续时间',
        perPerson: '/人',
        noLaosPackages: '目前没有老挝套餐。',
        noChinaPackages: '目前没有中国套餐。',
    }
};

    

    

    
