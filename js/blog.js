window.onload = function () {
fetch('https://www.googleapis.com/blogger/v3/blogs/4195482384384708356/posts?key=AIzaSyD5dD55I9lEVPKAa5Gr_HcnpZIkhqdpXj0')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const publicationItems = data.items.filter(item => item.labels.includes('Publication'));
        
        const populatePublicationElement = document.getElementById('populate-Publication');
        

        publicationItems.forEach(item => {
            const src = item.content.match(/<img[^>]*src="([^"]*)"/)?.[1];
            // console.log(src);

            populatePublicationElement.innerHTML += `<div class="w-full md:w-1/2 p-4 bg-white">
            <div class="relative">
            <span class="absolute left-0 bottom-0 bg-black text-white py-1 px-3 tx-sm" id="labels">${item.labels}</span>
            <img src="${src}" alt="Image 1"  class="w-full h-64 object-cover mb-4">
            </div>
            <a href="https://adenaikeidris.com.ng/single.html?id=${item.id}" target="_blank"><h2 class="text-xl font-bold mb-2" id="title">${item.title}</h2></a>
            <p class="flex items-center justify-between mb-4"><span class="text-base"><small class="font-bold mr-2 italic">By Adenaike Idris</small><small class="text-gray-600" id="published">${item.published.split('T')[0]}</small></span>
                <span class="flex items-center">
                            <svg class="w-4 h-4 text-yellow-500 mr-1" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M10 0l3.117 6.383 6.953.998-5.032 4.894 1.186 7.176L10 15.455l-6.224 3.997 1.186-7.176L0.93 7.381 7.883 6.383 10 0z" />
                            </svg>
                            <svg class="w-4 h-4 text-yellow-500 mr-1" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M10 0l3.117 6.383 6.953.998-5.032 4.894 1.186 7.176L10 15.455l-6.224 3.997 1.186-7.176L0.93 7.381 7.883 6.383 10 0z" />
                            </svg>
                                <svg class="w-4 h-4 text-yellow-500 mr-1" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M10 0l3.117 6.383 6.953.998-5.032 4.894 1.186 7.176L10 15.455l-6.224 3.997 1.186-7.176L0.93 7.381 7.883 6.383 10 0z" />
                                </svg>
                                <svg class="w-4 h-4 text-yellow-500 mr-1" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M10 0l3.117 6.383 6.953.998-5.032 4.894 1.186 7.176L10 15.455l-6.224 3.997 1.186-7.176L0.93 7.381 7.883 6.383 10 0z" />
                                </svg>
                                <svg class="w-4 h-4 text-yellow-500 mr-1" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M10 0l3.117 6.383 6.953.998-5.032 4.894 1.186 7.176L10 15.455l-6.224 3.997 1.186-7.176L0.93 7.381 7.883 6.383 10 0z" />
                                </svg>
                                <span class="ml-4 group relative">
                            <i class="tx-diamond fa-solid fa-share-nodes cursor-pointer transition-colors duration-300 ease-in-out group-hover:text-gray-500 text-xl"
                                title="share this post"></i>
                            <span
                                class="hidden absolute -top-28 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg p-2 space-y-2 group-hover:block">
                                <a href="https://www.facebook.com/sharer/sharer.php?u=[URL]&quote=[Check out this blog post]"
                                    target="_blank" rel="noopener noreferrer"
                                    class="text-gray-500 hover:text-blue-500"><i
                                        class="fab fa-facebook-f"></i></a>
                                <a href="https://twitter.com/intent/tweet?text=[Check out this blog post]&url=[URL]"
                                    target="_blank" rel="noopener noreferrer"
                                    class="text-gray-500 hover:text-blue-500"><i
                                        class="fab fa-twitter"></i></a>
                                <a href="https://www.instagram.com/share?url=[URL]&caption=[CAPTION]"
                                    target="_blank" rel="noopener noreferrer"
                                    class="text-gray-500 hover:text-red-500"><i
                                        class="fab fa-instagram"></i></a>
                                <a href="https://www.linkedin.com/sharing/share-offsite/?url=[URL]&title=[TITLE]&summary=[SUMMARY]"
                                    class="text-gray-500 hover:text-black" target="_blank"
                                    rel="noopener noreferrer">
                                    <i class="fab fa-linkedin"></i>
                                </a>
                            </span>
                        </span>
                        </span>
            </p>
            <p class="text-gray-700 mb-4" id="">${item.content.replace(/<[^>]+>/g, '').split(' ').slice(0, 20).join(' ')}</p>
            
            <a href="https://adenaikeidris.com.ng/single.html?id=${item.id}" target="_blank"><button class="mt-4 px-4 py-2 bg-blue-500 text-white rounded" id="url">Read More</button></a>
        </div>`
        });

        
        sportItems.forEach(item => {
            const src = item.content.match(/<img[^>]*src="([^"]*)"/)?.[1];
            const altText = (item.content.match(/<img[^>]+alt="([^"]+)"/i) || [])[1];
            // console.log(src);
            populateSportElement.innerHTML += `<div class="flex flex-col">
                    <div class="px-3 flex flex-row my-6 justify-center items-start">
                        <div
                            class="mr-0 md:mr-4 w-full image-container relative overflow-hidden w-full md:w-2/5">
                            <img class="w-full h-56" src="${src}"
                                alt="${altText}">
                        </div>
                        <div class="w-full md:w-2/5 px-4 bg-white">
                            <a href="https://adenaikeidris.com.ng/single.html?id=${item.id}" target="_blank"><h2 class="text-xl font-bold mb-2">${item.title}</h2></a>
                            <p class="text-gray-700 mb-4">${item.content.replace(/<[^>]+>/g, '').split(' ').slice(0, 20).join(' ')}</p>
                            <a href="https://adenaikeidris.com.ng/single.html?id=${item.id}" target="_blank"
                                class="link-btn my-3 inline-block  tx-diamond-2   font-bold md:font-medium relative  leading-none">Read
                                Article</a>
                        </div>
                    </div>
                </div>`

        });

    })
    .catch(error => {
        console.log('Error fetching data:', error);
    });


    
};