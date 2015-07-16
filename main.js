var $primary = $('.primary');
var $sidebar = $('.sidebar');
var $about = $('.about');
var profileUrl = 'https://api.github.com/users/jeremybdavis';
var reposUrl = 'https://api.github.com/users/jeremybdavis/repos';


$.ajax(profileUrl,{
  error: function(){
    $primary.text('Bummer.' + error);
  },
  success: function(data){
    var profile = data;
    var avatar = profile.avatar_url;

    $img = $('<img>').attr('src', avatar);
    $sidebar.append($img);

    $h3 = $('<h3>').text(profile.name);
    $sidebar.append($h3);

    $h4 = $('<h4>').text(profile.login);
    $sidebar.append($h4);




    console.log(profile);
  }
});

$.ajax(reposUrl,{
  error: function(){
    $primary.text('Bummer' + error);
  },
  success: function(data){
    var repos = data;

    $h3 = $('<a href=https://github.com/jeremybdavis/Assignment7_Pt1>').text(repos[0].name);
    $primary.append($h3);
    console.log(repos);
  }
});
