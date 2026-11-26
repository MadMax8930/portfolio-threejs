const ComputerScenePoster = ({ loading, onActivate }) => (
  <button
    type='button'
    aria-label={loading ? 'Computer scene is loading' : 'Load interactive computer scene'}
    aria-busy={loading}
    onClick={onActivate}
    onFocus={onActivate}
    onPointerEnter={(event) => {
      if (event.pointerType === 'mouse') onActivate();
    }}
    className='absolute inset-0 z-10 hidden w-full overflow-hidden bg-[#050816] text-left sm:block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#915eff]'
  >
    <svg
      viewBox='0 0 960 640'
      role='img'
      aria-label='A softly lit computer workstation in a dark purple studio'
      className='absolute inset-0 h-full w-full sm:pl-12'
      preserveAspectRatio='xMidYMid meet'
    >
      <defs>
        <linearGradient id='poster-background' x1='0' y1='0' x2='1' y2='1'>
          <stop stopColor='#11102a' />
          <stop offset='0.55' stopColor='#080a1b' />
          <stop offset='1' stopColor='#050816' />
        </linearGradient>
        <linearGradient id='poster-screen' x1='0' y1='0' x2='0' y2='1'>
          <stop stopColor='#171a32' />
          <stop offset='1' stopColor='#080a15' />
        </linearGradient>
        <linearGradient id='poster-desk' x1='0' y1='0' x2='0' y2='1'>
          <stop stopColor='#39344d' />
          <stop offset='1' stopColor='#151324' />
        </linearGradient>
        <radialGradient id='poster-glow'>
          <stop stopColor='#915eff' stopOpacity='.32' />
          <stop offset='1' stopColor='#915eff' stopOpacity='0' />
        </radialGradient>
      </defs>

      <rect width='960' height='640' fill='url(#poster-background)' />
      <ellipse cx='685' cy='355' rx='260' ry='240' fill='url(#poster-glow)' />
      <g fill='none' stroke='#8a6cff' strokeOpacity='.14'>
        <path d='M20 85C180 15 300 105 430 53S690 3 930 72' />
        <path d='M0 112C178 42 302 132 438 80S705 31 960 98' />
        <path d='M18 139C188 70 320 159 450 108S718 58 952 125' />
        <path d='M685 20c-67 98-67 196 0 294s67 196 0 294' />
      </g>

      <ellipse cx='500' cy='526' rx='360' ry='34' fill='#000' fillOpacity='.38' />
      <path d='M122 476h684l61 46H71z' fill='url(#poster-desk)' stroke='#75668f' strokeOpacity='.48' />
      <path d='M167 522v34m584-34v34' stroke='#343047' strokeWidth='12' />

      <g transform='translate(-35 96) translate(476 280) scale(.9 .78) translate(-476 -280)'>
        <path d='M312 162h329a16 16 0 0 1 16 16v222H296V178a16 16 0 0 1 16-16Z' fill='#171727' stroke='#9189a8' strokeWidth='5' />
        <rect x='311' y='178' width='331' height='200' rx='5' fill='url(#poster-screen)' />
        <circle cx='476' cy='390' r='4' fill='#8c83a6' />
        <g strokeLinecap='round' strokeWidth='5'>
          <path d='M335 205h74' stroke='#bd7bff' />
          <path d='M335 225h132' stroke='#59c8ff' />
          <path d='M335 245h101' stroke='#d6d3e7' strokeOpacity='.75' />
          <path d='M356 265h151' stroke='#a387ff' />
          <path d='M356 285h109' stroke='#d6d3e7' strokeOpacity='.6' />
          <path d='M335 305h88' stroke='#5bd7c5' />
          <path d='M335 325h137' stroke='#d6d3e7' strokeOpacity='.62' />
          <path d='M335 345h71' stroke='#bd7bff' />
        </g>
      </g>
      <path d='M417 470h31l2 5h-35z' fill='#3a344d' />
      <path d='M374 475h137l30 9H345z' fill='#5c526f' />

      <g transform='translate(0 70)'>
        <rect x='678' y='277' width='124' height='204' rx='13' fill='#191827' stroke='#716985' strokeWidth='4' />
        <path d='M692 296h96v166h-96z' fill='#0d0d18' />
        <g fill='none' stroke='#915eff' strokeWidth='5' opacity='.75'>
          <circle cx='740' cy='340' r='27' />
          <circle cx='740' cy='340' r='14' />
          <circle cx='740' cy='414' r='27' />
          <circle cx='740' cy='414' r='14' />
        </g>
        <circle cx='740' cy='340' r='5' fill='#74d9ff' />
        <circle cx='740' cy='414' r='5' fill='#74d9ff' />
        <circle cx='740' cy='468' r='3' fill='#6cf0cc' />
      </g>

      <g transform='translate(0 28) translate(414 476) scale(.72 .55) translate(-414 -476)' fill='#272238' stroke='#766b91' strokeWidth='3'>
        <rect x='191' y='350' width='48' height='126' rx='8' />
        <rect x='590' y='350' width='48' height='126' rx='8' />
        <circle cx='215' cy='385' r='12' fill='#181624' />
        <circle cx='614' cy='385' r='12' fill='#181624' />
        <circle cx='215' cy='430' r='20' fill='#181624' />
        <circle cx='614' cy='430' r='20' fill='#181624' />
      </g>
      <path d='M367 499h177l-12 18H379z' fill='#29253a' stroke='#6d6285' strokeWidth='2' />
      <g stroke='#a98cff' strokeOpacity='.5' strokeWidth='2'>
        <path d='M388 505h134M394 511h122' />
      </g>
      <circle cx='812' cy='535' r='12' fill='none' stroke='#915eff' strokeWidth='3' />
      <circle cx='812' cy='535' r='3' fill='#d8ccff' />
      <rect width='960' height='640' fill='#050816' opacity='.24' />
    </svg>

    <span className='absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 items-center gap-3 rounded-full border border-white/15 bg-[#090816]/80 px-4 py-2 text-[11px] tracking-[0.14em] text-[#dfd9ff] backdrop-blur-sm sm:left-[58%]'>
      {loading ? (
        <>
          <span className='canvas-loader' aria-hidden='true' />
          <span role='status'>LOADING INTERACTIVE SCENE</span>
        </>
      ) : (
        <span>ACTIVATE 3D SCENE</span>
      )}
    </span>
  </button>
);

export default ComputerScenePoster;
