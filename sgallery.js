const custombutton = document.getElementById('custombutton');
const submitpic = document.getElementById('submitpic');
const fileinput = document.getElementById('fileinput');
const imageholder = document.getElementById('imageholder');

custombutton.addEventListener('click', function() {
    submitpic.removeAttribute('hidden');
});

submitpic.addEventListener('click', function(event) {
    event.preventDefault();
    const file = fileinput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.style.margin = '10px';
            img.classList.add('pic');
            img.title = file.name;
            img.alt = file.name;
            const p=document.createElement('p');
            p.textContent=file.name;
            p.classList.add('higher')
            p.setAttribute('hidden','True');
            imageholder.appendChild(p);
            imageholder.appendChild(img);
            
            img.addEventListener('click', function() {
                if (img.style.height === '80%') {
                    img.style.height = '20vh'; 
                    img.style.width = 'auto';
                    p.style.display = 'none';
                } else {
                    img.style.height = '80%'; 
                    img.style.width = '80%';
                    p.style.display = 'block';
                }
            });
        };
        reader.readAsDataURL(file);
    }
});