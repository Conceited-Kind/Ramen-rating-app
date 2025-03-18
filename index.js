document.addEventListener("DOMContentLoaded", () => {
    const ramenMenu = document.getElementById('ramen-menu');
    const ramenDetail = document.getElementById('ramen-detail');
    const deleteButton = document.getElementById('delete-ramen');
    const newRamenForm = document.getElementById('new-ramen');
    const nameInput = document.getElementById('name');
    const restaurantInput = document.getElementById('restaurant');
    const imageInput = document.getElementById('image');
    const ratingInput = document.getElementById('rating');
    const commentInput = document.getElementById('comment');

    const ramenList = [
        {
            name: 'Shoyu Ramen',
            restaurant: 'Ichiran',
            image: 'https://i.pinimg.com/474x/f5/49/a9/f549a95fe58b99799a45eba41c42f82c.jpg',
            rating: 8,
            comment: 'A classic ramen with soy sauce base, delicious and savory.'
        },
        {
            name: 'Miso Ramen',
            restaurant: 'Menya',
            image: 'https://i.pinimg.com/474x/39/bd/92/39bd92e435dfc608fdf33d60ee673b74.jpg',
            rating: 9,
            comment: 'Rich and hearty with a deep miso flavor.'
        },
        {
            name: 'Tonkotsu Ramen',
            restaurant: 'Ramen-ya',
            image: 'https://i.pinimg.com/474x/fc/c8/22/fcc822dfc245a4a258e5fe35678ac9c8.jpg',
            rating: 10,
            comment: 'Creamy broth and tender pork, simply amazing.'
        },
        {
            name: 'Gyukotsu Ramen',
            restaurant: 'Kojiro',
            image: 'https://i.pinimg.com/474x/0f/9d/6b/0f9d6b0bfb9b2294215f26c45c7e37f0.jpg',
            rating: 7,
            comment: 'Beef-based ramen with a savory broth, quite unique.'
        },
        {
            name: 'Shio Ramen',
            restaurant: 'Nirvana',
            image: 'https://i.pinimg.com/736x/da/ee/13/daee13a8c2166112e84b29c99e31f313.jpg',
            rating: 8,
            comment: 'Light and refreshing, perfect for a summer day.'
        }
    ];

    function displayRamens() {
        ramenList.forEach(ramen => {
            const ramenImage = document.createElement('img');
            ramenImage.src = ramen.image;
            ramenImage.alt = ramen.name;
            ramenImage.classList.add('ramen-img');
            ramenImage.addEventListener('click', () => showRamenDetail(ramen));
            ramenMenu.appendChild(ramenImage);
        });
    }

    function showRamenDetail(ramen) {
        document.getElementById('detail-image').src = ramen.image;
        document.getElementById('detail-name').textContent = ramen.name;
        document.getElementById('detail-restaurant').textContent = ramen.restaurant;
        document.getElementById('detail-rating').textContent = ramen.rating;
        document.getElementById('detail-comment').textContent = ramen.comment;

        deleteButton.style.display = 'block';
        deleteButton.onclick = () => deleteRamen(ramen);
    }

    function deleteRamen(ramen) {
        const index = ramenList.indexOf(ramen);
        if (index > -1) {
            ramenList.splice(index, 1);
            ramenMenu.innerHTML = '';
            renderRamenMenu();
            ramenDetail.style.display = 'none';
        }
    }
    function addSubmitListener() {
        const form = document.getElementById('ramen-form');
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const restaurant = document.getElementById('restaurant').value;
            const image = document.getElementById('image').value;
            const rating = parseInt(document.getElementById('rating').value);
            const comment = document.getElementById('comment').value;
    
            const newRamen = {
                id: ramens.length + 1,
                name: name,
                restaurant: restaurant,
                image: image,
                rating: rating,
                comment: comment
            };
            ramens.push(newRamen);
            displayRamens();
            form.reset();
        });
    }
    
    function main() {
        displayRamens();
        addSubmitListener();
        if(ramens.length > 0){
            displayRamenDetails(ramens[0]);
        }
    }
    
    document.addEventListener('DOMContentLoaded', main);
    });
    