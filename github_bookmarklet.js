// Copyright (c) Douglas F Shearer 2008
// Available under the MIT Licence.
// Install at: http://douglasfshearer.com/blog/announcing-github-bookmarklet
// 
// Compile command: perl make_bookmarklet.pl github_bookmarklet.js

var query = prompt("Search GitHub.com");

var user_search_ary = /^u:(.*)/g.exec(query);
var code_search_ary = /^c:(.*)/g.exec(query);
var repo_search_ary = /^r:(.*)/g.exec(query);

if (user_search_ary) {
  window.location = "http://github.com/search?type=Users&q=" + user_search_ary[1];
}
else if (code_search_ary) {
  window.location = "http://github.com/search?type=Code&q=" + code_search_ary[1];
}
else if (repo_search_ary) {
  window.location = "http://github.com/search?type=Repositories&q=" + repo_search_ary[1];
}
else if (query) {
  window.location = "http://github.com/search?q=" + query;
}
