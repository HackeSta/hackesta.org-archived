# How to use my portfolio

1. Go to the [500px API Console](https://apigee.com/vova/embed/console/api500px)
2. Authenticate using OAuth
3. Use `https://api.500px.com/v1/users/{user-id}/galleries/{gallery-id}/items?page={page-no}&image_size[]=3&image_size[]=4`  where my user-id is `8734325` and gallery id is `27005819`. Replace `{page-no}` with all page no.s
4. Keep copying the json received of all pages, to get one similar to [this](http://hackesta.org/photography/assets/js/photos.json) and place it as `photography/assets/js/photos.json`
5. Uncomment the photos.js script include line in index.html
6. Empty the `#thumbnails` div in index.html, and reload the page
7. Copy the contents of `#thumbnails` div in the generated page, and copy them into index.html
8. <b>Voila!</b>
