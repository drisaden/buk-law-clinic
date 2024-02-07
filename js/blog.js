window.onload = function () {
fetch('https://www.googleapis.com/blogger/v3/blogs/7706273476706534553/posts?key=AIzaSyD5dD55I9lEVPKAa5Gr_HcnpZIkhqdpXj0')
    .then(response => response.json())
    .then(data => {
     // console.log(data);
       
        

        const populateBlog = document.getElementById('populateBlog');
   

        data.items.forEach(item => {
            const src = item.content.match(/<img[^>]*src="([^"]*)"/)?.[1];
        

            populateBlog.innerHTML += `
            <div data-aos=" " class="bg-gray-100 shadow-lg w-full rounded-lg mb-3">
                    <div class="md:w-full overflow-hidden rounded-t">
                      <img src="${src}" alt="${item.title}" class="w-full h-full object-cover object-center  border border-b-0 ">
                    </div> 
                    <div class="px-5 text-center pt-10">
                      <h3 class="text-base md:text-2xl font-bold tracking-tight uppercase"> ${item.title} </h3>
                       <p class="text-sm md:text-lg font-semibold my-6 text-gray-600"> <i class="fas fa-calendar"></i> ${item.published.split('T')[0]} </p>
                     <p class="text-sm mb-8 md:text-2xl tracking-tight "> ${item.content.replace(/<[^>]+>/g, '').split(' ').slice(0, 20).join(' ')} ... </p>
                     <a href="https://buklawclinic.com.ng/single.html?id=${item.id}" class=""> <p class="text-sm button py-3 md:text-2xl bg-red-700 text-white  mb-5 font-semibold">Read Full » </p> </a> 
                    </div>
                </div>`;
});
})
    .catch(error => {
        console.log('Error fetching data:', error);
    });
};