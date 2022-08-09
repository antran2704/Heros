

export const getListHeros = (heros) => {
    return {
        type: "listHeros",
        payload: heros
    }
}

export const searchAction = (search) => {
    return {
        type: "searchText",
        payload: search
    }
}

export const selectItem = ((item) => {
    return {
        type: "selectItem",
        payload: item
    }
})