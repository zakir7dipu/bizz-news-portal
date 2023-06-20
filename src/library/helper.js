import {global} from "./config.js"
import Notify from "./Notify.js";
import Api from "./api.js";

const {access} = new Api();
const {base_path, default_token} = global.config;

export const getImage = (item, size) => {
    return item?.filter(img => img.type === size)[0]?.path
}
export const goToExternalLink = (path) => {
    window.open(path, '_blank');
}

export const useInternalLink = (path) => {
    return base_path + path
}

export const errorMessage = (error) => {
    Notify("error", error.message);
}

export const errorResponseMessage = (error) => {
    console.log(error.response);
    if (error.response) {
        let errorObject = error.response.data.errors;
        let hasError = Object.getOwnPropertyNames(errorObject)
        if (hasError) {
            hasError.forEach((err, index) => {
                if (index !== (hasError.length - 1)) {
                    Notify("error", errorObject[err])
                }

            })
        } else {
            Notify("error", error.response.data.message)
        }
    }
}

export const successMessage = (success) => {
    Notify("success", success);
}

export const infoMessage = (info) => {
    Notify("info", info)
}

export const warningMessage = (warning) => {
    Notify("warning", warning)
}

export const subscriptionHandler = (data) => {
    infoMessage("Please wait a while, We are processing your request.")
    access.post("newsletter", data)
        .then(res => successMessage(res.data.message))
        .catch(err => errorResponseMessage(err))
}

export const uid = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

export const truncateString = (str, n) => {
    return (str?.length > n) ? `${str.slice(0, n - 1)}...` : str;
}