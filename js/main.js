const addEmployeeModal = document.getElementById('addEmployeeModal');
const bg_shadow = document.querySelector('.bg-shadow');
const add_tab = document.querySelector('.add-tooltip');

addEmployeeModal.addEventListener('click' , () => {
  bg_shadow.classList.add('active');
  add_tab.classList.add('active');
})
bg_shadow.addEventListener('click' , () => {
  bg_shadow.classList.remove('active');
  add_tab.classList.remove('active');
})