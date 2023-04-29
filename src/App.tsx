function App() {
  return (
    // 800x600 px is the maximum popup size for Chrome extensions
    <div className="min-h-[600px] w-[800px] bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-white">
      <div className="p-4 flex flex-col gap-4">
        <p className="text-3xl font-bold">Sample Extension</p>
        {/* Additional code goes here */}
      </div>
    </div>
  )
}

export default App
