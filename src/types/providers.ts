import Scheduler from '../scheduler/index.js'
import { BaseTask } from '../scheduler/task.js'

declare module '@adonisjs/core/types' {
    export interface ContainerBindings {
        'luca-sordetti/scheduler': Scheduler
        'luca-sordetti/scheduler/task': BaseTask
    }

    interface LockerInterface {
        check(): Promise<boolean>
        lock(): Promise<() => Promise<void>>
        unlock(): Promise<void>
    }
}
