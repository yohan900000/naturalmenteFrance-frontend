tinymce.init({
    selector: 'textarea',
    width: 1000,
    height: 300,
    plugin: [
        'advlist', 'autolink', 'link', 'image', 'lists', 'charmap', 'preview', 'anchor', 'pagebreak',
        'searchreplace', 'wordcount', 'visualblocks', 'code', 'fullscreen', 'insertdatetime', 'media',
        'table', 'emoticons', 'template', 'codesample'
    ],
    toolbar: 'undo redo | styles | bold italic underline |' +
    'preview media fullscreen | ' +
    'forcecolor backcolor emoticons',
    menu: {
        favs: {title: 'menu', items: 'code visualaid | searchreplace ¬ emoticons'}
    },
    menubar: 'favs file edit view insert format tools table',
})