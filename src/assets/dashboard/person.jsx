import React from "react"

const person = ({color}) => {
  return (
    <svg width="66" height="80" viewBox="0 0 66 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M32.1725 38.0645C37.3548 38.0645 41.8423 36.1889 45.5088 32.4885C49.1753 28.7886 51.034 24.2616 51.034 19.0316C51.034 13.8035 49.1753 9.27587 45.5082 5.57481C41.8411 1.87555 37.3542 0 32.1725 0C26.9897 0 22.5034 1.87555 18.8369 5.57541C15.1704 9.27527 13.3111 13.8029 13.3111 19.0316C13.3111 24.2616 15.1704 28.7892 18.8375 32.4891C22.5046 36.1883 26.9915 38.0645 32.1725 38.0645Z" fill={color}/>
      <path d="M65.1751 60.7628C65.0693 59.2231 64.8554 57.5435 64.5406 55.7698C64.2227 53.9829 63.8135 52.2936 63.3236 50.7496C62.8175 49.1538 62.1293 47.5779 61.2785 46.0677C60.3955 44.5002 59.3583 43.1353 58.1945 42.0121C56.9775 40.8371 55.4874 39.8924 53.7644 39.2033C52.0473 38.5178 50.1445 38.1706 48.109 38.1706C47.3096 38.1706 46.5365 38.5016 45.0434 39.4824C44.1246 40.0871 43.0498 40.7865 41.8501 41.56C40.8243 42.2195 39.4346 42.8375 37.7181 43.3969C36.0435 43.9437 34.3431 44.2211 32.6649 44.2211C30.9867 44.2211 29.2869 43.9437 27.6105 43.3969C25.8958 42.8381 24.5061 42.2201 23.4815 41.5606C22.2932 40.7943 21.2178 40.095 20.2852 39.4818C18.7939 38.501 18.0202 38.17 17.2209 38.17C15.1848 38.17 13.2825 38.5178 11.566 39.2039C9.84416 39.8918 8.35353 40.8365 7.13533 42.0127C5.9721 43.1365 4.93433 44.5008 4.05249 46.0677C3.20232 47.5779 2.51406 49.1532 2.00743 50.7502C1.51812 52.2942 1.10886 53.9829 0.791022 55.7698C0.476167 57.541 0.26228 59.2213 0.156532 60.7646C0.0525755 62.2766 0 63.8459 0 65.4309C0 69.5558 1.29945 72.8951 3.86191 75.3579C6.3927 77.7881 9.7414 79.021 13.8136 79.021H51.5198C55.592 79.021 58.9395 77.7887 61.4709 75.3579C64.0339 72.8969 65.3334 69.557 65.3334 65.4303C65.3328 63.8381 65.2796 62.2676 65.1751 60.7628Z" fill={color}/>
    </svg>

  )
}

export default person