import React from 'react';

const license = {
  href: '#',
  summary:
    'For personal and professional use. You cannot resell or redistribute these icons in their original or modified state.',
  content: `
    <h4 class="font-bold">Overview</h4>
    
    <p class="text-sm mt-2">For personal and professional use. You cannot resell or redistribute these icons in their original or modified state.</p>
    
    <ul role="list" class="text-sm mb-2">
    <li class="list-disc">You\'re allowed to use the icons in unlimited projects.</li>
    <li class="list-disc">Attribution is not required to use the icons.</li>
    </ul>
    
    <h4 class="font-bold">What you can do with it</h4>
    
    <ul role="list" class="text-sm">
    <li class="list-disc">Use them freely in your personal and professional work.</li>
    <li class="list-disc">Make them your own. Change the colors to suit your project or brand.</li>
    </ul>
    
    <h4 class="font-bold">What you can\'t do with it</h4>
    
    <ul role="list" class="text-sm">
    <li class="list-disc">Don\'t be greedy. Selling or distributing these icons in their original or modified state is prohibited.</li>
    <li class="list-disc">Don\'t be evil. These icons cannot be used on websites or applications that promote illegal or immoral beliefs or activities.</li>
    </ul>
  `,
}
const ProductLicense = () => {
  return (
    <>
      <div
        className="prose prose-sm max-w-none text-gray-500"
        dangerouslySetInnerHTML={{__html: license.content}}
      />
    </>
  );
};

export default ProductLicense;