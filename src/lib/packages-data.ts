
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const allPackagesData = [
  {
    id: '1',
    tourCode: 'LHT01',
    priceThb: '6,500',
    priceUsd: '195',
    image: PlaceHolderImages.find((p) => p.id === 'vientiane-tour'),
    category: 'laos',
    translations: {
      en: { title: 'Vientiane-VangVieng', days: '3 Days 2 Nights', description: 'Explore the charming capital of Vientiane, visit sacred temples, and discover the stunning natural beauty of Vang Vieng with its limestone karsts and river activities.' },
      th: { title: 'เวียงจันทน์-วังเวียง', days: '3 วัน 2 คืน', description: 'สำรวจเมืองหลวงที่มีเสน่ห์อย่างเวียงจันทน์ เยี่ยมชมวัดศักดิ์สิทธิ์ และค้นพบความงามทางธรรมชาติอันน่าทึ่งของวังเวียงด้วยภูเขาหินปูนและกิจกรรมทางแม่น้ำ' },
      ar: { title: 'فيينتيان-فANG VIENG', days: '3 أيام 2 ليالي', description: 'استكشف العاصمة الساحرة فيينتيان ، وقم بزيارة المعابد المقدسة ، واكتشف الجمال الطبيعي المذهل لفانغ فينغ بتكويناتها الكارستية وأنشطتها النهرية.' },
    },
  },
  {
    id: '2',
    tourCode: 'LHT02',
    priceThb: '11,000',
    priceUsd: '320',
    image: PlaceHolderImages.find((p) => p.id === 'luang-prabang-tour'),
    category: 'laos',
    translations: {
      en: { title: 'Vientiane-Luang Prabang', days: '4 Days 3 Nights', description: 'Journey from the capital to the UNESCO World Heritage city of Luang Prabang. Discover ancient temples, witness the morning alms-giving ceremony, and explore the beautiful Kuang Si Waterfalls.' },
      th: { title: 'เวียงจันทน์-หลวงพระบาง', days: '4 วัน 3 คืน', description: 'เดินทางจากเมืองหลวงสู่เมืองมรดกโลกหลวงพระบาง ค้นพบวัดโบราณ ชมพิธีตักบาตรตอนเช้า และสำรวจน้ำตกกวางสีที่สวยงาม' },
      ar: { title: 'فيينتيان-لوانغ برابانغ', days: '4 أيام 3 ليالي', description: 'رحلة من العاصمة إلى مدينة لوانغ برابانغ المدرجة على قائمة اليونسكو للتراث العالمي. اكتشف المعابد القديمة ، وشاهد طقوس تقديم الصدقات الصباحية ، واستكشف شلالات كوانغ سي الجميلة.' },
    },
  },
  {
    id: '3',
    tourCode: 'LHT03',
    priceThb: '9,500',
    priceUsd: '265',
    image: PlaceHolderImages.find((p) => p.id === 'vang-vieng-tour'),
    category: 'laos',
    translations: {
      en: { title: 'Vientiane-MuangFueang-VangVieng', days: '4 Days 3 Nights', description: 'An off-the-beaten-path adventure! Discover the serene landscapes of Muang Fueang, a hidden gem, before heading to the adventure hub of Vang Vieng.' },
      th: { title: 'เวียงจันทน์-เมืองเฟือง-วังเวียง', days: '4 วัน 3 คืน', description: 'การผจญภัยนอกเส้นทาง! ค้นพบภูมิประเทศอันเงียบสงบของเมืองเฟือง อัญมณีที่ซ่อนอยู่ ก่อนมุ่งหน้าสู่ศูนย์กลางการผจญภัยของวังเวียง' },
      ar: { title: 'فيينتيان-موانغ فونغ-فANG VIENG', days: '4 أيام 3 ليالي', description: 'مغامرة خارج المسار المألوف! اكتشف المناظر الطبيعية الهادئة في موانغ فونغ ، وهي جوهرة مخفية ، قبل التوجه إلى مركز المغامرات في فانغ فينغ.' },
    },
  },
  {
    id: '4',
    tourCode: 'LHT04',
    priceThb: '12,500',
    priceUsd: '360',
    image: PlaceHolderImages.find((p) => p.id === 'pakse-tour'),
    category: 'laos',
    translations: {
      en: {
        title: 'Vientiane-MuangFueang-VangVieng-Luang Prabang',
        days: '5 Days 4 Nights',
        description: 'The ultimate Laos exploration. This tour combines the highlights of Vientiane, the tranquility of Muang Fueang, the adventures of Vang Vieng, and the cultural heart of Luang Prabang.'
      },
      th: {
        title: 'เวียงจันทน์-เมืองเฟือง-วังเวียง-หลวงพระบาง',
        days: '5 วัน 4 คืน',
        description: 'สุดยอดการสำรวจลาว ทัวร์นี้รวมไฮไลท์ของเวียงจันทน์ ความเงียบสงบของเมืองเฟือง การผจญภัยของวังเวียง และหัวใจทางวัฒนธรรมของหลวงพระบาง'
      },
      ar: {
        title: 'فيينتيان-موانغ فونغ-فANG VIENG-لوانغ برابانغ',
        days: '5 أيام 4 ليالي',
        description: 'الاستكشاف النهائي للاوس. تجمع هذه الجولة بين أبرز معالم فيينتيان وهدوء موانغ فونغ ومغامرات فانغ فينغ والقلب الثقافي لوانغ برابانغ.'
      },
    },
  },
  {
    id: '5',
    tourCode: 'LHT05',
    priceThb: '30,000',
    priceUsd: '920',
    image: PlaceHolderImages.find((p) => p.id === '4000-islands-tour'),
    category: 'laos-china',
    translations: {
      en: {
        title:
          'Vientiane-MuangFueang-VangVieng-Luang Prabang-Xishuangbanna (China)',
        days: '7 Days 6 Nights',
        description: 'A cross-border journey from the heart of Laos to the vibrant culture of Xishuangbanna in China. Experience diverse landscapes, cultures, and cuisines.'
      },
      th: {
        title:
          'เวียงจันทน์-เมืองเฟือง-วังเวียง-หลวงพระบาง-12ปันนา (ประเทศจีน)',
        days: '7 วัน 6 คืน',
        description: 'การเดินทางข้ามพรมแดนจากใจกลางประเทศลาวสู่วัฒนธรรมที่มีชีวิตชีวาของสิบสองปันนาในประเทศจีน สัมผัสกับภูมิประเทศ วัฒนธรรม และอาหารที่หลากหลาย'
      },
      ar: {
        title:
          'فيينتيان-موانغ فونغ-فانغ فينغ-لوانغ برابانغ-سيشوانغبانا (الصين)',
        days: '7 أيام 6 ليالي',
        description: 'رحلة عبر الحدود من قلب لاوس إلى ثقافة شيشوانغبانا النابضة بالحياة في الصين. جرب المناظر الطبيعية والثقافات والمأكولات المتنوعة.'
      },
    },
  },
  {
    id: '6',
    tourCode: 'LHT06',
    priceThb: '38,000',
    priceUsd: '1,250',
    image: PlaceHolderImages.find((p) => p.id === 'plain-of-jars-tour'),
    category: 'china',
    translations: {
      en: { title: 'Kunming-Dali-Lijiang-Shangrila (China)', days: '7 Days 6 Nights', description: 'Explore the wonders of Yunnan province. From the "Spring City" of Kunming to the ancient towns of Dali and Lijiang, and the mystical paradise of Shangri-La.' },
      th: {
        title: 'คุณหมิง-ต้าหลี-หลีเจียง-แชงกรีลา (ประเทศจีน)',
        days: '7 วัน 6 คืน',
        description: 'สำรวจความมหัศจรรย์ของมณฑลยูนนาน จาก "เมืองแห่งฤดูใบไม้ผลิ" คุนหมิงสู่เมืองโบราณต้าหลี่และลี่เจียง และสวรรค์อันลึกลับของแชงกรี-ลา'
      },
      ar: {
        title: 'كونمينغ-دالي-ليجيانغ-شانغريلا (الصين)',
        days: '7 أيام 6 ليالي',
        description: 'استكشف عجائب مقاطعة يوننان. من "مدينة الربيع" كونمينغ إلى مدن دالي وليجيانغ القديمة ، وجنة شانغريلا الغامضة.'
      },
    },
  },
  {
    id: '7',
    tourCode: 'LHT07',
    priceThb: '40,000',
    priceUsd: '1,333',
    image: PlaceHolderImages.find((p) => p.id === 'northern-laos-tour'),
    category: 'china',
    translations: {
      en: { title: 'Kunming-Chongqing (China)', days: '7 Days 6 Nights', description: 'A tale of two cities. Discover the cultural heritage of Kunming and the futuristic, bustling metropolis of Chongqing, famous for its spicy hotpot and unique cityscape.' },
      th: { title: 'คุณหมิง-ฉงชิ่ง (ประเทศจีน)', days: '7 วัน 6 คืน', description: 'เรื่องราวของสองเมือง ค้นพบมรดกทางวัฒนธรรมของคุนหมิงและมหานครที่คึกคักและล้ำสมัยของฉงชิ่ง ซึ่งมีชื่อเสียงด้านหม้อไฟรสเผ็ดและทิวทัศน์เมืองที่ไม่เหมือนใคร' },
      ar: { title: 'كونمينغ-تشونغتشينغ (الصين)', days: '7 أيام 6 ليالي', description: 'حكاية مدينتين. اكتشف التراث الثقافي لكونمينغ وحاضرة تشونغتشينغ الصاخبة والمستقبلية ، المشهورة بالقدر الساخن الحار ومناظرها الحضرية الفريدة.' },
    },
  },
  {
    id: '8',
    tourCode: 'LHT08',
    priceThb: '49,000',
    priceUsd: '1,600',
    image: PlaceHolderImages.find((p) => p.id === 'southern-laos-tour'),
    category: 'china',
    translations: {
      en: { title: 'Kunming-Beijing-Tianjin (China)', days: '7 Days 6 Nights', description: "Journey through China's history and modernity. Explore the imperial wonders of Beijing, including the Great Wall and Forbidden City, and visit the port city of Tianjin." },
      th: { title: 'คุณหมิง-ปักกิ่ง-เทียนจิน (ประเทศจีน)', days: '7 วัน 6 คืน', description: 'เดินทางผ่านประวัติศาสตร์และความทันสมัยของจีน สำรวจความมหัศจรรย์ของจักรวรรดิปักกิ่ง รวมถึงกำแพงเมืองจีนและพระราชวังต้องห้าม และเยี่ยมชมเมืองท่าเทียนจิน' },
      ar: { title: 'كونمينغ-بكين-تيانجين (الصين)', days: '7 أيام 6 ليالي', description: 'رحلة عبر تاريخ الصين وحداثتها. استكشف عجائب بكين الإمبراطورية ، بما في ذلك سور الصين العظيم والمدينة المحرمة ، وقم بزيارة مدينة تيانجين الساحلية.' },
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
    }
};
