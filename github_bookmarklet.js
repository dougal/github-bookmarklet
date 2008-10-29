// Copyright (c) Douglas F Shearer 2008
// Available under the MIT Licence.
// Install at: http://douglasfshearer.com/blog/announcing-github-bookmarklet
//
// Compile command: perl make_bookmarklet.pl github_bookmarklet.js

var query = prompt("Search GitHub.com");

var user_search_ary = /^u:(.*)/g.exec(query);

if (user_search_ary) {
  window.location = "http://github.com/" + user_search_ary[1];
}
else if (query) {
  window.location = "http://github.com/search?q=" + query;
}
