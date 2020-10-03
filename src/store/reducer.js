import { initialState } from './initialState';
import moment from 'moment';

const reducer = (state = initialState, action) => {
    const newState = { ...state };

    switch (action.type) {
        case "LIST":
            return {
                ...state,
                view: "list"
            };
            break;
        case "TASKS_LISTS":
            return {
                ...state,
                view: "taskList"
            };
            break;
        case "LAST_CLICKED_TASK":
            return {
                ...state,
                view: "viewTask"
            };
            break;
        case "VIEW_TASK":
            return {
                ...state,
                selectedTask: action.id,
                view: "viewTask"
            };
            break;
        case "OPEN_CALL_MODAL":
            return {
                ...state,
                callModal: true,
            };
            break;
        case "CLOSE_CALL_MODAL":
            return {
                ...state,
                callModal: false,
            };
            break;
        case "OPEN_NOTE_MODAL":
            return {
                ...state,
                noteModal: true,
            };
            break;
        case "CLOSE_NOTE_MODAL":
            return {
                ...state,
                noteModal: false,
            };
            break;
        case "UPDATE_CALL_MESSAGE":
            return {
                ...state,
                callMessage: action.callMessage,
            };
            break;
        case "UPDATE_CALL_DURATION":
            return {
                ...state,
                callDuration: action.callDuration,
            };
            break;
        case "ADD_CALL":
            return {
                ...state,
                callModal: false,
                tasks: state.tasks.map(task => {
                    let newTask = task;
                    if(action.id === task.number) {
                        newTask.logs = task.logs.concat({
                            id: Math.random().toString(),
                            type: "call",
                            message: action.callMessage,
                            date: moment().format("DD/MM/YYYY HH:mm"),
                            durationInMinutes: action.callDuration
                        });
                    }
                    return newTask;
                }),
                selectedTask: action.id,
                view: "viewTask",
                callMessage: '',
                callDuration: '',
            };
            break;
        case "UPDATE_NOTE_MESSAGE":
            return {
                ...state,
                noteMessage: action.noteMessage,
            };
            break;
        case "ADD_NOTE":
            return {
                ...state,
                noteModal: false,
                tasks: state.tasks.map(task => {
                    let newTask = task;
                    if(action.id === task.number) {
                        newTask.logs = task.logs.concat({
                            id: Math.random().toString(),
                            type: "note",
                            message: action.noteMessage,
                            date: moment().format("DD/MM/YYYY HH:mm"),
                        });
                    }
                    return newTask;
                }),
                selectedTask: action.id,
                view: "viewTask",
                noteMessage: '',
            };
            break;
        case "TASK_DETAILS":
            return {
                ...state,
                selectedTask: action.id,
                tasks: newState.tasks.map(el => {
                    if(el.number === action.id)
                    {
                        el.expanded = !el.expanded;
                    }
                    return el;
                })
            };
            break;
    }
    return newState;
};

export default reducer;