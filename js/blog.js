window.onload = function () {
    fetch('https://www.googleapis.com/blogger/v3/blogs/7090392525208537563/posts?key=AIzaSyD5dD55I9lEVPKAa5Gr_HcnpZIkhqdpXj0')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (!data.items) {
                console.error('No items found in data');
                return; // Exit if no items found
            }
            const publicationItems = data.items.filter(item => item.labels && item.labels.includes('Publication'));

            const populatePublicationElement = document.getElementById('populate-Publication');
            if (!populatePublicationElement) {
                console.error('Element #populate-Publication not found');
                return; // Exit if the element is not found
            }

            publicationItems.forEach(item => {
                const src = item.content.match(/<img[^>]*src="([^"]*)"/)?.[1];
                if (!src) {
                    console.warn('Image source not found for item:', item.id);
                    // Consider handling items without images differently
                }

              
                
                populatePublicationElement.innerHTML += `<div data-aos=" " class="bg-gray-100 shadow-lg w-full rounded-lg mb-3">
                    <div class="md:w-full overflow-hidden rounded-t">
                     <span class="absolute left-0 bottom-0 bg-black text-white py-1 px-3 tx-sm" id="labels">$.labels}</span>
                      <img src="${src}" alt="${item.title}" class="w-full h-full object-cover object-center  border border-b-0 ">
                    </div> 
                    <div class="px-5 text-center pt-10">
                      <h3 class="text-base md:text-2xl font-bold tracking-tight uppercase"> ${item.title} </h3>
                       <p class="text-sm md:text-lg font-semibold my-6 text-gray-600"> <i class="fas fa-calendar"></i>${new Date(item.published).toLocaleDateString()} </p>
                     <p class="text-sm mb-8 md:text-2xl tracking-tight "> ${item.content.replace(/<[^>]+>/g, '').split(' ').slice(0, 20).join(' ')} ... </p>
                     <a href="https://buklawclinic.com.ng/single.html?id=${item.id}" class=""> <p class="text-sm button py-3 md:text-2xl bg-red-700 text-white  mb-5 font-semibold">Read Full » </p> </a> 
                    </div>
                </div>`;
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
};


