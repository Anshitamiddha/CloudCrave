export const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/";

export const LOGO_URL="https://png.pngtree.com/png-vector/20220705/ourmid/pngtree-food-logo-png-image_5687686.png";

export const Menu_API = (resId) =>
  "https://corsproxy.io/?" +
  encodeURIComponent(
    `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.73390&lng=76.78890&restaurantId=${resId}&submitAction=ENTER`
  );
