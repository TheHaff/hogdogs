import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {
  return (
    <div className='min-h-screen'>
      <div className='flex flex-col items-center justify-center min-h-screen px-4 py-16'>
        {/* Poster Display */}
        <div className='max-w-5xl mb-16'>
          <div className='relative bg-sky-500 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-white/30 overflow-hidden animate-glow-pulse'>
            {/* Continuous Shimmer Effect */}
            <div className='absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 animate-shimmer'></div>

            <div className='relative z-10'>
              <img
                src='/poster.png'
                alt='Hog Dogs Poster'
                className='w-full h-auto rounded-2xl shadow-2xl shadow-violet-500/25 rotate-1 scale-[1.02]'
              />
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className='max-w-6xl mb-16'>
          <div className='text-center bg-sky-500 p-6 backdrop-blur-md rounded-2xl shadow-2xl'>
            <h3 className='font-display text-2xl font-semibold  text-yellow-400 bg-clip-text text-transparent mb-3'>
              Hog Dogs!
            </h3>
            <p className='text-yellow-400 font-medium'>
              The Only Eating Contest Where Everyone Gets Treats!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
