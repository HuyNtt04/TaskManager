import DashboardController from './DashboardController'
import ListController from './ListController'
import TaskController from './TaskController'
import Settings from './Settings'
const Controllers = {
    DashboardController: Object.assign(DashboardController, DashboardController),
ListController: Object.assign(ListController, ListController),
TaskController: Object.assign(TaskController, TaskController),
Settings: Object.assign(Settings, Settings),
}

export default Controllers