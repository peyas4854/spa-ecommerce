// sweetalert2
import Swal from "sweetalert2";

const Toast      = Swal.mixin({
    toast            : true,
    position         : 'top-end',
    showConfirmButton: false,
    timer            : 3000,
    timerProgressBar : true,
    didOpen          : (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})
const SweetAlert = {
    info(text = "This is info") {
        Toast.fire({
            icon : 'info',
            title: text,
        });
    },

    success(text = "This is info") {
        Toast.fire({
            icon : 'success',
            title: text
        })

    },

    error(text = "This is info",) {
        Toast.fire({
            icon : 'error',
            title: text
        });
    },

}

export default SweetAlert;
