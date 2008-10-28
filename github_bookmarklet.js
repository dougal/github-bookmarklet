var query = prompt("Search GitHub.com");

user_search_ary = /^u:(.*)/g.exec(query);

if (user_search_ary) {
  window.location = "http://github.com/" + user_search_ary[1];
}
else if (query) {
  window.location = "http://github.com/search?q=" + query;
}
