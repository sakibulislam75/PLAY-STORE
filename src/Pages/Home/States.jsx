import React from 'react';

const States = () => {
    return (
        <div class="bg-gradient-to-br from-violet-600 via-purple-600 to-violet-800  px-8 py-12 text-center w-full">
  <h2 class="text-white text-2xl font-medium mb-8">Trusted By Millions, Built For You</h2>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">

    <div>
      <p class="text-white/70 text-sm mb-1">Total Downloads</p>
      <p class="text-white text-4xl font-medium mb-1">29.6M</p>
      <p class="text-white/60 text-xs">21% More Than Last Month</p>
    </div>

    <div class="border-x border-white/20">
      <p class="text-white/70 text-sm mb-1">Total Reviews</p>
      <p class="text-white text-4xl font-medium mb-1">906K</p>
      <p class="text-white/60 text-xs">46% More Than Last Month</p>
    </div>

    <div>
      <p class="text-white/70 text-sm mb-1">Active Apps</p>
      <p class="text-white text-4xl font-medium mb-1">132+</p>
      <p class="text-white/60 text-xs">31 More Will Launch</p>
    </div>

  </div>
</div>
    );
};

export default States;