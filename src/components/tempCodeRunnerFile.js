await fetch(
        "https://corsproxy.io/?" +
          encodeURIComponent(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.73390&lng=76.78890&page_type=DESKTOP_WEB_LISTING"
          )