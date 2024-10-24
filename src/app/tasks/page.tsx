'use client'

import { useMutation, useQuery } from "convex/react"
import { api } from "../../../convex/_generated/api"

function Tasks() {
    const tasks = useQuery(api.tasks.getTasks);
    const deleteTask = useMutation(api.tasks.deleteTask);

  return (
    <div className="p-10 flex flex-col gap-4">
        <h1 className="text-5xl">Tasks but real time</h1>
        {
            tasks?.map((t, idx) => (
                <div key={idx} className="flex gap-2">
                    <span>{t.text}</span>
                    <button onClick={async() => {
                        await deleteTask({ id: t._id });
                    }}>
                        Delete
                    </button>
                </div>
            ))
        }

    </div>
  )
}

export default Tasks