const CanvasChunkFallback = ({ label, className = '' }) => (
  <div className={`flex h-full w-full items-center justify-center ${className}`} role='status'>
    <span className='sr-only'>{label}</span>
    <span className='canvas-loader' aria-hidden='true' />
  </div>
);

export default CanvasChunkFallback;
