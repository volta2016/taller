const $btn = document.getElementById("btn");
const $modal = document.getElementById("modal");
const $close = document.getElementById("close");

function abrirModal() {
	$modal.classList.replace("d-none", "d-flex");
}

function closeModal() {
	$modal.classList.replace("d-flex", "d-none");
}

$close.addEventListener("click", closeModal);

$btn.addEventListener("click", abrirModal);
