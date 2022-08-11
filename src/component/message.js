import swal from "sweetalert";

export function errorMessage(title, text) {
    return swal({
        title: title,
        text: text,
        icon: "error",
        button: "Cancel",
    });
}
export function successMessage(title, text) {
    return swal({
        title: title,
        text: text,
        icon: "success",
        button: "Cancel",
    });
} 
