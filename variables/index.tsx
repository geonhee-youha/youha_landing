import { amber, blue, cyan, deepOrange, deepPurple, green, grey, pink, red } from "@mui/material/colors";
export const commerialLabel = {
    branded: "브랜디드",
    "basic-PPL": "기본 PPL",
    "advanced-PPL": "기획 PPL",
    featuring: "모델",
    offline: "오프라인 행사",
    "live-commerce": "라이브 커머스",
    "group-buying": "공동구매",
    "brand-ambassador": "앰베서더",
    "affiliate-marketing": "마케팅 제휴",
    etc: "기타",
};
export type InputProps = {
    value: string;
    error: boolean;
    helperText: string;
};
export const inputDefaultProps: InputProps = {
    value: "",
    error: false,
    helperText: "",
};
export const fundingStatus = {
    awaiting_form: "세부정보 입력 대기중",
    ready_to_work: "등록 대기중",
    rejected: "반려",
    ready_to_open: "오픈예정",
    open: "진행중",
    funding_closed: "마감",
    complete: "완료",
};
export const fundingRequestStatus = {
    requested: "요청 완료",
    request_canceled: "요청 취소",
    request_rejected: "요청 거절",
    request_accepted: "요청 수락",
};
export type ProjectFilterProps = {
    label: "모든" | "등록 대기중" | "반려" | "오픈예정" | "진행중인" | "마감된" | "완료된";
    value: "all" | "ready_to_work" | "rejected" | "ready_to_open" | "open" | "funding_closed" | "complete";
};
export const projectFilterList: ProjectFilterProps[] = [
    {
        label: "모든",
        value: "all",
    },
    {
        label: "오픈예정",
        value: "ready_to_open",
    },
    {
        label: "진행중인",
        value: "open",
    },
    {
        label: "마감된",
        value: "funding_closed",
    },
    // {
    //     label: "완료된",
    //     value: "complete",
    // },
];
export type FaqItemProps = {
    type: "creator" | "advertiser" | "common";
    question?: React.ReactNode;
    answer?: React.ReactNode;
};
export type ProjectTabProps = {
    label: string;
};
export const projectTabs: ProjectTabProps[] = [{ label: "상세정보" }, { label: "광고정보" }, { label: "광고금액" }, { label: "FAQ" }];
export type MainHeaderNavBtnProps = {
    label: "홈" | "모아보기" | "가이드";
    value: "/" | "/projects" | "/guides";
    checked?: boolean;
};
export const mainHeaderNavBtnList: MainHeaderNavBtnProps[] = [
    // {
    //     label: "홈",
    //     value: "/",
    // },
    {
        label: "모아보기",
        value: "/projects",
    },
    {
        label: "가이드",
        value: "/guides",
    },
];
export type MainHeaderGuideMenuItemProps = {
    label: "크리에이터 가이드" | "광고주 가이드" | "서비스 가이드" | "FAQ";
    value: "?value=creator" | "?value=advertiser" | "?value=service" | "?value=faq";
};
export const mainHeaderGuideMenuItemList: MainHeaderGuideMenuItemProps[] = [
    {
        label: "서비스 가이드",
        value: "?value=service",
    },
    {
        label: "크리에이터 가이드",
        value: "?value=creator",
    },
    {
        label: "광고주 가이드",
        value: "?value=advertiser",
    },
    {
        label: "FAQ",
        value: "?value=faq",
    },
];
export type MainHeaderUserMenuItemProps = {
    label: "내 정보" | "로그아웃";
    value: "/myPage" | "/signout";
};
export const mainHeaderUserMenuList: MainHeaderUserMenuItemProps[] = [
    {
        label: "내 정보",
        value: "/myPage",
    },
    {
        label: "로그아웃",
        value: "/signout",
    },
];
export type MainFooterNavBtnProps = {
    label: "이용약관" | "개인정보처리방침" | "업데이트 노트" | "기술 블로그" | "고객센터" | "언어 선택";
    route: string;
};
export const mainFooterNavBtnList: MainFooterNavBtnProps[] = [
    {
        label: "이용약관",
        route: "https://www.notion.so/YOUHA-5c99a3571c684b4bb4d1d70283b4d7cb",
    },
    {
        label: "개인정보처리방침",
        route: "https://www.notion.so/0c40b91bd29440c1bfe153cd76246141",
    },
    // {
    //     label: "업데이트 노트",
    //     route: "/https://www.notion.so/What-s-new-a5cb04fd8eaa4f9788ffc68dd52f2a9b",
    // },
    // {
    //     label: "기술 블로그",
    //     route: "/https://www.notion.so/What-s-new-a5cb04fd8eaa4f9788ffc68dd52f2a9b",
    // },
    {
        label: "고객센터",
        route: "https://www.notion.so/youha/YOUHA-ae49b053789a4d6c8aa92baa40a3b331",
    },
    // {
    //     label: "언어 선택",
    //     route: "",
    // },
];
export type MainFooterLanguageMenuItemProps = {
    label: "한국어(Korean)" | "영어(English)";
    value: "ko" | "en";
};
export const mainFooterLanguageMenuItemList: MainFooterLanguageMenuItemProps[] = [
    {
        label: "한국어(Korean)",
        value: "ko",
    },
    {
        label: "영어(English)",
        value: "en",
    },
];
export const categoryList: { [key: string]: { value: string; emoji: string; label: string } } = {
    fashion: { value: "fashion", emoji: "🛍️", label: "패션" },
    beauty: { value: "beauty", emoji: "💄", label: "뷰티" },
    eco: { value: "eco", emoji: "🌳", label: "비건/친환경" },
    interior: { value: "interior", emoji: "🛋️", label: "가구/인테리어" },
    healthcare: { value: "healthcare", emoji: "💪", label: "건강" },
    diet: { value: "diet", emoji: "🥗", label: "다이어트" },
    travel: { value: "travel", emoji: "✈️", label: "여행" },
    game: { value: "game", emoji: "🎮", label: "게임" },
    pet: { value: "pet", emoji: "🐶", label: "펫/동물" },
    it: { value: "it", emoji: "📱", label: "IT/앱" },
    electronics: { value: "electronics", emoji: "📺", label: "가전/전자기기" },
    "movie-drama-production": { value: "movie-drama-production", emoji: "📽️", label: "영화/드라마" },
    "webtoon-animation": { value: "webtoon-animation", emoji: "👸", label: "웹툰/애니" },
    car: { value: "car", emoji: "🏎️", label: "자동차" },
    music: { value: "music", emoji: "🎹", label: "음악" },
    "outdoor-exercise": { value: "outdoor-exercise", emoji: "🏃‍♀️", label: "운동" },
    politics: { value: "politics", emoji: "🗳️", label: "시사/정치" },
    education: { value: "education", emoji: "🏫", label: "교육" },
    kids: { value: "kids", emoji: "🧒", label: "키즈" },
    bank: { value: "bank", emoji: "🏦", label: "은행" },
    stock: { value: "stock", emoji: "📈", label: "증권" },
    "credit-card": { value: "credit-card", emoji: "💳", label: "카드" },
    finance: { value: "finance", emoji: "🪙", label: "금융" },
    investment: { value: "investment", emoji: "💸", label: "투자/제태크" },
    liquor: { value: "liquor", emoji: "🍷", label: "주류" },
    beverage: { value: "beverage", emoji: "🧃", label: "음료" },
    food: { value: "food", emoji: "🍲", label: "음식" },
    restaurant: { value: "restaurant", emoji: "🥢", label: "음식점" },
    publisher: { value: "publisher", emoji: "📖", label: "출판" },
    "public-office": { value: "public-office", emoji: "📢", label: "공기업/관공서" },
    hospital: { value: "hospital", emoji: "🏥", label: "병원" },
    entertainment: { value: "entertainment", emoji: "💃", label: "엔터테인먼트" },
    religion: { value: "religion", emoji: "📿", label: "종교" },
    "social-enterprise": { value: "social-enterprise", emoji: "🐧", label: "사회적 기업" },
    etc: { value: "etc", emoji: "", label: "기타" },
};
