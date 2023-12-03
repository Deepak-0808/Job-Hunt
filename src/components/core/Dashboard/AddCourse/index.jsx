import RenderSteps from "./RenderSteps"

export default function AddCourse() {
  return (
    <>
      <div className="flex w-full items-start gap-x-6">
        <div className="flex flex-1 flex-col">
          <h1 className="mb-14 text-3xl font-medium text-black">
            Add Job
          </h1>
          <div className="flex-1">
            <RenderSteps />
          </div>
        </div>
        {/* Job Upload Tips */}
        <div className="sticky top-10 hidden max-w-[400px] flex-1 rounded-md border-[1px] border-black bg-white p-6 xl:block">
          <p className="mb-8 text-lg text-black">⚡ Job Upload Tips</p>
          <ul className="ml-5 list-item list-disc space-y-4 text-xs text-black">
            <li>Ensure a clear, concise job description.</li>
            <li>Double-check all details for precision.</li>
            <li>Use relevant keywords for searchability.</li>
            <li>Include compelling info about your company.</li>
            <li>State how candidates should apply.</li>
            <li>Review for grammar and spelling.</li>
            <li>Check for easy access on various devices.</li>
          </ul>
        </div>
      </div>
    </>
  )
}
