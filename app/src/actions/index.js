export const addTag = value => ({
    type: 'ADD_TAG',
    payload: value
});

export const removeTagOfItem = value => ({
    type: 'REMOVE_TAG_OF_ITEM',
    payload: value
});

export const deleteItem = value => ({
    type: 'DELETE_ITEM',
    payload: value
});
