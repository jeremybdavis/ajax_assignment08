var $primary = $('.primary');
var $sidebar = $('.sidebar');
var $person = $('.person');
var $about = $('.about');
var $followers = $('#followers');
var $star = $('#star');
var $following = $('#following');
var $repos = $('.repos');

var profileUrl = 'https://api.github.com/users/jeremybdavis';
var reposUrl = 'https://api.github.com/users/jeremybdavis/repos';


$.ajax(profileUrl,{
  error: function(){
    $sidebar.text('Bummer.' + error);
  },
  success: function(data){
    var profile = data;
    var avatar = profile.avatar_url;

    // PERSON
    $img = $('<img>').attr('src', avatar);
    $person.append($img);

    $h3 = $('<h3>').text(profile.name);
    $person.append($h3);

    $h4 = $('<h4>').text(profile.login);
    $person.append($h4);

    // ABOUT
    $p = $('<p class="city">' + '<span class="octicon octicon-location"></span>' + profile.location + '</p>');
    $about.append($p);

    $a = $('<p>' + '<span class="octicon octicon-link"></span>' + '<a href="'+ profile.url+'">' + profile.blog + '</a></p>');
    $about.append($a);

    $p = $('<p class="joined">' + '<span class="octicon octicon-clock"></span>' + "Joined " + moment(profile.created_at).fromNow() + '</p>');
    $about.append($p);

    // SOCIAL
    $p = $('<p class="number">').text(profile.followers);
    $followers.append($p);

    $p = $('<p class="social-text">').text("Followers");
    $followers.append($p);

    $p = $('<p class="number">').text(profile.public_gists);
    $star.append($p);

    $p = $('<p class="social-text">').text("Starred");
    $star.append($p);

    $p = $('<p class="number">').text(profile.following);
    $following.append($p);

    $p = $('<p class="social-text">').text("Following");
    $following.append($p);


    console.log(profile);
  }
});

$.ajax(reposUrl,{
  error: function(){
    $primary.text('Bummer' + error);
  },
  success: function(repos, textStatus, xhr){
    repos.forEach(function(repo){
      $repos.append('<h3><a href="'+ repo.html_url+'">'+ repo.name + '</a></h3>');
      $repos.append('<p>' + "Updated " + moment(repo.updated_at).fromNow() + '</p>');
      $repos.append('<li>' + '<p class="language">' + repo.language + '</p></li>');
      $repos.append('<li>' + '<p class="stargazers">' + '<a href="' + repo.stargazers_url + '">' + '<span class="octicon octicon-star"></span>' + repo.stargazers_count + '</a></p>');
      $repos.append('<li>' + '<p class="forks">' + '<a href="' + repo.forks_url + '">' + '<span class="octicon octicon-repo-forked"></span>' + repo.forks_count + '</a></p>')
    });

    // // REPO 0
    // $h3 = $('<a href=https://github.com/jeremybdavis/ajax_assignment08>').text(repos[0].name);
    // $repo0.append($h3);
    //
    // $p = $('<p class="update">').text("Updated " + repos[0].updated_at);
    // $repo0.append($p);
    //
    // $p = $('<li>').text(repos[0].language);
    //
    //
    // $a = $('<a href="#">').text(repos[0].stargazers_count);
    //
    //
    // $a = $('<a href="#">').text(repos[0].forks_count);
    //
    //
    // // REPO 1
    // $h3 = $('<a href=https://github.com/jeremybdavis/Assignment7_Pt1>').text(repos[1].name);
    // $repo1.append($h3);
    //
    // $p = $('<p class="update">').text("Updated " + repos[1].updated_at);
    // $repo1.append($p);
    //
    // $p = $('<li>').text(repos[1].language);
    //
    //
    // $a = $('<a href="#">').text(repos[1].stargazers_count);
    //
    //
    // // REPO 2
    // $h3 = $('<a href=https://github.com/jeremybdavis/Assignment7_Pt2>').text(repos[2].name);
    // $repo2.append($h3);
    //
    // $p = $('<p class="update">').text("Updated " + repos[2].updated_at);
    // $repo2.append($p);
    //
    // $p = $('<li>').text(repos[2].language);
    //
    //
    // // REPO 6
    // $h3 = $('<a href=https://github.com/jeremybdavis/functions_js>').text(repos[6].name);
    // $repo6.append($h3);
    //
    // $p = $('<p class="update">').text("Updated " + repos[6].updated_at);
    // $repo6.append($p);
    //
    // $p = $('<li>').text(repos[6].language);
    //
    //
    // // REPO 4
    // $h3 = $('<a href=https://github.com/jeremybdavis/calculator>').text(repos[4].name);
    // $repo4.append($h3);
    //
    // $p = $('<p class="update">').text("Updated " + repos[4].updated_at);
    // $repo4.append($p);
    //
    // $p = $('<li>').text(repos[4].language);
    //
    //
    // // REPO 7
    // $h3 = $('<a href=https://github.com/jeremybdavis/class-intro-to-pr>').text(repos[7].name);
    // $repo7.append($h3);
    //
    // $p = $('<p class="update">').text("Updated " + repos[7].updated_at);
    // $repo7.append($p);
    //
    // $p = $('<li>').text(repos[7].language);






    console.log(repos);
  }
});
