import type { PageLoad } from './$types';
import products from '$lib/data/products.json';

export const load: PageLoad = () => {
  return {
    assets: Object.values(products).filter(p => p.type === 'Asset')
  };
};
