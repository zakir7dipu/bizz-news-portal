export const getImage = (item, size) => {
    return item?.filter(img=>img.type === size)[0]?.path
}