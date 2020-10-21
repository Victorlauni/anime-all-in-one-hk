import Axios from "axios"

export const getViuUpdate = () => {
  return Axios.get('https://cors-anywhere.herokuapp.com/https://www.viu.com/ott/hk/index.php?r=category/series-category&platform_flag_label=web&area_id=1&language_flag_id=1&is_movie=0&category_id=18&length=10', 
    {headers: {'X-Requested-With': 'XMLHttpRequest'}}).then(res => res.data)
}