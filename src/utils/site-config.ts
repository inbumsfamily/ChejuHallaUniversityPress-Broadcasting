import { z } from 'zod';

export const menuChildItemSchema = z.object({
  label: z.string().min(1).max(50),
  href: z.string().min(1).max(200),
  description: z.string().max(500).optional().default('')
});

export const menuItemSchema = z.object({
  label: z.string().min(1).max(50),
  href: z.string().min(1).max(200),
  description: z.string().max(500).optional().default(''),
  children: z.array(menuChildItemSchema).max(20).optional().default([])
});

export const siteMenuConfigSchema = z.object({
  site_title_short: z.string().min(1).max(20),
  site_title_long: z.string().min(1).max(120),
  menu_items: z.array(menuItemSchema).min(1).max(20)
});

export type SiteMenuConfig = z.infer<typeof siteMenuConfigSchema>;

export const defaultSiteMenuConfig: SiteMenuConfig = {
  site_title_short: 'CHEPBS',
  site_title_long: 'Cheju Halla Educational Press & Broadcasting Station',
  menu_items: [
    {
      label: 'BROADCAST',
      href: '/broadcast',
      children: [
        { label: '방송국소개', href: '/broadcast/방송국소개' },
        { label: 'CHEBS뉴스', href: '/broadcast/CHEBS뉴스' },
        { label: '제작프로그램', href: '/broadcast/제작프로그램' },
        { label: '언론정보', href: '/broadcast/언론정보' },
        { label: '방송편성표', href: '/broadcast/방송편성표' },
        { label: '수상작·공모전', href: '/broadcast/수상작·공모전' }
      ]
    },
    {
      label: 'PRESS',
      href: '/press',
      children: [
        { label: '신문사소개', href: '/press/신문사소개' },
        { label: '연혁·발행안내', href: '/press/연혁·발행안내' },
        { label: '조직도·만드는 사람들', href: '/press/조직도·만드는 사람들' },
        { label: '신문사 활동기', href: '/press/신문사 활동기' },
        { label: '기자모집·공지', href: '/press/기자모집·공지' },
        { label: 'PDF·지난호 아카이브', href: '/press/PDF·지난호 아카이브' }
      ]
    },
    {
      label: 'CAMPUS',
      href: '/campus',
      children: [
        { label: '대학소식', href: '/university-news' },
        { label: '지우전(지금 우리 전공은)', href: '/our-major-now' },
        { label: '동아리', href: '/clubs' },
        { label: '학생활동', href: '/student-activities' },
        { label: '캠퍼스 라이프', href: '/campus-life' },
        { label: '장학·복지·지원', href: '/scholarship-welfare' }
      ]
    },
    {
      label: 'SHORTS',
      href: '/shorts',
      children: [
        { label: '단신뉴스', href: '/short-news' },
        { label: '오늘의 한마디', href: '/todays-word' },
        { label: '캠퍼스 스케치', href: '/campus-sketch' },
        { label: 'SNS 화제', href: '/sns-trending' },
        { label: '숏폼 비디오', href: '/short-form-video' },
        { label: '카드뉴스', href: '/card-news' }
      ]
    },
    {
      label: 'SPECIAL REPORT',
      href: '/special-report',
      children: [
        { label: '기획기사', href: '/special-report-main' },
        { label: '심층취재', href: '/in-depth-coverage' },
        { label: '연재기획', href: '/series-planning' },
        { label: '이슈분석', href: '/issue-analysis' },
        { label: '인터뷰 특집', href: '/interview-special' },
        { label: '데이터 저널리즘', href: '/data-journalism' }
      ]
    },
    {
      label: 'JEJU NEWS',
      href: '/jeju-news',
      children: [
        { label: '제주소식', href: '/jeju-news-main' },
        { label: '제주 문화·예술', href: '/jeju-culture-art' },
        { label: '관광·맛집', href: '/jeju-tour-food' },
        { label: '제주 청년 문화', href: '/jeju-youth-culture' },
        { label: '제주도 탐방', href: '/jeju-exploration' },
        { label: '관광과 여행', href: '/tourism-travel' },
        { label: '제주의 환경', href: '/jeju-environment' }
      ]
    },
    {
      label: 'OPINION',
      href: '/opinion',
      children: [
        { label: '사설·칼럼', href: '/editorial-column' },
        { label: '교수칼럼', href: '/professor-column' },
        { label: '학생기고', href: '/student-contribution' },
        { label: '자유발언대', href: '/free-speech' },
        { label: '독자투고', href: '/reader-submission' },
        { label: '함께 읽는 책·영화 추천', href: '/book-movie-recommendation' }
      ]
    },
    {
      label: 'ESSAY',
      href: '/essay',
      children: [
        { label: '제주에서보내는시간', href: '/time-in-jeju' },
        { label: '꿈과 희망', href: '/dreams-hopes' },
        { label: '여행과 탐방', href: '/travel-exploration' },
        { label: '문학과 예술', href: '/literature-art' },
        { label: '이달의 테마 에세이', href: '/monthly-theme-essay' },
        { label: '나만의 생각 정리', href: '/my-thoughts' }
      ]
    }
  ]
};
