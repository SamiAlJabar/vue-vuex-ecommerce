import {
    allProducts,
    productsGrpOne,
    productsGrpTwo,
    productsGrpThree,
    productsTopSeller
} from "@/data/product";
const MAX_COUNT = 9999;

export const setSelectedMenu = ({ commit }, menu) => {
    commit('SET_SELECTEDMENU', menu);
    switch (menu) {
        case 'New':
            commit('SET_PRODUCTS', allProducts);
            break;
        case 'Organic':
            commit('SET_PRODUCTS', productsGrpOne);
            break;
        case 'Raw':
            commit('SET_PRODUCTS', productsGrpTwo);
            break;
        case 'Gluten-free':
            commit('SET_PRODUCTS', productsGrpThree);
            break;
        case 'Dark Chocolate':
            commit('SET_PRODUCTS', allProducts);
            break;
        case 'Sale':
            commit('SET_PRODUCTS', productsGrpOne);
            break;
        case 'Single Serves':
            commit('SET_PRODUCTS', productsGrpTwo);
            break;
        case 'Wholesale':
            commit('SET_PRODUCTS', productsGrpThree);
            break;
        case 'Office Snakes':
            commit('SET_PRODUCTS', allProducts);
            break;
        case 'Corporate Gifts':
            commit('SET_PRODUCTS', productsGrpOne);
            break;
        case 'Top Sellers':
            commit('SET_PRODUCTS', productsTopSeller);
            break;
    
        default:
            commit('SET_PRODUCTS', allProducts);
            break;
    }
}

export const setProductFilters = ({ commit }, filter) => {
    
    let filteredProducts = allProducts.filter(obj => {

        if(!filter.ratings.length && !filter.minPrice && !filter.maxPrice && !filter.onSale) {
            return obj;
        } else {
            
            if(filter.minPrice && filter.maxPrice) {
                filter.maxPrice = filter.maxPrice && filter.maxPrice > filter.minPrice ? filter.maxPrice : MAX_COUNT;
                if(obj.price >= filter.minPrice && obj.price <= filter.maxPrice) {
                    return obj;
                }
            } else if(filter.minPrice) {
                if(obj.price >= filter.minPrice && obj.price <= MAX_COUNT) {
                    return obj;
                }
            } else if(filter.maxPrice) {
                if(obj.price >= 0 && obj.price <= filter.maxPrice) {
                    return obj;
                }
            }
            
            if(filter.onSale) {
                if(obj.sale) {
                    return obj;
                }
            }

            if(filter.isBestSeller) {
                if(obj.isBestSeller) {
                    return obj;
                }
            }

            
        }
    })
    commit('SET_FILTER', filter);
    commit('SET_PRODUCTS', filteredProducts);
}

export const addToCart = ({ commit }, product) => {
    commit('ADD_TO_CART', { product });
}

export const removeFromCart = ({ commit }, index) => {
    commit('REMOVE_FROM_CART', index);
}