import { error } from '@sveltejs/kit';

import type { PageLoad } from './$types';
import products from '$lib/data/products.json';
import { type Products } from '$lib/types';

export const load: PageLoad = ({ params }) => {
  if (params.id in products) {
    return {
      game: (products as Products)[params.id]
    };
  }

  error(404, 'Not found');
};
