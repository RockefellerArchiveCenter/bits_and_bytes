(function () {
    var SEARCH_BOX_ID = "query";
    var HEADING_ID = "search-heading";
    var NO_RESULTS_MESSAGE_ID = "not-found";
    var RESULTS_COUNT_ID = "search-status";
    var SEARCH_RESULTS_CONTAINER_ID = "search-results";
    var QUERY_VARIABLE_URL_STRING = "query";

    function getQueryVariable(queryParam) {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            var param = pair[0];
            var value = pair[1];

            if (param === queryParam) {
                return decodeURIComponent(value.replace(/\+/g, "%20"));
            }
        }
    }

    function getSearchTerm() {
      return getQueryVariable(QUERY_VARIABLE_URL_STRING);
    }

    function setSearchBoxValue(searchBoxValue) {
      document.getElementById(SEARCH_BOX_ID).setAttribute("value", searchBoxValue);
    }

    // Changes "Search results" to "Search results for “term”" in the h1 and page title
    function setHeadingAndTitle(searchTerm) {
      var heading = document.getElementById(HEADING_ID);
      var oldHeading = heading.textContent;
      heading.textContent = oldHeading + " for “" + searchTerm + "”";
      document.title = document.title.replace(oldHeading, heading.textContent);
    }

    function showNoResultsMessage() {
      document.getElementById(NO_RESULTS_MESSAGE_ID).style.display = "block";
    }

    function showResultsCount(count, searchTerm) {
      document.getElementById(RESULTS_COUNT_ID).textContent =
        count + (count === 1 ? " post" : " posts") + " found for “" + searchTerm + "”";
    }

    function setSearchResultsHTML(innerHTML) {
      var searchResults = document.getElementById(SEARCH_RESULTS_CONTAINER_ID);
      searchResults.innerHTML = innerHTML;
    }

    function createPostListingHTML(postItem) {
      var headingHTML = "<h2><a class='post-link' href='" + postItem.url + "'>" + postItem.title + "</a></h2>";
      var metaHTML = "<p>" + postItem.date + "</p>" + postItem.byline;
      var descriptionHTML = "<div class='post-excerpt'>" + postItem.excerpt + "</div>";
      return "<div class='post-teaser'>" + headingHTML + metaHTML + descriptionHTML + "</div><hr aria-hidden='true' />";
    }

    function displaySearchResults(results, store, searchTerm) {
        if (results.length) {
            showResultsCount(results.length, searchTerm);
            var postsListingHTML = "";
            for (var i = 0; i < results.length; i++) {
                var postItem = store[results[i].ref];
                postsListingHTML += createPostListingHTML(postItem);
            }
            setSearchResultsHTML(postsListingHTML);
        } else {
          showNoResultsMessage();
        }
    }

    function addPostToSearchIndex(lunrIndex, key, postJSON) {
      lunrIndex.add({
          "id": key,
          "title": postJSON.title,
          "author": postJSON.author,
          "category": postJSON.category,
          "date": postJSON.date,
          "tags": postJSON.tags,
          "content": postJSON.content
      });
    }

    function search(searchTerm) {
      setSearchBoxValue(searchTerm);
      setHeadingAndTitle(searchTerm);

      var lunrIndex = lunr(function () {
          this.field("title", {
              boost: 10
          });
          this.field("author");
          this.field("category");
          this.field("date");
          this.field("tags");
          this.field("content");

          for (var key in window.store) {
            addPostToSearchIndex(this, key, window.store[key])
          }
      });

      var results = [];
      try {
        results = lunrIndex.search(searchTerm);
      } catch (e) {
        if (!(e instanceof lunr.QueryParseError)) throw e;
      }
      displaySearchResults(results, window.store, searchTerm);
    }

    var searchTerm = getSearchTerm();
    if (searchTerm) {
      search(searchTerm);
    }
})();
