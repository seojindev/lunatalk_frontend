import { deprecated } from 'typesafe-actions';
const { createStandardAction } = deprecated;

// main slide action
export const GET_MAIN_SLIDE_START = 'main/GET_MAIN_SLIDE_START';
export const GET_MAIN_SLIDE_SUCCESS = 'main/GET_MAIN_SLIDE_SUCCESS';
export const GET_MAIN_SLIDE_FAILURE = 'main/GET_MAIN_SLIDE_FAILURE';

// // main bestItem action
// export const GET_MAIN_BESTITEM_START = 'main/GET_MAIN_BESTITEM_START';
// export const GET_MAIN_BESTITEM_SUCCESS = 'main/GET_MAIN_BESTITEM_SUCCESS';
// export const GET_MAIN_BESTITEM_FAILURE = 'main/GET_MAIN_BESTITEM_FAILURE';
//
// // main hotItem action
// export const GET_MAIN_HOTITEM_START = 'main/GET_MAIN_HOTITEM_START';
// export const GET_MAIN_HOTITEM_SUCCESS = 'main/GET_MAIN_HOTITEM_SUCCESS';
// export const GET_MAIN_HOTITEM_FAILURE = 'main/GET_MAIN_HOTITEM_FAILURE';
//
// // main category action
// export const GET_MAIN_CATEGORY_START = 'main/GET_MAIN_CATEGORY_START';
// export const GET_MAIN_CATEGORY_SUCCESS = 'main/GET_MAIN_CATEGORY_SUCCESS';
// export const GET_MAIN_CATEGORY_FAILURE = 'main/GET_MAIN_CATEGORY_FAILURE';

// 메인배너 불러오기.
export const getMainSlideAction = createStandardAction(GET_MAIN_SLIDE_START)();

// // 메인 베스트 아이템 불러오기.
// export const getMainBestItemAction = createStandardAction(GET_MAIN_BESTITEM_START)();
//
// // 메인 핫 아이템 불러오기.
// export const getMainhotItemAction = createStandardAction(GET_MAIN_HOTITEM_START)();
//
// // 메인 카테고리 불러오기.
// export const getMainCategoriesAction = createStandardAction(GET_MAIN_CATEGORY_START)();
