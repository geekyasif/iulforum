var script= document.createElement('script');
script.type='text/javascript';
script.src="https://cdn.tiny.cloud/1/5vh0rthzdcfm6o5wlr5jny319egdyydsv7p3ax96i5qm84ul/tinymce/5/tinymce.min.js" 
referrerpolicy="origin"
document.head.appendChild(script);

script.onload=function(){
tinymce.init({
    selector: "#id_description",
    height:656,
    plugins: [
        'advlist autolink link image lists charmap print preview hr anchor pagebreak',
        'searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking',
        'table emoticons template paste help'
      ],
      toolbar: 'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | ' +
        'bullist numlist outdent indent | link image | print preview media fullpage | ' +
        'forecolor backcolor emoticons | help',
      menu: {
        favs: {title: 'My Favorites', items: 'code visualaid | searchreplace | emoticons'}
      },
      menubar: 'favs file edit view insert format tools table help',
      content_css: 'css/content.css'
    });
}