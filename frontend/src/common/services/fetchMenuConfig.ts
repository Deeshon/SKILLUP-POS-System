import { MENU_CONFIG_API } from '../config/api'

const fetchMenuConfig = async () => {
    const res = await fetch(MENU_CONFIG_API);
    return res.json();
}

export default fetchMenuConfig