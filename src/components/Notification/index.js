import Swal from "sweetalert2";

class Notification {
  success(message) {
    Swal.fire({
      title: "Sucesso!",
      icon: "success",
      text: message,
      confirmButtonText: "OK",
    });
  }

  error(message) {
    Swal.fire({
      title: "Erro!",
      icon: "error",
      text: message,
      confirmButtonText: "OK",
    });
  }

  warn(message) {
    Swal.fire({
      title: "Aviso!",
      icon: "warning",
      text: message,
      confirmButtonText: "OK",
    });
  }

}

export default new Notification();
