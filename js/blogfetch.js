$(document).ready(function() {
    $.ajax({
        url : "https://sanjagh.com/blog/index.php/wp-json/wp/v2/posts?per_page=3&_embed",
        method : "GET"
    }).done(function(data){
        var post = ''
        var content = ''
        var m;
        moment.loadPersian({usePersianDigits: true})
        for(i=1 ; i<=3 ; i++){
            post = '#blog-post-' + i;
            lpost = '#loading-blog-post-' + i;
            content = data[i-1];   

            m = moment(content.date, 'YYYY-MM-DDTHH:mm');
            
            $('#blog .row ' + post + ' .blog-post-author').append(content._embedded.author[0].name);
            $('#blog .row ' + post + ' img').attr('src',content._embedded['wp:featuredmedia'][0].link);
            $('#blog .row ' + post + ' .blog-post-date').append(m.format('jYYYY/jM/jD'));
            $('#blog .row ' + post + ' a').attr('href',content.guid.rendered);
            $('#blog .row ' + post + ' a h3').html(content.title.rendered);
            $('#blog .row ' + post + ' .blog-post-summary').html(content.excerpt.rendered);

            $(lpost).hide();
            $(post).show();
        }
    })
});

