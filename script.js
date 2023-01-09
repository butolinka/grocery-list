const listHere=document.querySelector('.listHere');
const btn=document.querySelector('.btn');
const toBuy=document.querySelector('.toBuy');

btn.addEventListener('click', ()=>{
    const item=document.createElement('li');
    item.innerText=listHere.value;
    if (listHere.value.length === 0) {
        return false;
        }
    toBuy.appendChild(item);
    item.classList.add('toBuyAdded');
    listHere.value='';
    item.addEventListener('click', ()=>{
        item.classList.add('toBuyComplited')
    })
    item.addEventListener('dblclick', ()=>{
        toBuy.removeChild(item);
    })
    

})