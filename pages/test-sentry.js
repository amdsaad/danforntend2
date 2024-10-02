export default function testSentry() {
  return (
    <>
      <div className="relative w-full min-h-screen flex items-center justify-center">
        <button
          type="button"
          onClick={() => {
            throw new Error('Sentry Frontend Error');
          }}
        >
          Throw error
        </button>
      </div>
    </>
  );
}
