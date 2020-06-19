export const SET_PAGE = 'SET_PAGE'
export const APPEND_PAGE = 'APPEND_PAGE'


export function setPage(pageData) {
    return { type: SET_PAGE, payload: pageData }
}

export function appendPage(pageData) {
    return { type: APPEND_PAGE, payload: pageData }
}