import {global} from "./config.js"
const {base_path, default_token} = global.config;

export const getImage = (item, size) => {
    return item?.filter(img=>img.type === size)[0]?.path
}
export const goToExternalLink = (path) => {
    window.open(path, '_blank');
}

export const useInternalLink = (path) => {
    return base_path + path
}