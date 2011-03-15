// Copyright (c) Douglas F Shearer 2008 - 2011
// Available under the MIT Licence.
// Install at: http://douglasfshearer.com/blog/announcing-github-bookmarklet
// Compile command: perl make_bookmarklet.pl github_bookmarklet.js

var query = prompt("Search GitHub.com");
var path = "";
if (query) {
  if (query.match(/^[\w\-]+\/[\w\-]+$/)) {
    path = query;
  }
  else {
    path = "search?q=" + query;
  }

  window.location = "http://github.com/" + path;
}
