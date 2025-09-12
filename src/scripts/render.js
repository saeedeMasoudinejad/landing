
// function generateHtmlTask(Task):


export function Render() {
    const priorityEnum = {
        low: 'پایین',
        medium: 'متوسط',
        high: 'بالا'
    }
    const priorityStyle = {
        low: {bg: "bg-green-100", text: "text-green-600"},
        medium: {bg: "bg-yellow-100", text: "text-yellow-600"},
        high: {bg: "bg-red-100", text: "text-red-600"},
    };
    const tasks = [
        {id: 1, title: 'Task 1', description: 'Task 1 description', priority: 'low', isDone: false, isEditing: false},
        {id: 2, title: 'SUbTask 2', description: 'Task 2 description', priority: 'medium', isDone: false, isEditing: true},
        {id: 3, title: 'SUbTask 3', description: 'Task 3 dddddddescription', priority: 'low', isDone: true, isEditing: true},
        {id: 4, title: 'Task 4', description: 'Task 4 ', priority: 'high', isDone: false, isEditing: true},
        {id: 5, title: 'Task 5', description: 'Task 55555555 ', priority: 'high', isDone: true, isEditing: true},

    ]
    const InProgressTask = document.getElementById('in-progress-tasks-list');
    InProgressTask.innerHTML = tasks.map((task)=>`
        <div class="task border border-primary-oil-04 rounded p-4 relative flex items-start justify-between w-full  mx-auto mb-4">
            <div class="absolute top-0 right-0  w-1 rounded-tl rounded-bl h-[76px] my-4 lg:my-2  item-center bg-${priorityStyle[task.priority]}"></div>
            <!-- Right section: Task info + checkbox -->
            <div class="flex items-start gap-2">
                <!-- Checkbox -->
                
                <input type="checkbox"  class="mt-1 w-4 h-4 accent-blue-500 " ${task.isDone ? "checked" : ""}>

                <!-- Task title + description -->
                <div>
                    <div id="task-title-1" class="flex flex-col lg:flex-row items-start  lg:gap-4" >
                        <h3 class="text-4 font-bold text-primary-oil-10">${task.title}</h3>
                        <span class="text-[10px] font-semibold bg-red-100 text-red-600 rounded-[2px] px-2 py-0.5 mb-4 mt-1 lg:mb-[110x]">${priorityEnum[task.priority]}</span>
                    </div>
                    <p class="text-[12px] text-primary-neutral-700">${task.description}</p>
                </div>

            </div>
            <!-- Left section: Priority badge and menu icon -->
            <div class="flex items-start gap-2">
                <!-- Menu icon -->
                <button>
                    <img src="/src/assets/icons/edit_and_del_icon.png" alt="menu icon" class="w-4 h-4 object-contain"/>
                </button>
            </div>
        </div>
    `).join("");

}