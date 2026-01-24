
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const allPackagesData = [
  {
    id: '1',
    tourCode: 'LHT01',
    rating: 3.5,
    priceThb: '6,500',
    priceUsd: '195',
    image: PlaceHolderImages.find((p) => p.id === 'vientiane-tour'),
    category: 'laos',
    translations: {
      en: { title: 'Vientiane-VangVieng', days: '3 Days 2 Nights' },
      th: { title: 'เวียงจันทน์-วังเวียง', days: '3 วัน 2 คืน' },
      ar: { title: 'فيينتيان-فANG VIENG', days: '3 أيام 2 ليالي' },
    },
  },
  {
    id: '2',
    tourCode: 'LHT02',
    rating: 3.5,
    priceThb: '11,000',
    priceUsd: '320',
    image: PlaceHolderImages.find((p) => p.id === 'luang-prabang-tour'),
    category: 'laos',
    translations: {
      en: { title: 'Vientiane-Luang Prabang', days: '4 Days 3 Nights' },
      th: { title: 'เวียงจันทน์-หลวงพระบาง', days: '4 วัน 3 คืน' },
      ar: { title: 'فيينتيان-لوانغ برابانغ', days: '4 أيام 3 ليالي' },
    },
  },
  {
    id: '3',
    tourCode: 'LHT03',
    rating: 3.5,
    priceThb: '9,500',
    priceUsd: '265',
    image: PlaceHolderImages.find((p) => p.id === 'vang-vieng-tour'),
    category: 'laos',
    translations: {
      en: { title: 'Vientiane-MuangFueang-VangVieng', days: '4 Days 3 Nights' },
      th: { title: 'เวียงจันทน์-เมืองเฟือง-วังเวียง', days: '4 วัน 3 คืน' },
      ar: { title: 'فيينتيان-موانغ فونغ-فANG VIENG', days: '4 أيام 3 ليالي' },
    },
  },
  {
    id: '4',
    tourCode: 'LHT04',
    rating: 3.5,
    priceThb: '12,500',
    priceUsd: '360',
    image: PlaceHolderImages.find((p) => p.id === 'pakse-tour'),
    category: 'laos',
    translations: {
      en: {
        title: 'Vientiane-MuangFueang-VangVieng-Luang Prabang',
        days: '5 Days 4 Nights',
      },
      th: {
        title: 'เวียงจันทน์-เมืองเฟือง-วังเวียง-หลวงพระบาง',
        days: '5 วัน 4 คืน',
      },
      ar: {
        title: 'فيينتيان-موانغ فونغ-فANG VIENG-لوانغ برابانغ',
        days: '5 أيام 4 ليالي',
      },
    },
  },
  {
    id: '5',
    tourCode: 'LHT05',
    rating: 4.5,
    priceThb: '30,000',
    priceUsd: '920',
    image: PlaceHolderImages.find((p) => p.id === '4000-islands-tour'),
    category: 'laos-china',
    translations: {
      en: {
        title:
          'Vientiane-MuangFueang-VangVieng-Luang Prabang-Xishuangbanna (China)',
        days: '7 Days 6 Nights',
      },
      th: {
        title:
          'เวียงจันทน์-เมืองเฟือง-วังเวียง-หลวงพระบาง-12ปันนา (ประเทศจีน)',
        days: '7 วัน 6 คืน',
      },
      ar: {
        title:
          'فيينتيان-موانغ فونغ-فانغ فينغ-لوانغ برابانغ-سيشوانغبانا (الصين)',
        days: '7 أيام 6 ليالي',
      },
    },
  },
  {
    id: '6',
    tourCode: 'LHT06',
    rating: 4.5,
    priceThb: '38,000',
    priceUsd: '1,250',
    image: PlaceHolderImages.find((p) => p.id === 'plain-of-jars-tour'),
    category: 'china',
    translations: {
      en: { title: 'Kunming-Dali-Lijiang-Shangrila (China)', days: '7 Days 6 Nights' },
      th: {
        title: 'คุณหมิง-ต้าหลี-หลีเจียง-แชงกรีลา (ประเทศจีน)',
        days: '7 วัน 6 คืน',
      },
      ar: {
        title: 'كونمينغ-دالي-ليجيانغ-شانغريلا (الصين)',
        days: '7 أيام 6 ليالي',
      },
    },
  },
  {
    id: '7',
    tourCode: 'LHT07',
    rating: 4.5,
    priceThb: '40,000',
    priceUsd: '1,333',
    image: PlaceHolderImages.find((p) => p.id === 'northern-laos-tour'),
    category: 'china',
    translations: {
      en: { title: 'Kunming-Chongqing (China)', days: '7 Days 6 Nights' },
      th: { title: 'คุณหมิง-ฉงชิ่ง (ประเทศจีน)', days: '7 วัน 6 คืน' },
      ar: { title: 'كونمينغ-تشونغتشينغ (الصين)', days: '7 أيام 6 ليالي' },
    },
  },
  {
    id: '8',
    tourCode: 'LHT08',
    rating: 4.5,
    priceThb: '49,000',
    priceUsd: '1,600',
    image: PlaceHolderImages.find((p) => p.id === 'southern-laos-tour'),
    category: 'china',
    translations: {
      en: { title: 'Kunming-Beijing-Tianjin (China)', days: '7 Days 6 Nights' },
      th: { title: 'คุณหมิง-ปักกิ่ง-เทียนจิน (ประเทศจีน)', days: '7 วัน 6 คืน' },
      ar: { title: 'كونمينغ-بكين-تيانجين (الصين)', days: '7 أيام 6 ليالي' },
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
        hotel: 'Hotel',
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
        hotel: 'โรงแรม',
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
        hotel: 'الفندق',
        perPerson: '/ شخص',
        noLaosPackages: 'لا توجد باقات لاوس متاحة في هذا الوقت.',
        noChinaPackages: 'لا توجد باقات صينية متاحة في هذا الوقت.',
    }
};
